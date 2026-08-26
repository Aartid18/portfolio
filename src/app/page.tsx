"use client";

import React from "react";
import { Preloader } from "@/components/Preloader";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { ResumeSection } from "@/components/ResumeSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative bg-[#050505] text-[#e8e8e3] selection:bg-[#39ff88] selection:text-[#050505] font-sans overflow-x-hidden">
      {/* Non-linear Boot Preloader Curtain Lift */}
      <Preloader />

      {/* Context-Aware Custom Cursor (Desktop only) */}
      <CustomCursor />

      {/* Subtle Fine Terminal Grid Layer */}
      <div className="fixed inset-0 bg-terminal-grid opacity-20 pointer-events-none z-0" />

      <Navbar />

      <main className="flex-1 relative z-10">
        <Hero />
        
        {/* Post-Hero Marquee */}
        <Marquee
          items={["FULL STACK ENGINEERING", "APPLIED AI", "DATA SCIENCE", "SYSTEM ARCHITECTURE", "PRODUCTION SYSTEMS"]}
          direction="left"
        />
        
        <About />

        {/* Post-About Marquee */}
        <Marquee
          items={["01 PHILOSOPHY", "PRODUCTION SYSTEMS", "INTELLIGENT WORKFLOWS", "MICROSERVICES", "RESTFUL APIS"]}
          direction="right"
        />

        <Skills />

        {/* Post-Stack Marquee */}
        <Marquee
          items={["02 TECHNICAL CAPABILITIES", "CORE LANGUAGES", "FRAMEWORKS", "DATA INFRASTRUCTURE", "MACHINE LEARNING"]}
          direction="left"
        />

        <Projects />
        
        {/* Post-Resume Marquee */}
        <Marquee
          items={["04 ENGINEERING PROFILE", "ACADEMIC CREDENTIALS", "HONOURS IN DATA SCIENCE", "LIVE DEPLOYMENTS"]}
          direction="right"
        />

        <ResumeSection />
        
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
