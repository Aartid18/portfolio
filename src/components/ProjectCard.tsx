"use client";

import React from "react";
import { ExternalLink, Github, Sparkles, CheckCircle2 } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group glass-panel rounded-3xl overflow-hidden border-slate-800 glow-card flex flex-col justify-between h-full transition-all duration-300">
      <div className="p-7">
        {/* Card Header & Badge */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold tracking-wide">
            {project.category}
          </span>
          {project.isFeatured && (
            <span className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
              <Sparkles className="w-3 h-3" />
              Featured
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl font-extrabold text-white group-hover:text-cyan-300 transition-colors mb-1">
          {project.title}
        </h3>
        <p className="text-xs font-medium text-slate-400 mb-4">{project.subtitle}</p>

        {/* 1-Line Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features List */}
        <div>
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">Key Highlights</h4>
          <ul className="space-y-2">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Buttons Footer */}
      <div className="p-5 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between gap-3">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs sm:text-sm shadow-md shadow-cyan-500/20 transition-all hover:scale-[1.02]"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
        ) : (
          <span className="flex-1 text-center py-2.5 text-xs text-slate-500 font-mono">
            Demo Available on Request
          </span>
        )}

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white font-semibold text-xs sm:text-sm transition-all"
        >
          <Github className="w-4 h-4 text-slate-400" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
};
