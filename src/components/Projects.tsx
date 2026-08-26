"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, Project } from "@/data/portfolioData";
import { ProjectCard } from "./ProjectCard";
import { ProjectCaseStudyModal } from "./ProjectCaseStudyModal";
import { FadeIn } from "./motion/MotionPrimitives";
import { Layers, Sparkles } from "lucide-react";

const CATEGORIES = ["All", "Full Stack", "AI / ML", "Data Science"] as const;

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-28 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <FadeIn direction="up" className="text-center mb-14">
          <h2 className="text-xs sm:text-sm font-bold tracking-widest text-cyan-400 uppercase mb-3 font-mono">
            Proof of Engineering
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Featured <span className="gradient-text">Software Projects</span>
          </h3>
          <p className="text-base text-slate-300 mt-3 max-w-xl mx-auto font-normal">
            Production-oriented software applications and applied AI/ML systems backed by active live deployments and clean source code.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 mx-auto mt-5 rounded-full" />
        </FadeIn>

        {/* Filter Category Tabs */}
        <FadeIn direction="up" delay={0.1} className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 font-mono focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 text-slate-950 shadow-lg shadow-cyan-500/30 scale-105"
                    : "bg-slate-900/90 text-slate-300 hover:text-white border border-slate-700/90 hover:border-cyan-400/40"
                }`}
              >
                {category}
              </button>
            );
          })}
        </FadeIn>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Recruiter Guarantee Banner */}
        <FadeIn direction="up" delay={0.2} className="mt-16 p-7 rounded-3xl glass-panel border-cyan-400/40 text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 shadow-2xl">
          <div className="flex items-center gap-3.5 text-left">
            <div className="p-3.5 rounded-2xl bg-cyan-500/15 text-cyan-400 border border-cyan-400/30 shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-extrabold text-white">Live Vercel & ML Deployments Active</h4>
              <p className="text-xs text-slate-300 font-medium">All live web applications and dashboards are active and accessible.</p>
            </div>
          </div>
          <a
            href="https://github.com/Aartid18"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-300 hover:text-white text-xs font-bold font-mono shrink-0 transition-colors shadow-md focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Explore GitHub Repositories
          </a>
        </FadeIn>
      </div>

      {/* Case Study Modal */}
      <ProjectCaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
};
