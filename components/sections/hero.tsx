import Image from "next/image";
import { ArrowDown, GithubLogo } from "@phosphor-icons/react/ssr";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { SITE, SectionId } from "@/lib/site";
import { ButtonLink, ButtonVariant } from "../button-link";

interface HeroProps {
  dict: Dictionary;
}

const AVATAR_SRC = "/avatar.jpg";
const AVATAR_SIZE = 800;

export function Hero({ dict }: HeroProps) {
  const { hero, a11y } = dict;

  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
      <div aria-hidden="true" className="bg-glow absolute inset-0 -z-10" />

      <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 pb-24 pt-16 md:grid-cols-[1fr_auto] md:gap-16 md:pb-36 md:pt-28">
        <div>
          <p className="font-mono text-sm text-muted">
            <span className="text-accent">$</span> {hero.command}
            <span
              aria-hidden="true"
              className="cursor ml-1 inline-block h-4 w-2 translate-y-0.5 bg-accent"
            />
          </p>

          <h1 className="mt-6 font-semibold tracking-tight">
            <span className="block text-2xl font-normal text-muted md:text-3xl">
              {hero.greeting}
            </span>
            <span className="mt-1 block text-5xl md:text-7xl">{SITE.name}</span>
          </h1>

          <p className="mt-5 font-mono text-lg text-accent md:text-xl">
            {hero.role}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {hero.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink
              href={`#${SectionId.Projects}`}
              variant={ButtonVariant.Primary}
            >
              {hero.ctaProjects}
              <ArrowDown aria-hidden="true" weight="bold" className="size-4" />
            </ButtonLink>
            <ButtonLink
              href={SITE.github}
              variant={ButtonVariant.Secondary}
              externalLabel={a11y.externalLink}
            >
              <GithubLogo aria-hidden="true" weight="bold" className="size-4" />
              {hero.ctaGithub}
            </ButtonLink>
          </div>
        </div>

        {/* Mobile: avatar nằm trên cùng; desktop: nằm bên phải */}
        <div className="relative order-first size-32 md:order-last md:size-72">
          <div
            aria-hidden="true"
            className="absolute -inset-3 -z-10 rounded-3xl bg-accent-soft blur-2xl"
          />
          <Image
            src={AVATAR_SRC}
            alt={hero.avatarAlt}
            width={AVATAR_SIZE}
            height={AVATAR_SIZE}
            sizes="(min-width: 768px) 288px, 128px"
            priority
            className="size-full rounded-2xl border border-border object-cover"
          />
        </div>
      </div>
    </section>
  );
}
