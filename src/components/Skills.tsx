"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Brain, Server, ShieldCheck, Terminal, Cpu, Layers } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { scrollEmergeUp } from "@/lib/motionConfig";
import { TechConstellation } from "./TechConstellation";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "Languages": Terminal,
  "Frontend": Code2,
  "Backend": Server,
  "Databases": Database,
  "Machine Learning & AI": Brain,
  "Developer Tools": Cpu,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-4 relative z-10 bg-[#050505] border-t border-white/10 font-mono">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={scrollEmergeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#39ff88] block mb-3">
            02 / TECHNICAL CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            ENGINEERING <span className="text-[#39ff88]">STACK & CONSTELLATION</span>
          </h2>
          <p className="text-xs text-[#8a938a] mt-3 max-w-xl mx-auto font-sans font-normal">
            Core technologies applied across full-stack web applications, scalable backend REST microservices, and applied ML pipelines.
          </p>
        </motion.div>

        {/* Interactive Constellation Graph Component */}
        <div className="mb-20">
          <TechConstellation />
        </div>

        {/* Visual Skill Categories Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => {
            const Icon = CATEGORY_ICONS[category.title] || Layers;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-7 rounded-3xl bg-[#0d0f0d] border border-white/10 hover:border-[#39ff88]/50 shadow-xl flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
              >
                {/* Accent Top Glow Line */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#39ff88]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-[#141915] border border-white/10 text-[#39ff88] group-hover:border-[#39ff88]/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#39ff88]/10 text-[#39ff88] text-[10px] font-bold uppercase tracking-wider">
                      {category.skills.length} MODULES
                    </span>
                  </div>

                  <h4 className="text-xl font-extrabold text-white mb-5 font-display group-hover:text-[#39ff88] transition-colors">
                    {category.title}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-1.5 rounded-xl bg-[#141915] border border-white/10 text-white text-xs font-bold hover:border-[#39ff88] hover:bg-[#1b221d] hover:text-[#39ff88] transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
