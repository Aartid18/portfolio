"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Code2,
  Layers,
  Terminal,
  Server,
  Coffee,
  Database,
  Brain,
  ShieldCheck,
  FileCode2,
  Cpu,
  Zap,
  Activity,
  CheckCircle2,
  GitBranch,
  PieChart,
  BarChart3,
  Radar,
  Gauge,
  TrendingUp,
} from "lucide-react";
import { MagneticButton } from "./MagneticButton";

interface TechNode {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "AI / ML" | "Database";
  description: string;
  proficiency: number;
  brandColor: string;
  icon: React.ElementType;
  role: string;
  ecosystem: string[];
  projectsUsed: string[];
  coords: { x: number; y: number };
}

const TECH_NODES: TechNode[] = [
  {
    id: "react",
    name: "React",
    category: "Frontend",
    description: "Component-driven reactive UI architecture with state management & custom hooks.",
    proficiency: 95,
    brandColor: "#00f0ff",
    icon: Code2,
    role: "Client Layer & Component Architecture",
    ecosystem: ["Hooks", "Zustand", "Context API", "Virtual DOM", "Framer Motion"],
    projectsUsed: ["AI Job Platform", "CineMind", "AI E-Commerce"],
    coords: { x: 10, y: 30 },
  },
  {
    id: "nextjs",
    name: "Next.js 14",
    category: "Frontend",
    description: "App Router SSG/SSR web applications with server components & optimized routing.",
    proficiency: 92,
    brandColor: "#ffffff",
    icon: Layers,
    role: "Full-Stack Server Rendering & Routing",
    ecosystem: ["App Router", "Server Components", "API Routes", "SEO Optimization"],
    projectsUsed: ["AI Job Platform", "CineMind", "Portfolio"],
    coords: { x: 30, y: 20 },
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Frontend",
    description: "Strict static typing, interfaces, and generic utility types across frontend & backend.",
    proficiency: 92,
    brandColor: "#3178c6",
    icon: FileCode2,
    role: "Type Safety & Contract Specs",
    ecosystem: ["Generics", "Strict Null Checks", "Interfaces", "Decorators"],
    projectsUsed: ["CineMind", "Portfolio", "AI E-Commerce"],
    coords: { x: 50, y: 25 },
  },
  {
    id: "python",
    name: "Python",
    category: "AI / ML",
    description: "Data modeling, statistical analysis, feature engineering, and ML model pipelines.",
    proficiency: 90,
    brandColor: "#3776ab",
    icon: Terminal,
    role: "AI/ML Modeling & Data Analytics",
    ecosystem: ["Pandas", "NumPy", "Scikit-Learn", "XGBoost", "SciPy"],
    projectsUsed: ["FraudShield", "CineMind"],
    coords: { x: 70, y: 20 },
  },
  {
    id: "ml",
    name: "Machine Learning",
    category: "AI / ML",
    description: "Supervised classification, TF-IDF vector similarity, and predictive inference engines.",
    proficiency: 88,
    brandColor: "#ff007f",
    icon: Brain,
    role: "Predictive Analytics & Similarity Matrix",
    ecosystem: ["XGBoost", "TF-IDF Vectorizer", "Classification", "Confusion Matrix"],
    projectsUsed: ["FraudShield", "CineMind"],
    coords: { x: 90, y: 30 },
  },
  {
    id: "sql",
    name: "SQL / Postgres",
    category: "Database",
    description: "Relational database schema design, indexing, foreign keys, and analytical queries.",
    proficiency: 90,
    brandColor: "#4169e1",
    icon: Database,
    role: "Relational Data Modeling & Queries",
    ecosystem: ["PostgreSQL", "ACID Transactions", "Indexing", "Join Tuning"],
    projectsUsed: ["CineMind", "AI Job Platform"],
    coords: { x: 15, y: 75 },
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Database",
    description: "NoSQL document store, JSON schema indexing, and aggregation pipelines.",
    proficiency: 86,
    brandColor: "#39ff88",
    icon: Database,
    role: "Document Storage & Aggregation",
    ecosystem: ["Mongoose", "Aggregation Pipeline", "Document Indexing"],
    projectsUsed: ["AI Job Platform", "AI E-Commerce"],
    coords: { x: 35, y: 80 },
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    description: "Asynchronous event-driven REST API gateways and backend microservice orchestration.",
    proficiency: 88,
    brandColor: "#5fa04e",
    icon: Server,
    role: "REST API Gateway & Microservices",
    ecosystem: ["Express", "JWT Auth", "Event Loop", "Streams", "Middleware"],
    projectsUsed: ["AI Job Platform", "AI E-Commerce", "Secure Print"],
    coords: { x: 55, y: 75 },
  },
  {
    id: "java",
    name: "Java",
    category: "Backend",
    description: "Object-oriented backend software design, multi-threading, and enterprise services.",
    proficiency: 85,
    brandColor: "#ed8b00",
    icon: Coffee,
    role: "Enterprise OOP & Microservice Logic",
    ecosystem: ["OOP Principles", "Multi-Threading", "Maven", "Collections API"],
    projectsUsed: ["AI Job Platform"],
    coords: { x: 75, y: 80 },
  },
  {
    id: "springboot",
    name: "Spring Boot",
    category: "Backend",
    description: "Enterprise Java backend framework for REST APIs, dependency injection, and JPA.",
    proficiency: 84,
    brandColor: "#6db33f",
    icon: ShieldCheck,
    role: "Enterprise Service Architecture",
    ecosystem: ["Spring Security", "Spring Data JPA", "REST Controllers", "Maven"],
    projectsUsed: ["AI Job Platform"],
    coords: { x: 90, y: 75 },
  },
];

