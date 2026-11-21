import { randomUUID } from "node:crypto";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type FormKind = "contact" | "partner" | "career" | "call";

const REQUIRED: Record<FormKind, string[]> = {
  contact: ["name", "email", "message"],
  partner: ["name", "email", "company", "model", "message"],
  career: ["name", "email", "role", "message"],
  call: ["name", "email", "topic", "message"],
};

const LIMITS: Record<string, number> = {
  name: 120,
  email: 160,
  company: 160,
  phone: 40,
  phoneCode: 8,
  role: 160,
  topic: 120,
  slot: 120,
  model: 80,
  message: 4000,
  link: 400,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Server-side mirror of the client phone rules: Bangladesh mobile numbers
// must match 01[3-9] + 8 digits (leading 0 and +880 prefix optional);
// other countries accept 6–14 digits.
function validPhone(code: string, raw: string): boolean {
  const trimmed = raw.trim();
  if (!trimmed) return true; // phone is optional on every form
  // Reject letters/symbols outright — only digits, spaces, hyphens and an
  // optional leading + are allowed (mirrors the client-side input mask).
  if (!/^\+?[\d\s-]+$/.test(trimmed)) return false;
  const digits = trimmed.replace(/[^\d]/g, "");
  if (!digits) return true;
  if (code === "+880") {
    let n = digits;
    if (n.startsWith("880")) n = n.slice(3);
    if (n.startsWith("0")) n = n.slice(1);
    return /^1[3-9]\d{8}$/.test(n);
  }
  return /^\d{6,14}$/.test(digits);
}

function inboxDir() {
  // Submissions are appended as NDJSON in a git-ignored folder next to the app.
  // Override with FORMS_INBOX_DIR when a durable volume is mounted.
  return process.env.FORMS_INBOX_DIR || path.join(process.cwd(), ".form-inbox");
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Malformed request body." },
      { status: 400 },
    );
  }

  const body = (payload ?? {}) as Record<string, unknown>;
  const form = String(body.form ?? "");

  if (!Object.prototype.hasOwnProperty.call(REQUIRED, form)) {
    return NextResponse.json(
      { ok: false, error: "Unknown form type." },
      { status: 400 },
    );
  }

  // Honeypot: real users never fill this hidden field.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({
      ok: true,
      id: randomUUID(),
      receivedAt: new Date().toISOString(),
      stored: false,
    });
  }

  const values: Record<string, string> = {};
  for (const key of Object.keys(LIMITS)) {
    const raw = body[key];
    values[key] = typeof raw === "string" ? raw.trim() : "";
    if (values[key].length > LIMITS[key]) {
      return NextResponse.json(
        {
          ok: false,
          error: `The ${key} field is too long.`,
          fieldErrors: { [key]: "Too long." },
        },
        { status: 400 },
      );
    }
  }

  const fieldErrors: Record<string, string> = {};
  for (const key of REQUIRED[form as FormKind]) {
    if (!values[key]) fieldErrors[key] = "This field is required.";
  }
  if (values.email && !EMAIL_RE.test(values.email)) {
    fieldErrors.email = "Enter a valid email address.";
  }
  if (values.phone) {
    const code = values.phoneCode || "+880";
    if (!validPhone(code, values.phone)) {
      fieldErrors.phone =
        code === "+880"
          ? "Enter a valid Bangladeshi mobile number (e.g. 01712345678)."
          : "Enter a valid phone number.";
    }
  }

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json(
      { ok: false, error: "Please check the highlighted fields.", fieldErrors },
      { status: 422 },
    );
  }

  const id = randomUUID();
  const receivedAt = new Date().toISOString();
  const record = {
    id,
    form,
    receivedAt,
    values,
    userAgent: request.headers.get("user-agent") ?? "",
    referer: request.headers.get("referer") ?? "",
  };

  try {
    const dir = inboxDir();
    await mkdir(dir, { recursive: true });
    await appendFile(
      path.join(dir, `${form}.ndjson`),
      `${JSON.stringify(record)}\n`,
      "utf8",
    );
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error:
          "The submission could not be stored on the server. Nothing was saved — please retry or use another channel.",
      },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true, id, receivedAt, stored: true });
}
