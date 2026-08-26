"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Award, Code, Brain, Database, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { scrollEmergeUp } from "@/lib/motionConfig";

const SpringCounter: React.FC<{ value: string }> = ({ value }) => {
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const [displayNum, setDisplayNum] = useState(0);

  useEffect(() => {
    if (isNaN(numericValue)) return;
    let start = 0;
    const duration = 1500;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = numericValue / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setDisplayNum(numericValue);
        clearInterval(timer);
      } else {
        setDisplayNum(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [numericValue]);

  if (isNaN(numericValue)) return <>{value}</>;

  const hasPlus = value.includes("+");
  const formatted = numericValue % 1 !== 0 ? displayNum.toFixed(1) : Math.floor(displayNum);

  return (
    <span>
      {formatted}
      {hasPlus && "+"}
    </span>
  );
};

export const About: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="py-32 px-4 relative z-10 bg-[#0a0b0a] border-t border-white/10 font-mono">
      <div className="max-w-6xl mx-auto">
        {/* Editorial Statement Line-by-Line Typography Reveal */}
        <motion.div
          variants={scrollEmergeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20 text-center max-w-4xl mx-auto"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#3ef281] block mb-4">
            01 / PHILOSOPHY & CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            I DON&apos;T JUST BUILD INTERFACES.
            <br />
            <span className="text-[#3ef281]">I BUILD SYSTEMS WHERE</span>
          </h2>

          {/* SOFTWARE -> DATA -> INTELLIGENCE Scale-Pop Progression */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 font-black text-2xl sm:text-4xl text-white">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4, scale: 1.04 }}
              className="p-6 rounded-2xl bg-[#131513] border border-white/10 text-center shadow-xl hover:border-[#3ef281]/50 transition-all"
            >
              <Code className="w-8 h-8 text-[#3ef281] mx-auto mb-3" />
              <span>SOFTWARE</span>
              <span className="text-xs font-normal text-[#8a938a] block mt-2">React / Next / Node</span>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4, scale: 1.04 }}
              className="p-6 rounded-2xl bg-[#131513] border border-white/10 text-center shadow-xl hover:border-[#3ef281]/50 transition-all"
            >
              <Database className="w-8 h-8 text-[#3ef281] mx-auto mb-3" />
              <span>DATA</span>
              <span className="text-xs font-normal text-[#8a938a] block mt-2">Postgres / Mongo / SQL</span>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -4, scale: 1.04 }}
              className="p-6 rounded-2xl bg-[#131513] border border-white/10 text-center shadow-xl hover:border-[#3ef281]/50 transition-all"
            >
              <Brain className="w-8 h-8 text-[#3ef281] mx-auto mb-3" />
              <span>INTELLIGENCE</span>
              <span className="text-xs font-normal text-[#8a938a] block mt-2">Python / XGBoost / ML</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Bio & Credentials Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#131513] border border-white/10 flex flex-col justify-between shadow-2xl">
            <div>
              <h3 className="text-2xl font-black text-white mb-4 font-display">Background & Engineering Intent</h3>
              <p className="text-sm text-[#e9ece7] leading-relaxed mb-8 font-sans font-normal">
                {PERSONAL_INFO.aboutText}
              </p>

              <div className="space-y-3 pt-6 border-t border-white/10 text-xs text-[#e9ece7]">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#3ef281] shrink-0" />
                  <span>Full-Stack Web Engineering (React, Next.js 14, Node.js)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#3ef281] shrink-0" />
                  <span>Applied Machine Learning (XGBoost, Scikit-learn, Python)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#3ef281] shrink-0" />
                  <span>Scalable Microservices & Relational Database Schemas</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-[#131513] border border-white/10 flex-1 shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <GraduationCap className="w-8 h-8 text-[#3ef281]" />
                  <span className="px-3 py-1 rounded-full bg-[#3ef281]/15 text-[#3ef281] text-xs font-bold">
                    8.4 CGPA
                  </span>
                </div>
                <h4 className="text-xl font-extrabold text-white mb-1 font-display">BE Information Technology</h4>
                <p className="text-xs text-[#8a938a] mb-3">Bachelor of Engineering</p>
                <p className="text-xs text-[#e9ece7] leading-relaxed font-sans">
                  Data structures, algorithms, object-oriented software design, web architecture, and database systems.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#131513] border border-white/10 flex-1 shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Award className="w-8 h-8 text-[#3ef281]" />
                  <span className="px-3 py-1 rounded-full bg-[#3ef281]/15 text-[#3ef281] text-xs font-bold">
                    Honours
                  </span>
                </div>
                <h4 className="text-xl font-extrabold text-white mb-1 font-display">Honours in Data Science</h4>
                <p className="text-xs text-[#8a938a] mb-3">Specialized Academic Program</p>
                <p className="text-xs text-[#e9ece7] leading-relaxed font-sans">
                  Machine learning pipelines, XGBoost classification, data modeling with Pandas, and predictive analytics.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Large Editorial Spring Count-Up Stats Display */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-3xl bg-[#131513] border border-white/10 text-center shadow-xl hover:border-[#3ef281]/50 transition-all"
            >
              <div className="text-4xl sm:text-6xl font-black text-[#3ef281] mb-2 tabular-data font-display">
                <SpringCounter value={stat.value} />
              </div>
              <div className="text-xs text-[#8a938a] font-bold uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
