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
    <div className="min-h-screen flex flex-col relative bg-[#0b0f19] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans overflow-x-hidden">
      {/* Background Ambient Grid & Spotlight Layer */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#3341551c_1px,transparent_1px),linear-gradient(to_bottom,#3341551c_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_75%,transparent_100%)] pointer-events-none z-0" />
      <div className="fixed top-10 left-1/4 w-[32rem] h-[32rem] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-1/3 right-1/4 w-[36rem] h-[36rem] bg-pink-500/10 rounded-full blur-[160px] pointer-events-none z-0" />

      <Navbar />

      <main className="flex-1 relative z-10 space-y-6">
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

