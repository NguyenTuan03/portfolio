import type { Dictionary } from "@/app/[lang]/dictionaries";
import { SectionId } from "@/lib/site";
import { Section } from "../section";

interface AboutProps {
  dict: Dictionary;
}

export function About({ dict }: AboutProps) {
  const { about } = dict;

  return (
    <Section id={SectionId.About} eyebrow={about.eyebrow} title={about.title}>
      <div className="grid gap-10 md:grid-cols-5">
        <div className="reveal space-y-5 text-lg leading-relaxed text-muted md:col-span-3">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="reveal overflow-hidden rounded-xl border border-border bg-surface md:col-span-2">
          <div
            aria-hidden="true"
            className="flex gap-1.5 border-b border-border px-4 py-3"
          >
            <span className="size-2.5 rounded-full bg-border" />
            <span className="size-2.5 rounded-full bg-border" />
            <span className="size-2.5 rounded-full bg-accent" />
          </div>
          <dl className="divide-y divide-border font-mono text-sm">
            {about.facts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1 px-4 py-3">
                <dt className="text-muted">{fact.label}</dt>
                <dd className="text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
