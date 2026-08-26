"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { ExternalLink, Github, BookOpen, CheckCircle2 } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onOpenCaseStudy }) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || shouldReduceMotion || "ontouchstart" in window) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={shouldReduceMotion ? {} : { rotateX, rotateY, transformPerspective: 800 }}
      whileHover={{ y: -6 }}
      data-cursor="VIEW"
      className="scanline-card group p-8 rounded-3xl bg-[#0d0d0d] border border-white/10 hover:border-[#39ff88]/50 shadow-2xl flex flex-col justify-between h-full transition-all duration-300 relative font-sans"
    >
      <div>
        {/* Header Metadata */}
        <div className="flex items-center justify-between gap-3 mb-6 font-mono">
          <span className="text-xs font-bold text-[#39ff88] tracking-widest">
            PROJECT 0{index + 1}
          </span>
          <span className="px-3 py-1 rounded-full bg-[#141414] border border-white/10 text-white text-[11px] font-bold">
            {project.category}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-2xl font-black text-white group-hover:text-[#39ff88] transition-colors mb-2 font-mono">
          {project.title}
        </h3>
        <p className="text-xs font-bold text-[#737373] mb-4 font-mono">{project.subtitle}</p>
        <p className="text-sm text-[#e8e8e3] leading-relaxed mb-6 font-normal">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="mb-6 space-y-2">
          {project.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-[#e8e8e3] font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#39ff88] shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6 font-mono">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-2.5 py-1 rounded-md bg-[#141414] border border-white/10 text-white text-[11px] font-semibold">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-3 font-mono text-xs">
        <div className="flex items-center gap-2 flex-1">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="OPEN"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#39ff88] hover:bg-[#52ff97] text-[#050505] font-extrabold shadow-md transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>LIVE DEMO</span>
            </a>
          ) : (
            <span className="flex-1 text-center py-2.5 text-[11px] text-[#737373]">DEMO ON REQUEST</span>
          )}

          {project.caseStudy && (
            <button
              onClick={() => onOpenCaseStudy(project)}
              data-cursor="OPEN"
              className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#141414] hover:bg-[#1a1a1a] border border-white/10 text-white font-bold transition-all"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#39ff88]" />
              <span>CASE STUDY</span>
            </button>
          )}
        </div>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="↗"
          className="p-2.5 rounded-xl bg-[#141414] hover:bg-[#1a1a1a] border border-white/10 text-white transition-all"
          aria-label="GitHub Repo"
        >
          <Github className="w-4 h-4 text-[#39ff88]" />
        </a>
      </div>
    </motion.div>
  );
};
