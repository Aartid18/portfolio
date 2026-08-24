"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/data/portfolioData";
import { ProjectCard } from "./ProjectCard";
import { Layers, Sparkles } from "lucide-react";

const CATEGORIES = ["All", "Full Stack", "AI / ML", "Data Science"] as const;

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-cyan-400 uppercase mb-2">
            Proof of Work
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h3>
          <p className="text-sm text-slate-400 mt-2 max-w-xl mx-auto">
            Practical software engineering and machine learning implementations backed by live demos and clean code.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105"
                    : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Recruiter Guarantee Banner */}
        <div className="mt-16 p-6 rounded-3xl glass-panel border-cyan-500/30 text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Live Vercel & ML Deployments Active</h4>
              <p className="text-xs text-slate-400">All live demos are active and accessible directly from the cards above.</p>
            </div>
          </div>
          <a
            href="https://github.com/Aartid18"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-300 text-xs font-semibold shrink-0 transition-colors"
          >
            Explore GitHub Repositories
          </a>
        </div>
      </div>
    </section>
  );
};
