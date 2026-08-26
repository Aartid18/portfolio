"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Copy, Check, Send } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { textClipReveal, scrollEmergeUp } from "@/lib/motionConfig";
import { HeroSystemArchitecture } from "./HeroSystemArchitecture";

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-32 pb-24 px-4 overflow-hidden bg-[#08090B]">
      <div className="max-w-6xl mx-auto w-full text-center relative z-10">
        {/* Quiet Recruiter Eyebrow Badge */}
        <motion.div
          variants={scrollEmergeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#101216] border border-white/10 text-xs font-mono font-bold text-[#C7FF3D] mb-8 shadow-xl"
        >
          <span className="w-2 h-2 rounded-full bg-[#C7FF3D] animate-ping" />
          <span>FULL STACK ENGINEER & APPLIED AI SPECIALIST</span>
        </motion.div>

        {/* Oversized Headline */}
        <motion.h1
          variants={textClipReveal}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 leading-[1.05] font-display"
        >
          FULL STACK ENGINEER
          <br />
          <span className="text-[#C7FF3D]">+ APPLIED AI</span>
        </motion.h1>

        {/* Statement Copy */}
        <motion.div
          variants={textClipReveal}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="max-w-3xl mx-auto text-lg sm:text-2xl md:text-3xl font-extrabold text-[#F4F4F0] mb-8 leading-snug tracking-tight font-display"
        >
          I BUILD SYSTEMS THAT THINK, SCALE & SHIP.
        </motion.div>

        <motion.p
          variants={scrollEmergeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="max-w-2xl mx-auto text-sm sm:text-base text-[#8A8F98] mb-10 leading-relaxed font-sans"
        >
          {PERSONAL_INFO.subHeadline}
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          variants={scrollEmergeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
          className="flex flex-wrap items-center justify-center gap-4 mb-16 font-mono text-xs sm:text-sm"
        >
          <a
            href="#projects"
            data-cursor="OPEN"
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#C7FF3D] hover:bg-[#d4ff66] text-[#08090B] font-extrabold shadow-xl shadow-[#C7FF3D]/20 transition-all hover:scale-[1.02]"
          >
            <span>EXPLORE WORK</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            data-cursor="OPEN"
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#101216] hover:bg-[#16191F] border border-white/15 text-white font-extrabold transition-all hover:scale-[1.02]"
          >
            <Send className="w-4 h-4 text-[#C7FF3D]" />
            <span>LET&apos;S TALK</span>
          </a>
        </motion.div>

        {/* Proof Bar & Socials */}
        <div className="pt-8 border-t border-white/10 max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#8A8F98]">
          <div className="flex items-center gap-3 mx-auto sm:mx-0">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="↗"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#101216] border border-white/10 text-white hover:border-[#C7FF3D] transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-[#C7FF3D]" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="↗"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#101216] border border-white/10 text-white hover:border-[#C7FF3D] transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#C7FF3D]" />
              <span>LinkedIn</span>
            </a>
            <button
              onClick={handleCopyEmail}
              data-cursor="OPEN"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#101216] border border-white/10 text-white hover:border-[#C7FF3D] transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#C7FF3D]" /> : <Mail className="w-3.5 h-3.5 text-[#C7FF3D]" />}
              <span>{copied ? "Copied" : "Email"}</span>
            </button>
          </div>

          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="text-[#C7FF3D]">●</span>
            <span>BE IT + Data Science Honours (8.4 CGPA)</span>
          </div>
        </div>

        {/* Hero Interactive Living Architecture Diagram */}
        <HeroSystemArchitecture />
      </div>
    </section>
  );
};
