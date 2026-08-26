"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Code, Brain, Database, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { scrollEmergeUp } from "@/lib/motionConfig";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-4 relative z-10 bg-[#08090B] border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Editorial Statement */}
        <motion.div
          variants={scrollEmergeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20 text-center max-w-4xl mx-auto"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C7FF3D] block mb-4">
            01 / PHILOSOPHY & CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight font-display mb-6">
            I DON&apos;T JUST BUILD INTERFACES.
            <br />
            <span className="text-[#C7FF3D]">I BUILD SYSTEMS WHERE</span>
          </h2>

          {/* SOFTWARE -> DATA -> INTELLIGENCE Scale Progression */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 font-display font-black text-2xl sm:text-4xl text-white">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-[#101216] border border-white/10 text-center shadow-xl"
            >
              <Code className="w-8 h-8 text-[#C7FF3D] mx-auto mb-3" />
              <span>SOFTWARE</span>
              <span className="text-xs font-mono font-normal text-[#8A8F98] block mt-2">React / Next / Node</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-[#101216] border border-white/10 text-center shadow-xl"
            >
              <Database className="w-8 h-8 text-[#C7FF3D] mx-auto mb-3" />
              <span>DATA</span>
              <span className="text-xs font-mono font-normal text-[#8A8F98] block mt-2">Postgres / Mongo / SQL</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-[#101216] border border-white/10 text-center shadow-xl"
            >
              <Brain className="w-8 h-8 text-[#C7FF3D] mx-auto mb-3" />
              <span>INTELLIGENCE</span>
              <span className="text-xs font-mono font-normal text-[#8A8F98] block mt-2">Python / XGBoost / ML</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Asymmetric Bio & Credentials Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          {/* Left Column (60%): Bio & Core Focus */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#101216] border border-white/10 flex flex-col justify-between shadow-2xl">
            <div>
              <h3 className="text-2xl font-black text-white mb-4 font-display">Background & Engineering Intent</h3>
              <p className="text-base text-[#F4F4F0] leading-relaxed mb-8 font-sans font-normal">
                {PERSONAL_INFO.aboutText}
              </p>

              <div className="space-y-3 pt-6 border-t border-white/10 font-mono text-xs text-[#F4F4F0]">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#C7FF3D] shrink-0" />
                  <span>Full-Stack Web Engineering (React, Next.js, Node.js)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#C7FF3D] shrink-0" />
                  <span>Applied Machine Learning (XGBoost, Scikit-learn, Python)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#C7FF3D] shrink-0" />
                  <span>Scalable RESTful Microservices & Database Schemas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (40%): Education Stack */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-[#101216] border border-white/10 flex-1 shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <GraduationCap className="w-8 h-8 text-[#C7FF3D]" />
                  <span className="px-3 py-1 rounded-full bg-[#C7FF3D]/15 text-[#C7FF3D] text-xs font-mono font-bold">
                    8.4 CGPA
                  </span>
                </div>
                <h4 className="text-xl font-extrabold text-white mb-1 font-display">BE Information Technology</h4>
                <p className="text-xs text-[#8A8F98] font-mono mb-3">Bachelor of Engineering</p>
                <p className="text-xs text-[#F4F4F0] leading-relaxed">
                  Data structures, algorithms, object-oriented software design, web architecture, and database systems.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#101216] border border-white/10 flex-1 shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Award className="w-8 h-8 text-[#C7FF3D]" />
                  <span className="px-3 py-1 rounded-full bg-[#C7FF3D]/15 text-[#C7FF3D] text-xs font-mono font-bold">
                    Honours
                  </span>
                </div>
                <h4 className="text-xl font-extrabold text-white mb-1 font-display">Honours in Data Science</h4>
                <p className="text-xs text-[#8A8F98] font-mono mb-3">Specialized Academic Program</p>
                <p className="text-xs text-[#F4F4F0] leading-relaxed">
                  Machine learning pipelines, XGBoost classification, data modeling with Pandas, and predictive analytics.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Large Editorial Stats Display */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 font-mono">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-[#101216] border border-white/10 text-center shadow-xl">
              <div className="text-4xl sm:text-6xl font-black text-[#C7FF3D] font-display mb-2">{stat.value}</div>
              <div className="text-xs text-[#8A8F98] font-bold uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
