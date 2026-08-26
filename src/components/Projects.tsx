"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, Project } from "@/data/portfolioData";
import { ProjectCard } from "./ProjectCard";
import { ProjectCaseStudyModal } from "./ProjectCaseStudyModal";
import { scrollEmergeUp } from "@/lib/motionConfig";
import { Sparkles, Layers } from "lucide-react";

const CATEGORIES = ["All", "Full Stack", "AI / ML", "Data Science"] as const;

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-32 px-4 relative z-10 bg-[#08090B] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={scrollEmergeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C7FF3D] block mb-3">
            03 / FEATURED WORK
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display">
            PROOF OF <span className="text-[#C7FF3D]">ENGINEERING</span>
          </h2>
          <p className="text-sm text-[#8A8F98] mt-3 max-w-xl mx-auto font-sans">
            Production-oriented full-stack web applications, applied machine learning systems, and financial risk dashboards.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14 font-mono text-xs">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                data-cursor="OPEN"
                className={`px-5 py-2.5 rounded-full font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-[#C7FF3D] text-[#08090B] shadow-lg shadow-[#C7FF3D]/20 scale-105"
                    : "bg-[#101216] text-[#8A8F98] hover:text-white border border-white/10"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Live Deployments Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-[#101216] border border-white/10 text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl font-mono">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3.5 rounded-2xl bg-[#C7FF3D]/10 border border-[#C7FF3D]/30 text-[#C7FF3D] shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-white">4 Live Vercel & ML Deployments Active</h4>
              <p className="text-xs text-[#8A8F98] font-normal">All production web applications and ML dashboards are live.</p>
            </div>
          </div>
          <a
            href="https://github.com/Aartid18"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="↗"
            className="px-5 py-3 rounded-xl bg-[#16191F] hover:bg-[#202530] border border-white/10 text-[#C7FF3D] text-xs font-bold shrink-0 transition-colors"
          >
            Explore GitHub
          </a>
        </div>
      </div>

      {/* Expandable Project Case Study Modal */}
      <ProjectCaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
};
