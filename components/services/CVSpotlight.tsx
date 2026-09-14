"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, TrendingUp, AlertTriangle, Check } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { AnimatedButton } from "@/components/AnimatedButton";
import { fadeSlideLeft, fadeSlideRight } from "@/lib/motion";

export function CVSpotlight() {
  const highlights = [
    "Full narrative re-architecture emphasizing commercial impact",
    "Quantified achievements framed for C-Suite and board selectors",
    "ATS syntax optimization guaranteeing 99%+ parsing accuracy",
    "Strategic repositioning for cross-industry pivots and overseas markets",
    "Fast 6–24 hour delivery with revision guarantee",
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-slate-50/70 dark:bg-navy-surface/30 border-y border-slate-200/80 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading + Bullets + CTA */}
          <motion.div
            variants={fadeSlideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full inline-block">
              Proprietary Diagnostic
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Your CV is your first impression.{" "}
              <span className="italic text-gradient-gold">Make it count.</span>
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Standard resumes list duties. Executive CVs articulate governance, risk mitigation, and
              shareholder value creation. Our expert consultants rewrite your credentials to command
              the authority your seniority deserves.
            </p>

            <ul className="space-y-3.5 pt-2">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <AnimatedButton
                href="/services/new-cv"
                variant="solid-gold"
                className="text-slate-950 font-bold px-8 py-3.5 text-sm shadow-[0_0_25px_rgba(245,158,11,0.25)]"
              >
                <span>Get My CV Done</span>
                <ArrowRight className="w-4 h-4" />
              </AnimatedButton>
            </div>
          </motion.div>

          {/* Right Column: Floating Before / After Scorecard */}
          <motion.div
            variants={fadeSlideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <GlassCard
              hoverEffect="tilt"
              className="p-8 border-slate-200 dark:border-white/15 bg-white dark:bg-[#0F1C35]/95 shadow-xl dark:shadow-2xl relative"
            >
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-white/10 mb-6">
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">Executive CV Scorecard</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Automated benchmark vs global applicants</p>
                </div>
                <div className="w-9 h-9 rounded-xl bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>

              {/* Before vs After Visual Comparison */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* Before: Weak (Red) */}
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-center space-y-1">
                  <div className="flex items-center justify-center gap-1 text-[11px] font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">
                    <AlertTriangle className="w-3.5 h-3.5" /> Before
                  </div>
                  <span className="text-3xl font-extrabold text-red-600 dark:text-red-400">42/100</span>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Low ATS visibility & passive phrasing</p>
                </div>

                {/* After: Strong (Green) */}
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-1 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                  <div className="flex items-center justify-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                    <Check className="w-3.5 h-3.5" /> NexRole Rebuilt
                  </div>
                  <span className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">98/100</span>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300">Board-level impact & 99% ATS match</p>
                </div>
              </div>

              {/* Animated Progress Bars */}
              <div className="space-y-4 text-xs">
                <div>
                  <div className="flex justify-between text-slate-700 dark:text-slate-300 font-medium mb-1.5">
                    <span>Executive Impact Framing</span>
                    <span className="text-amber-600 dark:text-amber-400 font-bold">96%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-white/5 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "96%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="bg-gradient-to-r from-blue-500 to-amber-400 h-full rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-700 dark:text-slate-300 font-medium mb-1.5">
                    <span>ATS Parser Compatibility</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">100%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-white/5 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                      className="bg-emerald-500 h-full rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-700 dark:text-slate-300 font-medium mb-1.5">
                    <span>Recruiter Attention Score</span>
                    <span className="text-blue-600 dark:text-blue-400 font-bold">94%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-white/5 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "94%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                      className="bg-blue-500 h-full rounded-full"
                    />
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
