"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, CheckCircle2, Copy, Check, ArrowRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { scrollEmergeUp } from "@/lib/motionConfig";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.socials.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-32 px-4 relative z-10 bg-[#050505] border-t border-white/10 font-mono">
      <div className="max-w-6xl mx-auto">
        {/* Section Climax Header */}
        <motion.div
          variants={scrollEmergeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#39ff88] block mb-3">
            05 / GET IN TOUCH
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter leading-tight">
            HAVE A PROBLEM
            <br />
            <span className="text-[#39ff88]">WORTH BUILDING?</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm sm:text-base font-extrabold text-[#e8e8e3]">
            <span>START A CONVERSATION</span>
            <ArrowRight className="w-5 h-5 text-[#39ff88]" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Communication Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#0d0d0d] border border-white/10 space-y-6 shadow-2xl">
              <h4 className="text-2xl font-black text-white">Direct Channels</h4>
              <p className="text-xs text-[#737373] leading-relaxed font-sans font-normal">
                Open for full-stack engineering roles, applied AI/ML system collaborations, and technical consultations.
              </p>

              {/* Email Card */}
              <div className="p-4.5 rounded-2xl bg-[#050505] border border-white/10 flex items-center justify-between gap-3 shadow-md">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-3 rounded-xl bg-[#39ff88]/10 text-[#39ff88] border border-[#39ff88]/30 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] text-[#737373] block">EMAIL</span>
                    <a href={`mailto:${PERSONAL_INFO.socials.email}`} className="text-xs font-bold text-white hover:text-[#39ff88] truncate block">
                      {PERSONAL_INFO.socials.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  data-cursor="OPEN"
                  className="p-2.5 rounded-xl bg-[#141414] text-white hover:text-[#39ff88] border border-white/10 transition-colors shrink-0"
                  title="Copy Email"
                >
                  {emailCopied ? <Check className="w-4 h-4 text-[#39ff88]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Link */}
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="↗"
                className="p-4.5 rounded-2xl bg-[#050505] border border-white/10 flex items-center justify-between gap-3 hover:border-[#39ff88]/50 transition-colors group shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#39ff88]/10 text-[#39ff88] border border-[#39ff88]/30">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#737373] block">LINKEDIN</span>
                    <span className="text-xs font-bold text-white group-hover:text-[#39ff88]">
                      linkedin.com/in/aarti-dinkar-534b93312
                    </span>
                  </div>
                </div>
              </a>

              {/* GitHub Link */}
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="↗"
                className="p-4.5 rounded-2xl bg-[#050505] border border-white/10 flex items-center justify-between gap-3 hover:border-[#39ff88]/50 transition-colors group shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#39ff88]/10 text-[#39ff88] border border-[#39ff88]/30">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#737373] block">GITHUB REPOSITORIES</span>
                    <span className="text-xs font-bold text-white group-hover:text-[#39ff88]">
                      github.com/Aartid18
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#0d0d0d] border border-white/10 shadow-2xl">
            <h4 className="text-2xl font-black text-white mb-6">Send a Message</h4>

            {status === "success" ? (
              <div className="p-8 rounded-2xl bg-[#39ff88]/10 border border-[#39ff88]/30 text-center space-y-3 shadow-lg">
                <CheckCircle2 className="w-12 h-12 text-[#39ff88] mx-auto animate-bounce" />
                <h5 className="text-lg font-bold text-white">Message Sent Successfully</h5>
                <p className="text-xs text-[#737373] font-sans">Thank you for reaching out. Aarti will respond shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#737373] mb-2">YOUR NAME</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#050505] border border-white/10 text-white placeholder-[#737373] focus:outline-none focus:border-[#39ff88] text-xs font-semibold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#737373] mb-2">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#050505] border border-white/10 text-white placeholder-[#737373] focus:outline-none focus:border-[#39ff88] text-xs font-semibold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#737373] mb-2">SUBJECT</label>
                  <input
                    type="text"
                    required
                    placeholder="Project Inquiry / Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#050505] border border-white/10 text-white placeholder-[#737373] focus:outline-none focus:border-[#39ff88] text-xs font-semibold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#737373] mb-2">MESSAGE</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hello Aarti, I reviewed your portfolio and would like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#050505] border border-white/10 text-white placeholder-[#737373] focus:outline-none focus:border-[#39ff88] text-xs font-semibold transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  data-cursor="OPEN"
                  className="w-full py-4 rounded-full bg-[#39ff88] hover:bg-[#52ff97] text-[#050505] font-black text-xs shadow-xl shadow-[#39ff88]/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === "submitting" ? "SENDING..." : "SEND MESSAGE"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
