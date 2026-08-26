"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, CheckCircle2, BookOpen } from "lucide-react";
import { Project } from "@/data/portfolioData";
import { MagneticButton } from "./motion/MotionPrimitives";

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6 }}
      className="group glass-panel rounded-3xl overflow-hidden border-slate-700/80 glow-card flex flex-col justify-between h-full transition-all duration-300 shadow-2xl relative"
    >
      {/* Top Accent Line Gradient */}
      <div className="h-1.5 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500" />

      <div className="p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Card Header & Badges */}
          <div className="flex items-center justify-between gap-3 mb-5">
            <span className="px-3.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 text-xs font-bold tracking-wide font-mono shadow-sm">
              {project.category}
            </span>
            {project.isFeatured && (
              <span className="flex items-center gap-1.5 text-xs text-amber-300 font-bold bg-amber-500/15 px-3 py-1 rounded-full border border-amber-400/40 shadow-sm font-mono">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Featured
              </span>
            )}
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-300 transition-colors mb-1.5 leading-snug">
            {project.title}
          </h3>
          <p className="text-xs font-bold text-cyan-400/90 mb-4 font-mono">{project.subtitle}</p>

          {/* Description */}
          <p className="text-sm text-slate-200 leading-relaxed mb-6 font-normal">
            {project.description}
          </p>

          {/* Tech Stack Badges */}
          <div className="mb-6">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-2.5 font-mono">Tech Stack</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700/90 text-slate-200 text-xs font-semibold font-mono shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Key Features List */}
        <div className="mt-2">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3 font-mono">Key Highlights</h4>
          <ul className="space-y-2.5">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Buttons Footer */}
      <div className="p-5 bg-slate-950/80 border-t border-slate-700/80 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-1">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 hover:from-cyan-300 hover:to-pink-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          ) : (
            <span className="flex-1 text-center py-2.5 text-xs text-slate-400 font-mono font-semibold">
              Demo on Request
            </span>
          )}

          {project.caseStudy && (
            <button
              onClick={() => onOpenCaseStudy(project)}
              className="flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-300 hover:text-white font-bold text-xs sm:text-sm transition-all focus-visible:ring-2 focus-visible:ring-cyan-400"
              title="View Architecture Case Study"
            >
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>Case Study</span>
            </button>
          )}
        </div>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-bold text-xs sm:text-sm transition-all focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-label="GitHub Repository"
        >
          <Github className="w-4 h-4 text-cyan-400" />
        </a>
      </div>
    </motion.div>
  );
};
