"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, CheckCircle2, Copy, Check, Sparkles, MessageSquare } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { FadeIn, MagneticButton } from "./motion/MotionPrimitives";

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
    <section id="contact" className="py-28 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn direction="up" className="text-center mb-16">
          <h2 className="text-xs sm:text-sm font-bold tracking-widest text-cyan-400 uppercase mb-3 font-mono">
            Get In Touch
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Have a problem worth building? <br className="hidden sm:block" />
            <span className="gradient-text">Let&apos;s turn it into something useful.</span>
          </h3>
          <p className="text-base text-slate-300 mt-3 max-w-xl mx-auto font-normal">
            Open for Full Stack Developer & Applied AI engineering opportunities, technical discussions, or software collaborations.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 mx-auto mt-5 rounded-full" />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Column */}
          <FadeIn direction="left" className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-3xl glow-card border-slate-700/80 space-y-6 shadow-2xl">
              <h4 className="text-2xl font-black text-white mb-2">Direct Communication</h4>
              <p className="text-slate-200 text-sm leading-relaxed font-normal">
                Reach out directly via email or connect on LinkedIn and GitHub. Response guaranteed within 24 hours.
              </p>

              {/* Email Box */}
              <div className="p-4.5 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-between gap-3.5 shadow-md">
                <div className="flex items-center gap-3.5 overflow-hidden">
                  <div className="p-3 rounded-xl bg-cyan-500/15 text-cyan-400 border border-cyan-400/30 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-xs text-slate-300 font-bold font-mono">Email Address</div>
                    <a href={`mailto:${PERSONAL_INFO.socials.email}`} className="text-sm font-extrabold text-white hover:text-cyan-300 truncate block font-mono">
                      {PERSONAL_INFO.socials.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-slate-800 text-slate-200 hover:text-cyan-300 border border-slate-700 transition-colors shrink-0 focus-visible:ring-2 focus-visible:ring-cyan-400"
                  title="Copy email address"
                >
                  {emailCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Box */}
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4.5 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-between gap-3.5 hover:border-cyan-400/50 transition-colors group shadow-md"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-blue-500/15 text-blue-400 border border-blue-400/30">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-300 font-bold font-mono">LinkedIn Profile</div>
                    <div className="text-sm font-extrabold text-white group-hover:text-cyan-300 font-mono">
                      linkedin.com/in/aarti-dinkar-534b93312
                    </div>
                  </div>
                </div>
              </a>

              {/* GitHub Box */}
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4.5 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-between gap-3.5 hover:border-cyan-400/50 transition-colors group shadow-md"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-pink-500/15 text-pink-400 border border-pink-400/30">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-300 font-bold font-mono">GitHub Repositories</div>
                    <div className="text-sm font-extrabold text-white group-hover:text-cyan-300 font-mono">
                      github.com/Aartid18
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </FadeIn>

          {/* Contact Form Column */}
          <FadeIn direction="right" className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl glow-card border-slate-700/80 shadow-2xl">
            <h4 className="text-2xl font-black text-white mb-6">Send a Message</h4>

            {status === "success" ? (
              <div className="p-8 rounded-2xl bg-emerald-500/15 border border-emerald-400/40 text-center space-y-3 shadow-lg">
                <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto animate-bounce" />
                <h5 className="text-xl font-extrabold text-white">Message Sent Successfully!</h5>
                <p className="text-sm text-slate-200 font-medium">Thank you for reaching out, Aarti will respond to you promptly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-2 font-mono">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4.5 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-sm font-semibold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-2 font-mono">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4.5 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-sm font-semibold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-2 font-mono">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="Project Inquiry / Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4.5 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-sm font-semibold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-2 font-mono">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hello Aarti, I reviewed your portfolio and would like to connect..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4.5 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-sm font-semibold transition-colors resize-none"
                  />
                </div>

                <MagneticButton className="w-full">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 hover:from-cyan-300 hover:to-pink-400 text-slate-950 font-black text-sm shadow-xl shadow-cyan-500/30 transition-all flex items-center justify-center gap-2.5 disabled:opacity-50 font-mono"
                  >
                    <Send className="w-4 h-4" />
                    <span>{status === "submitting" ? "Sending..." : "Send Message"}</span>
                  </button>
                </MagneticButton>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
