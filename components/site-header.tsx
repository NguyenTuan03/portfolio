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

export function SiteHeader({ locale, dict }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-4 px-5">
        <Link
          href={`/${locale}`}
          className="flex h-14 items-center font-mono text-sm font-medium"
        >
          <span className="text-accent">~/</span>
          {SITE.handle}
        </Link>

        <nav
          aria-label={dict.a11y.primaryNav}
          className="order-3 -mx-1 flex w-full gap-1 overflow-x-auto pb-2 md:order-none md:mx-0 md:w-auto md:pb-0"
        >
          {SECTION_ORDER.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="rounded-md px-3 py-1.5 text-sm text-muted transition-colors hover:text-foreground"
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
