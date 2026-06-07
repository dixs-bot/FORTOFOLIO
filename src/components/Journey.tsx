"use client";

import { motion } from "framer-motion";
import { journeyData } from "@/lib/data";
import { Briefcase } from "lucide-react";
import AnimatedCard from "./AnimatedCard";

export default function Journey() {
  return (
    <section id="journey" className="py-24 border-t border-slate-900 bg-slate-950/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-white"
          >
            My Professional Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-xl mx-auto text-sm sm:text-base text-slate-400 mt-4"
          >
            Over eight years of building and optimizing mission-critical software pipelines.
          </motion.p>
        </div>

        <div className="relative border-l border-slate-800 ml-4 md:ml-8 space-y-12">
          {journeyData.map((milestone, idx) => (
            <AnimatedCard key={milestone.company} delay={idx * 0.15} className="relative pl-8 sm:pl-12">
              <span className="absolute -left-[17px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-slate-950 border border-slate-800 text-blue-400">
                <Briefcase size={14} />
              </span>
              <div className="p-6 bg-slate-900/30 border border-slate-800/80 rounded-xl hover:border-slate-700 transition-colors">
                <span className="inline-block px-2.5 py-1 text-[11px] bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold rounded-md mb-4 font-mono">
                  {milestone.year}
                </span>
                <h3 className="text-lg font-bold text-white mb-1">
                  {milestone.role}
                </h3>
                <p className="text-sm font-semibold text-slate-400 mb-4">
                  {milestone.company}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                  {milestone.description}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
