"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n/LanguageProvider";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";

type Values = {
  name: string;
  email: string;
  company: string;
  phone: string;
  model: string;
  link: string;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const field =
  "h-[46px] w-full rounded-lg border border-[#ececec] bg-white px-4 text-[14.5px] text-black outline-none transition focus:border-[#c91f28] focus:ring-2 focus:ring-[#fdecec]";

export default function PartnerForm({ models }: { models: string[] }) {
  const { t } = useTranslation();
  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    company: "",
    phone: "",
    model: models[0] ?? "",
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
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!EMAIL_RE.test(values.email.trim()))
      next.email = "Enter a valid email address.";
    if (values.company.trim().length < 2)
      next.company = "Please enter your company name.";
    if (!values.model) next.model = "Choose a partnership model.";
    if (values.message.trim().length < 20)
      next.message =
        "Tell us at least a sentence or two about your business and clients.";
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
        body: JSON.stringify({ form: "partner", ...values }),
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
        <p className="mt-2 text-[14.5px] leading-[1.7] text-[#55585e]">{t("Thank you. Your interest in the")}{" "}
          <strong className="text-black">{values.model}</strong>{t("track has been recorded on our server and the partnerships team will review it.")}</p>
        <p className="mt-3 rounded-lg bg-[#fafafa] px-4 py-3 text-[12.5px] font-medium text-[#6b6f76]">{t("Reference:")}{reference || "—"}{t("· No email is sent automatically because a public mailbox is not configured for this site yet.")}</p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setValues({
              name: "",
              email: "",
              company: "",
              phone: "",
              model: models[0] ?? "",
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
            htmlFor="jp-name"
            className="text-[13px] font-semibold text-[#22252a]"
          >{t("Full name *")}</label>
          <input
            id="jp-name"
            className={`mt-2 ${field}`}
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "jp-name-error" : undefined}
            autoComplete="name"
          />
          {errors.name ? (
            <p
              id="jp-name-error"
              className="mt-1.5 text-[12.5px] font-medium text-[#c91f28]"
            >
              {errors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="jp-email"
            className="text-[13px] font-semibold text-[#22252a]"
          >{t("Work email *")}</label>
          <input
            id="jp-email"
            type="email"
            className={`mt-2 ${field}`}
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "jp-email-error" : undefined}
            autoComplete="email"
          />
          {errors.email ? (
            <p
              id="jp-email-error"
              className="mt-1.5 text-[12.5px] font-medium text-[#c91f28]"
            >
              {errors.email}
            </p>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="jp-company"
            className="text-[13px] font-semibold text-[#22252a]"
          >{t("Company *")}</label>
          <input
            id="jp-company"
            className={`mt-2 ${field}`}
            value={values.company}
            onChange={(event) => update("company", event.target.value)}
            aria-invalid={Boolean(errors.company)}
            autoComplete="organization"
          />
          {errors.company ? (
            <p className="mt-1.5 text-[12.5px] font-medium text-[#c91f28]">
              {errors.company}
            </p>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="jp-phone"
            className="text-[13px] font-semibold text-[#22252a]"
          >{t("Phone")}<span className="font-normal text-[#6b6f76]">{t("(optional)")}</span>
          </label>
          <input
            id="jp-phone"
            className={`mt-2 ${field}`}
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            autoComplete="tel"
          />
        </div>
        <div>
          <label
            htmlFor="jp-model"
            className="text-[13px] font-semibold text-[#22252a]"
          >{t("Partnership model *")}</label>
          <select
            id="jp-model"
            className={`mt-2 ${field}`}
            value={values.model}
            onChange={(event) => update("model", event.target.value)}
          >
            {models.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="jp-link"
            className="text-[13px] font-semibold text-[#22252a]"
          >{t("Company website")}{" "}
            <span className="font-normal text-[#6b6f76]">{t("(optional)")}</span>
          </label>
          <input
            id="jp-link"
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
            htmlFor="jp-message"
            className="text-[13px] font-semibold text-[#22252a]"
          >{t("About your business *")}</label>
          <textarea
            id="jp-message"
            rows={5}
            className="mt-2 w-full rounded-lg border border-[#ececec] bg-white px-4 py-3 text-[14.5px] text-black outline-none transition focus:border-[#c91f28] focus:ring-2 focus:ring-[#fdecec]"
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "jp-message-error" : undefined}
            placeholder={t("Who are your clients, what do they need, and how would you like to work together?")}
          />
          {errors.message ? (
            <p
              id="jp-message-error"
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
      <p className="mt-3 text-[12.5px] leading-[1.6] text-[#6b6f76]">{t("Applications are stored on our server and reviewed by the partnerships team.")}</p>
    </form>
  );
}
