"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, Eye, X } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { scrollEmergeUp } from "@/lib/motionConfig";

export const ResumeSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="resume" className="py-32 px-4 relative z-10 bg-[#050505] border-t border-white/10 font-mono">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={scrollEmergeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#39ff88] block mb-3">
            04 / JOURNEY & CREDENTIALS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            THE ENGINEERING <span className="text-[#39ff88]">PROFILE</span>
          </h2>
          <p className="text-xs text-[#737373] mt-3 max-w-lg mx-auto font-sans">
            Academic degree qualifications, data science specialization, and engineering timeline.
          </p>
        </motion.div>

        {/* Vertical Self-Drawing Line Timeline */}
        <div className="mb-16 relative border-l-2 border-white/10 ml-4 sm:ml-32 space-y-10">
          {/* Timeline Item 1 */}
          <div className="relative pl-8 sm:pl-10">
            <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#39ff88] ring-4 ring-[#050505]" />
            <div className="sm:absolute sm:-left-32 sm:top-1 text-xs font-bold text-[#39ff88] mb-2 sm:mb-0">
              2022 — 2026
            </div>

            <div className="p-7 rounded-3xl bg-[#0d0d0d] border border-white/10 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                <h4 className="text-xl font-black text-white">BE in Information Technology</h4>
                <span className="px-3 py-1 rounded-full bg-[#39ff88]/15 text-[#39ff88] text-xs font-bold">
                  8.4 CGPA
                </span>
              </div>
              <p className="text-xs text-[#737373] mb-3">Bachelor of Engineering</p>
              <p className="text-xs text-[#e8e8e3] leading-relaxed font-sans">
                Algorithms, object-oriented software design, web engineering lifecycle, data structures, and database systems.
              </p>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="relative pl-8 sm:pl-10">
            <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#39ff88] ring-4 ring-[#050505]" />
            <div className="sm:absolute sm:-left-32 sm:top-1 text-xs font-bold text-[#39ff88] mb-2 sm:mb-0">
              SPECIALIZATION
            </div>

            <div className="p-7 rounded-3xl bg-[#0d0d0d] border border-white/10 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                <h4 className="text-xl font-black text-white">Honours in Data Science</h4>
                <span className="px-3 py-1 rounded-full bg-[#39ff88]/15 text-[#39ff88] text-xs font-bold">
                  Honours Degree
                </span>
              </div>
              <p className="text-xs text-[#737373] mb-3">Specialized Academic Program</p>
              <p className="text-xs text-[#e8e8e3] leading-relaxed font-sans">
                Predictive statistical modeling, machine learning pipelines (XGBoost, Scikit-learn), Pandas analytics, and Plotly telemetry.
              </p>
            </div>
          </div>
        </div>

        {/* Profile Card & Action Buttons */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0d0d0d] border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#39ff88]/10 border border-[#39ff88]/30 text-[#39ff88] text-xs font-bold">
                <FileText className="w-4 h-4" />
                VERIFIED RESUME
              </div>

              <h4 className="text-2xl sm:text-3xl font-black text-white">
                {PERSONAL_INFO.name} — Full Stack & Applied AI Profile
              </h4>

              <p className="text-sm text-[#e8e8e3] leading-relaxed font-sans">
                Full-Stack Software Engineer & Data Science Specialist skilled in React, Next.js, Node.js, Java, Python, and Machine Learning algorithms. Proven track record of developing live web products and data-driven dashboards.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3.5 w-full md:w-auto shrink-0 text-xs">
              <a
                href="/resume.pdf"
                download="Aarti_Dinkar_Resume.pdf"
                data-cursor="OPEN"
                className="flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-[#39ff88] hover:bg-[#52ff97] text-[#050505] font-black shadow-xl shadow-[#39ff88]/20 transition-all hover:scale-[1.02]"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME ↗</span>
              </a>

              <button
                onClick={() => setShowModal(true)}
                data-cursor="OPEN"
                className="flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-[#141414] hover:bg-[#1a1a1a] border border-white/10 text-white font-bold transition-all"
              >
                <Eye className="w-4 h-4 text-[#39ff88]" />
                <span>QUICK VIEW</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/90 backdrop-blur-xl font-sans"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#0d0d0d] border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl font-mono"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-[#141414] border border-white/10 text-white hover:text-[#39ff88] transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="border-b border-white/10 pb-6 mb-6">
                <h3 className="text-3xl font-black text-white">{PERSONAL_INFO.name}</h3>
                <p className="text-sm font-bold text-[#39ff88] mt-1">{PERSONAL_INFO.headline}</p>
                <p className="text-xs text-[#737373] mt-1">{PERSONAL_INFO.socials.email} • {PERSONAL_INFO.socials.location}</p>
              </div>

              <div className="space-y-6 text-xs sm:text-sm text-[#e8e8e3]">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#39ff88] mb-3">Academic Qualifications</h4>
                  <div className="p-4 rounded-2xl bg-[#050505] border border-white/10 space-y-2">
                    <div className="flex justify-between font-bold text-white text-base">
                      <span>BE in Information Technology</span>
                      <span className="text-[#39ff88]">8.4 CGPA</span>
                    </div>
                    <p className="text-xs text-[#737373]">Core computer science, data structures, web engineering, database systems.</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#39ff88] mb-3">Core Stack Summary</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 bg-[#050505] rounded-xl border border-white/10">
                      <strong className="text-white">Languages:</strong> Java, Python, JS, TS, SQL
                    </div>
                    <div className="p-3.5 bg-[#050505] rounded-xl border border-white/10">
                      <strong className="text-white">Full Stack:</strong> React, Next.js, Node.js, Express, Spring Boot
                    </div>
                    <div className="p-3.5 bg-[#050505] rounded-xl border border-white/10">
                      <strong className="text-white">AI / ML:</strong> XGBoost, Scikit-learn, Pandas, Streamlit
                    </div>
                    <div className="p-3.5 bg-[#050505] rounded-xl border border-white/10">
                      <strong className="text-white">Databases:</strong> MongoDB, PostgreSQL, MySQL, Prisma
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs">
                <a
                  href="/resume.pdf"
                  download="Aarti_Dinkar_Resume.pdf"
                  className="px-6 py-3 rounded-full bg-[#39ff88] text-[#050505] font-extrabold flex items-center gap-2 shadow-md"
                >
                  <Download className="w-4 h-4" /> Download PDF
                </a>
                <button onClick={() => setShowModal(false)} className="text-[#737373] hover:text-white font-bold">
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
