"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Layers, Sparkles } from "lucide-react";
import { PORTFOLIO_METRICS } from "@/data/portfolioData";

export const WorkSectionIntro: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const titleWords = ["PROOF", "OF", "ENGINEERING"];

  return (
    <div className="text-center mb-16 font-mono relative z-10">
      {/* 1. Eyebrow Section Label with Letter Spacing Animation */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, letterSpacing: "0.1em", y: 20 }}
        whileInView={{ opacity: 1, letterSpacing: "0.25em", y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="text-xs font-bold uppercase text-[#3ef281] mb-3 inline-block"
      >
        03 / FEATURED WORK & PRODUCTION SYSTEMS
      </motion.div>

      {/* 2. Headline with Split Text Stagger Reveal */}
      <div className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-4 font-display flex flex-wrap justify-center gap-x-3 gap-y-1">
        {titleWords.map((word, idx) => (
          <motion.span
            key={idx}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 35, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 + idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className={`inline-block ${word === "ENGINEERING" ? "text-[#3ef281]" : ""}`}
          >
            {word}
          </motion.span>
        ))}
      </div>

      {/* 3. Supporting Description with Delayed Fade */}
      <motion.p
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="text-xs sm:text-sm text-[#8a938a] max-w-xl mx-auto font-sans leading-relaxed mb-8"
      >
        Interactive software-engineering showcases featuring live full-stack web products, real-time ML recommendation microservices, and financial transaction risk telemetry.
      </motion.p>

      {/* 4. Metadata Count Badges Stagger Entrance */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex flex-wrap items-center justify-center gap-4 px-5 py-2.5 rounded-full bg-[#131513] border border-white/10 text-xs text-[#8a938a] shadow-lg"
      >
        <span className="flex items-center gap-1.5 font-bold text-white">
          <Layers className="w-3.5 h-3.5 text-[#3ef281]" />
          {PORTFOLIO_METRICS.totalProjects} Active Projects
        </span>
        <span className="text-white/20">•</span>
        <span className="flex items-center gap-1.5 font-bold text-white">
          <Sparkles className="w-3.5 h-3.5 text-[#3ef281]" />
          {PORTFOLIO_METRICS.liveDeployments} Live Vercel Deployments
        </span>
      </motion.div>
    </div>
  );
};
