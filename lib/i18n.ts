export enum Locale {
  Vi = "vi",
  En = "en",
}

export const DEFAULT_LOCALE: Locale = Locale.En;

export const LOCALES: readonly Locale[] = Object.values(Locale);

export const isLocale = (value: string): value is Locale =>
  LOCALES.some((locale) => locale === value);

export const getOtherLocale = (locale: Locale): Locale =>
  locale === Locale.Vi ? Locale.En : Locale.Vi;

export const LOCALE_LABEL: Record<Locale, string> = {
  [Locale.Vi]: "VI",
  [Locale.En]: "EN",
};
