"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n/LanguageProvider";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";

type Values = {
  name: string;
  email: string;
  phone: string;
  role: string;
  link: string;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const field =
  "h-[46px] w-full rounded-lg border border-[#ececec] bg-white px-4 text-[14.5px] text-black outline-none transition focus:border-[#c91f28] focus:ring-2 focus:ring-[#fdecec]";

export default function CareerApplyForm({ roles }: { roles: string[] }) {
  const { t } = useTranslation();
  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    phone: "",
    role: roles[0] ?? "",
    link: "",
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
    if (values.name.trim().length < 2)
      next.name = "Please enter your full name.";
    if (!EMAIL_RE.test(values.email.trim()))
      next.email = "Enter a valid email address.";
    if (!values.role) next.role = "Choose the role you are applying for.";
    if (values.message.trim().length < 20)
      next.message =
        "Tell us at least a sentence or two about your experience.";
    if (values.link.trim() && !/^https?:\/\//i.test(values.link.trim()))
      next.link = "Enter a full URL starting with http:// or https://.";
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
        body: JSON.stringify({ form: "career", ...values }),
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
          data.error ??
            "Your application could not be recorded. Please try again.",
        );
        setStatus("error");
        return;
      }
      setReference(data.id ?? "");
      setStatus("sent");
    } catch {
      setServerError(
        "Network error — your application was not sent. Please try again.",
      );
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-[#ececec] bg-white p-7 md:p-8">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28]">
          <CheckCircle2 size={22} />
        </span>
        <h3 className="mt-4 text-[19px] font-bold text-black">{t("Application received")}</h3>
        <p className="mt-2 text-[14.5px] leading-[1.7] text-[#55585e]">{t("Thank you,")}{values.name.split(" ")[0] || "there"}{t(". Your application for")}<strong className="text-black">{values.role}</strong>{t("has been recorded on our server and reviewed by our hiring team.")}</p>
        <p className="mt-3 rounded-lg bg-[#fafafa] px-4 py-3 text-[12.5px] font-medium text-[#6b6f76]">{t("Reference:")}{reference || "—"}{t("· No email is sent automatically because a public mailbox is not configured for this site yet.")}</p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setValues({
              name: "",
              email: "",
              phone: "",
              role: roles[0] ?? "",
              link: "",
              message: "",
            });
            setReference("");
          }}
          className="mt-5 inline-flex items-center gap-2 rounded-lg border border-[#ececec] bg-white px-5 py-2.5 text-[13.5px] font-semibold text-black transition-colors hover:border-[#c91f28] hover:text-[#c91f28]"
        >{t("Submit another application")}</button>
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
            htmlFor="ca-name"
            className="text-[13px] font-semibold text-[#22252a]"
          >{t("Full name *")}</label>
          <input
            id="ca-name"
            className={`mt-2 ${field}`}
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "ca-name-error" : undefined}
            autoComplete="name"
          />
          {errors.name ? (
            <p
              id="ca-name-error"
              className="mt-1.5 text-[12.5px] font-medium text-[#c91f28]"
            >
              {errors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="ca-email"
            className="text-[13px] font-semibold text-[#22252a]"
          >{t("Email *")}</label>
          <input
            id="ca-email"
            type="email"
            className={`mt-2 ${field}`}
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "ca-email-error" : undefined}
            autoComplete="email"
          />
          {errors.email ? (
            <p
              id="ca-email-error"
              className="mt-1.5 text-[12.5px] font-medium text-[#c91f28]"
            >
              {errors.email}
            </p>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="ca-phone"
            className="text-[13px] font-semibold text-[#22252a]"
          >{t("Phone")}<span className="font-normal text-[#6b6f76]">{t("(optional)")}</span>
          </label>
          <input
            id="ca-phone"
            className={`mt-2 ${field}`}
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            autoComplete="tel"
          />
        </div>
        <div>
          <label
            htmlFor="ca-role"
            className="text-[13px] font-semibold text-[#22252a]"
          >{t("Role *")}</label>
          <select
            id="ca-role"
            className={`mt-2 ${field}`}
            value={values.role}
            onChange={(event) => update("role", event.target.value)}
            aria-invalid={Boolean(errors.role)}
          >
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
            <option value="General application">{t("General application")}</option>
          </select>
          {errors.role ? (
            <p className="mt-1.5 text-[12.5px] font-medium text-[#c91f28]">
              {errors.role}
            </p>
          ) : null}
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="ca-link"
            className="text-[13px] font-semibold text-[#22252a]"
          >{t("Portfolio / CV link")}{" "}
            <span className="font-normal text-[#6b6f76]">{t("(optional)")}</span>
          </label>
          <input
            id="ca-link"
            className={`mt-2 ${field}`}
            value={values.link}
            onChange={(event) => update("link", event.target.value)}
            placeholder="https://"
            aria-invalid={Boolean(errors.link)}
          />
          {errors.link ? (
            <p className="mt-1.5 text-[12.5px] font-medium text-[#c91f28]">
              {errors.link}
            </p>
          ) : null}
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="ca-message"
            className="text-[13px] font-semibold text-[#22252a]"
          >{t("About you *")}</label>
          <textarea
            id="ca-message"
            rows={5}
            className="mt-2 w-full rounded-lg border border-[#ececec] bg-white px-4 py-3 text-[14.5px] text-black outline-none transition focus:border-[#c91f28] focus:ring-2 focus:ring-[#fdecec]"
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "ca-message-error" : undefined}
            placeholder={t("A short note on your experience, the work you enjoy and what you are looking for.")}
          />
          {errors.message ? (
            <p
              id="ca-message-error"
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
          {serverError}
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
          <>{t("Submit application")}<Send size={16} />
          </>
        )}
      </button>
      <p className="mt-3 text-[12.5px] leading-[1.6] text-[#6b6f76]">{t("Submissions are stored on our server and reviewed by the hiring team.")}</p>
    </form>
  );
}
