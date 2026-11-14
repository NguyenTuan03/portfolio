import { ChatCircleDots } from "@phosphor-icons/react/ssr";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { SITE, SectionId } from "@/lib/site";
import { ButtonLink, ButtonVariant } from "../button-link";
import { CopyEmailButton } from "../copy-email-button";
import { ZaloIcon } from "../icons/zalo-icon";

interface ContactProps {
  dict: Dictionary;
}

export function Contact({ dict }: ContactProps) {
  const { contact, a11y } = dict;

  return (
    <section id={SectionId.Contact} className="relative z-30 px-6 pt-12 pb-0">
      <div className="mx-auto max-w-6xl -mb-16 sm:-mb-20">
        {/* Floating Callout Box overlapping footer */}
        <div className="rounded-3xl bg-slate-900 border-2 border-accent/40 text-white p-8 sm:p-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center text-center lg:text-left">
            {/* Title */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {contact.calloutTitle}
              </h2>
            </div>

            {/* Description */}
            <div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {contact.calloutText}
              </p>
            </div>

            {/* Actions: Direct Email + Direct Zalo + Copy Email fallback */}
            <div className="flex flex-wrap justify-center lg:justify-end items-center gap-3">
              <ButtonLink
                href={SITE.email ? `mailto:${SITE.email}` : SITE.github}
                variant={ButtonVariant.PrimaryPill}
                className="!px-6 !py-3 !text-sm sm:!text-base"
              >
                <ChatCircleDots aria-hidden="true" weight="bold" className="size-5" />
                <span>{contact.calloutAction}</span>
              </ButtonLink>

              {SITE.zalo ? (
                <ButtonLink
                  href={SITE.zalo}
                  variant={ButtonVariant.OutlinePill}
                  externalLabel={a11y.externalLink}
                  className="!px-5 !py-3 !text-sm sm:!text-base !border-white/20 !text-white hover:!border-accent hover:!text-accent hover:!bg-white/5"
                >
                  <ZaloIcon className="size-4" />
                  <span>{contact.chatZalo}</span>
                </ButtonLink>
              ) : null}

              {SITE.email ? (
                <CopyEmailButton
                  email={SITE.email}
                  copyLabel={contact.copyEmail}
                  copiedLabel={contact.copied}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