// Stack Pie Chart Category Breakdown Data
const PIE_SECTORS = [
  { label: "Frontend", percent: 35, color: "#00f0ff", count: "3 Techs" },
  { label: "Backend", percent: 30, color: "#5fa04e", count: "3 Techs" },
  { label: "AI & ML", percent: 20, color: "#ff007f", count: "2 Techs" },
  { label: "Databases", percent: 15, color: "#4169e1", count: "2 Techs" },
];

// Latency & Throughput Telemetry Bar Metrics
const PERFORMANCE_METRICS = [
  { label: "REST API Latency", val: "14ms", pct: 95, color: "#39ff88", desc: "Sub-20ms Nominal Response" },
  { label: "ML Model Inference", val: "42ms", pct: 88, color: "#ff007f", desc: "XGBoost Classification" },
  { label: "DB Query Execution", val: "8ms", pct: 98, color: "#00f0ff", desc: "Indexed Postgres Queries" },
  { label: "System Availability", val: "99.9%", pct: 99.9, color: "#4169e1", desc: "Production SLA Uptime" },
];

// 6-Axis Radar Competency Dimension Metrics
const RADAR_DIMENSIONS = [
  { label: "Full-Stack UI", val: 95, angle: 0 },
  { label: "AI / ML Engine", val: 88, angle: 60 },
  { label: "Data Analytics", val: 90, angle: 120 },
  { label: "REST Gateway", val: 92, angle: 180 },
  { label: "Database Infra", val: 88, angle: 240 },
  { label: "Architecture", val: 94, angle: 300 },
];

