"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { curtainLiftPanelLeft, curtainLiftPanelRight } from "@/lib/motionConfig";

const STEPS = [
  "01 Initializing terminal interface...",
  "02 Connecting gateway services...",
  "03 Loading projects & telemetry...",
  "04 Initializing AI inference pipeline...",
];

export const Preloader: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Non-linear realistic boot sequence timing
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 250);
          return 100;
        }

        // Realistic non-linear tick: fast initial, brief stall at 45%, fast burst finish
        let increment = Math.floor(Math.random() * 9) + 3;
        if (prev > 40 && prev < 55) {
          increment = 2; // intentional boot stall
        }

        const next = prev + increment;
        if (next > 25 && next <= 50) setCurrentStep(1);
        else if (next > 50 && next <= 75) setCurrentStep(2);
        else if (next > 75) setCurrentStep(3);

        return next > 100 ? 100 : next;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <div className="fixed inset-0 z-[100] flex pointer-events-none font-mono">
          {/* Left Vertical Panel */}
          <motion.div
            variants={curtainLiftPanelLeft}
            initial="initial"
            exit="exit"
            className="w-1/2 h-full bg-[#050505] border-r border-[#141414] flex items-center justify-end pr-6 sm:pr-12 pointer-events-auto"
          >
            <div className="text-right space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#39ff88] block">
                SYSTEM BOOT LOG
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                AARTI<span className="text-[#39ff88]">.DEV</span>
              </h2>
            </div>
          </motion.div>

          {/* Right Vertical Panel */}
          <motion.div
            variants={curtainLiftPanelRight}
            initial="initial"
            exit="exit"
            className="w-1/2 h-full bg-[#050505] flex flex-col justify-center pl-6 sm:pl-12 pointer-events-auto relative"
          >
            <div className="space-y-4 max-w-xs">
              <div className="text-3xl sm:text-5xl font-black text-white tracking-tighter tabular-data">
                {progress}%
              </div>

              <div className="w-full h-1 bg-[#141414] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#39ff88]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="text-xs text-[#737373] h-4 overflow-hidden font-semibold">
                {STEPS[currentStep]}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
