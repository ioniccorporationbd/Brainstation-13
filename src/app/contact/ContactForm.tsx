"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n/LanguageProvider";
import { AlertCircle, CheckCircle2, ChevronDown, Loader2, Send } from "lucide-react";

type Values = {
  name: string;
  email: string;
  company: string;
  phone: string;
  role: string;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/* Country dial codes for the custom phone selector — Bangladesh first (default). */
const COUNTRIES = [
  { code: "+880", iso: "BD", flag: "🇧🇩" },
  { code: "+1", iso: "US", flag: "🇺🇸" },
  { code: "+44", iso: "GB", flag: "🇬🇧" },
  { code: "+91", iso: "IN", flag: "🇮🇳" },
  { code: "+971", iso: "AE", flag: "🇦🇪" },
  { code: "+966", iso: "SA", flag: "🇸🇦" },
  { code: "+65", iso: "SG", flag: "🇸🇬" },
  { code: "+60", iso: "MY", flag: "🇲🇾" },
  { code: "+61", iso: "AU", flag: "🇦🇺" },
] as const;

const digitsOnly = (value: string) => value.replace(/[^\d]/g, "");

/* Bangladesh mobile: 01[3-9] + 8 digits (also accept the +880 / no-zero forms). */
function validPhone(code: string, raw: string): boolean {
  const digits = digitsOnly(raw);
  if (!digits) return true; // optional field — empty is fine
  if (code === "+880") {
    let n = digits;
    if (n.startsWith("880")) n = n.slice(3);
    if (n.startsWith("0")) n = n.slice(1);
    return /^1[3-9]\d{8}$/.test(n);
  }
  return /^\d{6,14}$/.test(digits);
}

function phoneError(code: string, raw: string): string {
  const digits = digitsOnly(raw);
  if (!digits) return "";
  if (code === "+880") {
    return validPhone(code, raw)
      ? ""
      : "Enter a valid Bangladeshi mobile number (e.g. 01712345678).";
  }
  return validPhone(code, raw) ? "" : "Enter a valid phone number.";
}

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
  const [phoneCode, setPhoneCode] = useState<string>("+880");
  const [codeOpen, setCodeOpen] = useState(false);

  function update(key: keyof Values, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: "" }));
  }

  function validate() {
    const next: Record<string, string> = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!EMAIL_RE.test(values.email.trim()))
      next.email = "Enter a valid email address.";
    const phoneIssue = phoneError(phoneCode, values.phone);
    if (phoneIssue) next.phone = phoneIssue;
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
        body: JSON.stringify({ form: "contact", ...values, phoneCode }),
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
        <h3 className="mt-5 text-black font-semibold text-[20px] leading-[1.3] tracking-[-0.01em] sm:text-[20px] md:text-[22px] lg:text-[22px]">{t("Message received")}</h3>
        <p className="mt-3 max-w-[420px] text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("Thank you,")}{values.name.split(" ")[0] || "there"}{t(". Your message has been recorded on our server with reference")}{" "}
          <strong className="break-all text-black">{reference || "—"}</strong>{" "}{t("and is waiting for the team.")}</p>
        <p className="mt-3 max-w-[420px] text-[13px] leading-[1.6] text-[#52525B] text-pretty">{t("No email is sent automatically because a public mailbox is not configured for this site yet — the reference above is proof the submission was stored.")}</p>
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
            type="text"
            className={`mt-2 ${t(field)}`}
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
            className={`mt-2 ${t(field)}`}
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
              {t(errors.email)}
            </p>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="ct-company"
            className="text-[13px] font-semibold text-[#22252a]"
          >{t("Company")}{" "}
            <span className="font-normal text-[#52525B]">{t("(optional)")}</span>
          </label>
          <input
            id="ct-company"
            type="text"
            className={`mt-2 ${t(field)}`}
            value={values.company}
            onChange={(event) => update("company", event.target.value)}
            autoComplete="organization"
          />
        </div>
        <div>
          <label
            htmlFor="ct-interest"
            className="text-[13px] font-semibold text-[#22252a]"
          >{t("What can we help with?")}</label>
          <select
            id="ct-interest"
            className={`mt-2 ${t(field)}`}
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
            htmlFor="ct-phone"
            className="text-[13px] font-semibold text-[#22252a]"
          >{t("Phone")}{" "}
            <span className="font-normal text-[#52525B]">{t("(optional)")}</span>
          </label>
          <div
            className={`mt-2 flex h-[46px] w-full items-stretch rounded-lg border bg-white transition ${
              errors.phone
                ? "border-[#c91f28]"
                : "border-[#ececec] focus-within:border-[#c91f28] focus-within:ring-2 focus-within:ring-[#fdecec]"
            }`}
          >
            {/* Custom country-code selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setCodeOpen((open) => !open)}
                aria-haspopup="listbox"
                aria-expanded={codeOpen}
                aria-label={t("Country code")}
                className="flex h-full items-center gap-1.5 rounded-l-lg border-r border-[#ececec] bg-[#fafafa] pl-3 pr-2.5 text-[14px] font-medium text-black transition-colors hover:bg-[#f3f3f3]"
              >
                <span aria-hidden className="text-[15px] leading-none">
                  {COUNTRIES.find((c) => c.code === phoneCode)?.flag ?? "🇧🇩"}
                </span>
                <span>{phoneCode}</span>
                <ChevronDown
                  size={14}
                  strokeWidth={2.2}
                  className={`text-[#52525B] transition-transform duration-200 ${codeOpen ? "rotate-180" : ""}`}
                />
              </button>
              {codeOpen ? (
                <>
                  <button
                    type="button"
                    aria-hidden
                    tabIndex={-1}
                    onClick={() => setCodeOpen(false)}
                    className="fixed inset-0 z-10 cursor-default"
                  />
                  <ul
                    role="listbox"
                    aria-label={t("Country code")}
                    className="absolute left-0 top-[calc(100%+6px)] z-20 max-h-[236px] w-[132px] overflow-y-auto rounded-lg border border-[#ececec] bg-white py-1 shadow-[0_12px_30px_rgba(10,10,10,0.12)]"
                  >
                    {COUNTRIES.map((country) => (
                      <li key={country.iso}>
                        <button
                          type="button"
                          role="option"
                          aria-selected={country.code === phoneCode}
                          onClick={() => {
                            setPhoneCode(country.code);
                            setCodeOpen(false);
                            setErrors((current) => ({
                              ...current,
                              phone: phoneError(country.code, values.phone),
                            }));
                          }}
                          className={`flex w-full items-center gap-2 px-3 py-2 text-left text-[13.5px] transition-colors hover:bg-[#fdecec] ${
                            country.code === phoneCode
                              ? "font-semibold text-[#c91f28]"
                              : "text-black"
                          }`}
                        >
                          <span aria-hidden className="text-[14px] leading-none">
                            {country.flag}
                          </span>
                          {country.code}
                        </button>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>
            <input
              id="ct-phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              maxLength={17}
              className="min-w-0 flex-1 rounded-r-lg bg-transparent px-4 text-[14.5px] text-black outline-none placeholder:text-[#9a9aa2]"
              placeholder={phoneCode === "+880" ? "01712345678" : t("Phone number")}
              value={values.phone}
              onChange={(event) =>
                update("phone", event.target.value.replace(/[^\d\s-]/g, ""))
              }
              onBlur={() =>
                setErrors((current) => ({
                  ...current,
                  phone: phoneError(phoneCode, values.phone),
                }))
              }
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "ct-phone-error" : undefined}
            />
          </div>
          {errors.phone ? (
            <p
              id="ct-phone-error"
              className="mt-1.5 text-[12.5px] font-medium text-[#c91f28]"
            >
              {t(errors.phone)}
            </p>
          ) : null}
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
              {t(errors.message)}
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
        className="mt-6 inline-flex w-full items-center justify-center gap-2 sm:shrink-0 rounded-lg max-sm:px-5 max-sm:py-3 max-sm:text-[14px] lg:max-xl:px-4 lg:max-xl:text-[13px] text-center bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#a71920] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={17} className="animate-spin" />{t("Sending…")}</>
        ) : (
          <>{t("Send message")}<Send size={16} />
          </>
        )}
      </button>
      <p className="mt-3 text-[13px] leading-[1.6] text-[#52525B] text-pretty">{t("Your message is stored on our server and routed to the right team — we reply within one business day.")}</p>
    </form>
  );
}
