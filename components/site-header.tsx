import Link from "next/link";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import type { Locale } from "@/lib/i18n";
import { SECTION_ORDER, SITE } from "@/lib/site";
import { LanguageSwitch } from "./language-switch";
import { ThemeToggle } from "./theme-toggle";

interface SiteHeaderProps {
  locale: Locale;
  dict: Dictionary;
}

const MONOGRAM = "NT";

export function SiteHeader({ locale, dict }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-4 px-5 py-2.5">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2.5 font-mono text-sm font-medium"
        >
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-xs font-bold text-accent-foreground"
          >
            {MONOGRAM}
          </span>
          <span className="hidden sm:inline">{SITE.handle}</span>
        </Link>

        <nav
          aria-label={dict.a11y.primaryNav}
          className="glass order-3 mt-2 flex w-full justify-center gap-1 overflow-x-auto rounded-full p-1 md:order-none md:mt-0 md:w-auto"
        >
          {SECTION_ORDER.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="rounded-full px-4 py-1.5 text-sm text-muted transition-colors hover:bg-accent-soft hover:text-foreground"
            >
              {dict.nav[id]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitch locale={locale} label={dict.a11y.switchLanguage} />
          <ThemeToggle label={dict.a11y.toggleTheme} />
        </div>
      </div>
    </header>
  );
}
