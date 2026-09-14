"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedButton } from "@/components/AnimatedButton";
import { fadeSlideUp } from "@/lib/motion";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  title?: React.ReactNode;
  subtext?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
  smallNote?: string;
  className?: string;
}

export function CTABanner({
  title = (
    <>
      Ready to find your <span className="italic text-amber-400">next role?</span>
    </>
  ),
  subtext = "NexRole places elite professionals with leading organisations worldwide — faster, smarter, and with genuine CV support built in.",
  primaryBtnText = "Browse Jobs",
  primaryBtnHref = "/jobs",
  secondaryBtnText = "Talk to Us",
  secondaryBtnHref = "/contact",
  smallNote,
  className = "",
}: CTABannerProps) {
  return (
    <section className={`relative w-full py-20 md:py-28 overflow-hidden ${className}`}>
      {/* Dynamic Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 dark:from-navy-deep dark:via-blue-950/60 dark:to-navy-deep bg-[length:200%_200%] animate-gradient-loop" />

      {/* Decorative Glow Elements */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Border Highlights */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
        <motion.div
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {subtext}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            {primaryBtnText && (
              <AnimatedButton
                href={primaryBtnHref}
                variant="solid-gold"
                className="w-full sm:w-auto text-navy-deep font-bold px-8 py-3.5 shadow-[0_0_25px_rgba(245,158,11,0.3)]"
              >
                <span>{primaryBtnText}</span>
                <ArrowRight className="w-4 h-4" />
              </AnimatedButton>
            )}

            {secondaryBtnText && (
              <AnimatedButton
                href={secondaryBtnHref}
                variant="outlined-white"
                className="w-full sm:w-auto px-8 py-3.5"
              >
                <span>{secondaryBtnText}</span>
              </AnimatedButton>
            )}
          </div>

          {smallNote && <p className="text-xs text-slate-500 pt-2">{smallNote}</p>}
        </motion.div>
      </div>
    </section>
  );
}
