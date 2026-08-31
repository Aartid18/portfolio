"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Layers, Code2, Server, Brain, Database, CheckCircle2 } from "lucide-react";

const STACK_PILLARS = [
  {
    title: "Frontend Architecture",
    percent: 35,
    proficiency: 95,
    color: "#00f0ff",
    icon: Code2,
    techs: ["React", "Next.js 14", "TypeScript", "Tailwind CSS"],
    description: "Reactive component systems, App Router SSR, & dynamic UI performance.",
  },
  {
    title: "Backend & Microservices",
    percent: 30,
    proficiency: 92,
    color: "#5fa04e",
    icon: Server,
    techs: ["Node.js", "Express", "Java", "Spring Boot"],
    description: "Asynchronous REST API gateways, authentication, & service architecture.",
  },
  {
    title: "Applied AI & Data Science",
    percent: 20,
    proficiency: 90,
    color: "#ff007f",
    icon: Brain,
    techs: ["Python", "XGBoost", "Scikit-Learn", "Pandas"],
    description: "Predictive ML classification, TF-IDF vector similarity, & risk scoring.",
  },
  {
    title: "Data Infrastructure",
    percent: 15,
    proficiency: 88,
    color: "#4169e1",
    icon: Database,
    techs: ["PostgreSQL", "MongoDB", "Prisma ORM", "SQL"],
    description: "Relational schema design, document collections, & query indexing.",
  },
];

export const StackVisualCharts: React.FC = () => {
  const [activePillar, setActivePillar] = useState(STACK_PILLARS[0]);

  return (
    <div className="w-full max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0d0f0d] border border-white/10 shadow-2xl relative font-mono overflow-hidden space-y-8">
      {/* Accent Top Ambient Light */}
      <div className="absolute top-0 left-12 right-12 h-0.5 bg-gradient-to-r from-transparent via-[#39ff88]/50 to-transparent pointer-events-none" />

      {/* 1. Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#39ff88] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#39ff88]">
              CORE FOCUS & CAPABILITIES
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
            Engineering Capabilities Breakdown
          </h3>
        </div>
        <div className="px-3.5 py-1.5 rounded-full bg-[#141915] border border-white/10 text-xs font-bold text-[#c2cbd2]">
          4 CORE DOMAINS
        </div>
      </div>

      {/* 2. Sleek Multi-Segment Stack Ratio Bar */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs font-bold">
          <span className="text-[#8a938a] uppercase tracking-wider">Ecosystem Distribution Ratio</span>
          <span className="text-[#39ff88]">{activePillar.title}: {activePillar.percent}%</span>
        </div>

        <div className="w-full h-3 rounded-full bg-[#141915] border border-white/10 overflow-hidden flex p-0.5 gap-0.5">
          {STACK_PILLARS.map((pillar) => (
            <motion.button
              key={pillar.title}
              onClick={() => setActivePillar(pillar)}
              onMouseEnter={() => setActivePillar(pillar)}
              whileHover={{ opacity: 0.9, scaleY: 1.1 }}
              className="h-full rounded-sm transition-all duration-300 relative cursor-pointer"
              style={{
                width: `${pillar.percent}%`,
                backgroundColor: pillar.color,
                boxShadow: activePillar.title === pillar.title ? `0 0 12px ${pillar.color}` : "none",
              }}
              title={`${pillar.title} (${pillar.percent}%)`}
            />
          ))}
        </div>

        {/* Legend Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-xs">
          {STACK_PILLARS.map((pillar) => (
            <button
              key={pillar.title}
              onClick={() => setActivePillar(pillar)}
              onMouseEnter={() => setActivePillar(pillar)}
              className={`p-2.5 rounded-xl border text-left transition-all ${
                activePillar.title === pillar.title
                  ? "bg-[#171c18] border-[#39ff88] text-white shadow-md"
                  : "bg-[#111411] border-white/5 text-[#8a938a] hover:border-white/20 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: pillar.color }} />
                <span className="font-bold text-[11px] truncate">{pillar.title}</span>
              </div>
              <div className="text-[10px] text-[#39ff88] font-extrabold pl-4">
                {pillar.percent}% Ratio
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 3. Simple & Elegant Active Pillar Inspector */}
      <div className="p-6 rounded-2xl bg-[#121613] border border-white/10 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="p-3 rounded-xl bg-[#1a201b] border border-white/10"
              style={{ color: activePillar.color }}
            >
              <activePillar.icon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-black text-white font-display tracking-tight">
                {activePillar.title}
              </h4>
              <p className="text-xs text-[#8a938a] font-sans font-normal mt-0.5">
                {activePillar.description}
              </p>
            </div>
          </div>

          <div className="text-right shrink-0">
            <span className="text-[10px] uppercase font-bold text-[#8a938a] block">PROFICIENCY LEVEL</span>
            <span className="text-xl font-black text-[#39ff88] font-display">{activePillar.proficiency}%</span>
          </div>
        </div>

        {/* Tech Badges */}
        <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-bold text-[#8a938a] uppercase tracking-wider mr-2">
            CORE STACK:
          </span>
          {activePillar.techs.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-lg bg-[#1a201b] border border-white/10 text-white text-xs font-bold flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#39ff88]" />
              <span>{t}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StackVisualCharts;
