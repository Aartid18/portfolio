import { Variants } from "framer-motion";

/* =========================================================================
   AWWWARDS-LEVEL MOTION CONFIGURATION SYSTEM (src/lib/motionConfig.ts)
   ========================================================================= */

export const MOTION_TIMING = {
  fast: 0.25,
  standard: 0.45,
  slow: 0.75,
  easeCurtain: [0.77, 0, 0.175, 1],
  easeAwwwards: [0.16, 1, 0.3, 1],
};

// 1. Text Clip-Path Mask Reveal
export const textClipReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    clipPath: "inset(100% 0% 0% 0%)",
  },
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.75,
      delay: customDelay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

// 2. Text Ink Rise Container & Letter Cascade
export const textInkRiseContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.1,
    },
  },
};

export const textInkRiseWord: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// 3. Curtain Lift Dual Panels Exit (Preloader)
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

// 4. Scroll Emerge Up Entrance
export const scrollEmergeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: customDelay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

// 5. Scroll Stagger Fade Container
export const scrollStagFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// 6. SVG Self-Drawing Line Animation
export const scrollLineDraw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1.4,
      ease: "easeInOut",
    },
  },
};
