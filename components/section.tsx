import type { ReactNode } from "react";
import type { SectionId } from "@/lib/site";

interface SectionProps {
  id: SectionId;
  eyebrow: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, children }: SectionProps) {
  const titleId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className="mx-auto w-full max-w-5xl px-5 py-20 md:py-28"
    >
      <div className="reveal">
        <p className="font-mono text-sm text-accent">{`// ${eyebrow}`}</p>
        <h2
          id={titleId}
          className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl"
        >
          {title}
        </h2>
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}
