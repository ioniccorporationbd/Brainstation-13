export const locales = ["bn", "en"] as const;
export type Locale = (typeof locales)[number];

/** বাংলা (বাংলাদেশ) is the default language for every first visit. */
export const defaultLocale: Locale = "bn";

/** Cookie that persists the visitor's language choice (1 year, path=/). */
export const LOCALE_COOKIE = "magnetic-locale";

export const HTML_LANG: Record<Locale, string> = {
  bn: "bn-BD",
  en: "en",
};

export const LOCALE_LABEL: Record<Locale, string> = {
  bn: "বাংলা",
  en: "EN",
};

export function normalizeLocale(value?: string | null): Locale {
  return value === "en" ? "en" : defaultLocale;
}
