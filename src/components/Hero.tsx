"use client";

import React, { useState } from "react";
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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full text-center relative z-10">
        {/* Recruiter Role Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium mb-8 shadow-lg shadow-cyan-950/40 animate-fade-in">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span>BE Information Technology • Honours in Data Science</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Hi, I&apos;m <span className="gradient-text">{PERSONAL_INFO.name}</span>
          <br />
          <span className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-300 mt-2 block">
            {PERSONAL_INFO.headline}
          </span>
        </h1>

        {/* Hero Pitch Statement */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-normal">
          {PERSONAL_INFO.subHeadline}
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="group flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#resume"
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl glass-panel hover:bg-slate-800/80 text-slate-200 border-slate-700/80 font-semibold text-base shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Recruiter Quick Proof Bar */}
        <div className="pt-8 border-t border-slate-800/80 max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-6 px-4">
            {/* Social Links */}
            <div className="flex items-center gap-4 mx-auto sm:mx-0">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors text-sm font-medium"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors text-sm font-medium"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors text-sm font-medium"
                title="Click to copy email address"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4 text-cyan-400" />}
                <span>{copied ? "Copied!" : "Email"}</span>
                <Copy className="w-3 h-3 opacity-60 ml-1" />
              </button>
            </div>

            {/* Core Tech Stack Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 mx-auto sm:mx-0">
              {["React", "Next.js", "Node.js", "Python", "Java", "SQL", "ML"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 text-xs font-semibold tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
