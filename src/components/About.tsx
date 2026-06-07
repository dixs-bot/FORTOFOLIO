"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import Image from "next/image";

export default function About() {
  return (
    <section id="about-details" className="py-24 border-t border-slate-900 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white">About Me</h2>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              Over the course of my career as a full-stack architect, I have developed a passion for engineering highly performant systems. I design and scale systems from the interactive pixels of responsive React interfaces to highly parallel streaming APIs and database setups.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              My philosophy centers around pristine code quality, strong mechanical sympathy, continuous telemetry monitoring, and creating interfaces that human developers and end-users love to operate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[350px] rounded-2xl overflow-hidden border border-slate-800 shadow-xl group"
          >
            <Image
              src="/profile.jpg"
              alt={`${personalInfo.name} working`}
              fill
              className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
