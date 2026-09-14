"use client";

import React, { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: "tilt" | "lift" | "glow" | "none";
  glowColor?: "blue" | "gold";
  onClick?: () => void;
}

export function GlassCard({
  children,
  className = "",
  hoverEffect = "lift",
  glowColor = "blue",
  onClick,
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hoverEffect !== "tilt" || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -8;
    const rY = ((x - centerX) / centerX) * 8;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (hoverEffect === "tilt") {
      setRotateX(0);
      setRotateY(0);
    }
  };

  const glowStyles = {
    blue: "hover:border-blue-500/40 hover:shadow-[0_10px_35px_-5px_rgba(37,99,235,0.3)]",
    gold: "hover:border-amber-500/40 hover:shadow-[0_10px_35px_-5px_rgba(245,158,11,0.3)]",
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transformStyle: hoverEffect === "tilt" ? "preserve-3d" : undefined,
        perspective: hoverEffect === "tilt" ? 1000 : undefined,
      }}
      animate={{
        rotateX: hoverEffect === "tilt" ? rotateX : 0,
        rotateY: hoverEffect === "tilt" ? rotateY : 0,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`glass-card p-6 md:p-8 transition-all duration-300 ${
        hoverEffect === "lift" ? "hover:-translate-y-2" : ""
      } ${hoverEffect === "glow" || hoverEffect === "lift" ? glowStyles[glowColor] : ""} ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
