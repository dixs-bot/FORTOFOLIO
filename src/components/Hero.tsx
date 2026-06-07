"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { RESUME_DOWNLOAD_URL } from "@/lib/constants";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="about" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/40 via-slate-950 to-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-slate-800 shadow-xl mb-6 hover:border-blue-500 transition-colors"
        >
          <Image
            src="/profile.jpg"
            alt={personalInfo.name}
            fill
            className="object-cover"
            sizes="128px"
            priority
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          Available for contract & full-time roles
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
        >
          I&apos;m{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
          <br />
          <span className="text-slate-200 text-2xl sm:text-3xl md:text-4xl block mt-2 font-bold font-sans">
            {personalInfo.title}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 mb-10 leading-relaxed"
        >
          {personalInfo.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors shadow-lg shadow-blue-900/30 text-center flex items-center justify-center gap-2 group text-sm"
          >
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={RESUME_DOWNLOAD_URL}
            download="Alexander_Wright_CV.pdf"
            className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-medium rounded-lg transition-colors text-center flex items-center justify-center gap-2 text-sm"
          >
            Download CV / Resume
            <Download size={16} />
          </a>
        </motion.div>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none bg-blue-500/10 blur-[120px] rounded-full" />
    </section>
  );
}
