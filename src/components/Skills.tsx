"use client";

import { skillsData } from "@/lib/data";
import { Layers, Code, Wind, Sparkles, Cpu, Terminal, Database, Server } from "lucide-react";
import { motion } from "framer-motion";

// Map names to Lucide icons
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Layers,
  Code,
  Wind,
  Sparkles,
  Cpu,
  Terminal,
  Database,
  Server,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight mb-4"
          >
            Technical Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-xl mx-auto text-sm sm:text-base text-slate-600"
          >
            Sustained knowledge across multiple layers of full-stack delivery frameworks and architecture designs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillsData.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: catIdx === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className=" p-8 bg-white border border-slate-200 rounded-2xl shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300 "
            >
              <h3 className="text-lg font-bold mb-8 text-blue-400 border-b border-slate-850 pb-4">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill) => {
                  const SkillIcon = skill.iconName ? iconMap[skill.iconName] : null;
                  return (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2.5">
                        <span className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                          {SkillIcon && <SkillIcon size={16} className="text-blue-500" />}
                          {skill.name}
                        </span>
                        <span className="text-xs text-slate-500 font-mono">{skill.level}%</span>
                      </div>
                      
                      <div className="h-2 bg-slate-850 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.1 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
