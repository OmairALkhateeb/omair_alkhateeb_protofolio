export const locales = ["en", "ar", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
  de: "Deutsch",
};

export const hasLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);

export const dirOf = (locale: Locale) => (locale === "ar" ? "rtl" : "ltr");

/** Cookie that remembers the visitor's explicit language choice. */
export const LOCALE_COOKIE = "NEXT_LOCALE";
