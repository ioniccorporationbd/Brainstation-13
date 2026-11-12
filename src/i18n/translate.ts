import type { Locale } from "./config";
import { bn } from "./dictionaries/bn";
import { en } from "./dictionaries/en";

export type Translator = (key: string) => string;

const warned = new Set<string>();

/**
 * Dictionary lookup keyed by the natural English source string.
 * - missing key  -> falls back to the English source, never blank text
 * - dev warning  -> one console warning per missing key (development only)
 */
export function translate(locale: Locale, key: string): string {
  const dict = locale === "bn" ? bn : en;
  const hit = dict[key];
  if (typeof hit === "string" && hit.trim().length > 0) return hit;

  if (locale === "bn" && process.env.NODE_ENV !== "production" && !warned.has(key)) {
    warned.add(key);
    console.warn(`[i18n] missing "${locale}" translation for: ${key}`);
  }

  // The key itself is the natural English source, so English always has a value.
  return key;
}

export const tFor =
  (locale: Locale): Translator =>
    (key) =>
      translate(locale, key);
