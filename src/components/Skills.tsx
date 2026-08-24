"use client";

import React from "react";
import { Code, Layout, Server, Database, BrainCircuit, Wrench, Sparkles } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

const ICON_MAP: Record<string, React.ReactNode> = {
  Code: <Code className="w-5 h-5 text-cyan-400" />,
  Layout: <Layout className="w-5 h-5 text-blue-400" />,
  Server: <Server className="w-5 h-5 text-indigo-400" />,
  Database: <Database className="w-5 h-5 text-emerald-400" />,
  BrainCircuit: <BrainCircuit className="w-5 h-5 text-purple-400" />,
  Wrench: <Wrench className="w-5 h-5 text-amber-400" />,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 relative z-10 bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-cyan-400 uppercase mb-2">
            Technical Stack
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-text">Technologies</span>
          </h3>
          <p className="text-sm text-slate-400 mt-2 max-w-xl mx-auto">
            Practical skills applied across full-stack web applications and machine learning engineering.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={category.title}
              className="glass-panel p-6 rounded-3xl glow-card border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    {ICON_MAP[category.iconName]}
                  </div>
                  <h4 className="text-lg font-bold text-white">{category.title}</h4>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white text-xs sm:text-sm font-medium transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>{category.skills.length} core items</span>
                <Sparkles className="w-3.5 h-3.5 text-cyan-500/60" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
