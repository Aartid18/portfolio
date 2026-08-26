"use client";

import React from "react";
import { Layout, Server, BrainCircuit, ShieldAlert, Lock, Activity, Sparkles } from "lucide-react";

interface ProjectFrontPageMockProps {
  projectId: string;
  accentColor: string;
}

export const ProjectFrontPageMock: React.FC<ProjectFrontPageMockProps> = ({ projectId, accentColor }) => {
  if (projectId === "ai-job-platform") {
    return (
      <div className="w-full h-44 sm:h-52 rounded-2xl bg-[#0a0b0a] border border-white/10 p-4 font-mono flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.03] transition-transform duration-300">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3ef281]" />
            <span className="font-bold text-white">AI_JOB_PORTAL_V2</span>
          </div>
          <span className="text-[#8a938a]">PARSER: READY</span>
        </div>

        {/* Hero Front Page Mock Layout */}
        <div className="space-y-2 py-2">
          <div className="text-xs font-black text-white flex items-center gap-2 font-display">
            <BrainCircuit className="w-4 h-4 text-[#3ef281]" />
            <span>AI Resume Match Score: 94.8%</span>
          </div>
          <div className="w-full h-1.5 bg-[#171917] rounded-full overflow-hidden">
            <div className="h-full bg-[#3ef281] w-[94%]" />
          </div>
          <div className="grid grid-cols-3 gap-1.5 text-[9px] pt-1">
            <div className="p-1.5 rounded-lg bg-[#131513] border border-white/5 text-[#8a938a]">
              React/Next.js
            </div>
            <div className="p-1.5 rounded-lg bg-[#131513] border border-white/5 text-[#8a938a]">
              Spring Boot
            </div>
            <div className="p-1.5 rounded-lg bg-[#131513] border border-white/5 text-[#8a938a]">
              MongoDB
            </div>
          </div>
        </div>

        {/* Footer telemetry */}
        <div className="pt-2 border-t border-white/10 flex justify-between text-[9px] text-[#8a938a]">
          <span>Role-Based Auth</span>
          <span className="text-[#3ef281] font-bold">● Active Deployment</span>
        </div>
      </div>
    );
  }

  if (projectId === "cinemind-movie-rec") {
    return (
      <div className="w-full h-44 sm:h-52 rounded-2xl bg-[#0a0b0a] border border-white/10 p-4 font-mono flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.03] transition-transform duration-300">
        <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7fdca4]" />
            <span className="font-bold text-white">CINEMIND_RECOMMENDER</span>
          </div>
          <span className="text-[#8a938a]">TF-IDF MATRIX</span>
        </div>

        <div className="space-y-2 py-2">
          <div className="text-xs font-black text-white flex items-center gap-2 font-display">
            <Sparkles className="w-4 h-4 text-[#7fdca4]" />
            <span>Cosine Similarity Inference</span>
          </div>
          <div className="p-2 rounded-xl bg-[#131513] border border-white/10 text-[10px] text-[#e9ece7] flex justify-between">
            <span>Flask ML Microservice</span>
            <span className="text-[#7fdca4] font-bold">12ms</span>
          </div>
          <div className="flex gap-1.5 text-[9px]">
            <span className="px-2 py-1 rounded-md bg-[#171917] border border-white/5 text-[#8a938a]">PostgreSQL</span>
            <span className="px-2 py-1 rounded-md bg-[#171917] border border-white/5 text-[#8a938a]">Prisma ORM</span>
          </div>
        </div>

        <div className="pt-2 border-t border-white/10 flex justify-between text-[9px] text-[#8a938a]">
          <span>Personalized Taste Vectors</span>
          <span className="text-[#7fdca4] font-bold">● Live Recommender</span>
        </div>
      </div>
    );
  }

  if (projectId === "fraud-detection") {
    return (
      <div className="w-full h-44 sm:h-52 rounded-2xl bg-[#0a0b0a] border border-white/10 p-4 font-mono flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.03] transition-transform duration-300">
        <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4a5a4f]" />
            <span className="font-bold text-white">FRAUDSHIELD_ANALYTICS</span>
          </div>
          <span className="text-[#3ef281]">RISK: LOW (0.02)</span>
        </div>

        <div className="space-y-2 py-2">
          <div className="text-xs font-black text-white flex items-center gap-2 font-display">
            <ShieldAlert className="w-4 h-4 text-[#3ef281]" />
            <span>XGBoost Financial Risk Classification</span>
          </div>
          <div className="grid grid-cols-2 gap-1.5 text-[9px]">
            <div className="p-2 rounded-xl bg-[#131513] border border-white/5 text-[#8a938a]">
              Streamlit Dashboard
            </div>
            <div className="p-2 rounded-xl bg-[#131513] border border-white/5 text-[#8a938a]">
              Plotly Telemetry
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-white/10 flex justify-between text-[9px] text-[#8a938a]">
          <span>Transaction CSV Stream</span>
          <span className="text-[#3ef281] font-bold">● XGBoost Active</span>
        </div>
      </div>
    );
  }

  if (projectId === "ai-ecommerce") {
    return (
      <div className="w-full h-44 sm:h-52 rounded-2xl bg-[#0a0b0a] border border-white/10 p-4 font-mono flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.03] transition-transform duration-300">
        <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#5ea88a]" />
            <span className="font-bold text-white">AI_ECOMMERCE_MARKET</span>
          </div>
          <span className="text-[#8a938a]">PRODUCT CATALOG</span>
        </div>

        <div className="space-y-2 py-2">
          <div className="text-xs font-black text-white flex items-center gap-2 font-display">
            <Layout className="w-4 h-4 text-[#5ea88a]" />
            <span>Smart Catalog & Recommendation Engine</span>
          </div>
          <div className="p-2 rounded-xl bg-[#131513] border border-white/5 text-[10px] text-[#e9ece7] flex justify-between">
            <span>Customer Cart Management</span>
            <span className="text-[#5ea88a] font-bold">Live Portal</span>
          </div>
        </div>

        <div className="pt-2 border-t border-white/10 flex justify-between text-[9px] text-[#8a938a]">
          <span>MongoDB Schemas</span>
          <span className="text-[#5ea88a] font-bold">● Live Storefront</span>
        </div>
      </div>
    );
  }

  // Secure Print Link default mock
  return (
    <div className="w-full h-44 sm:h-52 rounded-2xl bg-[#0a0b0a] border border-white/10 p-4 font-mono flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.03] transition-transform duration-300">
      <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#3d453f]" />
          <span className="font-bold text-white">SECURE_PRINT_PAYLOAD</span>
        </div>
        <span className="text-[#3ef281]">AES-256 ENCRYPTED</span>
      </div>

      <div className="space-y-2 py-2">
        <div className="text-xs font-black text-white flex items-center gap-2 font-display">
          <Lock className="w-4 h-4 text-[#3ef281]" />
          <span>Temporal Expiring Payload Link</span>
        </div>
        <div className="p-2 rounded-xl bg-[#131513] border border-white/5 text-[10px] text-[#e9ece7]">
          Temporal Access Control Token
        </div>
      </div>

      <div className="pt-2 border-t border-white/10 flex justify-between text-[9px] text-[#8a938a]">
        <span>Firebase Asset Storage</span>
        <span className="text-[#3ef281] font-bold">● API Protected</span>
      </div>
    </div>
  );
};
