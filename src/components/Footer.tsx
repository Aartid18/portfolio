"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-white/10 bg-[#08090B] text-[#8A8F98] text-xs font-mono relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Info */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-sm font-extrabold text-white font-display">
            AARTI<span className="text-[#C7FF3D]">.DEV</span> — FULL STACK ENGINEER + APPLIED AI
          </p>
          <p className="text-[11px] text-[#8A8F98]">
            © {new Date().getFullYear()} Aarti Dinkar. Built with Next.js 14, Tailwind CSS & Framer Motion.
          </p>
        </div>

        {/* Center Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="↗"
            className="p-2.5 rounded-xl bg-[#101216] border border-white/10 text-white hover:text-[#C7FF3D] transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="↗"
            className="p-2.5 rounded-xl bg-[#101216] border border-white/10 text-white hover:text-[#C7FF3D] transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.socials.email}`}
            data-cursor="OPEN"
            className="p-2.5 rounded-xl bg-[#101216] border border-white/10 text-white hover:text-[#C7FF3D] transition-colors"
            aria-label="Email Address"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          data-cursor="OPEN"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#101216] hover:bg-[#16191F] border border-white/10 text-white hover:text-[#C7FF3D] transition-colors font-bold text-xs"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5 text-[#C7FF3D]" />
        </button>
      </div>
    </footer>
  );
};
