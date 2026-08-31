"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface CursorRevealPortraitProps {
  topImage?: string;
  baseImage?: string;
  className?: string;
  topPosition?: string;
  basePosition?: string;
  topScale?: number;
  baseScale?: number;
  baseOffsetX?: number;
  baseOffsetY?: number;
}

export const CursorRevealPortrait: React.FC<CursorRevealPortraitProps> = ({
  topImage = "/portfoliophoto.jpeg",
  baseImage = "/underneath_photo.png",
  className = "",
  topPosition = "center 28%",
  basePosition = "center 18%",
  topScale = 1.0,
  baseScale = 0.88,
  baseOffsetX = 0,
  baseOffsetY = 12,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const topLayerRef = useRef<HTMLDivElement | null>(null);
  const lensRef = useRef<HTMLDivElement | null>(null);

  const [isHovered, setIsHovered] = useState(false);

  // Motion targets & current state for smooth 60fps RAF lerp interpolation
  const targetPos = useRef({ x: 180, y: 140, r: 110 });
  const currentPos = useRef({ x: 180, y: 140, r: 110 });
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    let sweepAngle = 0;

    // Set initial position centered over face
    const rect = container.getBoundingClientRect();
    if (rect.width > 0) {
      targetPos.current.x = rect.width * 0.5;
      targetPos.current.y = rect.height * 0.32;
      targetPos.current.r = 110;
      currentPos.current.x = rect.width * 0.5;
      currentPos.current.y = rect.height * 0.32;
      currentPos.current.r = 110;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
      const y = Math.max(0, Math.min(rect.height, e.clientY - rect.top));

      targetPos.current.x = x;
      targetPos.current.y = y;
      targetPos.current.r = 110; // 110px mask radius
    };

    const handleMouseEnter = (e: MouseEvent) => {
      setIsHovered(true);
      handleMouseMove(e);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      // Return lens smoothly to center face position
      const rect = container.getBoundingClientRect();
      targetPos.current.x = rect.width * 0.5;
      targetPos.current.y = rect.height * 0.32;
      targetPos.current.r = 110;
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        targetPos.current.x = touch.clientX - rect.left;
        targetPos.current.y = touch.clientY - rect.top;
        targetPos.current.r = 110;
        setIsHovered(true);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        targetPos.current.x = Math.max(0, Math.min(rect.width, touch.clientX - rect.left));
        targetPos.current.y = Math.max(0, Math.min(rect.height, touch.clientY - rect.top));
      }
    };

    const handleTouchEnd = () => {
      setIsHovered(false);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    container.addEventListener("touchend", handleTouchEnd);

    // Render loop directly updating CSS variables --x, --y, --r for 0-re-render performance
    const renderLoop = () => {
      const rect = container.getBoundingClientRect();

      // Mobile / Touch Auto-sweep fallback if not actively hovering
      if (isTouchDevice && !isHovered && rect.width > 0) {
        sweepAngle += 0.02;
        const centerX = rect.width / 2;
        const centerY = rect.height * 0.35;
        targetPos.current.x = centerX + Math.sin(sweepAngle) * (rect.width * 0.25);
        targetPos.current.y = centerY + Math.cos(sweepAngle * 0.8) * (rect.height * 0.15);
        targetPos.current.r = 110;
      }

      // Smooth lerp easing (0.2 for position, 0.15 for radius)
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.2;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.2;
      currentPos.current.r += (targetPos.current.r - currentPos.current.r) * 0.15;

      const { x, y, r } = currentPos.current;

      if (topLayerRef.current) {
        topLayerRef.current.style.setProperty("--x", `${x}px`);
        topLayerRef.current.style.setProperty("--y", `${y}px`);
        topLayerRef.current.style.setProperty("--r", `${r}px`);
      }

      if (lensRef.current) {
        lensRef.current.style.setProperty("--x", `${x}px`);
        lensRef.current.style.setProperty("--y", `${y}px`);
        lensRef.current.style.setProperty("--r", `${r}px`);
        lensRef.current.style.opacity = "1";
      }

      animFrameId.current = requestAnimationFrame(renderLoop);
    };

    animFrameId.current = requestAnimationFrame(renderLoop);

    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isHovered]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-[3/4] rounded-[12px] overflow-hidden border border-[#39FF14]/30 bg-[#0a0a0a] shadow-2xl group cursor-crosshair select-none ${className}`}
    >
      {/* Base Layer: Hidden Editorial B&W / Blue-toned sunglasses photo (Revealed inside lens) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full relative"
          style={{
            transform: `scale(${baseScale}) translate(${baseOffsetX}px, ${baseOffsetY}px)`,
            transformOrigin: "center center",
          }}
        >
          <Image
            src={baseImage}
            alt="Aarti Dinkar — Editorial Reveal"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover filter saturate-125 contrast-110"
            style={{ objectPosition: basePosition }}
            priority
          />
        </div>
      </div>

      {/* Top Layer: Default Visible Soft Color Black Turtleneck Photo (Masked by radial gradient) */}
      <div
        ref={topLayerRef}
        className="absolute inset-0 z-10 pointer-events-none transition-[mask-image] duration-300 ease-out"
        style={{
          maskImage:
            "radial-gradient(circle var(--r, 110px) at var(--x, 50%) var(--y, 32%), transparent 0%, transparent 70%, black 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r, 110px) at var(--x, 50%) var(--y, 32%), transparent 0%, transparent 70%, black 100%)",
        }}
      >
        <div
          className="w-full h-full relative"
          style={{
            transform: `scale(${topScale})`,
            transformOrigin: "center center",
          }}
        >
          <Image
            src={topImage}
            alt="Aarti Dinkar — Full Stack Engineer"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            style={{ objectPosition: topPosition }}
            priority
          />
        </div>
      </div>

      {/* Circular Lens Glow Border Following Cursor */}
      <div
        ref={lensRef}
        className="absolute pointer-events-none rounded-full z-20 transition-opacity duration-300"
        style={{
          width: "220px",
          height: "220px",
          transform: "translate(-50%, -50%)",
          left: "var(--x, 50%)",
          top: "var(--y, 32%)",
          border: "2px solid #39FF14",
          boxShadow: "0 0 20px rgba(57, 255, 20, 0.7), inset 0 0 15px rgba(57, 255, 20, 0.3)",
          opacity: 1,
        }}
      />

      {/* Terminal-Style Bracket Corners (30% Opacity) */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#39FF14]/40 z-30 pointer-events-none" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#39FF14]/40 z-30 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#39FF14]/40 z-30 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#39FF14]/40 z-30 pointer-events-none" />

      {/* Interactive Lens Telemetry Badge Overlay */}
      <div className="absolute bottom-3 left-3 z-30 pointer-events-none px-2.5 py-1 rounded-md bg-[#0a0a0a]/80 border border-[#39FF14]/30 backdrop-blur-md flex items-center gap-1.5 text-[10px] font-mono text-[#39FF14]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-ping" />
        <span className="font-bold tracking-wider">[ REVEAL LENS ACTIVE ]</span>
      </div>
    </div>
  );
};

export default CursorRevealPortrait;
