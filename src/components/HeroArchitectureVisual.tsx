"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Layout, Server, Database, BrainCircuit, CheckCircle2, Terminal, ArrowRight, Zap, Code2 } from "lucide-react";

interface NodeData {
  id: string;
  title: string;
  subTitle: string;
  category: string;
  icon: React.ReactNode;
  color: string;
  accentBorder: string;
  codeSnippet: string;
  status: string;
}

const NODES: NodeData[] = [
  {
    id: "frontend",
    title: "Client Application",
    subTitle: "Next.js 14 / React 18",
    category: "FRONTEND LAYER",
    icon: <Layout className="w-5 h-5 text-cyan-400" />,
    color: "from-cyan-500/20 via-blue-500/10 to-transparent",
    accentBorder: "border-cyan-400/50",
    codeSnippet: "const client = useAppRouter(); // SSG + Client State",
    status: "Active 200 OK",
  },
  {
    id: "api",
    title: "API Gateway",
    subTitle: "REST Microservices",
    category: "ROUTING & SECURITY",
    icon: <Server className="w-5 h-5 text-blue-400" />,
    color: "from-blue-500/20 via-indigo-500/10 to-transparent",
    accentBorder: "border-blue-400/50",
    codeSnippet: "app.use('/api/v1', authMiddleware, rateLimiter);",
    status: "Latency 18ms",
  },
  {
    id: "backend",
    title: "Backend Core",
    subTitle: "Node.js / Spring Boot",
    category: "LOGIC EXECUTION",
    icon: <Code2 className="w-5 h-5 text-indigo-400" />,
    color: "from-indigo-500/20 via-purple-500/10 to-transparent",
    accentBorder: "border-indigo-400/50",
    codeSnippet: "@RestController @RequestMapping('/service')",
    status: "99.9% Uptime",
  },
  {
    id: "database",
    title: "Data Persistence",
    subTitle: "PostgreSQL / MongoDB",
    category: "STORAGE LAYER",
    icon: <Database className="w-5 h-5 text-emerald-400" />,
    color: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accentBorder: "border-emerald-400/50",
    codeSnippet: "prisma.movie.findMany({ where: { vectorMatch } });",
    status: "Indexed",
  },
  {
    id: "aiml",
    title: "Applied AI / ML",
    subTitle: "Python / XGBoost / Flask",
    category: "INFERENCE PIPELINE",
    icon: <BrainCircuit className="w-5 h-5 text-pink-400" />,
    color: "from-pink-500/20 via-purple-500/10 to-transparent",
    accentBorder: "border-pink-400/50",
    codeSnippet: "risk_score = xgb_model.predict_proba(features)[0]",
    status: "Inference Ready",
  },
  {
    id: "result",
    title: "Interactive Output",
    subTitle: "Real-time Telemetry UI",
    category: "PRODUCTION RESULT",
    icon: <CheckCircle2 className="w-5 h-5 text-emerald-300" />,
    color: "from-emerald-400/20 via-cyan-500/10 to-transparent",
    accentBorder: "border-emerald-400/60",
    codeSnippet: "{ status: 'success', matchScore: 94.8 }",
    status: "Live Production",
  },
];

export const HeroArchitectureVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState<NodeData>(NODES[0]);

  return (
    <div className="w-full max-w-5xl mx-auto mt-12 p-6 sm:p-8 rounded-3xl glass-panel border-slate-700/80 shadow-2xl relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-700/80">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono font-bold text-cyan-400">
            <Terminal className="w-3.5 h-3.5" />
            SYSTEM_ARCHITECTURE.svg
          </div>
          <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">
            Full-Stack + Applied AI Flow Diagram
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono font-semibold text-slate-300">Live Interactive System</span>
        </div>
      </div>

      {/* Interactive System Flow Map */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3.5 relative z-10 mb-8">
        {NODES.map((node, index) => {
          const isActive = activeNode.id === node.id;
          return (
            <motion.button
              key={node.id}
              onClick={() => setActiveNode(node)}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-4 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between h-36 relative ${
                isActive
                  ? `bg-slate-900 ${node.accentBorder} shadow-xl shadow-cyan-950/50 ring-2 ring-cyan-400/40`
                  : "bg-slate-900/60 border-slate-700/70 hover:border-slate-600 hover:bg-slate-900/90"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800">
                    {node.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400">
                    0{index + 1}
                  </span>
                </div>
                <div className="text-xs font-bold text-white truncate">{node.title}</div>
                <div className="text-[10px] font-medium text-slate-400 truncate">{node.subTitle}</div>
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono pt-2 border-t border-slate-800">
                <span className="text-cyan-400/90 font-semibold truncate">{node.status}</span>
                {index < NODES.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-slate-500 hidden lg:block" />
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Active Node Detail Snippet Panel */}
      <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-700/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5" />
            <span>{activeNode.category}</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">{activeNode.title}</span>
          </div>
          <div className="text-xs text-slate-300 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-200">
            <code>{activeNode.codeSnippet}</code>
          </div>
        </div>

        <div className="text-right shrink-0">
          <span className="text-[11px] font-semibold text-slate-400 block">System Protocol</span>
          <span className="text-xs font-bold text-emerald-400">{activeNode.status}</span>
        </div>
      </div>
    </div>
  );
};
