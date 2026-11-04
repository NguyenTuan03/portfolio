import type { CSSProperties } from "react";
import Image from "next/image";
import { ArrowDown, GithubLogo } from "@phosphor-icons/react/ssr";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { SITE, SectionId } from "@/lib/site";
import { ButtonLink, ButtonVariant } from "../button-link";

interface HeroProps {
  dict: Dictionary;
}

interface TypewriterStyle extends CSSProperties {
  "--chars": number;
}

const AVATAR_SRC = "/avatar.jpg";
const AVATAR_SIZE = 800;

export function Hero({ dict }: HeroProps) {
  const { hero, a11y } = dict;
  const typewriterStyle: TypewriterStyle = {
    "--chars": hero.role.normalize("NFC").length,
  };

  return (
    <section className="relative isolate">
      <div className="mx-auto max-w-4xl px-5 pb-20 pt-12 md:pb-28 md:pt-20">
        <div className="grid items-center gap-8 md:grid-cols-[auto_1fr] md:gap-14">
          <div className="float relative mx-auto size-44 md:size-56">
            <div
              aria-hidden="true"
              className="absolute -inset-16 -z-10 rounded-full bg-accent-2 opacity-40 blur-3xl"
            />
            <Image
              src={AVATAR_SRC}
              alt={hero.avatarAlt}
              width={AVATAR_SIZE}
              height={AVATAR_SIZE}
              sizes="(min-width: 768px) 224px, 176px"
              priority
              className="size-full rounded-full border-2 border-accent/40 object-cover"
            />
          </div>

          <div className="text-center md:text-left">
            <p className="text-sm">
              {hero.greeting}{" "}
              <span className="text-accent">{SITE.name}</span>
            </p>
            <p className="mt-5 text-sm text-muted">{hero.headlineLead}</p>
            <h1 className="mt-1 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {hero.headlineBefore}{" "}
              <span className="relative inline-block px-3 text-accent">
                {hero.headlineCircled}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="absolute -inset-x-1 -inset-y-1.5 size-[calc(100%+0.5rem)]"
                >
                  <ellipse
                    cx="50"
                    cy="50"
                    rx="48"
                    ry="42"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </span>
            </h1>
            <p className="mt-3 text-xs text-muted">{hero.headlineNote}</p>
          </div>
        </div>

        <h2 className="mt-16 flex flex-wrap items-center justify-center gap-x-3 font-mono text-lg sm:text-2xl md:mt-24 md:justify-start md:text-4xl">
          <span>{hero.rolePrefix}</span>
          <span className="flex items-center">
            <span
              className="typewriter inline-block"
              style={typewriterStyle}
            >
              {hero.role}
            </span>
            <span
              aria-hidden="true"
              className="cursor ml-1 inline-block h-[1.1em] w-0.5 bg-accent"
            />
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-center leading-relaxed text-muted md:mx-0 md:text-left">
          {hero.tagline}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
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
    </section>
  );
}
