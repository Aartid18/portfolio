"use client";

import React from "react";
import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { scrollEmergeUp } from "@/lib/motionConfig";
import { TechConstellation } from "./TechConstellation";

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
          <p className="text-xs text-[#737373] mt-3 max-w-xl mx-auto font-sans">
            Core technologies applied across full-stack applications, scalable backend REST services, and applied ML models.
          </p>
        </motion.div>

        {/* Interactive Constellation Graph Component */}
        <div className="mb-20">
          <TechConstellation />
        </div>

        {/* Dense Editorial Skill Categories Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.title} className="p-7 rounded-3xl bg-[#0d0d0d] border border-white/10 shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#39ff88] uppercase tracking-widest block mb-1">
                  CATEGORY
                </span>
                <h4 className="text-xl font-extrabold text-white mb-5">{category.title}</h4>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-xl bg-[#141414] border border-white/10 text-white text-xs font-bold hover:border-[#39ff88] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
