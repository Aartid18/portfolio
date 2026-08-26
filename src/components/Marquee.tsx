"use client";

import React from "react";
import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  direction?: "left" | "right";
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  items,
  direction = "left",
  className = "",
}) => {
  return (
    <div className={`w-full overflow-hidden py-3.5 border-y border-white/10 bg-[#070707] font-mono ${className}`}>
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
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#e8e8e3] uppercase">
              {item}
            </span>
            <span className="text-[#39ff88] text-xs">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
