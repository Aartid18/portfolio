"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Layout, Server, Code2, Database, BrainCircuit, CheckCircle2, Activity, Zap } from "lucide-react";

export const LatencyReadout: React.FC<{ base?: number }> = ({ base = 18 }) => {
  const [value, setValue] = useState(base);

  useEffect(() => {
    const id = setInterval(() => {
      setValue(base + Math.round((Math.random() - 0.5) * 6));
    }, 1800);
    return () => clearInterval(id);
  }, [base]);

  return <span className="tabular-data text-[#3ef281] font-bold">{value}ms</span>;
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
  { id: "client", title: "CLIENT", subTitle: "Next.js 14 App Router", category: "FRONTEND", icon: <Layout className="w-4 h-4 text-[#3ef281]" />, baseLatency: 14, status: "Active 200 OK" },
  { id: "api", title: "API GATEWAY", subTitle: "Node.js REST Gateway", category: "ROUTING", icon: <Server className="w-4 h-4 text-[#3ef281]" />, baseLatency: 18, status: "Latency Nominal" },
  { id: "backend", title: "BACKEND", subTitle: "Java Spring Boot Service", category: "LOGIC", icon: <Code2 className="w-4 h-4 text-[#3ef281]" />, baseLatency: 21, status: "99.9% Uptime" },
  { id: "database", title: "DATABASE", subTitle: "PostgreSQL / Mongo Atlas", category: "STORAGE", icon: <Database className="w-4 h-4 text-[#3ef281]" />, baseLatency: 16, status: "Indexed" },
  { id: "aiml", title: "AI / ML", subTitle: "Python / XGBoost Inference", category: "INFERENCE", icon: <BrainCircuit className="w-4 h-4 text-[#3ef281]" />, baseLatency: 32, status: "Ready" },
  { id: "output", title: "OUTPUT", subTitle: "Real-time Telemetry UI", category: "RESULT", icon: <CheckCircle2 className="w-4 h-4 text-[#3ef281]" />, baseLatency: 8, status: "Live Production" },
];

export const HeroSystemArchitecture: React.FC = () => {
  const [activeNode, setActiveNode] = useState<NodeItem>(NODES[0]);

  return (
    <div className="w-full max-w-5xl mx-auto mt-12 p-6 sm:p-8 rounded-3xl bg-[#131513] border border-white/10 relative overflow-hidden shadow-2xl font-mono">
      {/* Background Fine Grid */}
      <div className="absolute inset-0 bg-tech-mesh opacity-25 pointer-events-none" />

      {/* Telemetry Header with Breathing Green Pulse Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10 relative z-10 text-xs">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#3ef281] animate-ping" />
          <span className="font-bold text-white tracking-wider uppercase flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#3ef281]" />
            SYSTEM ARCHITECTURE TELEMETRY
          </span>
        </div>
        <div className="flex items-center gap-4 text-[#8a938a]">
          <div className="flex items-center gap-2">
            <span>STATUS: <strong className="text-[#3ef281]">● SYSTEM ONLINE</strong></span>
            {/* Continuous Breathing Opacity Green Pulse Bar */}
            <span className="w-12 h-1 bg-[#3ef281] rounded-full animate-pulse-breath inline-block ml-1" />
          </div>
          <span className="hidden sm:inline">AVG LATENCY: <LatencyReadout base={18} /></span>
        </div>
      </div>

      {/* System Flow Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3.5 relative z-10 mb-6">
        {NODES.map((node, index) => {
          const isActive = activeNode.id === node.id;
          return (
            <React.Fragment key={node.id}>
              <motion.button
                onClick={() => setActiveNode(node)}
                data-cursor="VIEW"
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between h-36 min-h-[44px] relative cursor-pointer ${
                  isActive
                    ? "bg-[#171917] border-[#3ef281] shadow-lg shadow-[#3ef281]/10 ring-1 ring-[#3ef281]/30"
                    : "bg-[#0a0b0a] border-white/10 hover:border-white/20"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 rounded-xl bg-[#131513] border border-white/10">
                      {node.icon}
                    </div>
                    <span className="text-[10px] text-[#a3aca3]">0{index + 1}</span>
                  </div>
                  <div className="text-xs font-extrabold text-white truncate">{node.title}</div>
                  <div className="text-[10px] text-[#a3aca3] truncate">{node.subTitle}</div>
                </div>

                <div className="flex items-center justify-between text-[10px] pt-2 border-t border-white/5">
                  <LatencyReadout base={node.baseLatency} />
                  <span className="text-[9px] text-[#a3aca3] uppercase">{node.category}</span>
                </div>
              </motion.button>
              {/* Vertical Step Connector for Mobile 1-Column View */}
              {index < NODES.length - 1 && (
                <div className="md:hidden flex justify-center -my-1 text-[#3ef281]/60 text-xs">
                  ↓
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Active Node Detail Snippet Panel */}
      <div className="p-4 rounded-2xl bg-[#0a0b0a] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10 text-xs">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-[#3ef281]/10 border border-[#3ef281]/30 text-[#3ef281]">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] text-[#8a938a] font-bold uppercase tracking-wider block">
              ACTIVE PROTOCOL INSPECTION
            </span>
            <span className="font-extrabold text-white">{activeNode.title} — {activeNode.subTitle}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-right">
          <div>
            <span className="text-[10px] text-[#8a938a] block">REAL-TIME LATENCY</span>
            <LatencyReadout base={activeNode.baseLatency} />
          </div>
          <div className="pl-4 border-l border-white/10">
            <span className="text-[10px] text-[#8a938a] block">NODE STATUS</span>
            <span className="font-bold text-white">{activeNode.status}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
