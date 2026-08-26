"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, Project } from "@/data/portfolioData";
import { ProjectCard } from "./ProjectCard";
import { ProjectCaseStudyModal } from "./ProjectCaseStudyModal";
import { WorkSectionIntro } from "./WorkSectionIntro";
import { Layers } from "lucide-react";

const CATEGORIES = ["All", "Full Stack", "AI / ML", "Data Science"] as const;

// Per-project assigned ambient radial wash accent colors
const PROJECT_ACCENTS: Record<string, string> = {
  "ai-job-platform": "#3ef281",
  "cinemind-movie-rec": "#7fdca4",
  "fraud-detection": "#4a5a4f",
  "ai-ecommerce": "#5ea88a",
  "secure-print-link": "#3d453f",
};

export const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  const handleCardMouseEnter = (e: React.MouseEvent, project: Project) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setGlowPos({ x, y });
    setHoveredCardId(project.id);
  };

  const handleCardMouseLeave = () => {
    setHoveredCardId(null);
  };

  const activeAccentColor = hoveredCardId ? PROJECT_ACCENTS[hoveredCardId] : null;

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-32 px-4 relative z-10 bg-[#0a0b0a] border-t border-white/10 font-mono overflow-hidden"
    >
      {/* Section-level Ambient Radial Background Wash following cursor */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        animate={{
          background: activeAccentColor
            ? `radial-gradient(700px circle at ${glowPos.x}px ${glowPos.y}px, ${activeAccentColor}1f, transparent 70%)`
            : "transparent",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Work Section Intro Component */}
        <WorkSectionIntro />

        {/* Sliding Filter Tabs (layoutId="activeTab") */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14 text-xs font-mono">
          {CATEGORIES.map((tab) => {
            const isActive = activeCategory === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                data-cursor="OPEN"
                className="relative px-5 py-2.5 rounded-full font-bold transition-colors"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#3ef281]/15 border border-[#3ef281] rounded-full shadow-md shadow-[#3ef281]/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 ${isActive ? "text-[#3ef281]" : "text-[#8a938a] hover:text-white"}`}>
                  {tab}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid with Active Focus Mode */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const accent = PROJECT_ACCENTS[project.id] || "#3ef281";
              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  accentColor={accent}
                  isAnyHovered={hoveredCardId !== null}
                  isActiveHovered={hoveredCardId === project.id}
                  onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)}
                  onMouseEnter={(e) => handleCardMouseEnter(e, project)}
                  onMouseLeave={handleCardMouseLeave}
                />
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Live Deployments Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-[#131513] border border-white/10 text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl text-xs">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3.5 rounded-2xl bg-[#3ef281]/10 border border-[#3ef281]/30 text-[#3ef281] shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-white">4 Live Vercel & ML Deployments Active</h4>
              <p className="text-xs text-[#8a938a] font-sans font-normal">All production web applications and ML dashboards are live.</p>
            </div>
          </div>
          <a
            href="https://github.com/Aartid18"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="↗"
            className="px-5 py-3 rounded-xl bg-[#171917] hover:bg-[#202420] border border-white/10 text-[#3ef281] font-bold shrink-0 transition-colors"
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
