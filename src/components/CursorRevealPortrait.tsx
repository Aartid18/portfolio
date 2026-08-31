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
  const topLayerRef = useRef<HTMLDivElement | null>(null);
  const lensRef = useRef<HTMLDivElement | null>(null);

  const [isHovered, setIsHovered] = useState(false);

  // Motion targets & current state: default radius is 0 when not hovering
  const targetPos = useRef({ x: 180, y: 140, r: 0 });
  const currentPos = useRef({ x: 180, y: 140, r: 0 });
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    let sweepAngle = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
      const y = Math.max(0, Math.min(rect.height, e.clientY - rect.top));

      targetPos.current.x = x;
      targetPos.current.y = y;
      targetPos.current.r = 110; // 110px mask radius on hover
    };

    const handleMouseEnter = (e: MouseEvent) => {
      setIsHovered(true);
      handleMouseMove(e);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      // Fade/shrink circle lens away to 0px when cursor leaves image
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

    // Render loop updating mask & lens position styles in real-time
    const renderLoop = () => {
      const rect = container.getBoundingClientRect();

      // Touch auto-sweep only if touched
      if (isTouchDevice && isHovered && rect.width > 0) {
        sweepAngle += 0.02;
      }

      // Smooth lerp easing (0.2 for position, 0.15 for radius)
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.2;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.2;
      currentPos.current.r += (targetPos.current.r - currentPos.current.r) * 0.15;

      const { x, y, r } = currentPos.current;

      if (topLayerRef.current) {
        if (r < 1) {
          topLayerRef.current.style.maskImage = "none";
          topLayerRef.current.style.webkitMaskImage = "none";
        } else {
          const maskValue = `radial-gradient(circle ${r}px at ${x}px ${y}px, transparent 0%, transparent 75%, black 100%)`;
          topLayerRef.current.style.maskImage = maskValue;
          topLayerRef.current.style.webkitMaskImage = maskValue;
        }
      }

      if (lensRef.current) {
        lensRef.current.style.left = `${x}px`;
        lensRef.current.style.top = `${y}px`;
        lensRef.current.style.opacity = r > 5 ? "1" : "0";
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
      {/* Base Layer (Z-0): Hidden Editorial B&W / Blue-toned sunglasses photo (Revealed inside lens) */}
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

      {/* Top Layer (Z-10): Default Visible Soft Color Black Turtleneck Photo (Masked by radial gradient on hover) */}
      <div
        ref={topLayerRef}
        className="absolute inset-0 z-10 pointer-events-none"
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

      {/* Circular Lens Glow Border Following Cursor (Z-20) */}
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
