"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  defaultLocale,
  localeCookie,
  localeHtmlLang,
  type Locale,
  locales,
} from "./config";
import { dictionaries, type Messages } from "./dictionaries";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  messages: Messages;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function readCookieLocale(): Locale {
  if (typeof document === "undefined") return defaultLocale;
  const match = document.cookie.match(new RegExp(`(?:^|; )${localeCookie}=([^;]*)`));
  const value = match?.[1];
  return locales.includes(value as Locale) ? (value as Locale) : defaultLocale;
}

function writeCookieLocale(locale: Locale) {
  document.cookie = `${localeCookie}=${locale};path=/;max-age=31536000;samesite=lax`;
}

function playLocaleTextSwap() {
  if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }
  document.documentElement.classList.remove("locale-text-swap");
  void document.documentElement.offsetWidth;
  document.documentElement.classList.add("locale-text-swap");
  window.setTimeout(() => {
    document.documentElement.classList.remove("locale-text-swap");
  }, 760);
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const localeRef = useRef(locale);
  localeRef.current = locale;

  useEffect(() => {
    setLocaleState(readCookieLocale());
  }, []);

  useEffect(() => {
    document.documentElement.lang = localeHtmlLang[locale];
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    if (localeRef.current === next) return;
    writeCookieLocale(next);
    playLocaleTextSwap();
    setLocaleState(next);
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      messages: dictionaries[locale],
    }),
    [locale, setLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

export function useMessages(): Messages {
  return useLocale().messages;
}
