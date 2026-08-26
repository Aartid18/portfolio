"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Check, Send, Sparkles, Terminal, Activity } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { textInkRise, scrollEmergeUp } from "@/lib/motionConfig";
import { HeroSystemArchitecture } from "./HeroSystemArchitecture";
import { MagneticButton } from "./MagneticButton";

const DESCRIPTORS = [
  "FULL STACK ENGINEER",
  "APPLIED AI SPECIALIST",
  "DATA SCIENCE HONOURS",
  "CREATIVE TECHNOLOGIST",
];

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [descriptorIndex, setDescriptorIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  // Mouse Parallax Motion Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springMouseX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springMouseY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  // 5-Layer Parallax Depths
  const layerBgX = useTransform(springMouseX, [-0.5, 0.5], [-10, 10]);
  const layerBgY = useTransform(springMouseY, [-0.5, 0.5], [-10, 10]);

  const layerGridX = useTransform(springMouseX, [-0.5, 0.5], [-20, 20]);
  const layerGridY = useTransform(springMouseY, [-0.5, 0.5], [-20, 20]);

  const layerFloatingX = useTransform(springMouseX, [-0.5, 0.5], [-35, 35]);
  const layerFloatingY = useTransform(springMouseY, [-0.5, 0.5], [-35, 35]);

  const layerTextX = useTransform(springMouseX, [-0.5, 0.5], [-5, 5]);
  const layerTextY = useTransform(springMouseY, [-0.5, 0.5], [-5, 5]);

  const layerFgX = useTransform(springMouseX, [-0.5, 0.5], [-50, 50]);
  const layerFgY = useTransform(springMouseY, [-0.5, 0.5], [-50, 50]);

  useEffect(() => {
    // Rotating descriptor cycling every 3 seconds
    const descriptorInterval = setInterval(() => {
      setDescriptorIndex((prev) => (prev + 1) % DESCRIPTORS.length);
    }, 3000);

    const handleMouseMove = (e: MouseEvent) => {
      if (shouldReduceMotion || "ontouchstart" in window) return;
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      clearInterval(descriptorInterval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY, shouldReduceMotion]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-32 pb-24 px-4 overflow-hidden bg-[#0a0b0a] font-mono">
      {/* Layer 1: Parallax Ambient Grid */}
      <motion.div
        style={shouldReduceMotion ? {} : { x: layerBgX, y: layerBgY }}
        className="absolute inset-0 bg-tech-mesh opacity-20 pointer-events-none z-0"
      />

      {/* Layer 2: Parallax Floating Telemetry Badges */}
      <motion.div
        style={shouldReduceMotion ? {} : { x: layerFloatingX, y: layerFloatingY }}
        className="absolute inset-0 pointer-events-none z-10 hidden lg:block"
      >
        <div className="absolute top-36 left-12 p-3 rounded-2xl bg-[#131513]/90 border border-white/10 text-[10px] text-[#3ef281] font-bold shadow-xl backdrop-blur-md flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5" />
          <span>[ NEXT.JS 14 APP ROUTER ]</span>
        </div>
        <div className="absolute top-48 right-16 p-3 rounded-2xl bg-[#131513]/90 border border-white/10 text-[10px] text-[#3ef281] font-bold shadow-xl backdrop-blur-md flex items-center gap-2">
          <Activity className="w-3.5 h-3.5" />
          <span>[ PYTHON / XGBoost 99.9% UPTIME ]</span>
        </div>
        <div className="absolute bottom-44 left-20 p-3 rounded-2xl bg-[#131513]/90 border border-white/10 text-[10px] text-white font-bold shadow-xl backdrop-blur-md flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#3ef281] animate-pulse" />
          <span>[ LATENCY: 14ms NOMINAL ]</span>
        </div>
      </motion.div>

      {/* Layer 3: Main Typography & Controls */}
      <motion.div
        style={shouldReduceMotion ? {} : { x: layerTextX, y: layerTextY }}
        className="max-w-6xl mx-auto w-full text-center relative z-20"
      >
        {/* Text Morphing Descriptor Eyebrow */}
        <div className="h-9 mb-6 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={descriptorIndex}
              initial={{ y: 25, opacity: 0, filter: "blur(4px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -25, opacity: 0, filter: "blur(4px)" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#131513] border border-white/10 text-xs font-bold text-[#3ef281] shadow-xl"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{DESCRIPTORS[descriptorIndex]}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Kinetic Split Text Oversized Headline */}
        <motion.h1
          variants={textInkRise}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 leading-[1.05]"
        >
          FULL STACK ENGINEER
          <br />
          <span className="text-[#3ef281]">+ APPLIED AI</span>
        </motion.h1>

        {/* Statement Copy */}
        <motion.div
          variants={textInkRise}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="max-w-3xl mx-auto text-lg sm:text-2xl md:text-3xl font-extrabold text-[#e9ece7] mb-8 leading-snug tracking-tight"
        >
          I BUILD SYSTEMS THAT THINK, SCALE & SHIP.
        </motion.div>

        <motion.p
          variants={scrollEmergeUp}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto text-xs sm:text-sm text-[#8a938a] mb-10 leading-relaxed font-sans"
        >
          {PERSONAL_INFO.subHeadline}
        </motion.p>

        {/* Layer 4: Magnetic Action Controls */}
        <motion.div
          style={shouldReduceMotion ? {} : { x: layerFgX, y: layerFgY }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16 text-xs sm:text-sm relative z-30"
        >
          <MagneticButton strength={0.4}>
            <a
              href="#projects"
              data-cursor="OPEN"
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#3ef281] hover:bg-[#59f493] text-[#0a0b0a] font-extrabold shadow-xl shadow-[#3ef281]/20 transition-all hover:scale-[1.02]"
            >
              <span>EXPLORE WORK</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </MagneticButton>

          <MagneticButton strength={0.4}>
            <a
              href="#contact"
              data-cursor="OPEN"
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#131513] hover:bg-[#171917] border border-white/15 text-white font-extrabold transition-all hover:scale-[1.02] hover:border-[#3ef281]"
            >
              <Send className="w-4 h-4 text-[#3ef281]" />
              <span>LET&apos;S TALK</span>
            </a>
          </MagneticButton>
        </motion.div>

        {/* Proof Bar & Social Links */}
        <div className="pt-8 border-t border-white/10 max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs text-[#8a938a]">
          <div className="flex items-center gap-3 mx-auto sm:mx-0">
            <MagneticButton strength={0.25}>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="↗"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#131513] border border-white/10 text-white hover:border-[#3ef281] transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-[#3ef281]" />
                <span>GitHub</span>
              </a>
            </MagneticButton>

            <MagneticButton strength={0.25}>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="↗"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#131513] border border-white/10 text-white hover:border-[#3ef281] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#3ef281]" />
                <span>LinkedIn</span>
              </a>
            </MagneticButton>

            <MagneticButton strength={0.25}>
              <button
                onClick={handleCopyEmail}
                data-cursor="OPEN"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#131513] border border-white/10 text-white hover:border-[#3ef281] transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#3ef281]" /> : <Mail className="w-3.5 h-3.5 text-[#3ef281]" />}
                <span>{copied ? "Copied" : "Email"}</span>
              </button>
            </MagneticButton>
          </div>

          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="text-[#3ef281]">●</span>
            <span>BE IT + Data Science Honours (8.4 CGPA)</span>
          </div>
        </div>

        {/* Hero Interactive Living Architecture Diagram */}
        <HeroSystemArchitecture />
      </motion.div>
    </section>
  );
};
