"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export function CustomCursor() {
  const shouldReduceMotion = useReducedMotion();
  const [hovering, setHovering] = useState<string | null>(null);
  const [isPill, setIsPill] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const ringX = useSpring(x, { stiffness: 150, damping: 20 });
  const ringY = useSpring(y, { stiffness: 150, damping: 20 });

  useEffect(() => {
    if (shouldReduceMotion || "ontouchstart" in window) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        const label = cursorTarget.getAttribute("data-cursor") || "";
        setHovering(label);
        setIsPill(label.includes("VIEW PROJECT"));
      } else {
        setHovering(null);
        setIsPill(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", move);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", move);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [x, y, shouldReduceMotion, isVisible]);

  if (shouldReduceMotion || !isVisible) return null;

  return (
    <>
      {/* 8px Solid Tracking Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#3ef281] pointer-events-none z-[9999] hidden md:block shadow-[0_0_8px_#3ef281]"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          scale: hovering ? 0.4 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />

      {/* Trailing Ring / Morphing Pill */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#3ef281] pointer-events-none z-[9998] hidden md:flex items-center justify-center font-mono text-[10px] font-black tracking-widest text-[#3ef281] uppercase shadow-md backdrop-blur-[1px]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: isPill ? 130 : hovering ? 64 : 36,
          height: isPill ? 38 : hovering ? 64 : 36,
          borderRadius: isPill ? 20 : 9999,
          backgroundColor: hovering ? "rgba(62, 242, 129, 0.08)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 22 }}
      >
        {hovering}
      </motion.div>
    </>
  );
}
