"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n/LanguageProvider";
import {
  AlertCircle,
  CalendarCheck,
  Loader2,
  Send,
} from "lucide-react";

type Values = {
  name: string;
  email: string;
  company: string;
  phone: string;
  topic: string;
  slot: string;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const field =
  "h-[46px] w-full rounded-lg border border-[#ececec] bg-white px-4 text-[14.5px] text-black outline-none transition focus:border-[#c91f28] focus:ring-2 focus:ring-[#fdecec]";

const topics = [
  "New project",
  "Existing platform support",
  "Partnership",
  "Technical due diligence",
  "Something else",
];

export default function CallForm() {
  const { t } = useTranslation();
  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    company: "",
    phone: "",
    topic: topics[0],
    slot: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [serverError, setServerError] = useState("");
  const [reference, setReference] = useState("");

  function update(key: keyof Values, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: "" }));
  }

  function validate() {
    const next: Record<string, string> = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!EMAIL_RE.test(values.email.trim()))
      next.email = "Enter a valid email address.";
    if (values.message.trim().length < 10)
      next.message =
        "Please add a little more detail (at least 10 characters).";
    return next;
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    setServerError("");
    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form: "call", ...values }),
      });
      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        id?: string;
        error?: string;
        fieldErrors?: Record<string, string>;
      };
      if (!response.ok || !data.ok) {
        setErrors(data.fieldErrors ?? {});
        setServerError(
          data.error ?? "Your request could not be recorded. Please try again.",
        );
        setStatus("error");
        return;
      }
      setReference(data.id ?? "");
      setStatus("sent");
    } catch {
      setServerError(
        "Network error — your request was not sent. Please try again.",
      );
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-[#ececec] bg-white p-10 text-center md:p-12">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28]">
          <CalendarCheck size={28} strokeWidth={1.9} />
        </span>
        <h3 className="mt-5 text-[22px] font-bold tracking-[-0.02em] text-black">{t("Booking request received")}</h3>
        <p className="mt-3 max-w-[430px] text-[15px] leading-[1.7] text-[#55585e]">{t("Thank you,")}{values.name.split(" ")[0] || "there"}{t(". Your request has been recorded with reference")}{" "}
          <strong className="break-all text-black">{reference || "—"}</strong>{" "}{t("and is queued for the team.")}</p>
        <p className="mt-3 max-w-[430px] rounded-lg bg-[#fafafa] px-4 py-3 text-[13px] leading-[1.65] text-[#55585e]">
          <strong className="text-black">{t("This is not a confirmed meeting.")}</strong>{" "}{t("No calendar slot has been reserved and no invite has been issued. A person will reply to")}{values.email || "your email"}{t("to confirm an exact time.")}</p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setValues({
              name: "",
              email: "",
              company: "",
              phone: "",
              topic: topics[0],
              slot: "",
              message: "",
            });
            setReference("");
          }}
          className="mt-7 inline-flex items-center gap-2 rounded-lg border border-[#ececec] bg-white px-6 py-3 text-[14px] font-semibold text-black transition-colors hover:border-[#c91f28] hover:text-[#c91f28]"
        >{t("Submit another request")}</button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-xl border border-[#ececec] bg-white p-6 md:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="cc-name"
            className="mb-1.5 block text-[13px] font-semibold text-black"
          >{t("Full name")}<span className="text-[#c91f28]">*</span>
          </label>
          <input
            id="cc-name"
            className={field}
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name ? (
            <p className="mt-1.5 text-[12.5px] text-[#c91f28]">{errors.name}</p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="cc-email"
            className="mb-1.5 block text-[13px] font-semibold text-black"
          >{t("Work email")}<span className="text-[#c91f28]">*</span>
          </label>
          <input
            id="cc-email"
            type="email"
            className={field}
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? (
            <p className="mt-1.5 text-[12.5px] text-[#c91f28]">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="cc-company"
            className="mb-1.5 block text-[13px] font-semibold text-black"
          >{t("Company")}</label>
          <input
            id="cc-company"
            className={field}
            value={values.company}
            onChange={(event) => update("company", event.target.value)}
            autoComplete="organization"
          />
        </div>

        <div>
          <label
            htmlFor="cc-phone"
            className="mb-1.5 block text-[13px] font-semibold text-black"
          >{t("Phone")}</label>
          <input
            id="cc-phone"
            className={field}
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            autoComplete="tel"
          />
        </div>

        <div>
          <label
            htmlFor="cc-topic"
            className="mb-1.5 block text-[13px] font-semibold text-black"
          >{t("What is the call about?")}<span className="text-[#c91f28]">*</span>
          </label>
          <select
            id="cc-topic"
            className={field}
            value={values.topic}
            onChange={(event) => update("topic", event.target.value)}
          >
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="cc-slot"
            className="mb-1.5 block text-[13px] font-semibold text-black"
          >{t("Preferred date")}</label>
          <input
            id="cc-slot"
            type="date"
            className={field}
            value={values.slot}
            onChange={(event) => update("slot", event.target.value)}
          />
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="cc-message"
          className="mb-1.5 block text-[13px] font-semibold text-black"
        >{t("Agenda")}<span className="text-[#c91f28]">*</span>
        </label>
        <textarea
          id="cc-message"
          rows={5}
          className="w-full rounded-lg border border-[#ececec] bg-white px-4 py-3 text-[14.5px] leading-[1.6] text-black outline-none transition focus:border-[#c91f28] focus:ring-2 focus:ring-[#fdecec]"
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? (
          <p className="mt-1.5 text-[12.5px] text-[#c91f28]">
            {errors.message}
          </p>
        ) : null}
      </div>

      {serverError ? (
        <p className="mt-5 flex items-start gap-2 rounded-lg bg-[#fdecec] px-4 py-3 text-[13.5px] leading-[1.6] text-[#a71920]">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          {serverError}
        </p>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[12.5px] leading-[1.6] text-[#6b6f76]">{t("Requests are queued on our server. A person confirms the time by email — nothing is booked automatically.")}</p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "sending" ? (
            <>
              <Loader2 size={17} className="animate-spin" />{t("Sending")}</>
          ) : (
            <>{t("Request a call")}<Send size={16} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
