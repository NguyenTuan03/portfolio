import { lang } from "next/root-params";
import { notFound } from "next/navigation";
import { Locale, isLocale } from "@/lib/i18n";
import type en from "./dictionaries/en.json";

/** en.json là nguồn kiểu; vi.json phải có đúng cùng cấu trúc (kiểm tra bằng `satisfies`). */
export type Dictionary = typeof en;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  [Locale.En]: () =>
    import("./dictionaries/en.json").then((module) => module.default),
  [Locale.Vi]: () =>
    import("./dictionaries/vi.json").then(
      (module) => module.default satisfies Dictionary,
    ),
};

export const getLocale = async (): Promise<Locale> => {
  const value = await lang();
  if (!isLocale(value)) notFound();
  return value;
};

export const getDictionary = async (): Promise<Dictionary> =>
  dictionaries[await getLocale()]();
