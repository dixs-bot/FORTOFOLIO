"use client";

import { projectsData } from "@/lib/data";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-slate-900 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight mb-4"
          >
            Featured Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-xl mx-auto text-sm sm:text-base text-slate-400"
          >
            A curated selection of high-scale digital platforms, enterprise API solutions, and automated workflows.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group flex flex-col bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Asset Box */}
              <div className="aspect-video relative bg-slate-950 flex items-center justify-center border-b border-slate-800">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-slate-950/20 z-10" />
                <div className="w-full h-full relative opacity-60">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    priority={idx === 0}
                  />
                </div>
                <span className="absolute z-20 text-[10px] text-slate-500 font-mono tracking-widest uppercase bg-slate-950/80 px-2 py-1 border border-slate-800 rounded">
                  {project.title.split(" ")[0]} Project Preview
                </span>
              </div>

              {/* Core Details */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] bg-slate-950 border border-slate-850 rounded-md text-slate-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="https://management-panel-omega.vercel.app/"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="https://my-company-theta-seven.vercel.app/"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1.5"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
