"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Copy, Check, Sparkles, Code2, Brain } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-4 overflow-hidden">
      {/* Background Ambient Spotlight Radial Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-cyan-500/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-pink-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full text-center relative z-10">
        {/* Recruiter Role Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-panel border-cyan-400/40 text-cyan-300 text-xs sm:text-sm font-semibold mb-8 shadow-xl shadow-cyan-950/50"
        >
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span>BE Information Technology • Honours in Data Science</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]"
        >
          Hi, I&apos;m <span className="gradient-text">{PERSONAL_INFO.name}</span>
          <br />
          <span className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-200 mt-3 block tracking-tight">
            {PERSONAL_INFO.headline}
          </span>
        </motion.h1>

        {/* Hero Pitch Statement */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-normal"
        >
          {PERSONAL_INFO.subHeadline}
        </motion.p>

        {/* Primary CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href="#projects"
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 hover:from-cyan-300 hover:to-pink-400 text-slate-950 font-black text-base shadow-2xl shadow-cyan-500/35 hover:shadow-cyan-400/50 hover:scale-105 transition-all duration-200"
          >
            <span>View Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#resume"
            className="flex items-center gap-3 px-8 py-4 rounded-2xl glass-panel hover:bg-slate-800/90 text-white border-cyan-500/40 hover:border-cyan-400 font-bold text-base shadow-xl hover:scale-105 transition-all duration-200"
          >
            <Download className="w-5 h-5 text-cyan-400" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* Recruiter Quick Proof Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 border-t border-slate-700/80 max-w-4xl mx-auto"
        >
          <div className="flex flex-wrap items-center justify-between gap-6 px-4">
            {/* Social Links */}
            <div className="flex items-center gap-3 mx-auto sm:mx-0">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/90 text-slate-200 hover:text-white hover:border-cyan-400 transition-colors text-sm font-semibold shadow-md"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/90 text-slate-200 hover:text-cyan-300 hover:border-cyan-400 transition-colors text-sm font-semibold shadow-md"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/90 text-slate-200 hover:text-cyan-300 hover:border-cyan-400 transition-colors text-sm font-semibold shadow-md focus-visible:ring-2 focus-visible:ring-cyan-400"
                title="Click to copy email address"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4 text-cyan-400" />}
                <span>{copied ? "Copied!" : "Email"}</span>
                <Copy className="w-3.5 h-3.5 opacity-70 ml-0.5" />
              </button>
            </div>

            {/* Core Tech Stack Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 mx-auto sm:mx-0">
              {["React", "Next.js", "Node.js", "Python", "Java", "SQL", "ML"].map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-slate-200 text-xs font-bold tracking-wide shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

