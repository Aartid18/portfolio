"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-14 border-t border-slate-700/80 bg-[#070a12] text-slate-300 text-xs relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Info */}
        <div className="text-center md:text-left space-y-1.5">
          <p className="text-sm font-extrabold text-white">
            Aarti Dinkar <span className="gradient-text font-bold">| Full Stack & AI/ML Portfolio</span>
          </p>
          <p className="text-slate-300 font-medium">
            © {new Date().getFullYear()} Aarti Dinkar. Built with Next.js & Tailwind CSS. Hosted on Vercel.
          </p>
        </div>

        {/* Center Social Links */}
        <div className="flex items-center gap-3.5">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-cyan-400 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4 text-cyan-400" />
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-cyan-300 hover:border-cyan-400 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4 text-cyan-400" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.socials.email}`}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-cyan-300 hover:border-cyan-400 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Email Address"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
          </a>
        </div>

        {/* Right Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-cyan-300 transition-colors font-bold text-xs shadow-md focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
        </button>
      </div>
    </footer>
  );
};

