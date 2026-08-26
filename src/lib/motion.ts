import { Variants } from "framer-motion";

/* =========================================================================
   SIGNATURE MOTION SYSTEM (lib/motion.ts)
   Standardized Framer Motion variants used consistently across components.
   ========================================================================= */

// 1. Text Clip-Path Mask Reveal (Hero & Headlines)
export const textClipReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    clipPath: "inset(100% 0% 0% 0%)",
  },
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.7,
      delay: customDelay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

// 2. Ink Rise Text Stagger
export const textInkRiseContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
};

export const textInkRiseWord: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// 3. Scroll Emerge Up (Section entrances & cards)
export const scrollEmergeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: customDelay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

// 4. Staggered Children Container
export const scrollStagFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};
