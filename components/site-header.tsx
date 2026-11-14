import Link from "next/link";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import type { Locale } from "@/lib/i18n";
import { SECTION_ORDER, SITE, SectionId } from "@/lib/site";
import { ButtonLink, ButtonVariant } from "./button-link";
import { LanguageSwitch } from "./language-switch";
import { ThemeToggle } from "./theme-toggle";

interface SiteHeaderProps {
  locale: Locale;
  dict: Dictionary;
}

const MONOGRAM = "NT";

export function SiteHeader({ locale, dict }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-surface/85 backdrop-blur-lg transition-colors">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        {/* Monogram Logo */}
        <Link
          href={`/${locale}`}
          aria-label={SITE.name}
          className="group flex items-center gap-2"
        >
          <span className="grid size-10 place-items-center rounded-xl bg-accent-soft font-mono text-base font-bold text-accent transition-all duration-300 group-hover:scale-105 group-hover:bg-accent group-hover:text-accent-foreground group-hover:shadow-[0_0_20px_-3px_var(--accent)]">
            {MONOGRAM}
          </span>
          <span className="hidden font-mono text-xs font-semibold tracking-wider text-muted sm:inline-block">
            {SITE.handle}
          </span>
        </Link>

        {/* Navigation Links */}
        <nav
          aria-label={dict.a11y.primaryNav}
          className="hidden md:flex items-center gap-6"
        >
          {SECTION_ORDER.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              {dict.nav[id]}
            </a>
          ))}
        </nav>

        {/* Action Controls & CTA Pill */}
        <div className="flex items-center gap-3">
          <LanguageSwitch locale={locale} label={dict.a11y.switchLanguage} />
          <ThemeToggle label={dict.a11y.toggleTheme} />
          <div className="hidden sm:block pl-1">
            <ButtonLink
              href={`#${SectionId.Contact}`}
              variant={ButtonVariant.OutlinePill}
              className="!px-5 !py-2 !text-sm"
            >
              {dict.nav.sayHello}
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* Mobile Navigation bar */}
      <nav
        aria-label={dict.a11y.primaryNav}
        className="flex md:hidden border-t border-border/40 px-4 py-2 justify-around text-xs font-medium text-muted"
      >
        {SECTION_ORDER.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className="px-2 py-1 transition-colors hover:text-accent"
          >
            {dict.nav[id]}
          </a>
        ))}
      </nav>
    </header>
  );
}
