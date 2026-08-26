"use client";

import React from "react";
import { motion } from "framer-motion";

interface MarqueeProps {
  items?: string[];
  direction?: "left" | "right";
  className?: string;
}

const DEFAULT_ITEMS = [
  "FULL STACK ENGINEERING",
  "APPLIED AI",
  "DATA SCIENCE",
  "SYSTEM ARCHITECTURE",
  "PRODUCT ENGINEERING",
];

export const Marquee: React.FC<MarqueeProps> = ({
  items = DEFAULT_ITEMS,
  direction = "left",
  className = "",
}) => {
  return (
    <div className={`w-full overflow-hidden py-4 border-y border-[#16191F] bg-[#0a0c10] font-mono ${className}`}>
      <motion.div
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        }}
        className="flex items-center gap-8 whitespace-nowrap"
      >
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="text-xs sm:text-sm font-black tracking-widest text-[#F4F4F0] uppercase">
              {item}
            </span>
            <span className="text-[#C7FF3D] text-xs">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