export const TechConstellation: React.FC = () => {
  const [activeTech, setActiveTech] = useState<TechNode>(TECH_NODES[0]);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [hoveredPieSector, setHoveredPieSector] = useState<string | null>(null);

  // Radar Polygon Points Calculation
  const radarCenter = 110;
  const maxRadius = 80;
  const getRadarCoords = (val: number, angleDeg: number) => {
    const rad = (angleDeg - 90) * (Math.PI / 180);
    const r = (val / 100) * maxRadius;
    const x = radarCenter + r * Math.cos(rad);
    const y = radarCenter + r * Math.sin(rad);
    return { x, y };
  };

  const radarPointsString = RADAR_DIMENSIONS.map((d) => {
    const pt = getRadarCoords(d.val, d.angle);
    return `${pt.x},${pt.y}`;
  }).join(" ");

  return (
    <div className="w-full max-w-6xl mx-auto p-6 sm:p-10 rounded-3xl bg-[#0a0c0a] border border-[#39ff88]/20 shadow-2xl relative font-mono overflow-hidden space-y-12">
      {/* Ambient Radial Lighting */}
      <div className="absolute inset-0 bg-tech-mesh opacity-20 pointer-events-none z-0" />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#39ff88]/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#00f0ff]/10 blur-[120px] pointer-events-none" />

      {/* Header Readout */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Activity className="w-4 h-4 text-[#39ff88] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#39ff88]">
              INTERACTIVE ECOSYSTEM & METRICS DASHBOARD
            </span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-display">
            Engineering Visual Constellation
          </h3>
        </div>
        <div className="px-3.5 py-1.5 rounded-full bg-[#131513] border border-[#39ff88]/30 text-[11px] font-bold text-[#39ff88] flex items-center gap-2">
          <Zap className="w-3.5 h-3.5" />
          <span>HOVER / CLICK NODES TO INSPECT</span>
        </div>
      </div>

      {/* Visual Tech Nodes Grid with Animated Glow Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 relative z-10">
        {TECH_NODES.map((node) => {
          const isActive = activeTech.id === node.id;
          const isHovered = hoveredNodeId === node.id;
          const Icon = node.icon;

          return (
            <MagneticButton key={node.id} strength={0.25}>
              <motion.button
                onClick={() => setActiveTech(node)}
                onMouseEnter={() => {
                  setActiveTech(node);
                  setHoveredNodeId(node.id);
                }}
                onMouseLeave={() => setHoveredNodeId(null)}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className={`w-full p-4 rounded-2xl text-left border relative group transition-all duration-300 flex flex-col justify-between h-36 ${
                  isActive || isHovered
                    ? "bg-[#121613] border-[#39ff88] shadow-xl shadow-[#39ff88]/15 ring-1 ring-[#39ff88]/40"
                    : "bg-[#0d0f0d]/90 border-white/10 hover:border-white/25"
                }`}
              >
                {/* Brand Color Ambient Light Bar */}
                <div
                  className="absolute top-0 left-4 right-4 h-1 rounded-b-full transition-all duration-300 opacity-60 group-hover:opacity-100"
                  style={{
                    backgroundColor: node.brandColor,
                    boxShadow: isActive || isHovered ? `0 0 12px ${node.brandColor}` : "none",
                  }}
                />

                {/* Top Row: Icon + Proficiency Gauge */}
                <div className="flex items-center justify-between pt-1">
                  <div
                    className="p-2.5 rounded-xl bg-[#171c18] border border-white/10 group-hover:border-white/30 transition-colors"
                    style={{ color: node.brandColor }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="text-right">
                    <span
                      className="text-xs font-black font-display tracking-tight block"
                      style={{ color: isActive || isHovered ? "#39ff88" : "#8a938a" }}
                    >
                      {node.proficiency}%
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-[#666] font-bold block">
                      MASTER
                    </span>
                  </div>
                </div>

                {/* Bottom Row: Name + Category */}
                <div>
                  <div className="text-sm font-black text-white font-display tracking-tight group-hover:text-[#39ff88] transition-colors flex items-center gap-1.5">
                    <span>{node.name}</span>
                  </div>
                  <div className="text-[10px] font-bold text-[#8a938a] uppercase tracking-wider mt-0.5">
                    {node.category}
                  </div>
                </div>
              </motion.button>
            </MagneticButton>
          );
        })}
      </div>

      {/* Visual Live Telemetry & Inspector Dashboard Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTech.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="p-6 sm:p-8 rounded-2xl bg-[#0e110e] border border-[#39ff88]/30 relative z-10 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Column 1: Core Specs & Role */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <div
                  className="p-3 rounded-xl bg-[#171c18] border border-white/15 shadow-inner"
                  style={{ color: activeTech.brandColor }}
                >
                  <activeTech.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xl sm:text-2xl font-black text-white font-display tracking-tight">
                      {activeTech.name}
                    </h4>
                    <span
                      className="px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border"
                      style={{
                        borderColor: `${activeTech.brandColor}50`,
                        color: activeTech.brandColor,
                        backgroundColor: `${activeTech.brandColor}15`,
                      }}
                    >
                      {activeTech.category}
                    </span>
                  </div>
                  <p className="text-xs text-[#39ff88] font-bold tracking-wide mt-0.5">
                    [ ROLE: {activeTech.role} ]
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#c2cbd2] leading-relaxed font-sans font-normal">
                {activeTech.description}
              </p>

              {/* Visual Proficiency Meter */}
              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-[#8a938a] uppercase tracking-wider">PRODUCTION PROFICIENCY LEVEL</span>
                  <span className="text-[#39ff88]">{activeTech.proficiency}% READY</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#171c18] border border-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${activeTech.proficiency}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{
                      backgroundColor: "#39ff88",
                      boxShadow: "0 0 10px rgba(57, 255, 20, 0.8)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Column 2: Ecosystem Libraries & Applied Projects */}
            <div className="lg:col-span-6 space-y-6 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
              {/* Ecosystem & Sub-tools */}
              <div>
                <span className="text-[10px] font-bold text-[#8a938a] uppercase tracking-widest block mb-2.5 flex items-center gap-1.5">
                  <GitBranch className="w-3.5 h-3.5 text-[#39ff88]" />
                  ECOSYSTEM & CORE LIBRARIES
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeTech.ecosystem.map((lib) => (
                    <span
                      key={lib}
                      className="px-3 py-1 rounded-lg bg-[#141915] border border-white/10 text-white text-xs font-semibold hover:border-[#39ff88] transition-colors flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#39ff88]" />
                      <span>{lib}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Applied Production Projects */}
              <div>
                <span className="text-[10px] font-bold text-[#8a938a] uppercase tracking-widest block mb-2.5 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#39ff88]" />
                  APPLIED IN LIVE PRODUCTION SYSTEMS
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeTech.projectsUsed.map((proj) => (
                    <span
                      key={proj}
                      className="px-3.5 py-1.5 rounded-xl bg-[#1b221d] border border-[#39ff88]/40 text-[#39ff88] text-xs font-bold shadow-md hover:scale-105 transition-transform"
                    >
                      {proj}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* NEW: VISUAL ANALYTICS & INTERACTIVE CHARTS DASHBOARD */}
      <div className="pt-8 border-t border-white/10 relative z-10">
        <div className="flex items-center gap-2 mb-6">
          <PieChart className="w-4 h-4 text-[#39ff88]" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#39ff88]">
            REAL-TIME VISUAL CHARTS & SYSTEM TELEMETRY
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* CHART 1: Interactive Stack Distribution Donut/Pie Chart */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#0e110e] border border-white/10 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-extrabold text-white font-display flex items-center gap-2">
                  <PieChart className="w-4 h-4 text-[#00f0ff]" />
                  <span>Stack Ratio</span>
                </span>
                <span className="text-[10px] font-bold text-[#39ff88] px-2 py-0.5 rounded-full bg-[#39ff88]/10 border border-[#39ff88]/30">
                  PIE CHART
                </span>
              </div>

              {/* SVG Donut Chart */}
              <div className="relative w-44 h-44 mx-auto my-4 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
                  {/* Sector 1: Frontend (35%) */}
                  <circle
                    cx="80"
                    cy="80"
                    r="60"
                    fill="none"
                    stroke="#00f0ff"
                    strokeWidth="20"
                    strokeDasharray="131.9 377"
                    strokeDashoffset="0"
                    className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                    onMouseEnter={() => setHoveredPieSector("Frontend")}
                    onMouseLeave={() => setHoveredPieSector(null)}
                  />
                  {/* Sector 2: Backend (30%) */}
                  <circle
                    cx="80"
                    cy="80"
                    r="60"
                    fill="none"
                    stroke="#5fa04e"
                    strokeWidth="20"
                    strokeDasharray="113.1 377"
                    strokeDashoffset="-131.9"
                    className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                    onMouseEnter={() => setHoveredPieSector("Backend")}
                    onMouseLeave={() => setHoveredPieSector(null)}
                  />
                  {/* Sector 3: AI & ML (20%) */}
                  <circle
                    cx="80"
                    cy="80"
                    r="60"
                    fill="none"
                    stroke="#ff007f"
                    strokeWidth="20"
                    strokeDasharray="75.4 377"
                    strokeDashoffset="-245.0"
                    className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                    onMouseEnter={() => setHoveredPieSector("AI & ML")}
                    onMouseLeave={() => setHoveredPieSector(null)}
                  />
                  {/* Sector 4: Databases (15%) */}
                  <circle
                    cx="80"
                    cy="80"
                    r="60"
                    fill="none"
                    stroke="#4169e1"
                    strokeWidth="20"
                    strokeDasharray="56.5 377"
                    strokeDashoffset="-320.4"
                    className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                    onMouseEnter={() => setHoveredPieSector("Databases")}
                    onMouseLeave={() => setHoveredPieSector(null)}
                  />
                </svg>

                {/* Center Donut Readout */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                  <span className="text-xl font-black text-white font-display">
                    {hoveredPieSector ? hoveredPieSector : "10 Techs"}
                  </span>
                  <span className="text-[10px] font-bold text-[#39ff88] uppercase tracking-wider">
                    {hoveredPieSector
                      ? `${PIE_SECTORS.find((s) => s.label === hoveredPieSector)?.percent}%`
                      : "Ecosystem"}
                  </span>
                </div>
              </div>

              {/* Pie Legend */}
              <div className="grid grid-cols-2 gap-2 text-xs pt-2">
                {PIE_SECTORS.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center gap-2 p-1.5 rounded-lg bg-[#141915] border border-white/5"
                    onMouseEnter={() => setHoveredPieSector(s.label)}
                    onMouseLeave={() => setHoveredPieSector(null)}
                  >
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
                    <span className="text-[#c2cbd2] text-[11px] font-bold truncate">{s.label}</span>
                    <span className="text-white text-[11px] font-black ml-auto">{s.percent}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CHART 2: Latency & System Telemetry Performance Bar Chart */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#0e110e] border border-white/10 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-extrabold text-white font-display flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#39ff88]" />
                  <span>Runtime Latency</span>
                </span>
                <span className="text-[10px] font-bold text-[#39ff88] px-2 py-0.5 rounded-full bg-[#39ff88]/10 border border-[#39ff88]/30">
                  BAR CHART
                </span>
              </div>

              <div className="space-y-4 my-2">
                {PERFORMANCE_METRICS.map((m) => (
                  <div key={m.label} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-[#c2cbd2] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: m.color }} />
                        <span>{m.label}</span>
                      </span>
                      <span className="font-mono text-white font-black">{m.val}</span>
                    </div>

                    <div className="w-full h-2.5 rounded-full bg-[#171c18] border border-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${m.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{
                          backgroundColor: m.color,
                          boxShadow: `0 0 8px ${m.color}`,
                        }}
                      />
                    </div>
                    <span className="text-[9px] text-[#666] font-semibold block text-right">
                      {m.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CHART 3: Hexagonal Skill Radar & Dimension Matrix Chart */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#0e110e] border border-white/10 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-extrabold text-white font-display flex items-center gap-2">
                  <Radar className="w-4 h-4 text-[#ff007f]" />
                  <span>Competency Radar</span>
                </span>
                <span className="text-[10px] font-bold text-[#39ff88] px-2 py-0.5 rounded-full bg-[#39ff88]/10 border border-[#39ff88]/30">
                  RADAR CHART
                </span>
              </div>

              {/* SVG Hexagonal Radar Graph */}
              <div className="relative w-52 h-52 mx-auto my-2 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 220 220">
                  {/* Concentric Grid Rings */}
                  {[0.25, 0.5, 0.75, 1].map((scale, i) => {
                    const gridPts = RADAR_DIMENSIONS.map((d) => {
                      const pt = getRadarCoords(100 * scale, d.angle);
                      return `${pt.x},${pt.y}`;
                    }).join(" ");

                    return (
                      <polygon
                        key={i}
                        points={gridPts}
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.1)"
                        strokeWidth="1"
                        strokeDasharray={scale === 1 ? "none" : "2 2"}
                      />
                    );
                  })}

                  {/* Axis Radial Lines */}
                  {RADAR_DIMENSIONS.map((d, i) => {
                    const pt = getRadarCoords(100, d.angle);
                    return (
                      <line
                        key={i}
                        x1={radarCenter}
                        y1={radarCenter}
                        x2={pt.x}
                        y2={pt.y}
                        stroke="rgba(255, 255, 255, 0.15)"
                        strokeWidth="1"
                      />
                    );
                  })}

                  {/* Filled Competency Polygon */}
                  <motion.polygon
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    points={radarPointsString}
                    fill="rgba(57, 255, 20, 0.25)"
                    stroke="#39ff88"
                    strokeWidth="2"
                    style={{ filter: "drop-shadow(0 0 8px rgba(57, 255, 20, 0.6))" }}
                  />

                  {/* Radar Vertex Dots */}
                  {RADAR_DIMENSIONS.map((d, i) => {
                    const pt = getRadarCoords(d.val, d.angle);
                    return (
                      <circle
                        key={i}
                        cx={pt.x}
                        cy={pt.y}
                        r="3.5"
                        fill="#39ff88"
                        stroke="#0e110e"
                        strokeWidth="1.5"
                      />
                    );
                  })}
                </svg>
              </div>

              {/* Radar Dimension Labels Grid */}
              <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] pt-1">
                {RADAR_DIMENSIONS.map((d) => (
                  <div key={d.label} className="p-1 rounded-md bg-[#141915] border border-white/5">
                    <span className="text-[#8a938a] block text-[9px] font-bold uppercase truncate">{d.label}</span>
                    <span className="text-[#39ff88] font-extrabold">{d.val}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechConstellation;
