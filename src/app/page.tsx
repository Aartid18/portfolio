"use client";

import React from "react";
import dynamic from "next/dynamic";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Preloader } from "@/components/Preloader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { ResumeSection } from "@/components/ResumeSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";

// Dynamic Client-Only Heavy Components
const SplashCursor = dynamic(() => import("@/components/SplashCursor").then((m) => m.SplashCursor), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/CustomCursor").then((m) => m.CustomCursor), { ssr: false });

export default function Home() {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen flex flex-col relative bg-[#0a0b0a] text-[#e9ece7] selection:bg-[#3ef281] selection:text-[#0a0b0a] font-sans overflow-x-hidden">
        {/* Preloader Boot Sequence Curtain Wipe Reveal */}
        <Preloader />

        {/* Global Scroll Progress Bar & Live Section Readout */}
        <ScrollProgress />

        {/* Context-Aware Custom Cursor (Desktop Only) */}
        <CustomCursor />

        {/* Interactive WebGL Splash Cursor Fluid Effect */}
        <SplashCursor />

        {/* Fine Technical Mesh */}
        <div className="fixed inset-0 bg-tech-mesh opacity-20 pointer-events-none z-0" />

        <Navbar />

        <main className="flex-1 relative z-10">
          <Hero />

          {/* Instance 1: Post-Hero Marquee */}
          <Marquee
            items={["FULL STACK ENGINEERING", "APPLIED AI", "DATA SCIENCE", "SYSTEM ARCHITECTURE", "PRODUCTION SYSTEMS"]}
            direction="left"
          />

          <About />

          <Skills />

          {/* Work Section with Scroll-Driven Color Inversion */}
          <Projects />

          <ResumeSection />

          {/* Instance 2: Pre-Footer Marquee */}
          <Marquee
            items={["04 ENGINEERING PROFILE", "ACADEMIC CREDENTIALS", "HONOURS IN DATA SCIENCE", "LIVE DEPLOYMENTS"]}
            direction="right"
          />

          <Contact />
        </main>

        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
