"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Layout, Server, Code2, Database, BrainCircuit, CheckCircle2, Activity, Zap } from "lucide-react";

// Live Telemetry Latency Readout Jitter Component (data-jitterTick)
export const LatencyReadout: React.FC<{ base?: number }> = ({ base = 18 }) => {
  const [value, setValue] = useState(base);

  useEffect(() => {
    const id = setInterval(() => {
      setValue(base + Math.round((Math.random() - 0.5) * 6)); // jitters ±3ms
    }, 1800);
    return () => clearInterval(id);
  }, [base]);

  return <span className="tabular-nums text-[#39ff88] font-bold">{value}ms</span>;
};

interface NodeItem {
  id: string;
  title: string;
  subTitle: string;
  category: string;
  icon: React.ReactNode;
  baseLatency: number;
  status: string;
}

const NODES: NodeItem[] = [
  { id: "client", title: "CLIENT", subTitle: "Next.js 14 App Router", category: "FRONTEND", icon: <Layout className="w-4 h-4 text-[#39ff88]" />, baseLatency: 14, status: "Active 200 OK" },
  { id: "api", title: "API GATEWAY", subTitle: "Node.js REST Gateway", category: "ROUTING", icon: <Server className="w-4 h-4 text-[#39ff88]" />, baseLatency: 18, status: "Latency Nominal" },
  { id: "backend", title: "BACKEND", subTitle: "Java Spring Boot Service", category: "LOGIC", icon: <Code2 className="w-4 h-4 text-[#39ff88]" />, baseLatency: 21, status: "99.9% Uptime" },
  { id: "database", title: "DATABASE", subTitle: "PostgreSQL / Mongo Atlas", category: "STORAGE", icon: <Database className="w-4 h-4 text-[#39ff88]" />, baseLatency: 16, status: "Indexed" },
  { id: "aiml", title: "AI / ML", subTitle: "Python / XGBoost Inference", category: "INFERENCE", icon: <BrainCircuit className="w-4 h-4 text-[#39ff88]" />, baseLatency: 32, status: "Ready" },
  { id: "output", title: "OUTPUT", subTitle: "Real-time Telemetry UI", category: "RESULT", icon: <CheckCircle2 className="w-4 h-4 text-[#39ff88]" />, baseLatency: 8, status: "Live Production" },
];

export const HeroSystemArchitecture: React.FC = () => {
  const [activeNode, setActiveNode] = useState<NodeItem>(NODES[0]);

  return (
    <div className="w-full max-w-5xl mx-auto mt-12 p-6 sm:p-8 rounded-3xl bg-[#0d0d0d] border border-white/10 relative overflow-hidden shadow-2xl font-mono">
      {/* Background Fine Grid */}
      <div className="absolute inset-0 bg-terminal-grid opacity-30 pointer-events-none" />

      {/* Telemetry Header with Dynamic Jitter Readout */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10 relative z-10 text-xs">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#39ff88] animate-ping" />
          <span className="font-bold text-white tracking-wider uppercase flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#39ff88]" />
            SYSTEM ARCHITECTURE TELEMETRY
          </span>
        </div>
        <div className="flex items-center gap-4 text-[#737373]">
          <span>STATUS: <strong className="text-[#39ff88]">● SYSTEM ONLINE</strong></span>
          <span className="hidden sm:inline">AVG LATENCY: <LatencyReadout base={18} /></span>
        </div>
      </div>

      {/* Interactive System Flow Map */}
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
                  ? "bg-[#141414] border-[#39ff88] shadow-lg shadow-[#39ff88]/10 ring-1 ring-[#39ff88]/30"
                  : "bg-[#050505] border-white/10 hover:border-white/20"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-xl bg-[#0d0d0d] border border-white/10">
                    {node.icon}
                  </div>
                  <span className="text-[10px] text-[#737373]">0{index + 1}</span>
                </div>
                <div className="text-xs font-extrabold text-white truncate">{node.title}</div>
                <div className="text-[10px] text-[#737373] truncate">{node.subTitle}</div>
              </div>

              <div className="flex items-center justify-between text-[10px] pt-2 border-t border-white/5">
                <LatencyReadout base={node.baseLatency} />
                <span className="text-[9px] text-[#737373] uppercase">{node.category}</span>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Active Node Detail Snippet Panel */}
      <div className="p-4 rounded-2xl bg-[#050505] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10 text-xs">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-[#39ff88]/10 border border-[#39ff88]/30 text-[#39ff88]">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] text-[#737373] font-bold uppercase tracking-wider block">
              ACTIVE PROTOCOL INSPECTION
            </span>
            <span className="font-extrabold text-white">{activeNode.title} — {activeNode.subTitle}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-right">
          <div>
            <span className="text-[10px] text-[#737373] block">REAL-TIME LATENCY</span>
            <LatencyReadout base={activeNode.baseLatency} />
          </div>
          <div className="pl-4 border-l border-white/10">
            <span className="text-[10px] text-[#737373] block">NODE STATUS</span>
            <span className="font-bold text-white">{activeNode.status}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
