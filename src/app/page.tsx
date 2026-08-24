import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { ResumeSection } from "@/components/ResumeSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative bg-[#050811] text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      {/* Background Subtle Ambient Grid Effect */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <Navbar />

      <main className="flex-1 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ResumeSection />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
