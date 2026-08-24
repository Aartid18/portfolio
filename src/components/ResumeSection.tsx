"use client";

import React, { useState } from "react";
import { FileText, Download, Eye, X, CheckCircle2, Award, Briefcase, GraduationCap } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const ResumeSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="resume" className="py-24 px-4 relative z-10 bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-cyan-400 uppercase mb-2">
            Curriculum Vitae
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="gradient-text">Resume</span>
          </h3>
          <p className="text-sm text-slate-400 mt-2 max-w-lg mx-auto">
            Recruiter-friendly summary highlighting engineering capabilities, academic credentials, and project achievements.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Main Resume Card */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl glow-card border-slate-800 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold">
                <FileText className="w-3.5 h-3.5" />
                Updated 2026 Profile
              </div>

              <h4 className="text-2xl font-bold text-white">
                {PERSONAL_INFO.name} — Resume Overview
              </h4>

              <p className="text-slate-300 text-sm leading-relaxed">
                Full-Stack Software Engineer & Data Science Specialist skilled in React, Next.js, Node.js, Java, Python, and Machine Learning algorithms. Proven track record of developing live web products and data-driven dashboards.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  BE IT + Data Science Honours
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-cyan-400" />
                  4 Live Vercel Apps
                </span>
                <span className="flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-cyan-400" />
                  Full-Stack & AI Stack
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
              <a
                href="/resume.pdf"
                download="Aarti_Dinkar_Resume.pdf"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02]"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF Resume</span>
              </a>

              <button
                onClick={() => setShowModal(true)}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white font-semibold text-sm transition-all"
              >
                <Eye className="w-4 h-4 text-cyan-400" />
                <span>Quick View Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Resume Preview Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-panel w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border-slate-700 p-6 sm:p-8 relative text-left">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content Header */}
            <div className="border-b border-slate-800 pb-6 mb-6">
              <h3 className="text-2xl font-bold text-white">{PERSONAL_INFO.name}</h3>
              <p className="text-sm font-medium text-cyan-400">{PERSONAL_INFO.headline}</p>
              <p className="text-xs text-slate-400 mt-1">{PERSONAL_INFO.socials.email} • {PERSONAL_INFO.socials.location} • {PERSONAL_INFO.socials.github}</p>
            </div>

            {/* Modal Body Sections */}
            <div className="space-y-6 text-sm">
              {/* Education */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">Education & Specialization</h4>
                <div className="space-y-2">
                  <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                    <div className="flex justify-between font-semibold text-white">
                      <span>BE in Information Technology</span>
                      <span className="text-xs text-slate-400">Bachelor of Engineering</span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1">Data structures, web engineering, database systems, object-oriented programming.</p>
                  </div>
                  <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                    <div className="flex justify-between font-semibold text-white">
                      <span>Honours in Data Science</span>
                      <span className="text-xs text-slate-400">Specialization</span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1">Machine learning pipelines, XGBoost classification, Pandas analytics, statistical models.</p>
                  </div>
                </div>
              </div>

              {/* Skills Overview */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">Technical Skills Summary</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800">
                    <span className="font-semibold text-slate-200">Languages:</span> Java, Python, JavaScript, TypeScript, SQL
                  </div>
                  <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800">
                    <span className="font-semibold text-slate-200">Frontend:</span> React, Next.js, HTML5, CSS3, Tailwind CSS
                  </div>
                  <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800">
                    <span className="font-semibold text-slate-200">Backend:</span> Node.js, Express.js, Spring Boot, REST APIs
                  </div>
                  <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800">
                    <span className="font-semibold text-slate-200">AI / ML & DB:</span> Scikit-learn, Pandas, XGBoost, MongoDB, PostgreSQL
                  </div>
                </div>
              </div>

              {/* Featured Projects */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">Key Featured Projects</h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="p-3 bg-slate-900/40 rounded-xl border border-slate-800">
                    <span className="font-bold text-white">AI Job/Resume Platform:</span> Full-stack Next.js/Node platform with AI resume parsing & candidate matching algorithms. (Live: java-job-portal.vercel.app)
                  </li>
                  <li className="p-3 bg-slate-900/40 rounded-xl border border-slate-800">
                    <span className="font-bold text-white">CineMind Movie Recommendation:</span> Next.js & Python Flask microservice utilizing ML content filtering. (Live: movie-recommendation01-green.vercel.app)
                  </li>
                  <li className="p-3 bg-slate-900/40 rounded-xl border border-slate-800">
                    <span className="font-bold text-white">Fraud Detection Dashboard:</span> Machine learning transaction risk analytics powered by XGBoost & Streamlit. (Live: fraud-detection-dashboard-ten.vercel.app)
                  </li>
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
              <a
                href="/resume.pdf"
                download="Aarti_Dinkar_Resume.pdf"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
