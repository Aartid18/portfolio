"use client";

import React from "react";
import { GraduationCap, Award, CheckCircle2, Code, Brain, Database, Server } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-cyan-400 uppercase mb-2">
            About Me
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Full Stack Engineering meets <span className="gradient-text">Data Science & AI</span>
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Bio & Summary Card */}
          <div className="lg:col-span-7 flex flex-col justify-between glass-panel p-8 rounded-3xl glow-card border-slate-800">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Professional Summary</h4>
                  <p className="text-xs text-slate-400">Engineering robust software & data solutions</p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed text-base mb-6">
                {PERSONAL_INFO.aboutText}
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-800/80">
                <h5 className="text-sm font-semibold text-slate-200">Core Technical Focus Areas:</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Full-Stack Web Applications (React / Next.js)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Machine Learning Models & Predictive Dashboards</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Scalable RESTful Backend Microservices</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Relational & NoSQL Database Optimization</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 mt-8 border-t border-slate-800/80">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="text-center p-3 rounded-2xl bg-slate-900/40 border border-slate-800/60">
                  <div className="text-2xl font-extrabold text-white gradient-text">{stat.value}</div>
                  <div className="text-xs text-slate-400 font-medium mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Credentials Column */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {/* Education Card 1 */}
            <div className="glass-panel p-6 rounded-3xl glow-card border-slate-800 flex-1">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30">
                  BE Degree
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">
                BE Information Technology
              </h4>
              <p className="text-xs text-cyan-400 font-medium mb-3">
                Bachelor of Engineering
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Focused on core computer science foundations, algorithms, object-oriented software design, software engineering lifecycle, and database systems.
              </p>
            </div>

            {/* Education Card 2 */}
            <div className="glass-panel p-6 rounded-3xl glow-card border-slate-800 flex-1">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Award className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30">
                  Honours
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">
                Honours in Data Science
              </h4>
              <p className="text-xs text-purple-400 font-medium mb-3">
                Specialized Academic Program
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Specialized training in predictive statistical modeling, machine learning pipelines (XGBoost, Scikit-learn), data analysis with Pandas, and data visualization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
