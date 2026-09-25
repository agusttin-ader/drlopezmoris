export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const localeCookie = "dr_locale";

export const localeHtmlLang: Record<Locale, string> = {
  es: "es-AR",
  en: "en",
};
