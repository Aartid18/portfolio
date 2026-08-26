"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion || "ontouchstart" in window) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        const text = cursorTarget.getAttribute("data-cursor") || "";
        setCursorText(text);
        setIsHovered(true);
      } else {
        setCursorText("");
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [shouldReduceMotion, isVisible]);

  if (shouldReduceMotion || !isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[99] pointer-events-none hidden md:flex items-center justify-center rounded-full font-mono text-[10px] font-black tracking-widest uppercase transition-all duration-150"
      animate={{
        x: position.x - (isHovered ? 26 : 6),
        y: position.y - (isHovered ? 26 : 6),
        width: isHovered ? 52 : 12,
        height: isHovered ? 52 : 12,
        backgroundColor: isHovered ? "#39ff88" : "rgba(57, 255, 136, 0.85)",
        color: isHovered ? "#050505" : "transparent",
      }}
      transition={{ type: "spring", stiffness: 450, damping: 28, mass: 0.1 }}
    >
      {isHovered && cursorText}
    </motion.div>
  );
};
