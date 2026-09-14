"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { fadeSlideUp } from "@/lib/motion";

export function AboutHero() {
  return (
    <section className="relative min-h-[58vh] flex items-center justify-center text-center overflow-hidden py-20">
      {/* Background Animated Particle Dots & Light Cones */}
      <div className="absolute inset-0 bg-[radial-gradient(#2563EB_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/15 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs font-semibold tracking-wider uppercase"
        >
          <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <span>Our Story & Philosophy</span>
        </motion.div>

        <motion.h1
          variants={fadeSlideUp}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight"
        >
          Built on trust, <span className="italic text-gradient-gold">driven by results.</span>
        </motion.h1>

        <motion.p
          variants={fadeSlideUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
          className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          NexRole was founded to close the gap between exceptional talent and extraordinary
          opportunity — placing leaders across 38+ countries globally.
        </motion.p>
      </div>
    </section>
  );
}
