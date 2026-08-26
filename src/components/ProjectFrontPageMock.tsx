"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layout, Server, BrainCircuit, ShieldAlert, Lock, Activity, Sparkles, Film, Database, FileText } from "lucide-react";

interface ProjectFrontPageMockProps {
  projectId: string;
  accentColor: string;
}

export const ProjectFrontPageMock: React.FC<ProjectFrontPageMockProps> = ({ projectId, accentColor }) => {
  // 1. AI Job Platform Signature: Data scanning line & analytical match telemetry
  if (projectId === "ai-job-platform") {
    return (
      <div className="w-full h-48 sm:h-56 rounded-2xl bg-[#0a0b0a] border border-white/10 p-4 font-mono flex flex-col justify-between relative overflow-hidden group-hover:border-[#3ef281]/60 transition-all duration-300">
        {/* Scanning Line Animation */}
        <motion.div
          className="absolute left-0 right-0 h-0.5 bg-[#3ef281] shadow-[0_0_12px_#3ef281] z-20 pointer-events-none opacity-0 group-hover:opacity-100"
          animate={{ y: [0, 180, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        />

        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px] relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3ef281] animate-pulse" />
            <span className="font-bold text-white">AI_JOB_MATCH_ENGINE_V2</span>
          </div>
          <span className="text-[#8a938a]">RBAC API: ONLINE</span>
        </div>

        {/* Hero Front Page Mock Content */}
        <div className="space-y-2.5 py-2 relative z-10">
          <div className="text-xs font-black text-white flex items-center justify-between font-display">
            <span className="flex items-center gap-2">
              <BrainCircuit className="w-4 h-4 text-[#3ef281]" />
              Resume Parser Match Score
            </span>
            <span className="text-[#3ef281] font-bold tabular-data">94.8%</span>
          </div>

          <div className="w-full h-1.5 bg-[#171917] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#3ef281]"
              initial={{ width: "0%" }}
              whileInView={{ width: "94.8%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>

          <div className="grid grid-cols-3 gap-1.5 text-[9px] pt-1">
            <div className="p-1.5 rounded-lg bg-[#131513] border border-white/5 text-[#8a938a] text-center">
              React/Next.js
            </div>
            <div className="p-1.5 rounded-lg bg-[#131513] border border-white/5 text-[#8a938a] text-center">
              Spring Boot
            </div>
            <div className="p-1.5 rounded-lg bg-[#131513] border border-white/5 text-[#8a938a] text-center">
              MongoDB Atlas
            </div>
          </div>
        </div>

        {/* Footer telemetry */}
        <div className="pt-2 border-t border-white/10 flex justify-between text-[9px] text-[#8a938a] relative z-10">
          <span>Candidate Match Taxonomy</span>
          <span className="text-[#3ef281] font-bold">● Microservice Active</span>
        </div>
      </div>
    );
  }

  // 2. CineMind Signature: Cinematic film frame & TF-IDF similarity score
  if (projectId === "cinemind-movie-rec") {
    return (
      <div className="w-full h-48 sm:h-56 rounded-2xl bg-[#0a0b0a] border border-white/10 p-4 font-mono flex flex-col justify-between relative overflow-hidden group-hover:border-[#7fdca4]/60 transition-all duration-300">
        <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px]">
          <div className="flex items-center gap-2">
            <Film className="w-3.5 h-3.5 text-[#7fdca4]" />
            <span className="font-bold text-white">CINEMIND_RECOMMENDER</span>
          </div>
          <span className="text-[#8a938a]">TF-IDF VECTOR</span>
        </div>

        <div className="space-y-2 py-2">
          <div className="text-xs font-black text-white flex items-center justify-between font-display">
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#7fdca4]" />
              Cosine Similarity Engine
            </span>
            <span className="text-[#7fdca4] font-bold tabular-data">12ms</span>
          </div>

          <div className="p-2.5 rounded-xl bg-[#131513] border border-white/10 text-[10px] text-[#e9ece7] flex justify-between items-center">
            <span>Python Flask Microservice</span>
            <span className="text-[#7fdca4] font-bold">Vector Rank: 0.92</span>
          </div>

          <div className="flex gap-1.5 text-[9px]">
            <span className="px-2 py-1 rounded-md bg-[#171917] border border-white/5 text-[#8a938a]">PostgreSQL</span>
            <span className="px-2 py-1 rounded-md bg-[#171917] border border-white/5 text-[#8a938a]">Prisma ORM</span>
            <span className="px-2 py-1 rounded-md bg-[#171917] border border-white/5 text-[#7fdca4]">Scikit-learn</span>
          </div>
        </div>

        <div className="pt-2 border-t border-white/10 flex justify-between text-[9px] text-[#8a938a]">
          <span>Taste Vector Match</span>
          <span className="text-[#7fdca4] font-bold">● ML Model Ready</span>
        </div>
      </div>
    );
  }

  // 3. FraudShield Signature: XGBoost risk score indicator & live telemetry pulse
  if (projectId === "fraud-detection") {
    return (
      <div className="w-full h-48 sm:h-56 rounded-2xl bg-[#0a0b0a] border border-white/10 p-4 font-mono flex flex-col justify-between relative overflow-hidden group-hover:border-[#3ef281]/60 transition-all duration-300">
        <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3ef281] animate-ping" />
            <span className="font-bold text-white">FRAUDSHIELD_CLASSIFIER</span>
          </div>
          <span className="text-[#3ef281] font-bold tabular-data">RISK SCORE: 0.02 LOW</span>
        </div>

        <div className="space-y-2 py-2">
          <div className="text-xs font-black text-white flex items-center gap-2 font-display">
            <ShieldAlert className="w-4 h-4 text-[#3ef281]" />
            <span>XGBoost Financial Risk Telemetry</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[9px]">
            <div className="p-2 rounded-xl bg-[#131513] border border-white/5 text-[#8a938a] flex items-center justify-between">
              <span>Streamlit UI</span>
              <Activity className="w-3 h-3 text-[#3ef281]" />
            </div>
            <div className="p-2 rounded-xl bg-[#131513] border border-white/5 text-[#8a938a] flex items-center justify-between">
              <span>Plotly Telemetry</span>
              <span className="text-[#3ef281]">Active</span>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-white/10 flex justify-between text-[9px] text-[#8a938a]">
          <span>Transaction CSV Batch Stream</span>
          <span className="text-[#3ef281] font-bold">● Classifier Online</span>
        </div>
      </div>
    );
  }

  // 4. AI E-Commerce Signature: Product catalog matrix & recommendation badge
  if (projectId === "ai-ecommerce") {
    return (
      <div className="w-full h-48 sm:h-56 rounded-2xl bg-[#0a0b0a] border border-white/10 p-4 font-mono flex flex-col justify-between relative overflow-hidden group-hover:border-[#5ea88a]/60 transition-all duration-300">
        <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px]">
          <div className="flex items-center gap-2">
            <Layout className="w-3.5 h-3.5 text-[#5ea88a]" />
            <span className="font-bold text-white">AI_ECOMMERCE_PORTAL</span>
          </div>
          <span className="text-[#8a938a]">STOREFRONT</span>
        </div>

        <div className="space-y-2 py-2">
          <div className="text-xs font-black text-white flex items-center gap-2 font-display">
            <Sparkles className="w-4 h-4 text-[#5ea88a]" />
            <span>Smart AI Related Product Recommendations</span>
          </div>
          <div className="p-2.5 rounded-xl bg-[#131513] border border-white/5 text-[10px] text-[#e9ece7] flex justify-between items-center">
            <span>Customer Cart Management</span>
            <span className="text-[#5ea88a] font-bold">Express API</span>
          </div>
        </div>

        <div className="pt-2 border-t border-white/10 flex justify-between text-[9px] text-[#8a938a]">
          <span>MongoDB High Throughput</span>
          <span className="text-[#5ea88a] font-bold">● Live Portal</span>
        </div>
      </div>
    );
  }

  // 5. Secure Print Link Signature: Encryption token & temporary expiration stream
  return (
    <div className="w-full h-48 sm:h-56 rounded-2xl bg-[#0a0b0a] border border-white/10 p-4 font-mono flex flex-col justify-between relative overflow-hidden group-hover:border-[#3ef281]/60 transition-all duration-300">
      <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px]">
        <div className="flex items-center gap-2">
          <Lock className="w-3.5 h-3.5 text-[#3ef281]" />
          <span className="font-bold text-white">SECURE_PRINT_PAYLOAD</span>
        </div>
        <span className="text-[#3ef281]">AES-256 ENCRYPTED</span>
      </div>

      <div className="space-y-2 py-2">
        <div className="text-xs font-black text-white flex items-center gap-2 font-display">
          <FileText className="w-4 h-4 text-[#3ef281]" />
          <span>Temporal Expiring Encrypted Link Generator</span>
        </div>
        <div className="p-2.5 rounded-xl bg-[#131513] border border-white/5 text-[10px] text-[#e9ece7] flex justify-between items-center">
          <span>Temporal Token Access Control</span>
          <span className="text-[#3ef281] font-bold">Firebase Shield</span>
        </div>
      </div>

      <div className="pt-2 border-t border-white/10 flex justify-between text-[9px] text-[#8a938a]">
        <span>AES-256 Bit Cipher Payload</span>
        <span className="text-[#3ef281] font-bold">● API Protected</span>
      </div>
    </div>
  );
};
