"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  PieChart,
  BarChart3,
  Radar,
  Activity,
  Zap,
} from "lucide-react";

// Stack Pie Chart Category Breakdown Data
const PIE_SECTORS = [
  { label: "Frontend", percent: 35, color: "#00f0ff", count: "React, Next.js, TS" },
  { label: "Backend", percent: 30, color: "#5fa04e", count: "Node.js, Java, Spring" },
  { label: "AI & ML", percent: 20, color: "#ff007f", count: "Python, XGBoost" },
  { label: "Databases", percent: 15, color: "#4169e1", count: "Postgres, MongoDB" },
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

export const StackVisualCharts: React.FC = () => {
  const [hoveredPieSector, setHoveredPieSector] = useState<string | null>(null);
  const [telemetryJitter, setTelemetryJitter] = useState({ api: 14, ml: 42, db: 8 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetryJitter({
        api: 13 + Math.floor(Math.random() * 3),
        ml: 40 + Math.floor(Math.random() * 5),
        db: 7 + Math.floor(Math.random() * 3),
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

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
    <div className="w-full max-w-6xl mx-auto p-6 sm:p-10 rounded-3xl bg-[#0a0c0a] border border-[#39ff88]/20 shadow-2xl relative font-mono overflow-hidden space-y-8">
      {/* Background Glow Mesh */}
      <div className="absolute inset-0 bg-tech-mesh opacity-20 pointer-events-none z-0" />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#39ff88]/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#00f0ff]/10 blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Activity className="w-4 h-4 text-[#39ff88] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#39ff88]">
              REAL-TIME VISUAL CHARTS & SYSTEM TELEMETRY
            </span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-display">
            Engineering Visual Dashboard
          </h3>
        </div>
        <div className="px-3.5 py-1.5 rounded-full bg-[#131513] border border-[#39ff88]/30 text-[11px] font-bold text-[#39ff88] flex items-center gap-2">
          <Zap className="w-3.5 h-3.5" />
          <span>INTERACTIVE CHARTS</span>
        </div>
      </div>

      {/* VISUAL CHARTS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
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
                  {hoveredPieSector ? hoveredPieSector : "Full Stack"}
                </span>
                <span className="text-[10px] font-bold text-[#39ff88] uppercase tracking-wider">
                  {hoveredPieSector
                    ? `${PIE_SECTORS.find((s) => s.label === hoveredPieSector)?.percent}%`
                    : "Distribution"}
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
                    <span className="font-mono text-white font-black">
                      {m.label.includes("API")
                        ? `${telemetryJitter.api}ms`
                        : m.label.includes("ML")
                        ? `${telemetryJitter.ml}ms`
                        : m.label.includes("DB")
                        ? `${telemetryJitter.db}ms`
                        : m.val}
                    </span>
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
  );
};

export default StackVisualCharts;
