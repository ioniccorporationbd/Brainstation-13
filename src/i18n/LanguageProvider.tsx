"use client";

import {
  createContext,
  startTransition,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";

import { HTML_LANG, LOCALE_COOKIE, type Locale } from "./config";
import { tFor, type Translator } from "./translate";

type LanguageContextValue = {
  locale: Locale;
  t: Translator;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  locale: "bn",
  t: tFor("bn"),
  setLocale: () => undefined,
});

export function LanguageProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const router = useRouter();

  // The server is the single source of truth for the locale (cookie → initialLocale).
  // This effect only re-syncs presentation if the two ever drift apart
  // (e.g. a stale RSC payload) so that <html lang> and the client context can
  // never disagree — without suppressing hydration warnings.
  useEffect(() => {
    document.documentElement.lang = HTML_LANG[locale];
  }, [locale]);

  const setLocale = useCallback(
    (next: Locale) => {
      if (next === locale) return;
      // Persist first so an immediate hard refresh already renders the new
      // locale on the server — cookie, provider and switcher stay in sync.
      document.cookie = `${LOCALE_COOKIE}=${next};path=/;max-age=31536000;samesite=lax`;
      document.documentElement.lang = HTML_LANG[next];
      // Instant switch for every client component…
      setLocaleState(next);
      // …and re-render server components without a full page reload.
      startTransition(() => router.refresh());
    },
    [locale, router],
  );

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, t: tFor(locale), setLocale }),
    [locale, setLocale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useTranslation(): LanguageContextValue {
  return useContext(LanguageContext);
}
