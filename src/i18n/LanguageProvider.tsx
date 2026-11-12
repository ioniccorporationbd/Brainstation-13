"use client";

import {
  createContext,
  startTransition,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";

import { LOCALE_COOKIE, type Locale } from "./config";
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

  const setLocale = useCallback(
    (next: Locale) => {
      if (next === locale) return;
      // Instant switch for every client component…
      setLocaleState(next);
      // …persist for refresh / navigation / new tab.
      document.cookie = `${LOCALE_COOKIE}=${next};path=/;max-age=31536000;samesite=lax`;
      try {
        window.localStorage.setItem(LOCALE_COOKIE, next);
      } catch {
        /* storage can be disabled — the cookie still persists */
      }
      // Re-render server components without a full page reload.
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
