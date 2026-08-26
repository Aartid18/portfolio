"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Copy, Check, Send } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { textInkRise, scrollEmergeUp } from "@/lib/motionConfig";
import { HeroSystemArchitecture } from "./HeroSystemArchitecture";

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-32 pb-24 px-4 overflow-hidden bg-[#050505] font-mono">
      <div className="max-w-6xl mx-auto w-full text-center relative z-10">
        {/* Recruiter Eyebrow Badge */}
        <motion.div
          variants={scrollEmergeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0d0d0d] border border-white/10 text-xs font-bold text-[#39ff88] mb-8 shadow-xl"
        >
          <span className="w-2 h-2 rounded-full bg-[#39ff88] animate-ping" />
          <span>FULL STACK ENGINEER & APPLIED AI SPECIALIST</span>
        </motion.div>

        {/* Oversized Headline with textInkRise Choreography */}
        <motion.h1
          variants={textInkRise}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 leading-[1.05]"
        >
          FULL STACK ENGINEER
          <br />
          <span className="text-[#39ff88]">+ APPLIED AI</span>
        </motion.h1>

        {/* Statement Copy */}
        <motion.div
          variants={textInkRise}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="max-w-3xl mx-auto text-lg sm:text-2xl md:text-3xl font-extrabold text-[#e8e8e3] mb-8 leading-snug tracking-tight"
        >
          I BUILD SYSTEMS THAT THINK, SCALE & SHIP.
        </motion.div>

        <motion.p
          variants={scrollEmergeUp}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto text-xs sm:text-sm text-[#737373] mb-10 leading-relaxed font-sans"
        >
          {PERSONAL_INFO.subHeadline}
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          variants={scrollEmergeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-4 mb-16 text-xs sm:text-sm"
        >
          <a
            href="#projects"
            data-cursor="OPEN"
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#39ff88] hover:bg-[#52ff97] text-[#050505] font-extrabold shadow-xl shadow-[#39ff88]/20 transition-all hover:scale-[1.02]"
          >
            <span>EXPLORE WORK</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            data-cursor="OPEN"
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#0d0d0d] hover:bg-[#141414] border border-white/15 text-white font-extrabold transition-all hover:scale-[1.02]"
          >
            <Send className="w-4 h-4 text-[#39ff88]" />
            <span>LET&apos;S TALK</span>
          </a>
        </motion.div>

        {/* Proof Bar & Socials */}
        <div className="pt-8 border-t border-white/10 max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs text-[#737373]">
          <div className="flex items-center gap-3 mx-auto sm:mx-0">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="↗"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0d0d0d] border border-white/10 text-white hover:border-[#39ff88] transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-[#39ff88]" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="↗"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0d0d0d] border border-white/10 text-white hover:border-[#39ff88] transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#39ff88]" />
              <span>LinkedIn</span>
            </a>
            <button
              onClick={handleCopyEmail}
              data-cursor="OPEN"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0d0d0d] border border-white/10 text-white hover:border-[#39ff88] transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#39ff88]" /> : <Mail className="w-3.5 h-3.5 text-[#39ff88]" />}
              <span>{copied ? "Copied" : "Email"}</span>
            </button>
          </div>

          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="text-[#39ff88]">●</span>
            <span>BE IT + Data Science Honours (8.4 CGPA)</span>
          </div>
        </div>

        {/* Hero Interactive Living Architecture Diagram */}
        <HeroSystemArchitecture />
      </div>
    </section>
  );
};
