"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, Eye, X, CheckCircle2, Award, Briefcase, GraduationCap } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const ResumeSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="resume" className="py-28 px-4 relative z-10 bg-[#0e1424]/60 border-y border-slate-700/80">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-xs sm:text-sm font-bold tracking-widest text-cyan-400 uppercase mb-3">
            Curriculum Vitae
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="gradient-text-pink">Resume</span>
          </h3>
          <p className="text-base text-slate-300 mt-3 max-w-lg mx-auto font-normal">
            Recruiter-friendly summary highlighting engineering capabilities, academic credentials, and project achievements.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 mx-auto mt-5 rounded-full" />
        </motion.div>

        {/* Main Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 sm:p-12 rounded-3xl glow-card border-slate-700/80 relative overflow-hidden shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 text-xs font-bold">
                <FileText className="w-4 h-4 text-cyan-400" />
                Updated 2026 Profile
              </div>

              <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
                {PERSONAL_INFO.name} — Resume Overview
              </h4>

              <p className="text-slate-200 text-base leading-relaxed font-normal">
                Full-Stack Software Engineer & Data Science Specialist skilled in React, Next.js, Node.js, Java, Python, and Machine Learning algorithms. Proven track record of developing live web products and data-driven dashboards.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 text-xs sm:text-sm text-slate-300 font-semibold pt-2">
                <span className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  BE IT + Data Science Honours
                </span>
                <span className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-pink-400" />
                  4 Live Vercel Apps
                </span>
                <span className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-cyan-400" />
                  Full-Stack & AI Stack
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3.5 w-full md:w-auto shrink-0">
              <a
                href="/resume.pdf"
                download="Aarti_Dinkar_Resume.pdf"
                className="flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 hover:from-cyan-300 hover:to-pink-400 text-slate-950 font-black text-sm shadow-xl shadow-cyan-500/30 transition-all hover:scale-105 focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF Resume</span>
              </a>

              <button
                onClick={() => setShowModal(true)}
                className="flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-100 hover:text-white font-bold text-sm transition-all focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Eye className="w-4 h-4 text-cyan-400" />
                <span>Quick View Resume</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Interactive Resume Preview Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-lg"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="glass-panel w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border-slate-700/90 p-6 sm:p-10 relative text-left shadow-2xl"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-6 right-6 p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content Header */}
              <div className="border-b border-slate-700/80 pb-6 mb-6">
                <h3 className="text-3xl font-extrabold text-white">{PERSONAL_INFO.name}</h3>
                <p className="text-base font-bold text-cyan-400 mt-1">{PERSONAL_INFO.headline}</p>
                <p className="text-xs text-slate-300 font-semibold mt-1">{PERSONAL_INFO.socials.email} • {PERSONAL_INFO.socials.location} • {PERSONAL_INFO.socials.github}</p>
              </div>

              {/* Modal Body Sections */}
              <div className="space-y-6 text-sm">
                {/* Education */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">Education & Specialization</h4>
                  <div className="space-y-3">
                    <div className="bg-slate-900 p-4 rounded-2xl border border-slate-700/80 shadow-md">
                      <div className="flex justify-between font-bold text-white text-base">
                        <span>BE in Information Technology</span>
                        <span className="text-xs text-cyan-300">Bachelor of Engineering</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200 mt-1.5 font-normal">Data structures, web engineering, database systems, object-oriented programming.</p>
                    </div>
                    <div className="bg-slate-900 p-4 rounded-2xl border border-slate-700/80 shadow-md">
                      <div className="flex justify-between font-bold text-white text-base">
                        <span>Honours in Data Science</span>
                        <span className="text-xs text-pink-300">Specialization</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200 mt-1.5 font-normal">Machine learning pipelines, XGBoost classification, Pandas analytics, statistical models.</p>
                    </div>
                  </div>
                </div>

                {/* Skills Overview */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">Technical Skills Summary</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-700/80">
                      <span className="font-bold text-white">Languages:</span> <span className="text-slate-200">Java, Python, JavaScript, TypeScript, SQL</span>
                    </div>
                    <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-700/80">
                      <span className="font-bold text-white">Frontend:</span> <span className="text-slate-200">React, Next.js, HTML5, CSS3, Tailwind CSS</span>
                    </div>
                    <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-700/80">
                      <span className="font-bold text-white">Backend:</span> <span className="text-slate-200">Node.js, Express.js, Spring Boot, REST APIs</span>
                    </div>
                    <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-700/80">
                      <span className="font-bold text-white">AI / ML & DB:</span> <span className="text-slate-200">Scikit-learn, Pandas, XGBoost, MongoDB, PostgreSQL</span>
                    </div>
                  </div>
                </div>

                {/* Featured Projects */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">Key Featured Projects</h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                    <li className="p-3.5 bg-slate-900 rounded-xl border border-slate-700/80">
                      <span className="font-bold text-white">AI Job/Resume Platform:</span> Full-stack Next.js/Node platform with AI resume parsing & candidate matching algorithms. (Live: java-job-portal.vercel.app)
                    </li>
                    <li className="p-3.5 bg-slate-900 rounded-xl border border-slate-700/80">
                      <span className="font-bold text-white">CineMind Movie Recommendation:</span> Next.js & Python Flask microservice utilizing ML content filtering. (Live: movie-recommendation01-green.vercel.app)
                    </li>
                    <li className="p-3.5 bg-slate-900 rounded-xl border border-slate-700/80">
                      <span className="font-bold text-white">Fraud Detection Dashboard:</span> Machine learning transaction risk analytics powered by XGBoost & Streamlit. (Live: fraud-detection-dashboard-ten.vercel.app)
                    </li>
                  </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-6 border-t border-slate-700/80 flex items-center justify-between">
                <a
                  href="/resume.pdf"
                  download="Aarti_Dinkar_Resume.pdf"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 hover:from-cyan-300 hover:to-pink-400 text-slate-950 font-black text-xs sm:text-sm shadow-md"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2.5 text-xs font-bold text-slate-300 hover:text-white"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

