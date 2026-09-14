"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedButton } from "@/components/AnimatedButton";
import { fadeSlideLeft, fadeSlideRight } from "@/lib/motion";
import { FileText, ArrowRight, CheckCircle2 } from "lucide-react";

export function CVUpsell() {
  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute -top-24 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="glass-card p-8 md:p-14 border border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#0F1C35]/95 shadow-xl backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <motion.div
              variants={fadeSlideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5" />
                <span>Executive CV Studio</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Your CV not ready?{" "}
                <span className="italic text-gradient-gold">We&apos;ve got you.</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                Senior recruiters spend an average of 7 seconds on an initial screen. Our in-house
                executive writers rebuild your CV from the ground up, highlighting board-level impact,
                governance narratives, and quantifiable leadership milestones.
              </p>

              <div className="flex flex-wrap gap-4 pt-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400" /> ATS Optimized
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400" /> Fast 6–10hr Delivery Available
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400" /> Lemon Squeezy Secured
                </span>
              </div>
            </motion.div>

            {/* Right Buttons */}
            <motion.div
              variants={fadeSlideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center justify-end gap-4"
            >
              <AnimatedButton
                href="/services/new-cv"
                variant="solid-gold"
                className="text-slate-950 font-bold px-7 py-4 text-sm shadow-md text-center"
              >
                <span>See CV Services</span>
                <ArrowRight className="w-4 h-4" />
              </AnimatedButton>

              <AnimatedButton
                href="/jobs"
                variant="outlined-white"
                className="px-7 py-4 text-sm text-center border-slate-300 dark:border-white/20 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10"
              >
                <span>Apply to a Role</span>
              </AnimatedButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
