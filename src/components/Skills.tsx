"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Layout, Server, Database, BrainCircuit, Wrench, Sparkles } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion/MotionPrimitives";

const ICON_MAP: Record<string, React.ReactNode> = {
  Code: <Code className="w-5 h-5 text-cyan-400" />,
  Layout: <Layout className="w-5 h-5 text-blue-400" />,
  Server: <Server className="w-5 h-5 text-indigo-400" />,
  Database: <Database className="w-5 h-5 text-emerald-400" />,
  BrainCircuit: <BrainCircuit className="w-5 h-5 text-pink-400" />,
  Wrench: <Wrench className="w-5 h-5 text-amber-400" />,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-28 px-4 relative z-10 bg-[#0e1424]/60 border-y border-slate-700/80">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn direction="up" className="text-center mb-16">
          <h2 className="text-xs sm:text-sm font-bold tracking-widest text-cyan-400 uppercase mb-3 font-mono">
            Engineering Competencies
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Skills & <span className="gradient-text">Technologies</span>
          </h3>
          <p className="text-base text-slate-300 mt-3 max-w-xl mx-auto font-normal">
            Practical skills applied across full-stack web applications, scalable backend APIs, and applied machine learning.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 mx-auto mt-5 rounded-full" />
        </FadeIn>

        {/* Categorized Skills Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SKILL_CATEGORIES.map((category) => (
            <StaggerItem key={category.title}>
              <motion.div
                whileHover={{ y: -6 }}
                className="glass-panel p-7 rounded-3xl glow-card border-slate-700/80 shadow-xl flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700/80 shadow-md">
                      {ICON_MAP[category.iconName]}
                    </div>
                    <h4 className="text-xl font-extrabold text-white">{category.title}</h4>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/90 hover:border-cyan-400/50 text-slate-100 hover:text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-7 pt-4 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-300 font-mono font-semibold">
                  <span>{category.skills.length} core items</span>
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
