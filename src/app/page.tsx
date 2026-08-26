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
    <div className="min-h-screen flex flex-col relative bg-[#08090B] text-[#F4F4F0] selection:bg-[#C7FF3D] selection:text-[#08090B] font-sans overflow-x-hidden">
      {/* 2-3s Preloader Curtain Lift */}
      <Preloader />

      {/* Context-Aware Custom Cursor (Desktop only) */}
      <CustomCursor />

      {/* Subtle Fine Technical Grid Layer */}
      <div className="fixed inset-0 bg-tech-grid opacity-20 pointer-events-none z-0" />

      <Navbar />

      <main className="flex-1 relative z-10">
        <Hero />
        
        <Marquee direction="left" />
        <About />

        <Marquee direction="right" />
        <Skills />

        <Projects />
        
        <Marquee direction="left" />
        <ResumeSection />
        
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
