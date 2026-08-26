"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Database, UserCheck, ShieldAlert, Sparkles, Filter } from "lucide-react";

interface FlowStep {
  step: string;
  label: string;
  subLabel: string;
}

interface ProjectArchitectureDiagramProps {
  projectId: string;
}

const ARCHITECTURE_FLOWS: Record<string, { title: string; steps: FlowStep[] }> = {
  "cinemind-movie-rec": {
    title: "CineMind ML Recommendation Engine Pipeline",
    steps: [
      { step: "01", label: "USER", subLabel: "Taste Profile" },
      { step: "02", label: "PREFERENCES", subLabel: "Genre Vectors" },
      { step: "03", label: "RECOMMENDATION ENGINE", subLabel: "Scikit-Learn TF-IDF" },
      { step: "04", label: "RANKING", subLabel: "Cosine Distance" },
      { step: "05", label: "MOVIES", subLabel: "Tailored Feed" },
    ],
  },
  "fraud-detection": {
    title: "FraudShield ML Risk Classification Pipeline",
    steps: [
      { step: "01", label: "TRANSACTION", subLabel: "CSV Batch Input" },
      { step: "02", label: "FEATURES", subLabel: "Pandas Imputation" },
      { step: "03", label: "XGBOOST MODEL", subLabel: "Boosted Trees" },
      { step: "04", label: "RISK SCORE", subLabel: "Probability Metric" },
      { step: "05", label: "DASHBOARD", subLabel: "Plotly Telemetry" },
    ],
  },
  "ai-job-platform": {
    title: "AI Job & Resume Parsing Microservice Pipeline",
    steps: [
      { step: "01", label: "APPLICANT / RECRUITER", subLabel: "Next.js UI" },
      { step: "02", label: "RESUME PDF", subLabel: "Payload Stream" },
      { step: "03", label: "SPRING PARSER", subLabel: "Java Extraction" },
      { step: "04", label: "MATCH MATRIX", subLabel: "Skill Taxonomy" },
      { step: "05", label: "DASHBOARD", subLabel: "Relevance Ranking" },
    ],
  },
};

export const ProjectArchitectureDiagram: React.FC<ProjectArchitectureDiagramProps> = ({ projectId }) => {
  const flow = ARCHITECTURE_FLOWS[projectId];

  if (!flow) return null;

  return (
    <div className="mt-6 p-5 rounded-2xl bg-slate-950/80 border border-slate-700/80 shadow-lg">
      <div className="flex items-center justify-between gap-2 mb-4 font-mono text-xs text-cyan-400 font-bold border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-cyan-400" />
          <span>{flow.title}</span>
        </div>
        <span className="text-[10px] text-slate-400 font-semibold uppercase">System Architecture</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 items-center">
        {flow.steps.map((item, index) => (
          <React.Fragment key={item.label}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.1 }}
              className="p-3 rounded-xl bg-slate-900 border border-slate-700/80 text-center font-mono hover:border-cyan-400/50 transition-colors shadow-sm"
            >
              <span className="text-[10px] font-bold text-slate-500 block mb-0.5">{item.step}</span>
              <span className="text-xs font-extrabold text-white block truncate">{item.label}</span>
              <span className="text-[10px] text-cyan-300 block truncate">{item.subLabel}</span>
            </motion.div>

            {index < flow.steps.length - 1 && (
              <div className="hidden sm:flex justify-center text-slate-600">
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400/70" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
