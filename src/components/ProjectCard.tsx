"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { ExternalLink, Github, BookOpen, CheckCircle2 } from "lucide-react";
import { Project } from "@/data/portfolioData";
import { ProjectFrontPageMock } from "./ProjectFrontPageMock";

interface ProjectCardProps {
  project: Project;
  index: number;
  accentColor: string;
  isAnyHovered: boolean;
  isActiveHovered: boolean;
  onOpenCaseStudy: (project: Project) => void;
  onMouseEnter: (e: React.MouseEvent) => void;
  onMouseLeave: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  accentColor,
  isAnyHovered,
  isActiveHovered,
  onOpenCaseStudy,
  onMouseEnter,
  onMouseLeave,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // 3D Tilt Motion Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

  // Cursor-driven image parallax offsets
  const imgX = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 25 });
  const imgY = useSpring(useTransform(y, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    onMouseEnter(e);
    if (!ref.current || shouldReduceMotion || "ontouchstart" in window) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeaveCombined = () => {
    x.set(0);
    y.set(0);
    onMouseLeave();
  };

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 40, clipPath: "inset(100% 0 0 0)" }}
      whileInView={{ opacity: 1, y: 0, clipPath: "inset(0 0 0 0)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.75, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      style={shouldReduceMotion ? {} : { rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeaveCombined}
      data-cursor="VIEW PROJECT"
      animate={{
        scale: isActiveHovered ? 1.02 : isAnyHovered ? 0.97 : 1,
        opacity: isAnyHovered && !isActiveHovered ? 0.45 : 1,
      }}
      className={`scanline-card group p-7 rounded-3xl bg-[#131513] border transition-all duration-300 relative font-sans flex flex-col justify-between h-full shadow-2xl ${
        isActiveHovered
          ? "border-[#3ef281] shadow-[#3ef281]/20 ring-1 ring-[#3ef281]/30 z-20"
          : "border-white/5 z-10"
      }`}
    >
      <div>
        {/* Front Page Visual Mock Panel with Image Parallax */}
        <motion.div
          style={shouldReduceMotion ? {} : { x: imgX, y: imgY }}
          className="mb-6 rounded-2xl overflow-hidden"
        >
          <ProjectFrontPageMock projectId={project.id} accentColor={accentColor} />
        </motion.div>

        {/* Header Metadata */}
        <div className="flex items-center justify-between gap-3 mb-4 font-mono text-xs">
          <span className="font-bold text-[#3ef281] tracking-widest">
            PROJECT 0{index + 1}
          </span>
          <span className="px-3 py-1 rounded-full bg-[#171917] border border-white/10 text-[#e9ece7] font-bold text-[11px]">
            {project.category}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-2xl font-black text-white group-hover:text-[#3ef281] transition-colors mb-2 font-mono">
          {project.title}
        </h3>
        <p className="text-xs font-bold text-[#8a938a] mb-4 font-mono">{project.subtitle}</p>
        <p className="text-sm text-[#e9ece7] leading-relaxed mb-6 font-normal">
          {project.description}
        </p>

        {/* Key Features */}
        <div className="mb-6 space-y-2">
          {project.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-[#e9ece7] font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#3ef281] shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Staggered Tech Stack Badges Entrance */}
        <div className="flex flex-wrap gap-1.5 mb-6 font-mono">
          {project.techStack.map((tech, techIdx) => (
            <motion.span
              key={tech}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 + techIdx * 0.04 }}
              className="px-2.5 py-1 rounded-md bg-[#171917] border border-white/10 text-[#e9ece7] text-[11px] font-semibold hover:border-[#3ef281] transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Footer CTAs */}
      <div className="pt-6 border-t border-white/10 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 font-mono text-xs">
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 flex-1 w-full sm:w-auto">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="OPEN"
              className="flex-1 flex items-center justify-center gap-2 py-3 min-h-[44px] rounded-xl bg-[#3ef281] hover:bg-[#59f493] text-[#0a0b0a] font-extrabold shadow-md transition-all hover:scale-[1.02]"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>LIVE DEMO</span>
            </a>
          ) : (
            <span className="flex-1 text-center py-3 min-h-[44px] flex items-center justify-center text-[11px] text-[#a3aca3]">DEMO ON REQUEST</span>
          )}

          {project.caseStudy && (
            <button
              onClick={() => onOpenCaseStudy(project)}
              data-cursor="OPEN"
              className="flex items-center justify-center gap-1.5 px-3.5 py-3 min-h-[44px] rounded-xl bg-[#171917] hover:bg-[#202420] border border-white/10 text-white font-bold transition-all hover:border-[#3ef281]"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#3ef281]" />
              <span>CASE STUDY</span>
            </button>
          )}
        </div>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="↗"
          className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-[#171917] hover:bg-[#202420] border border-white/10 text-white hover:text-[#3ef281] transition-all"
          aria-label="GitHub Repo"
        >
          <Github className="w-4 h-4 text-[#3ef281]" />
        </a>
      </div>
    </motion.div>
  );
};
