import { PersonalInfo, NavLink, Project, SkillCategory, SocialLink, JourneyMilestone } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Alexander Wright",
  title: "Lead Full-Stack Engineer",
  subtitle: "Specializing in High-Performance React Ecosystems & AI Architectures",
  bio: "I design and develop high-scale digital interfaces, clean API architectures, and robust automation pipelines. Dedicated to exceptional performance, pristine code quality, and human-centric UI design.",
  email: "alexander@wright-dev.io",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com", iconName: "Github" },
  { platform: "LinkedIn", url: "https://linkedin.com", iconName: "Linkedin" },
  { platform: "Twitter", url: "https://twitter.com", iconName: "Twitter" },
];

export const projectsData: Project[] = [
  {
    id: "1",
    title: "AI-Powered Analytics Dashboard",
    description: "A real-time predictive analytics system utilizing high-throughput pipeline streams, featuring clean custom SVG dashboards and ML regression trend indicators.",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS v4", "FastAPI", "Python", "Framer Motion"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageUrl: "/projects/analytics.jpg",
    featured: true,
  },
  {
    id: "2",
    title: "Collaborative Project Manager",
    description: "A secure multi-player Kanban planner leveraging web sockets for near-zero latency state synchronization, integrated inline Markdown editors, and rich team assignments.",
    tags: ["React 19", "Node.js", "Socket.io", "MongoDB", "Express", "Tailwind CSS"],
    githubUrl: "https://github.com",
    imageUrl: "/projects/pm-tool.jpg",
    featured: true,
  },
  {
    id: "3",
    title: "Multi-Tenant Cloud Billing Suite",
    description: "Complete localized micro-billing infrastructure with comprehensive stripe processing, automated invoice compilation engines, and scheduled webhook event handling.",
    tags: ["Next.js 15", "PostgreSQL", "Stripe API", "Docker", "Tailwind CSS v4"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageUrl: "/projects/ecommerce.jpg",
    featured: true,
  },
];

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    skills: [
      { name: "React / Next.js 15", level: 95, iconName: "Layers" },
      { name: "TypeScript", level: 90, iconName: "Code" },
      { name: "Tailwind CSS v4", level: 95, iconName: "Wind" },
      { name: "Framer Motion", level: 88, iconName: "Sparkles" },
    ],
  },
  {
    title: "Backend & Systems",
    skills: [
      { name: "Node.js / Express", level: 85, iconName: "Cpu" },
      { name: "Python / FastAPI", level: 80, iconName: "Terminal" },
      { name: "PostgreSQL / MongoDB", level: 85, iconName: "Database" },
      { name: "Docker / CI-CD", level: 75, iconName: "Server" },
    ],
  },
];

export const journeyData: JourneyMilestone[] = [
  {
    year: "2024 - Present",
    role: "Lead Full-Stack Architect",
    company: "Apex Digital Solutions",
    description: "Architected modern micro-frontend configurations and robust, secure telemetry metrics collection frameworks handling millions of operations daily."
  },
  {
    year: "2021 - 2024",
    role: "Senior Full-Stack Engineer",
    company: "Enterprise Cloud Platforms",
    description: "Built scalable Stripe subscription layouts, real-time web socket dashboard components, and spearheaded React 18 flat-config transition patterns."
  },
  {
    year: "2018 - 2021",
    role: "Full-Stack Engineer",
    company: "SaaS Startups Corp",
    description: "Implemented custom Tailwind utility setups, automated CI/CD pipeline triggers, and maintained serverless Node.js endpoints."
  }
];
