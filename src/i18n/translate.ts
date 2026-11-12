import type { Locale } from "./config";
import { bn } from "./dictionaries/bn";
import { en } from "./dictionaries/en";

export type Translator = (key: string) => string;

const warned = new Set<string>();

const collapse = (s: string) => s.replace(/\s+/g, " ").trim();

/**
 * Dictionary lookup keyed by the natural English source string.
 * - missing key  -> falls back to the English source, never blank text
 * - dev warning  -> one console warning per missing key (development only)
 * Lookups are whitespace-insensitive so a JSX literal that spans several
 * source lines still matches its single-line dictionary entry.
 */
export function translate(locale: Locale, key: string): string {
  const dict = locale === "bn" ? bn : en;
  let hit = dict[key];
  if (typeof hit !== "string" || hit.trim().length === 0) {
    const alt = collapse(key);
    if (alt !== key) {
      hit = dict[alt];
      if (typeof hit === "string" && hit.trim().length > 0) return hit;
    }
  }
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
