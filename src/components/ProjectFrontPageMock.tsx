"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldAlert, Sparkles, Film, Lock, Activity, Search, ShoppingBag, CreditCard, ChevronRight } from "lucide-react";

interface ProjectFrontPageMockProps {
  projectId: string;
  accentColor: string;
}

export const ProjectFrontPageMock: React.FC<ProjectFrontPageMockProps> = ({ projectId, accentColor }) => {
  // 1. AI Job Portal (Replicating exact screenshot: "Your Career Operating System")
  if (projectId === "ai-job-platform") {
    return (
      <div className="w-full h-52 sm:h-60 rounded-2xl bg-[#090a10] border border-white/10 p-4 font-sans flex flex-col justify-between relative overflow-hidden group-hover:border-[#8b5cf6]/60 transition-all duration-300">
        {/* Purple Background Ambient Glow & Node Constellation */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#121026] via-[#090a10] to-[#05060a] pointer-events-none" />
        
        {/* Constellation Nodes Visual Graphic */}
        <div className="absolute right-4 top-10 flex flex-col gap-4 opacity-40 pointer-events-none">
          <div className="flex items-center gap-6">
            <span className="w-3 h-3 rounded-full bg-[#8b5cf6] ring-4 ring-[#8b5cf6]/20" />
            <span className="w-2 h-2 rounded-full bg-[#8b5cf6]/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#3ef281]" />
          </div>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/40 to-transparent" />
          <div className="flex items-center justify-end gap-4 pr-2">
            <span className="w-3 h-3 rounded-full bg-[#8b5cf6] ring-4 ring-[#8b5cf6]/20" />
          </div>
        </div>

        {/* Real Navigation Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5 relative z-10">
          <div className="flex items-center gap-2">
            <div className="p-1 rounded-lg bg-[#8b5cf6] text-white">
              <ShoppingBag className="w-3.5 h-3.5" />
            </div>
            <span className="font-extrabold text-white text-xs tracking-tight">AIJobPortal</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[#8a938a]">Sign in</span>
            <span className="px-2.5 py-1 rounded-full bg-[#8b5cf6] text-white text-[10px] font-bold">Join</span>
          </div>
        </div>

        {/* Real Front Page Hero Content */}
        <div className="py-2 space-y-1.5 relative z-10">
          <span className="text-[9px] font-bold uppercase tracking-widest text-[#8b5cf6]">AIJOBPORTAL</span>
          <h4 className="text-base sm:text-lg font-black text-white leading-tight font-display">
            Your Career <span className="text-[#8b5cf6]">Operating System</span>
          </h4>
          <p className="text-[10px] text-[#e9ece7] font-semibold line-clamp-1">
            Understand where you stand. Know which roles fit. Improve with clarity.
          </p>
          <p className="text-[9px] text-[#8a938a] line-clamp-1 font-normal">
            AI-powered career intelligence for job seekers — matching & resume insights.
          </p>
        </div>

        {/* Real CTAs */}
        <div className="pt-2 border-t border-white/10 flex items-center gap-2 relative z-10">
          <span className="px-3 py-1.5 rounded-xl bg-[#8b5cf6] text-white text-[10px] font-bold shadow-md">
            Get started
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-[#131513] border border-white/10 text-white text-[10px] font-semibold">
            Sign in
          </span>
        </div>
      </div>
    );
  }

  // 2. FraudShield AI (Replicating exact screenshot: "FraudShield AI - Risk Analytics")
  if (projectId === "fraud-detection") {
    return (
      <div className="w-full h-52 sm:h-60 rounded-2xl bg-[#060812] border border-white/10 p-4 font-sans flex flex-col justify-between relative overflow-hidden group-hover:border-[#3ef281]/60 transition-all duration-300">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-2 relative z-10">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-[#3ef281]" />
            <span className="font-extrabold text-white text-xs">FraudShield AI</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[#3ef281]/15 text-[#3ef281] text-[9px] font-bold">
            ROC-AUC: 0.859
          </span>
        </div>

        {/* Real Screenshot Telemetry Widgets */}
        <div className="space-y-2 py-1.5 relative z-10">
          <div className="text-[10px] font-bold text-white flex items-center justify-between">
            <span>Executive Risk & Threat Overview</span>
            <span className="text-[#3ef281] text-[9px]">HistGradientBoosting</span>
          </div>

          <div className="grid grid-cols-4 gap-1.5 text-center text-[8px] font-mono">
            <div className="p-1.5 rounded-lg bg-[#0d1021] border border-white/5">
              <span className="text-[#8a938a] block">TOTAL TXNS</span>
              <strong className="text-white text-[10px]">6,500</strong>
            </div>
            <div className="p-1.5 rounded-lg bg-[#0d1021] border border-white/5">
              <span className="text-[#8a938a] block">DETECTED</span>
              <strong className="text-red-400 text-[10px]">920 (14.15%)</strong>
            </div>
            <div className="p-1.5 rounded-lg bg-[#0d1021] border border-white/5">
              <span className="text-[#8a938a] block">AT RISK</span>
              <strong className="text-amber-400 text-[10px]">$815.9K</strong>
            </div>
            <div className="p-1.5 rounded-lg bg-[#0d1021] border border-white/5">
              <span className="text-[#8a938a] block">CLEAN</span>
              <strong className="text-[#3ef281] text-[10px]">5,580</strong>
            </div>
          </div>

          {/* Mini Line Velocity Simulation */}
          <div className="h-10 w-full bg-[#0d1021] rounded-lg p-1.5 flex items-end gap-1 border border-white/5">
            {[35, 45, 30, 55, 40, 60, 42, 50, 65, 38, 48, 58, 30, 52].map((val, idx) => (
              <div key={idx} className="flex-1 bg-sky-500 rounded-t-sm" style={{ height: `${val}%` }} />
            ))}
          </div>
        </div>

        {/* Footer Status */}
        <div className="pt-2 border-t border-white/10 flex justify-between text-[9px] text-[#8a938a] relative z-10">
          <span>Multi-Vector Threat Intelligence</span>
          <span className="text-[#3ef281] font-bold">● Status: Operational</span>
        </div>
      </div>
    );
  }

  // 3. CineMind (Replicating exact screenshot: "Your next obsession, engineered for your taste.")
  if (projectId === "cinemind-movie-rec") {
    return (
      <div className="w-full h-52 sm:h-60 rounded-2xl bg-[#09080d] border border-white/10 p-4 font-sans flex flex-col justify-between relative overflow-hidden group-hover:border-[#ec4899]/60 transition-all duration-300">
        {/* Cinematic Backdrop Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09080d] via-[#150e1d]/80 to-[#09080d] pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-2 relative z-10">
          <div className="flex items-center gap-1.5">
            <Film className="w-4 h-4 text-[#ec4899]" />
            <span className="font-extrabold text-[#ec4899] text-xs">CineMind</span>
          </div>
          <div className="flex items-center gap-2 text-[10px]">
            <span className="text-[#8a938a]">Sign in</span>
            <span className="px-2.5 py-1 rounded-full bg-[#ec4899] text-white font-bold">Get started</span>
          </div>
        </div>

        {/* Hero Content */}
        <div className="py-2 space-y-1 relative z-10">
          <span className="text-[9px] font-bold uppercase tracking-widest text-[#ec4899]">HYBRID AI RECOMMENDATIONS</span>
          <h4 className="text-base sm:text-lg font-black text-white leading-tight font-display">
            Your next obsession, <span className="text-[#ec4899]">engineered</span> for your taste.
          </h4>
          <p className="text-[9px] text-[#8a938a] line-clamp-2">
            Collaborative filtering meets content intelligence — mood-aware picks powered by TMDB.
          </p>
        </div>

        {/* Trending Movie Strip */}
        <div className="pt-2 border-t border-white/10 relative z-10">
          <div className="text-[9px] text-[#8a938a] font-semibold mb-1.5 flex justify-between">
            <span>Trending now</span>
            <span className="text-[#ec4899]">TMDB Live Feed</span>
          </div>
          <div className="grid grid-cols-4 gap-1.5">
            {["BATMAN", "MUTINY", "OBSESSION", "DUNE"].map((title) => (
              <div key={title} className="h-7 rounded-md bg-[#1d1627] border border-white/10 flex items-center justify-center text-[8px] font-bold text-white">
                {title}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 4. AI Commerce (Replicating exact screenshot: "Hardware designed to inspire, built to endure.")
  if (projectId === "ai-ecommerce") {
    return (
      <div className="w-full h-52 sm:h-60 rounded-2xl bg-[#f5f2eb] text-[#1c1917] p-4 font-sans flex flex-col justify-between relative overflow-hidden group-hover:ring-2 group-hover:ring-[#ef4444] transition-all duration-300">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-[#e7e5e4] pb-2 relative z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded-full bg-[#ef4444] text-white flex items-center justify-center text-[9px] font-bold">
              ✦
            </span>
            <span className="font-extrabold text-[#1c1917] text-xs">AI Commerce</span>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-[#ef4444] text-white text-[10px] font-bold">
            Sign In
          </span>
        </div>

        {/* Hero Content */}
        <div className="py-2 space-y-1 relative z-10">
          <span className="text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#e7e5e4] text-[#1c1917] inline-block">
            NEXT-GENERATION HARDWARE STOREFRONT
          </span>
          <h4 className="text-base sm:text-lg font-black text-[#1c1917] leading-tight font-serif">
            Hardware designed to inspire, <span className="text-[#ef4444] italic">built to endure.</span>
          </h4>
          <p className="text-[9px] text-[#57534e] line-clamp-1">
            Curated premium hardware backed by real-time demand radar telemetry & price-drop tracking.
          </p>
        </div>

        {/* Search & Action Chips */}
        <div className="pt-2 border-t border-[#e7e5e4] flex items-center justify-between gap-2 relative z-10">
          <div className="flex-1 px-3 py-1.5 rounded-full bg-white border border-[#d6d3d1] text-[9px] text-[#78716c] flex items-center justify-between">
            <span>Search premium laptops...</span>
            <Search className="w-3 h-3 text-[#78716c]" />
          </div>
          <span className="px-3 py-1.5 rounded-full bg-[#ef4444] text-white text-[9px] font-bold shrink-0">
            Shop Hardware →
          </span>
        </div>
      </div>
    );
  }

  // 5. Secure Print Link (Real Dashboard Screenshot)
  return (
    <div className="w-full h-52 sm:h-60 rounded-2xl bg-[#0e1118] border border-white/10 relative overflow-hidden group-hover:border-[#3ef281]/60 transition-all duration-300">
      <Image
        src="/projects/secure-print-link.png"
        alt="Secure Print Link Dashboard"
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-500"
        priority
      />
      {/* Top Gradient Overlay Header Badge */}
      <div className="absolute top-0 left-0 right-0 p-2.5 bg-gradient-to-b from-[#090b10]/90 via-[#090b10]/60 to-transparent flex items-center justify-between text-[10px] font-mono z-10">
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#0a0b0a]/80 border border-[#3ef281]/30 backdrop-blur-md">
          <Lock className="w-3 h-3 text-[#3ef281]" />
          <span className="font-bold text-white tracking-wider">Secure Print Link</span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-[#3ef281]/20 border border-[#3ef281]/40 text-[#3ef281] font-bold text-[9px] backdrop-blur-md">
          AES-256 DASHBOARD
        </span>
      </div>
    </div>
  );
};
