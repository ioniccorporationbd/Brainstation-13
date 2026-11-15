"use client";

import { Globe } from "lucide-react";

import { useTranslation } from "@/i18n/LanguageProvider";

type Props = {
  /** "desktop" matches the navbar CTA sizing, "mobile" the full-width drawer CTA. */
  variant?: "desktop" | "mobile";
};

/**
 * Single language button: shows the language you can switch TO.
 * Bangla mode → "English"; English mode → "বাংলা". One button, no dropdown.
 */
export default function LanguageSwitcher({ variant = "desktop" }: Props) {
  const { locale, setLocale, t } = useTranslation();
  const next = locale === "bn" ? "en" : "bn";
  const label = next === "en" ? "English" : "বাংলা";
  const aria = next === "en" ? t("Switch to English") : t("Switch to Bangla");

  if (variant === "mobile") {
    return (
      <button
        type="button"
        onClick={() => setLocale(next)}
        aria-label={aria}
        lang={next === "en" ? "en" : "bn-BD"}
        className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full border border-[#e3e3e3] bg-white px-7 py-3.5 text-[16px] font-semibold text-[#141418] transition-colors duration-200 hover:border-[#C91F28] hover:bg-[#C91F28] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C91F28]/40 focus-visible:ring-offset-2"
      >
        <Globe size={18} aria-hidden="true" />
        {label}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLocale(next)}
      aria-label={aria}
      lang={next === "en" ? "en" : "bn-BD"}
      className="flex items-center gap-2 rounded-full border border-white/40 px-6 py-[14px] text-[16px] font-semibold leading-[20px] text-white shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:border-black hover:bg-black hover:text-white xl:px-[30px]"
    >
      <Globe size={16} aria-hidden="true" />
      {label}
    </button>
  );
}
