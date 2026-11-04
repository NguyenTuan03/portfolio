import Link from "next/link";
import { LOCALES, LOCALE_LABEL, type Locale } from "@/lib/i18n";

interface LanguageSwitchProps {
  locale: Locale;
  label: string;
}

export function LanguageSwitch({ locale, label }: LanguageSwitchProps) {
  return (
    <nav
      aria-label={label}
      className="flex h-9 items-center rounded-lg border border-border bg-surface p-0.5 font-mono text-xs"
    >
      {LOCALES.map((item) => {
        const isActive = item === locale;
        const base = "flex h-full items-center rounded-md px-2.5 transition-colors";

        if (isActive) {
          return (
            <span
              key={item}
              aria-current="true"
              className={`${base} bg-accent text-accent-foreground`}
            >
              {LOCALE_LABEL[item]}
            </span>
          );
        }

        return (
          <Link
            key={item}
            href={`/${item}`}
            lang={item}
            hrefLang={item}
            className={`${base} text-muted hover:text-foreground`}
          >
            {LOCALE_LABEL[item]}
          </Link>
        );
      })}
    </nav>
  );
}
