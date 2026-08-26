"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle2, Code, Brain, Database, Server, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { FadeIn } from "./motion/MotionPrimitives";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-28 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn direction="up" className="text-center mb-16">
          <h2 className="text-xs sm:text-sm font-bold tracking-widest text-cyan-400 uppercase mb-3 font-mono">
            Professional Profile
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Full Stack Engineering meets <span className="gradient-text-pink">Applied AI & Data Science</span>
          </h3>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 mx-auto mt-5 rounded-full" />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Bio & Summary Card */}
          <FadeIn direction="left" className="lg:col-span-7 flex flex-col justify-between glass-panel p-8 sm:p-10 rounded-3xl glow-card border-slate-700/80 shadow-2xl">
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-3 rounded-2xl bg-cyan-500/15 text-cyan-400 border border-cyan-400/30">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-white">Engineering Background</h4>
                  <p className="text-xs font-semibold text-cyan-300 font-mono">Full-Stack & Applied Machine Learning</p>
                </div>
              </div>

              <p className="text-slate-200 leading-relaxed text-base sm:text-lg mb-8 font-normal">
                {PERSONAL_INFO.aboutText}
              </p>

              <div className="space-y-4 pt-6 border-t border-slate-700/80">
                <h5 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Core Technical Focus Areas:</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Full-Stack Web Apps (React / Next.js)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                    <span>Applied ML Models & Analytics</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Scalable Backend REST APIs</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                    <span>SQL & NoSQL Database Architecture</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 mt-8 border-t border-slate-700/80 font-mono">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="text-center p-3.5 rounded-2xl bg-slate-900/80 border border-slate-700/80 shadow-md">
                  <div className="text-2xl sm:text-3xl font-black text-white gradient-text">{stat.value}</div>
                  <div className="text-[11px] text-slate-300 font-bold mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Education & Credentials Column (Floating Identity Cards) */}
          <FadeIn direction="right" className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {/* Education Card 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="glass-panel p-7 rounded-3xl glow-card border-slate-700/80 flex-1 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-cyan-500/15 text-cyan-400 border border-cyan-400/30">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="px-3.5 py-1 text-xs font-bold font-mono rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-400/40">
                    8.4 CGPA
                  </span>
                </div>
                <h4 className="text-xl font-black text-white mb-1">
                  BE Information Technology
                </h4>
                <p className="text-xs text-cyan-300 font-bold mb-3 font-mono">
                  Bachelor of Engineering
                </p>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  Focused on core computer science foundations, algorithms, object-oriented software design, web engineering lifecycle, and database management.
                </p>
              </div>
            </motion.div>

            {/* Education Card 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="glass-panel p-7 rounded-3xl glow-card border-slate-700/80 flex-1 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-pink-500/15 text-pink-400 border border-pink-400/30">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="px-3.5 py-1 text-xs font-bold font-mono rounded-full bg-pink-500/15 text-pink-300 border border-pink-400/40">
                    Honours
                  </span>
                </div>
                <h4 className="text-xl font-black text-white mb-1">
                  Honours in Data Science
                </h4>
                <p className="text-xs text-pink-300 font-bold mb-3 font-mono">
                  Specialized Academic Program
                </p>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  Specialized training in predictive statistical modeling, machine learning pipelines (XGBoost, Scikit-learn), data analysis with Pandas, and data visualization.
                </p>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
