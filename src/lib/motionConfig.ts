import { Variants } from "framer-motion";

/* =========================================================================
   MASTER PROMPT V2 — SIGNATURE MOTION SYSTEM (src/lib/motionConfig.ts)
   ========================================================================= */

// 1. Headline Ink Rise Reveal
export const textInkRise: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

// 2. Text Clip Path Mask Reveal
export const textClipReveal: Variants = {
  hidden: { opacity: 0, y: 35, clipPath: "inset(100% 0% 0% 0%)" },
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.75, delay: customDelay, ease: [0.16, 1, 0.3, 1] },
  }),
};

// 3. Scroll Emerge Up Section Entrance
export const scrollEmergeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// 4. Data Constellation Line Draw
export const dataLineDraw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.4, ease: "easeInOut" },
  },
};

// 5. Preloader Curtain Panels Exit
export const curtainLiftPanelLeft: Variants = {
  initial: { y: "0%" },
  exit: {
    y: "-100%",
    transition: { duration: 0.95, ease: [0.77, 0, 0.175, 1] },
  },
};

export const curtainLiftPanelRight: Variants = {
  initial: { y: "0%" },
  exit: {
    y: "100%",
    transition: { duration: 0.95, ease: [0.77, 0, 0.175, 1] },
  },
};
