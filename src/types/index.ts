import { Project } from "./project";
import { Skill, SkillCategory } from "./skill";

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  resumeUrl?: string;
}

export interface JourneyMilestone {
  year: string;
  role: string;
  company: string;
  description: string;
}

export type { Project, Skill, SkillCategory };
