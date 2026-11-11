import { randomUUID } from "node:crypto";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type FormKind = "contact" | "partner" | "career";

const REQUIRED: Record<FormKind, string[]> = {
  contact: ["name", "email", "message"],
  partner: ["name", "email", "company", "model", "message"],
  career: ["name", "email", "role", "message"],
};

const LIMITS: Record<string, number> = {
  name: 120,
  email: 160,
  company: 160,
  phone: 40,
  role: 160,
  model: 80,
  message: 4000,
  link: 400,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function inboxDir() {
  // Submissions are appended as NDJSON in a git-ignored folder next to the app.
  // Override with FORMS_INBOX_DIR when a durable volume is mounted.
  return (
    process.env.FORMS_INBOX_DIR || path.join(process.cwd(), ".form-inbox")
  );
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
