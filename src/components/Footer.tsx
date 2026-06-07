"use client";

import Link from "next/link";
import { personalInfo, socialLinks } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-900 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
          Made with ❤️ by {personalInfo.name}. Built using Next.js, TypeScript, Tailwind CSS, and Framer Motion. <br />
          Copyright &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </p>
        
        <div className="flex gap-6">
          {socialLinks.map((link) => {
            return (
              <Link
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
                aria-label={`Visit my ${link.platform}`}
              >
                <span>{link.platform}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
