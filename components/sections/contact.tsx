import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/ssr";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { SITE, SectionId } from "@/lib/site";
import { ButtonLink, ButtonVariant } from "../button-link";
import { Section } from "../section";

interface ContactProps {
  dict: Dictionary;
}

export function Contact({ dict }: ContactProps) {
  const { contact, a11y } = dict;

  return (
    <Section
      id={SectionId.Contact}
      eyebrow={contact.eyebrow}
      title={contact.title}
    >
      <div className="reveal glass relative overflow-hidden rounded-3xl p-8 md:p-12">
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 -z-10 size-64 rounded-full bg-accent opacity-15 blur-3xl"
        />
        <p className="max-w-xl text-lg leading-relaxed text-muted">
          {contact.text}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {SITE.email ? (
            <ButtonLink
              href={`mailto:${SITE.email}`}
              variant={ButtonVariant.Primary}
            >
              <EnvelopeSimple aria-hidden="true" weight="bold" className="size-4" />
              {contact.email}
            </ButtonLink>
          ) : null}

          <ButtonLink
            href={SITE.github}
            variant={SITE.email ? ButtonVariant.Secondary : ButtonVariant.Primary}
            externalLabel={a11y.externalLink}
          >
            <GithubLogo aria-hidden="true" weight="bold" className="size-4" />
            {contact.github}
          </ButtonLink>

          {SITE.linkedin ? (
            <ButtonLink
              href={SITE.linkedin}
              variant={ButtonVariant.Secondary}
              externalLabel={a11y.externalLink}
            >
              <LinkedinLogo aria-hidden="true" weight="bold" className="size-4" />
              LinkedIn
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
