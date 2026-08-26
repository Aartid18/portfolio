"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, Server, Database, BrainCircuit, Cpu, Sparkles } from "lucide-react";

interface TechNode {
  id: string;
  name: string;
  category: string;
  description: string;
  projectsUsed: string[];
}

const TECH_NODES: TechNode[] = [
  { id: "react", name: "React", category: "Frontend", description: "Reactive UI component architecture", projectsUsed: ["AI Job Platform", "CineMind", "AI E-Commerce"] },
  { id: "nextjs", name: "Next.js 14", category: "Frontend", description: "SSG & App Router web applications", projectsUsed: ["AI Job Platform", "CineMind", "Portfolio"] },
  { id: "python", name: "Python", category: "AI / ML", description: "ML feature extraction & data modeling", projectsUsed: ["FraudShield", "CineMind"] },
  { id: "nodejs", name: "Node.js", category: "Backend", description: "Asynchronous REST API Gateway", projectsUsed: ["AI Job Platform", "AI E-Commerce", "Secure Print"] },
  { id: "java", name: "Java", category: "Backend", description: "Spring Boot microservice development", projectsUsed: ["AI Job Platform"] },
  { id: "sql", name: "SQL / Postgres", category: "Database", description: "Relational database schema modeling", projectsUsed: ["CineMind"] },
  { id: "mongodb", name: "MongoDB", category: "Database", description: "NoSQL document storage & indexing", projectsUsed: ["AI Job Platform", "AI E-Commerce"] },
  { id: "ml", name: "Machine Learning", category: "AI / ML", description: "XGBoost classification & TF-IDF similarity", projectsUsed: ["FraudShield", "CineMind"] },
  { id: "springboot", name: "Spring Boot", category: "Backend", description: "Enterprise resume parsing service", projectsUsed: ["AI Job Platform"] },
  { id: "typescript", name: "TypeScript", category: "Frontend", description: "Strict type safety & interface contracts", projectsUsed: ["CineMind", "Portfolio"] },
];

export const TechConstellation: React.FC = () => {
  const [activeTech, setActiveTech] = useState<TechNode>(TECH_NODES[0]);

  return (
    <div className="w-full max-w-5xl mx-auto p-6 sm:p-10 rounded-3xl bg-[#101216] border border-white/10 shadow-2xl relative font-mono">
      <div className="text-center mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-[#C7FF3D] block mb-2">
          INTERACTIVE TECH CONSTELLATION
        </span>
        <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          Software & ML Stack Graph
        </h3>
        <p className="text-xs text-[#8A8F98] mt-2">Hover or click nodes to inspect contextual engineering applications.</p>
      </div>

      {/* Central Node Visual Network */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8 relative z-10">
        {TECH_NODES.map((node) => {
          const isActive = activeTech.id === node.id;
          return (
            <motion.button
              key={node.id}
              onClick={() => setActiveTech(node)}
              onMouseEnter={() => setActiveTech(node)}
              data-cursor="VIEW"
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`p-4 rounded-2xl text-center border transition-all duration-200 ${
                isActive
                  ? "bg-[#16191F] border-[#C7FF3D] shadow-lg shadow-[#C7FF3D]/10"
                  : "bg-[#08090B] border-white/10 hover:border-white/20"
              }`}
            >
              <div className="text-xs font-extrabold text-white mb-1">{node.name}</div>
              <div className="text-[10px] text-[#8A8F98]">{node.category}</div>
            </motion.button>
          );
        })}
      </div>

      {/* Contextual Technical Detail Card */}
      <div className="p-6 rounded-2xl bg-[#08090B] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C7FF3D]" />
            <span className="text-sm font-extrabold text-white">{activeTech.name}</span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#C7FF3D]/10 text-[#C7FF3D] text-[10px] font-bold">
              {activeTech.category}
            </span>
          </div>
          <p className="text-xs text-[#8A8F98] leading-relaxed">{activeTech.description}</p>
        </div>

        <div className="text-left md:text-right shrink-0">
          <span className="text-[10px] text-[#8A8F98] font-bold uppercase tracking-wider block mb-1">
            APPLIED IN PROJECTS
          </span>
          <div className="flex flex-wrap gap-1.5 justify-start md:justify-end">
            {activeTech.projectsUsed.map((proj) => (
              <span key={proj} className="px-2.5 py-1 rounded-lg bg-[#16191F] border border-white/10 text-white text-[11px] font-semibold">
                {proj}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
