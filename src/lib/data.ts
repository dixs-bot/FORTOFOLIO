import { PersonalInfo, NavLink, Project, SkillCategory, SocialLink, JourneyMilestone } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Diki Wahyudin",
  title: "Front-End Developer | Self-Taught Programmer",
  subtitle: "Membangun Aplikasi Web Modern & Sistem ERP yang Scalable",
  bio: "Saya adalah seorang Front-End Developer otodidak yang memiliki ketertarikan besar dalam membangun aplikasi web modern dan sistem ERP. Saya senang mempelajari flow aplikasi, merancang struktur database, serta membangun antarmuka yang sederhana, responsif, dan mudah digunakan. Saat ini saya terus mengembangkan kemampuan saya dalam React, Next.js, TypeScript, Tailwind CSS, dan Supabase untuk membangun aplikasi yang scalable dan mudah dikembangkan. Saya percaya bahwa kemampuan untuk terus belajar, beradaptasi, dan memahami pondasi sebuah sistem adalah nilai terbesar yang saya miliki.",
  email: "dikiwahyudin.id@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
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
];

export const projectsData: Project[] = [
  {
    id: "1",
    title: "LUMORA Multi-Store E-Commerce & ERP Dashboard",
    description: "A modern multi-store ERP platform featuring multi-branch management, branch isolation, and robust dashboard analytics. Built with Next.js and Supabase.",
    tags: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageUrl: "/projects/analytics.jpg",
    featured: true,
  },
  {
    id: "2",
    title: "RYDGO Ride Hailing Platform",
    description: "A comprehensive ride hailing platform incorporating Customer, Driver apps and an Admin Dashboard. Currently under development.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com",
    imageUrl: "/projects/pm-tool.jpg",
    featured: true,
  },
  {
    id: "3",
    title: "Personal Portfolio",
    description: "A premium personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageUrl: "/projects/ecommerce.jpg",
    featured: true,
  },
];

export const skillsData: SkillCategory[] = [
  {
    title: "Core Front-End & Technologies",
    skills: [
      { name: "HTML5 & CSS3", level: 95, iconName: "Layers" },
      { name: "JavaScript (ES6+)", level: 90, iconName: "Code" },
      { name: "TypeScript", level: 85, iconName: "Code" },
      { name: "React.js / Next.js", level: 90, iconName: "Layers" },
      { name: "Tailwind CSS", level: 95, iconName: "Wind" },
      { name: "Framer Motion", level: 80, iconName: "Sparkles" },
    ],
  },
  {
    title: "Back-End Integrations & Architectural Fundamentals",
    skills: [
      { name: "Supabase", level: 85, iconName: "Database" },
      { name: "REST API Integration", level: 90, iconName: "Terminal" },
      { name: "Responsive Web Design", level: 95, iconName: "Wind" },
      { name: "UI/UX Fundamentals", level: 85, iconName: "Sparkles" },
      { name: "Database Design", level: 80, iconName: "Database" },
      { name: "ERP Dashboard Development", level: 85, iconName: "Cpu" },
      { name: "Authentication & Role Management", level: 85, iconName: "Server" },
    ],
  },
];

export const journeyData: JourneyMilestone[] = [
  {
    year: "2025",
    role: "Awal Mula Belajar",
    company: "HTML & CSS",
    description: "Memulai perjalanan belajar pemrograman secara otodidak dari dasar pembuatan struktur web menggunakan HTML dan styling dengan CSS.",
  },
  {
    year: "2025",
    role: "Menguasai Pemrograman Web",
    company: "JavaScript (ES6+)",
    description: "Mempelajari logika pemrograman JavaScript, manipulasi DOM, pemrograman asinkronus, serta fitur-fitur ES6+ modern.",
  },
  {
    year: "2025",
    role: "Pengembangan Berbasis Komponen",
    company: "React.js & Next.js",
    description: "Mendalami framework React dan Next.js untuk membangun antarmuka web yang interaktif, dinamis, dan ramah SEO dengan Server-Side Rendering.",
  },
  {
    year: "2025 - 2026",
    role: "Integrasi Database & Back-End",
    company: "Supabase Ecosystem",
    description: "Membangun aplikasi full-stack dengan mengintegrasikan antarmuka front-end dengan database Postgres dari Supabase, menguasai autentikasi, dan role management.",
  },
  {
    year: "2026",
    role: "Membangun Sistem ERP",
    company: "LUMORA Multi-Store ERP",
    description: "Merancang flow aplikasi, mendesain struktur database relasional, dan mengimplementasikan UI Dashboard multi-cabang terisolasi secara mandiri.",
  },
  {
    year: "2026",
    role: "Fokus Karir Profesional",
    company: "Professional Front-End Developer",
    description: "Saat ini berfokus penuh untuk berkarir secara profesional sebagai Front-End Developer, siap berkontribusi dalam tim tech industri.",
  },
];
