"use client";

import {
  createContext,
  startTransition,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";

import { HTML_LANG, LOCALE_COOKIE, normalizeLocale, type Locale } from "./config";
import { tFor, type Translator } from "./translate";

type LanguageContextValue = {
  locale: Locale;
  t: Translator;
  setLocale: (locale: Locale) => void;
};

/** Mirror of the cookie so a cleared/blocked cookie can be restored on the next visit. */
const LOCALE_STORAGE_KEY = LOCALE_COOKIE;

/** Reads the persisted locale cookie (client side only). */
function readCookieLocale(): Locale | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|;\\s*)${LOCALE_COOKIE}=([^;]*)`),
  );
  return match ? normalizeLocale(decodeURIComponent(match[1])) : null;
}

/** Writes the persisted locale cookie; `secure` is added on https only. */
function writeCookieLocale(locale: Locale) {
  const secure = typeof location !== "undefined" && location.protocol === "https:" ? ";secure" : "";
  document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=31536000;samesite=lax${secure}`;
}

function readStorageLocale(): Locale | null {
  try {
    const raw = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    return raw ? normalizeLocale(raw) : null;
  } catch {
    return null;
  }
}

function writeStorageLocale(locale: Locale) {
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    /* storage may be blocked — the cookie is the source of truth */
  }
}

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
  // initialLocale comes from the cookie read on the server, so the first client
  // render always matches the server-rendered HTML (zero hydration mismatch).
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const router = useRouter();

  const localeRef = useRef<Locale>(initialLocale);
  useEffect(() => {
    localeRef.current = locale;
  }, [locale]);

  // Keep <html lang> synchronized with the active locale (SEO / a11y / fonts).
  useEffect(() => {
    document.documentElement.lang = HTML_LANG[locale];
    // The app owns its own language switching; browser auto-translation must
    // never rewrite the DOM (it breaks React's reconciliation and hides the
    // app's real locale state).
    document.documentElement.setAttribute("translate", "no");
    document.documentElement.classList.toggle("lang-en", locale === "en");
    document.documentElement.classList.toggle("lang-bn", locale === "bn");
  }, [locale]);

  const tryRefreshServerComponents = useCallback(() => {
    startTransition(() => {
      router.refresh();
    });
  }, [router]);

  // (1) First visit after the choice was persisted in an earlier session:
  // the cookie is gone (cleared/blocked) but localStorage still remembers it,
  // so restore the visitor's language instead of silently falling back to bn.
  useEffect(() => {
    if (readCookieLocale()) return;
    const stored = readStorageLocale();
    if (stored && stored !== localeRef.current) {
      writeCookieLocale(stored);
      setLocaleState(stored);
      tryRefreshServerComponents();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // (2) Cross-tab / back-forward-cache sync: when another tab (or a bfcache
  // restore) changed the cookie, adopt it here too instead of showing a
  // half-stale page.
  useEffect(() => {
    const syncFromCookie = () => {
      const cookieLocale = readCookieLocale();
      if (cookieLocale && cookieLocale !== localeRef.current) {
        setLocaleState(cookieLocale);
        writeStorageLocale(cookieLocale);
        tryRefreshServerComponents();
      }
    };
    const onVisibility = () => {
      if (document.visibilityState === "visible") syncFromCookie();
    };
    window.addEventListener("focus", syncFromCookie);
    window.addEventListener("pageshow", syncFromCookie);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.removeEventListener("focus", syncFromCookie);
      window.removeEventListener("pageshow", syncFromCookie);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [tryRefreshServerComponents]);

  const setLocale = useCallback(
    (next: Locale) => {
      if (next === localeRef.current) return;
      // Persist FIRST so the server render triggered below already sees the new
      // locale, and so a hard refresh / new tab keeps the choice.
      writeCookieLocale(next);
      writeStorageLocale(next);
      document.documentElement.lang = HTML_LANG[next];
      // Instant switch for client components…
      setLocaleState(next);
      // …and re-render server components without a full page reload.
      tryRefreshServerComponents();
    },
    [tryRefreshServerComponents],
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
