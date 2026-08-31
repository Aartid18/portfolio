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
  topPosition = "center 24%",
  basePosition = "center 17%",
  topScale = 1.0,
  baseScale = 0.86,
  baseOffsetX = 0,
  baseOffsetY = 10,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const revealLayerRef = useRef<HTMLDivElement | null>(null);
  const lensRef = useRef<HTMLDivElement | null>(null);

  const [isHovered, setIsHovered] = useState(false);

  // Motion targets & current state for 60fps RAF lerp interpolation
  const targetPos = useRef({ x: 180, y: 140, r: 0 });
  const currentPos = useRef({ x: 180, y: 140, r: 0 });
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
      const y = Math.max(0, Math.min(rect.height, e.clientY - rect.top));

      targetPos.current.x = x;
      targetPos.current.y = y;
      targetPos.current.r = 110; // 110px circle radius on hover
    };

    const handleMouseEnter = (e: MouseEvent) => {
      setIsHovered(true);
      handleMouseMove(e);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      // Smoothly shrink circle lens to 0px when cursor leaves
      targetPos.current.r = 0;
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
      targetPos.current.r = 0;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    container.addEventListener("touchend", handleTouchEnd);

    // 60fps RAF Render Loop updating clipPath directly for 100% GPU accelerated redraws
    const renderLoop = () => {
      // Smooth lerp easing (0.2 for position, 0.15 for radius)
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.2;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.2;
      currentPos.current.r += (targetPos.current.r - currentPos.current.r) * 0.15;

      const { x, y, r } = currentPos.current;

      if (revealLayerRef.current) {
        const clipValue = `circle(${Math.max(0, r)}px at ${x}px ${y}px)`;
        revealLayerRef.current.style.clipPath = clipValue;
        revealLayerRef.current.style.webkitClipPath = clipValue;
      }

      if (lensRef.current) {
        lensRef.current.style.left = `${x}px`;
        lensRef.current.style.top = `${y}px`;
        lensRef.current.style.opacity = r > 3 ? "1" : "0";
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
  }, []); // Empty dependency array so listeners are attached once and never torn down on hover state change

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-[3/4] rounded-[12px] overflow-hidden border border-[#39FF14]/30 bg-[#0a0a0a] shadow-2xl group cursor-crosshair select-none ${className}`}
    >
      {/* 1. Base Layer (Z-0): Default Image 1 (Soft color, black turtleneck - Always visible underneath) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
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

      {/* 2. Reveal Layer (Z-10): Image 2 (Blue sunglasses - Clipped inside circular lens on hover) */}
      <div
        ref={revealLayerRef}
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          clipPath: "circle(0px at 50% 50%)",
          WebkitClipPath: "circle(0px at 50% 50%)",
        }}
      >
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

      {/* 3. Circular Lens Glow Border Following Cursor (Z-20) */}
      <div
        ref={lensRef}
        className="absolute pointer-events-none rounded-full z-20 transition-opacity duration-200"
        style={{
          width: "220px",
          height: "220px",
          transform: "translate(-50%, -50%)",
          border: "2px solid #39FF14",
          boxShadow: "0 0 20px rgba(57, 255, 20, 0.7), inset 0 0 15px rgba(57, 255, 20, 0.3)",
          opacity: 0,
        }}
      />

      {/* Terminal-Style Bracket Corners */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#39FF14]/40 z-30 pointer-events-none" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#39FF14]/40 z-30 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#39FF14]/40 z-30 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#39FF14]/40 z-30 pointer-events-none" />

      {/* Interactive Lens Telemetry Badge Overlay */}
      <div className={`absolute bottom-3 left-3 z-30 pointer-events-none px-2.5 py-1 rounded-md bg-[#0a0a0a]/80 border border-[#39FF14]/30 backdrop-blur-md flex items-center gap-1.5 text-[10px] font-mono text-[#39FF14] transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-60"}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-ping" />
        <span className="font-bold tracking-wider">{isHovered ? "[ REVEAL LENS ACTIVE ]" : "[ HOVER TO REVEAL ]"}</span>
      </div>
    </div>
  );
};

export default CursorRevealPortrait;
