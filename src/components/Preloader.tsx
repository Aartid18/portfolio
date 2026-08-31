"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { curtainLiftPanelLeft, curtainLiftPanelRight } from "@/lib/motionConfig";

const STEPS = [
  "01 Initializing terminal interface...",
  "02 Connecting gateway services...",
  "03 Loading projects & telemetry...",
  "04 Initializing AI inference pipeline...",
];

const TARGET_LETTERS = ["W", "E", "L", "C", "O", "M", "E"];
const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const BOOT_DURATION_MS = 3000; // 2nd curtain duration

const curtainSplitLeft: Variants = {
  initial: { x: "0%" },
  exit: {
    x: "-100%",
    transition: { duration: 0.9, ease: [0.83, 0, 0.17, 1] },
  },
};

const curtainSplitRight: Variants = {
  initial: { x: "0%" },
  exit: {
    x: "100%",
    transition: { duration: 0.9, ease: [0.83, 0, 0.17, 1] },
  },
};

export const Preloader: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [phase, setPhase] = useState<"welcome" | "boot" | "done">("welcome");
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const [displayLetters, setDisplayLetters] = useState<string[]>(Array(7).fill(""));
  const [lockedFlags, setLockedFlags] = useState<boolean[]>(Array(7).fill(false));
  const [flashFlags, setFlashFlags] = useState<boolean[]>(Array(7).fill(false));

  // 1st Curtain: Scramble decoding + Hold -> Transition to boot (2100ms)
  useEffect(() => {
    if (phase !== "welcome") return;

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;

      setDisplayLetters(() => {
        return TARGET_LETTERS.map((targetChar, i) => {
          const startMs = i * 180;
          const lockMs = startMs + 400;

          if (elapsed < startMs) {
            return "";
          } else if (elapsed >= startMs && elapsed < lockMs) {
            return CHARSET[Math.floor(Math.random() * CHARSET.length)];
          } else {
            return targetChar;
          }
        });
      });

      setLockedFlags(() => {
        return TARGET_LETTERS.map((_, i) => {
          const lockMs = i * 180 + 400;
          return elapsed >= lockMs;
        });
      });

      setFlashFlags(() => {
        return TARGET_LETTERS.map((_, i) => {
          const lockMs = i * 180 + 400;
          return elapsed >= lockMs && elapsed < lockMs + 150;
        });
      });

      if (elapsed >= 2100) {
        clearInterval(interval);
        setPhase("boot");
      }
    }, 30);

    return () => clearInterval(interval);
  }, [phase]);

  // 2nd Curtain (.DEV System Boot Curtain) — now exactly 3.0 seconds, time-based
  useEffect(() => {
    if (phase !== "boot") return;

    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / BOOT_DURATION_MS) * 100));

      setProgress(pct);

      if (pct > 25 && pct <= 50) setCurrentStep(1);
      else if (pct > 50 && pct <= 75) setCurrentStep(2);
      else if (pct > 75) setCurrentStep(3);

      if (elapsed >= BOOT_DURATION_MS) {
        clearInterval(timer);
        setTimeout(() => {
          setPhase("done");
          if (onComplete) onComplete();
        }, 200);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [phase, onComplete]);

  return (
    <AnimatePresence mode="wait">
      {/* 1ST CURTAIN: Terminal scramble decode of WELCOME -> horizontal split WEL | COME */}
      {phase === "welcome" && (
        <motion.div
          key="welcome-curtain"
          className="fixed inset-0 z-[110] flex font-mono bg-[#000000] pointer-events-none"
        >
          <motion.div
            variants={curtainSplitLeft}
            initial="initial"
            exit="exit"
            className="w-1/2 h-full flex items-center justify-end pr-2 sm:pr-4 pointer-events-auto relative z-10 overflow-hidden"
            style={{
              background: "linear-gradient(to right, #050505, #0a1f0a, #123a12)",
              borderRight: "2px solid #39FF14",
              boxShadow: "0 0 12px rgba(57, 255, 20, 0.9)",
            }}
          >
            <div
              className="font-black uppercase tracking-tight flex items-center select-none"
              style={{
                fontSize: "clamp(4rem, 14vw, 11rem)",
                fontFamily: "monospace",
                letterSpacing: "0.05em",
              }}
            >
              {[0, 1, 2].map((idx) => {
                const isLocked = lockedFlags[idx];
                const isFlash = flashFlags[idx];
                const letter = displayLetters[idx];

                return (
                  <span
                    key={idx}
                    className="inline-block transition-colors duration-75 text-center"
                    style={{
                      color: isLocked ? "#0a0a0a" : "#39FF14",
                      textShadow: isFlash
                        ? "0 0 18px #39FF14, 0 0 35px #39FF14"
                        : isLocked
                          ? "0 0 6px rgba(57, 255, 20, 0.9)"
                          : "0 0 12px rgba(57, 255, 20, 0.9)",
                      WebkitTextStroke: isLocked ? "1.5px #39FF14" : "none",
                      minWidth: "0.6em",
                    }}
                  >
                    {letter || "\u00A0"}
                  </span>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            variants={curtainSplitRight}
            initial="initial"
            exit="exit"
            className="w-1/2 h-full flex items-center justify-start pl-2 sm:pl-4 pointer-events-auto relative z-10 overflow-hidden"
            style={{
              background: "linear-gradient(to left, #050505, #0a1f0a, #123a12)",
            }}
          >
            <div
              className="font-black uppercase tracking-tight flex items-center select-none"
              style={{
                fontSize: "clamp(4rem, 14vw, 11rem)",
                fontFamily: "monospace",
                letterSpacing: "0.05em",
              }}
            >
              {[3, 4, 5, 6].map((idx) => {
                const isLocked = lockedFlags[idx];
                const isFlash = flashFlags[idx];
                const letter = displayLetters[idx];

                return (
                  <span
                    key={idx}
                    className="inline-block transition-colors duration-75 text-center"
                    style={{
                      color: isLocked ? "#0a0a0a" : "#39FF14",
                      textShadow: isFlash
                        ? "0 0 18px #39FF14, 0 0 35px #39FF14"
                        : isLocked
                          ? "0 0 6px rgba(57, 255, 20, 0.9)"
                          : "0 0 12px rgba(57, 255, 20, 0.9)",
                      WebkitTextStroke: isLocked ? "1.5px #39FF14" : "none",
                      minWidth: "0.6em",
                    }}
                  >
                    {letter || "\u00A0"}
                  </span>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* 2ND CURTAIN: .DEV system boot sequence — now 3.0s */}
      {phase === "boot" && (
        <motion.div
          key="boot-curtain"
          className="fixed inset-0 z-[100] flex font-mono bg-[#050505] pointer-events-none"
        >
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};