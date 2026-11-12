"use client";

import { Globe } from "lucide-react";

import { LOCALE_LABEL, locales, type Locale } from "@/i18n/config";
import { useTranslation } from "@/i18n/LanguageProvider";

type Props = {
  /** "desktop" renders the compact pill, "mobile" the full-width drawer row. */
  variant?: "desktop" | "mobile";
};

export default function LanguageSwitcher({ variant = "desktop" }: Props) {
  const { locale, setLocale, t } = useTranslation();

  const handleSelect = (next: Locale) => {
    if (next !== locale) setLocale(next);
  };

  if (variant === "mobile") {
    return (
      <div
        role="group"
        aria-label={t("Change language")}
        className="mt-6 flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-3"
      >
        <Globe size={18} className="shrink-0 text-white/70" aria-hidden="true" />
        <span className="mr-1 text-[14px] font-medium text-white/70">
          {t("Language")}:
        </span>
        <div className="ml-auto flex items-center gap-1">
          {locales.map((code) => {
            const active = locale === code;
            return (
              <button
                key={code}
                type="button"
                onClick={() => handleSelect(code)}
                aria-pressed={active}
                aria-label={code === "bn" ? t("Switch to Bangla") : t("Switch to English")}
                className={`rounded-full px-3.5 py-1.5 text-[14px] font-semibold transition-colors duration-200 ${
                  active
                    ? "bg-[#C91F28] text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {LOCALE_LABEL[code]}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div
      role="group"
      aria-label={t("Change language")}
      className="flex items-center gap-1 rounded-full border border-white/15 bg-white/5 p-1"
    >
      <Globe size={15} className="ml-2 mr-0.5 shrink-0 text-white/60" aria-hidden="true" />
      {locales.map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => handleSelect(code)}
            aria-pressed={active}
            aria-label={code === "bn" ? t("Switch to Bangla") : t("Switch to English")}
            className={`rounded-full px-3 py-1 text-[13px] font-semibold leading-[18px] transition-colors duration-200 ${
              active
                ? "bg-[#C91F28] text-white shadow-[0_4px_12px_rgba(201,31,40,0.35)]"
                : "text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            {LOCALE_LABEL[code]}
          </button>
        );
      })}
    </div>
  );
}
