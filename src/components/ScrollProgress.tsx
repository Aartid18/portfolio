"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const SECTIONS = [
  { id: "home", label: "01 HERO" },
  { id: "about", label: "02 ABOUT" },
  { id: "skills", label: "03 STACK" },
  { id: "projects", label: "04 WORK" },
  { id: "contact", label: "05 CONTACT" },
];

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 30 });
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [activeLabel, setActiveLabel] = useState("01 HERO");

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const pct = Math.round((window.scrollY / totalHeight) * 100);
        setScrollPercentage(pct);
      }

      const scrollPos = window.scrollY + 300;
      for (const sec of SECTIONS) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveLabel(sec.label);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Edge Fixed Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-[#3ef281] z-[100] origin-left shadow-[0_0_8px_#3ef281]"
        style={{ scaleX }}
      />

      {/* Right Edge Technical Readout Floating Pill */}
      <div className="fixed right-6 bottom-8 z-40 hidden lg:flex items-center gap-3 px-3.5 py-2 rounded-full bg-[#131513]/90 border border-white/10 text-xs font-mono backdrop-blur-md shadow-2xl">
        <span className="w-2 h-2 rounded-full bg-[#3ef281] animate-pulse" />
        <span className="text-white font-bold tracking-wider">{activeLabel}</span>
        <span className="text-white/20">|</span>
        <span className="text-[#3ef281] font-bold tabular-data">{scrollPercentage}%</span>
      </div>
    </>
  );
};
