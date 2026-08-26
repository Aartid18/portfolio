"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { curtainLiftPanelLeft, curtainLiftPanelRight } from "@/lib/motionConfig";

const STEPS = [
  "01 Loading interface...",
  "02 Connecting systems...",
  "03 Loading projects...",
  "04 Initializing AI pipeline...",
];

export const Preloader: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 8) + 4;
        if (next > 25 && next <= 50) setCurrentStep(1);
        else if (next > 50 && next <= 75) setCurrentStep(2);
        else if (next > 75) setCurrentStep(3);

        return next > 100 ? 100 : next;
      });
    }, 45);

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
            className="w-1/2 h-full bg-[#08090B] border-r border-[#16191F] flex items-center justify-end pr-6 sm:pr-12 pointer-events-auto"
          >
            <div className="text-right space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C7FF3D] block">
                SYSTEM BOOT
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                AARTI<span className="text-[#C7FF3D]">.DEV</span>
              </h2>
            </div>
          </motion.div>

          {/* Right Vertical Panel */}
          <motion.div
            variants={curtainLiftPanelRight}
            initial="initial"
            exit="exit"
            className="w-1/2 h-full bg-[#08090B] flex flex-col justify-center pl-6 sm:pl-12 pointer-events-auto relative"
          >
            <div className="space-y-4 max-w-xs">
              <div className="text-3xl sm:text-5xl font-black text-white tracking-tighter">
                {progress}%
              </div>

              <div className="w-full h-1 bg-[#16191F] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#C7FF3D]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="text-xs text-[#8A8F98] h-4 overflow-hidden font-semibold">
                {STEPS[currentStep]}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
