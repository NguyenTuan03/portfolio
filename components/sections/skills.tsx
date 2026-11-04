import type { Dictionary } from "@/app/[lang]/dictionaries";
import { SKILLS, SectionId, SkillGroupId } from "@/lib/site";
import { Section } from "../section";

interface SkillsProps {
  dict: Dictionary;
}

const GROUP_ORDER: readonly SkillGroupId[] = [
  SkillGroupId.Frontend,
  SkillGroupId.Backend,
  SkillGroupId.DataCloud,
];

export function Skills({ dict }: SkillsProps) {
  const { skills } = dict;

  return (
    <Section id={SectionId.Skills} eyebrow={skills.eyebrow} title={skills.title}>
      <div className="grid gap-5 md:grid-cols-3">
        {GROUP_ORDER.map((group) => (
          <div
            key={group}
            className="reveal rounded-xl border border-border bg-surface p-6"
          >
            <h3 className="font-mono text-sm text-accent">
              {skills.groups[group]}
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {SKILLS[group].map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-border bg-background px-3 py-1.5 font-mono text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
