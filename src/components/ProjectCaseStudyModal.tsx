"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, ShieldCheck } from "lucide-react";
import { Project } from "@/data/portfolioData";
import { ProjectArchitectureDiagram } from "./ProjectArchitectureDiagram";

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const caseStudy = project.caseStudy;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3 }}
          className="glass-panel w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border-slate-700/90 p-6 sm:p-10 relative text-left shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="border-b border-slate-700/80 pb-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 text-xs font-bold font-mono">
                {project.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">ENGINEERING CASE STUDY</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-2">{project.title}</h3>
            <p className="text-sm font-semibold text-cyan-300">{project.subtitle}</p>
          </div>

          {/* Modal Body */}
          <div className="space-y-8 text-sm">
            {/* Overview */}
            {caseStudy && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2 font-mono">
                  Executive Summary
                </h4>
                <p className="text-slate-200 text-base leading-relaxed font-normal">{caseStudy.overview}</p>
              </div>
            )}

            {/* Problem & Solution Grid */}
            {caseStudy && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-md">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-pink-400 mb-2 font-mono">
                    Problem Statement
                  </h5>
                  <p className="text-slate-200 text-sm leading-relaxed">{caseStudy.problem}</p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-md">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 font-mono">
                    Technical Solution
                  </h5>
                  <p className="text-slate-200 text-sm leading-relaxed">{caseStudy.solution}</p>
                </div>
              </div>
            )}

            {/* Interactive Architecture Flow Diagram */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2 font-mono">
                System Flow & Pipeline Architecture
              </h4>
              <ProjectArchitectureDiagram projectId={project.id} />
            </div>

            {/* Key Engineering Decisions */}
            {caseStudy?.keyDecisions && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3 font-mono">
                  Architectural & Technical Decisions
                </h4>
                <ul className="space-y-3">
                  {caseStudy.keyDecisions.map((decision, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-3.5 bg-slate-900/80 rounded-xl border border-slate-700/80">
                      <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-slate-200 text-sm font-medium">{decision}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Breakdown */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3 font-mono">
                Technologies & Libraries Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 text-xs font-semibold font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="mt-8 pt-6 border-t border-slate-700/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 hover:from-cyan-300 hover:to-pink-400 text-slate-950 font-black text-xs sm:text-sm shadow-md"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live App</span>
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-bold text-xs sm:text-sm"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub Repo</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-bold text-slate-300 hover:text-white"
            >
              Close Case Study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
