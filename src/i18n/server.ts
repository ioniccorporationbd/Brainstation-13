import { cookies } from "next/headers";

import { LOCALE_COOKIE, normalizeLocale, type Locale } from "./config";
import { tFor, type Translator } from "./translate";

/** Reads the persisted locale cookie on the server (no flash of wrong language). */
export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  return normalizeLocale(store.get(LOCALE_COOKIE)?.value);
}

/** Server-component translator. */
export async function getTranslator(): Promise<{ locale: Locale; t: Translator }> {
  const locale = await getLocale();
  return { locale, t: tFor(locale) };
}
