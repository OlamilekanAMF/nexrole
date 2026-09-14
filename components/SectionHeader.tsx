"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeSlideUp } from "@/lib/motion";

interface SectionHeaderProps {
  eyebrow?: string;
  eyebrowColor?: "blue" | "gold";
  title: React.ReactNode;
  subtext?: string;
  align?: "center" | "left";
  withDot?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  eyebrowColor = "blue",
  title,
  subtext,
  align = "center",
  withDot = false,
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      variants={fadeSlideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`max-w-3xl mb-12 md:mb-16 ${isCenter ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${
            eyebrowColor === "gold"
              ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
              : "bg-blue-500/15 text-blue-400 border border-blue-500/30"
          }`}
        >
          {withDot && (
            <span
              className={`w-2 h-2 rounded-full animate-pulse ${
                eyebrowColor === "gold" ? "bg-amber-400" : "bg-blue-400 shadow-[0_0_8px_#3B82F6]"
              }`}
            />
          )}
          {eyebrow}
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
        {title}
      </h2>

      {subtext && (
        <p className={`mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl ${isCenter ? "mx-auto" : ""}`}>
          {subtext}
        </p>
      )}
    </motion.div>
  );
}
