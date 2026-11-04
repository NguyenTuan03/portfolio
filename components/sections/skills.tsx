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

const ORBIT_SIZES: readonly string[] = ["size-[22rem]", "size-[34rem]", "size-[46rem]"];

export function Skills({ dict }: SkillsProps) {
  const { skills } = dict;

  return (
    <Section id={SectionId.Skills} eyebrow={skills.eyebrow} title={skills.title}>
      <div className="relative">
        {/* Các vòng quỹ đạo trang trí phía sau */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 hidden items-center justify-center md:flex"
        >
          {ORBIT_SIZES.map((size) => (
            <span
              key={size}
              className={`absolute ${size} rounded-full border border-dashed border-border`}
            />
          ))}
          <span className="absolute size-40 rounded-full bg-accent-2 opacity-20 blur-3xl" />
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {GROUP_ORDER.map((group) => (
            <div key={group} className="reveal glass rounded-2xl p-6">
              <h3 className="font-mono text-sm text-accent">
                {skills.groups[group]}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {SKILLS[group].map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border bg-background/60 px-3.5 py-1.5 font-mono text-sm transition-colors hover:border-accent hover:text-accent"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
