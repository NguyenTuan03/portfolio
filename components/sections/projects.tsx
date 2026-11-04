import type { Dictionary } from "@/app/[lang]/dictionaries";
import { PROJECT_ORDER, SectionId } from "@/lib/site";
import { Section } from "../section";

interface ProjectsProps {
  dict: Dictionary;
}

const toSlug = (name: string): string =>
  name.toLowerCase().replace(/\s+/g, "-");

export function Projects({ dict }: ProjectsProps) {
  const { projects } = dict;

  return (
    <Section
      id={SectionId.Projects}
      eyebrow={projects.eyebrow}
      title={projects.title}
    >
      <ul className="grid gap-5 md:grid-cols-2">
        {PROJECT_ORDER.map((id, index) => {
          const project = projects.items[id];

          return (
            <li
              key={id}
              className="reveal group flex flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent"
            >
              <div className="flex items-center justify-between font-mono text-xs text-muted">
                <span>{`~/projects/${toSlug(project.name)}`}</span>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              </div>

              <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                {project.name}
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted">
                {project.summary}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-accent-soft px-2.5 py-1 font-mono text-xs text-accent"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
