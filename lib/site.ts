export enum SocialPlatform {
  GitHub = "github",
  Facebook = "facebook",
  Zalo = "zalo",
  LinkedIn = "linkedin",
  Email = "email",
}

export interface SiteConfig {
  name: string;
  handle: string;
  url: string;
  github: string;
  /** Chỉ hiển thị trên trang khi có giá trị. */
  email?: string;
  linkedin?: string;
  facebook?: string;
  zalo?: string;
  phone?: string;
}

export const SITE: SiteConfig = {
  name: "Nguyễn Tuấn",
  handle: "nguyentuan03",
  url: "https://nguyentuan03.com",
  github: "https://github.com/NguyenTuan03",
  email: "nguyenanhtuan.170164@gmail.com",
  facebook: "https://www.facebook.com/2011tuan2011",
  zalo: "https://zalo.me/0905038319",
  phone: "0905038319",
};

export enum SectionId {
  About = "about",
  Skills = "skills",
  Projects = "projects",
  Contact = "contact",
}

export const SECTION_ORDER: readonly SectionId[] = [
  SectionId.About,
  SectionId.Skills,
  SectionId.Projects,
  SectionId.Contact,
];

export enum ProjectId {
  PickleLearn = "pickleLearn",
  Autopilot = "autopilot",
  Nanoco = "nanoco",
  SpaPractice = "spaPractice",
}

export const PROJECT_ORDER: readonly ProjectId[] = [
  ProjectId.PickleLearn,
  ProjectId.Autopilot,
  ProjectId.Nanoco,
  ProjectId.SpaPractice,
];

export interface ProjectLink {
  href: string;
  isExternal: boolean;
}

export const PROJECT_LINKS: Record<ProjectId, ProjectLink> = {
  [ProjectId.PickleLearn]: {
    href: "https://github.com/NguyenTuan03/pickle-learn",
    isExternal: true,
  },
  [ProjectId.Autopilot]: {
    href: "https://github.com/NguyenTuan03/autopilot",
    isExternal: true,
  },
  [ProjectId.Nanoco]: {
    href: "https://github.com/NguyenTuan03/nanoco-mes",
    isExternal: true,
  },
  [ProjectId.SpaPractice]: {
    href: "https://github.com/NguyenTuan03/spa-practice",
    isExternal: true,
  },
};

export enum SkillGroupId {
  Frontend = "frontend",
  Backend = "backend",
  DataCloud = "dataCloud",
}

export const SKILLS: Record<SkillGroupId, readonly string[]> = {
  [SkillGroupId.Frontend]: [
    "Next.js",
    "React",
    "TypeScript",
    "Ant Design",
    "Tailwind CSS",
  ],
  [SkillGroupId.Backend]: ["PHP / Laravel", "NestJS", "Ruby", "Go"],
  [SkillGroupId.DataCloud]: ["PostgreSQL", "AWS"],
};
