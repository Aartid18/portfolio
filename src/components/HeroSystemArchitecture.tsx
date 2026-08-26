"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Layout, Server, Code2, Database, BrainCircuit, CheckCircle2, Activity, Zap } from "lucide-react";

interface NodeItem {
  id: string;
  title: string;
  subTitle: string;
  category: string;
  icon: React.ReactNode;
  latency: string;
  status: string;
}

const NODES: NodeItem[] = [
  { id: "client", title: "CLIENT", subTitle: "Next.js / React 18", category: "FRONTEND", icon: <Layout className="w-4 h-4 text-[#C7FF3D]" />, latency: "14ms", status: "Active" },
  { id: "api", title: "API GATEWAY", subTitle: "Node / REST Router", category: "GATEWAY", icon: <Server className="w-4 h-4 text-[#C7FF3D]" />, latency: "18ms", status: "Online" },
  { id: "backend", title: "BACKEND", subTitle: "Spring Boot Microservice", category: "LOGIC", icon: <Code2 className="w-4 h-4 text-[#C7FF3D]" />, latency: "21ms", status: "Operational" },
  { id: "database", title: "DATABASE", subTitle: "PostgreSQL / Mongo", category: "STORAGE", icon: <Database className="w-4 h-4 text-[#C7FF3D]" />, latency: "16ms", status: "Indexed" },
  { id: "aiml", title: "AI / ML", subTitle: "Python / XGBoost Engine", category: "INFERENCE", icon: <BrainCircuit className="w-4 h-4 text-[#C7FF3D]" />, latency: "32ms", status: "Ready" },
  { id: "output", title: "OUTPUT", subTitle: "Real-time Telemetry UI", category: "RESULT", icon: <CheckCircle2 className="w-4 h-4 text-[#C7FF3D]" />, latency: "8ms", status: "Live" },
];

export const HeroSystemArchitecture: React.FC = () => {
  const [activeNode, setActiveNode] = useState<NodeItem>(NODES[0]);

  return (
    <div className="w-full max-w-5xl mx-auto mt-12 p-6 sm:p-8 rounded-3xl bg-[#101216] border border-white/10 relative overflow-hidden shadow-2xl font-mono">
      {/* Background Ambient Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      {/* Telemetry Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10 relative z-10">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C7FF3D] animate-ping" />
          <span className="text-xs font-bold text-white tracking-wider uppercase flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#C7FF3D]" />
            SYSTEM ARCHITECTURE TELEMETRY
          </span>
        </div>
        <div className="flex items-center gap-4 text-[11px] text-[#8A8F98]">
          <span>STATUS: <strong className="text-[#C7FF3D]">● ONLINE</strong></span>
          <span className="hidden sm:inline">LATENCY: <strong className="text-white">18ms AVG</strong></span>
        </div>
      </div>

      {/* System Flow Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10 mb-6">
        {NODES.map((node, index) => {
          const isActive = activeNode.id === node.id;
          return (
            <motion.button
              key={node.id}
              onClick={() => setActiveNode(node)}
              data-cursor="VIEW"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-4 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between h-36 relative ${
                isActive
                  ? "bg-[#16191F] border-[#C7FF3D] shadow-lg shadow-[#C7FF3D]/10"
                  : "bg-[#08090B]/80 border-white/10 hover:border-white/20"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-xl bg-[#08090B] border border-white/10">
                    {node.icon}
                  </div>
                  <span className="text-[10px] text-[#8A8F98]">0{index + 1}</span>
                </div>
                <div className="text-xs font-extrabold text-white truncate">{node.title}</div>
                <div className="text-[10px] text-[#8A8F98] truncate">{node.subTitle}</div>
              </div>

              <div className="flex items-center justify-between text-[10px] pt-2 border-t border-white/5">
                <span className="text-[#C7FF3D] font-bold">{node.latency}</span>
                <span className="text-[9px] text-[#8A8F98] uppercase">{node.category}</span>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Contextual Active Node Panel */}
      <div className="p-4 rounded-2xl bg-[#08090B] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10 text-xs">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-[#C7FF3D]/10 border border-[#C7FF3D]/30 text-[#C7FF3D]">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] text-[#8A8F98] font-bold uppercase tracking-wider block">
              ACTIVE NODE PROTOCOL
            </span>
            <span className="font-extrabold text-white">{activeNode.title} — {activeNode.subTitle}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-right">
          <div>
            <span className="text-[10px] text-[#8A8F98] block">LATENCY</span>
            <span className="font-bold text-[#C7FF3D]">{activeNode.latency}</span>
          </div>
          <div className="pl-4 border-l border-white/10">
            <span className="text-[10px] text-[#8A8F98] block">STATUS</span>
            <span className="font-bold text-white">{activeNode.status}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
