"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { ExternalLink, Github, BookOpen, Sparkles, CheckCircle2 } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onOpenCaseStudy }) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.1 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || shouldReduceMotion || "ontouchstart" in window) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rY = ((mouseX - width / 2) / width) * 4; // max 4 deg
    const rX = ((mouseY - height / 2) / height) * -4;

    rotateX.set(rX);
    rotateY.set(rY);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={shouldReduceMotion ? {} : { rotateX: springRotateX, rotateY: springRotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -6 }}
      data-cursor="VIEW"
      className="group p-8 rounded-3xl bg-[#101216] border border-white/10 hover:border-[#C7FF3D]/50 shadow-2xl flex flex-col justify-between h-full transition-all duration-300 relative font-sans"
    >
      <div>
        {/* Header Metadata */}
        <div className="flex items-center justify-between gap-3 mb-6 font-mono">
          <span className="text-xs font-black text-[#C7FF3D] tracking-widest">
            PROJECT 0{index + 1}
          </span>
          <span className="px-3 py-1 rounded-full bg-[#16191F] border border-white/10 text-white text-[11px] font-bold">
            {project.category}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-2xl font-black text-white group-hover:text-[#C7FF3D] transition-colors mb-2 font-display">
          {project.title}
        </h3>
        <p className="text-xs font-bold text-[#8A8F98] mb-4 font-mono">{project.subtitle}</p>
        <p className="text-sm text-[#F4F4F0] leading-relaxed mb-6 font-normal">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="mb-6 space-y-2">
          {project.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-[#F4F4F0] font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C7FF3D] shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-6 font-mono">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-2.5 py-1 rounded-md bg-[#16191F] border border-white/10 text-white text-[11px] font-semibold">
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
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#C7FF3D] hover:bg-[#d4ff66] text-[#08090B] font-extrabold shadow-md transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>LIVE DEMO</span>
            </a>
          ) : (
            <span className="flex-1 text-center py-2.5 text-[11px] text-[#8A8F98]">DEMO ON REQUEST</span>
          )}

          {project.caseStudy && (
            <button
              onClick={() => onOpenCaseStudy(project)}
              data-cursor="OPEN"
              className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#16191F] hover:bg-[#202530] border border-white/10 text-white font-bold transition-all"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#C7FF3D]" />
              <span>CASE STUDY</span>
            </button>
          )}
        </div>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="↗"
          className="p-2.5 rounded-xl bg-[#16191F] hover:bg-[#202530] border border-white/10 text-white transition-all"
          aria-label="GitHub Repo"
        >
          <Github className="w-4 h-4 text-[#C7FF3D]" />
        </a>
      </div>
    </motion.div>
  );
};
