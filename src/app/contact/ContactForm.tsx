"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n/LanguageProvider";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";

type Values = {
  name: string;
  email: string;
  company: string;
  phone: string;
  role: string;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const field =
  "h-[46px] w-full rounded-lg border border-[#ececec] bg-white px-4 text-[14.5px] text-black outline-none transition focus:border-[#c91f28] focus:ring-2 focus:ring-[#fdecec]";

const interests = ["A new project", "Partnership", "Careers", "Something else"];

export default function ContactForm() {
  const { t } = useTranslation();
  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    company: "",
    phone: "",
    role: interests[0],
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
        body: JSON.stringify({ form: "contact", ...values }),
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
          data.error ?? "Your message could not be recorded. Please try again.",
        );
        setStatus("error");
        return;
      }
      setReference(data.id ?? "");
      setStatus("sent");
    } catch {
      setServerError(
        "Network error — your message was not sent. Please try again.",
      );
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-[#ececec] bg-white p-10 text-center md:p-12">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28]">
          <CheckCircle2 size={28} strokeWidth={1.9} />
        </span>
        <h3 className="mt-5 text-[22px] font-bold tracking-[-0.02em] text-black">{t("Message received")}</h3>
        <p className="mt-3 max-w-[420px] text-[15px] leading-[1.7] text-[#55585e]">{t("Thank you,")}{values.name.split(" ")[0] || "there"}{t(". Your message has been recorded on our server with reference")}{" "}
          <strong className="break-all text-black">{reference || "—"}</strong>{" "}{t("and is waiting for the team.")}</p>
        <p className="mt-3 max-w-[420px] text-[12.5px] leading-[1.6] text-[#6b6f76]">{t("No email is sent automatically because a public mailbox is not configured for this site yet — the reference above is proof the submission was stored.")}</p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setValues({
              name: "",
              email: "",
              company: "",
              phone: "",
              role: interests[0],
              message: "",
            });
            setReference("");
          }}
          className="mt-7 inline-flex items-center gap-2 rounded-lg border border-[#ececec] bg-white px-6 py-3 text-[14px] font-semibold text-black transition-colors hover:border-[#c91f28] hover:text-[#c91f28]"
        >{t("Send another message")}</button>
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
            htmlFor="ct-name"
            className="text-[13px] font-semibold text-[#22252a]"
          >{t("Full name *")}</label>
          <input
            id="ct-name"
            className={`mt-2 ${field}`}
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "ct-name-error" : undefined}
            autoComplete="name"
          />
          {errors.name ? (
            <p
              id="ct-name-error"
              className="mt-1.5 text-[12.5px] font-medium text-[#c91f28]"
            >
              {t(errors.name)}
            </p>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="ct-email"
            className="text-[13px] font-semibold text-[#22252a]"
          >{t("Work email *")}</label>
          <input
            id="ct-email"
            type="email"
            className={`mt-2 ${field}`}
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "ct-email-error" : undefined}
            autoComplete="email"
          />
          {errors.email ? (
            <p
              id="ct-email-error"
              className="mt-1.5 text-[12.5px] font-medium text-[#c91f28]"
            >
              {errors.email}
            </p>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="ct-company"
            className="text-[13px] font-semibold text-[#22252a]"
          >{t("Company")}{" "}
            <span className="font-normal text-[#6b6f76]">{t("(optional)")}</span>
          </label>
          <input
            id="ct-company"
            className={`mt-2 ${field}`}
            value={values.company}
            onChange={(event) => update("company", event.target.value)}
            autoComplete="organization"
          />
        </div>
        <div>
          <label
            htmlFor="ct-phone"
            className="text-[13px] font-semibold text-[#22252a]"
          >{t("Phone")}<span className="font-normal text-[#6b6f76]">{t("(optional)")}</span>
          </label>
          <input
            id="ct-phone"
            className={`mt-2 ${field}`}
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            autoComplete="tel"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="ct-interest"
            className="text-[13px] font-semibold text-[#22252a]"
          >{t("What can we help with?")}</label>
          <select
            id="ct-interest"
            className={`mt-2 ${field}`}
            value={values.role}
            onChange={(event) => update("role", event.target.value)}
          >
            {interests.map((item) => (
              <option key={item} value={item}>
                {t(item)}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="ct-message"
            className="text-[13px] font-semibold text-[#22252a]"
          >{t("Message *")}</label>
          <textarea
            id="ct-message"
            rows={6}
            className="mt-2 w-full rounded-lg border border-[#ececec] bg-white px-4 py-3 text-[14.5px] text-black outline-none transition focus:border-[#c91f28] focus:ring-2 focus:ring-[#fdecec]"
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "ct-message-error" : undefined}
            placeholder={t("Tell us about your project or inquiry")}
          />
          {errors.message ? (
            <p
              id="ct-message-error"
              className="mt-1.5 text-[12.5px] font-medium text-[#c91f28]"
            >
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        onChange={() => undefined}
      />

      {status === "error" ? (
        <div
          role="alert"
          className="mt-5 flex items-start gap-2.5 rounded-lg border border-[#c91f28]/30 bg-[#fdecec] px-4 py-3 text-[13.5px] font-medium text-[#a71920]"
        >
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          {t(serverError)}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#a71920] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={17} className="animate-spin" />{t("Sending…")}</>
        ) : (
          <>{t("Send message")}<Send size={16} />
          </>
        )}
      </button>
      <p className="mt-3 text-[12.5px] leading-[1.6] text-[#6b6f76]">{t("Your message is stored on our server and routed to the right team — we reply within one business day.")}</p>
    </form>
  );
}
