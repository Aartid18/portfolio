"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { dataLineDraw } from "@/lib/motionConfig";
import { MagneticButton } from "./MagneticButton";

interface TechNode {
  id: string;
  name: string;
  category: string;
  description: string;
  projectsUsed: string[];
}

const TECH_NODES: TechNode[] = [
  { id: "react", name: "React", category: "Frontend", description: "Reactive UI component architecture & hooks", projectsUsed: ["AI Job Platform", "CineMind", "AI E-Commerce"] },
  { id: "nextjs", name: "Next.js 14", category: "Frontend", description: "SSG & App Router web applications", projectsUsed: ["AI Job Platform", "CineMind", "Portfolio"] },
  { id: "python", name: "Python", category: "AI / ML", description: "ML feature extraction & statistical modeling", projectsUsed: ["FraudShield", "CineMind"] },
  { id: "nodejs", name: "Node.js", category: "Backend", description: "Asynchronous REST API Gateway", projectsUsed: ["AI Job Platform", "AI E-Commerce", "Secure Print"] },
  { id: "java", name: "Java", category: "Backend", description: "Spring Boot microservice development", projectsUsed: ["AI Job Platform"] },
  { id: "sql", name: "SQL / Postgres", category: "Database", description: "Relational database schema modeling", projectsUsed: ["CineMind"] },
  { id: "mongodb", name: "MongoDB", category: "Database", description: "NoSQL document storage & indexing", projectsUsed: ["AI Job Platform", "AI E-Commerce"] },
  { id: "ml", name: "Machine Learning", category: "AI / ML", description: "XGBoost classification & TF-IDF similarity", projectsUsed: ["FraudShield", "CineMind"] },
  { id: "springboot", name: "Spring Boot", category: "Backend", description: "Enterprise resume parsing service", projectsUsed: ["AI Job Platform"] },
  { id: "typescript", name: "TypeScript", category: "Frontend", description: "Strict type safety & interface contracts", projectsUsed: ["CineMind", "Portfolio"] },
];

export const TechConstellation: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeTech, setActiveTech] = useState<TechNode>(TECH_NODES[0]);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  return (
    <div className="w-full max-w-5xl mx-auto p-6 sm:p-10 rounded-3xl bg-[#131513] border border-white/10 shadow-2xl relative font-mono overflow-hidden">
      {/* Self-Drawing Connecting Network Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30 z-0">
        <motion.path
          d="M 100,50 Q 300,120 500,50 T 900,50"
          fill="none"
          stroke={hoveredNodeId ? "#3ef281" : "rgba(255,255,255,0.2)"}
          strokeWidth={hoveredNodeId ? "2" : "1"}
          variants={dataLineDraw}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <motion.path
          d="M 50,150 Q 400,250 850,150"
          fill="none"
          stroke={hoveredNodeId ? "#3ef281" : "rgba(255,255,255,0.2)"}
          strokeWidth={hoveredNodeId ? "2" : "1"}
          variants={dataLineDraw}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
      </svg>

      <div className="text-center mb-8 relative z-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#3ef281] block mb-2">
          02 / CONSTELLATION GRAPH
        </span>
        <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-display">
          Software & ML Stack Graph
        </h3>
        <p className="text-xs text-[#8a938a] mt-2 font-sans">Hover or click nodes to inspect contextual engineering applications.</p>
      </div>

      {/* Central Node Visual Network with Magnetic Pull */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8 relative z-10">
        {TECH_NODES.map((node) => {
          const isActive = activeTech.id === node.id;
          return (
            <MagneticButton key={node.id} strength={0.3}>
              <motion.button
                onClick={() => setActiveTech(node)}
                onMouseEnter={() => {
                  setActiveTech(node);
                  setHoveredNodeId(node.id);
                }}
                onMouseLeave={() => setHoveredNodeId(null)}
                data-cursor="VIEW"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full p-4 rounded-2xl text-center border transition-all duration-200 ${
                  isActive
                    ? "bg-[#171917] border-[#3ef281] shadow-lg shadow-[#3ef281]/15 ring-1 ring-[#3ef281]/30"
                    : "bg-[#0a0b0a] border-white/10 hover:border-white/20"
                }`}
              >
                <div className="text-xs font-extrabold text-white mb-1 font-display">{node.name}</div>
                <div className="text-[10px] text-[#8a938a]">{node.category}</div>
              </motion.button>
            </MagneticButton>
          );
        })}
      </div>

      {/* Contextual Detail Snippet */}
      <div className="p-6 rounded-2xl bg-[#0a0b0a] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#3ef281]" />
            <span className="text-sm font-extrabold text-white font-display">{activeTech.name}</span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#3ef281]/10 text-[#3ef281] text-[10px] font-bold">
              {activeTech.category}
            </span>
          </div>
          <p className="text-xs text-[#8a938a] leading-relaxed font-sans font-normal">{activeTech.description}</p>
        </div>

        <div className="text-left md:text-right shrink-0">
          <span className="text-[10px] text-[#8a938a] font-bold uppercase tracking-wider block mb-1">
            APPLIED IN PROJECTS
          </span>
          <div className="flex flex-wrap gap-1.5 justify-start md:justify-end">
            {activeTech.projectsUsed.map((proj) => (
              <span key={proj} className="px-2.5 py-1 rounded-lg bg-[#171917] border border-white/10 text-white text-[11px] font-semibold">
                {proj}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
