import {
  useTranslations,
  useLocale as intlUseLocale,
  useMessages as intlUseMessages,
  NextIntlClientProvider as intlNextIntlClientProvider,
} from "next-intl";

export const LOCALES = ["en", "es"] as const;
export type Locale = (typeof LOCALES)[number];

export const useTranslate = useTranslations;

export const useLocale = intlUseLocale;

export const useMessages = intlUseMessages;

export const NextIntlClientProvider = intlNextIntlClientProvider;
