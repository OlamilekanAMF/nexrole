"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Clock,
  Crown,
  FileEdit,
  Sparkles,
  MailCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { AnimatedButton } from "@/components/AnimatedButton";
import { staggerContainer, fadeSlideUp } from "@/lib/motion";

export function ServicesBento() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Card 1: Permanent Recruitment (Wide) */}
          <motion.div variants={fadeSlideUp} className="md:col-span-2">
            <GlassCard
              hoverEffect="tilt"
              className="h-full p-8 md:p-10 flex flex-col justify-between border-slate-200 dark:border-blue-500/20 bg-white dark:bg-gradient-to-br dark:from-[#0F1C35]/90 dark:to-[#050D1F]/90 shadow-sm dark:shadow-none"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                    Core Practice
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Permanent Recruitment</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mb-6">
                  Strategic talent acquisition for enduring impact. We source and place visionary
                  managers, directors, and functional leaders who integrate into your culture and drive
                  commercial milestones from day one.
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-slate-600 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Retention Guarantees
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Pre-Screened Technical Audits
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Comprehensive Background Checks
                  </span>
                </div>
              </div>
              <div className="pt-8 border-t border-slate-100 dark:border-white/10 mt-8">
                <Link
                  href="/contact?subject=PermanentHiring"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group"
                >
                  <span>Inquire About Retained & Contingent Search</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 2: Contract Staffing */}
          <motion.div variants={fadeSlideUp}>
            <GlassCard
              hoverEffect="tilt"
              className="h-full p-8 flex flex-col justify-between border-slate-200 dark:border-white/10 bg-white dark:bg-transparent shadow-sm dark:shadow-none"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Interim & Contract Staffing</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Agile executive leadership for high-stakes transformations, rapid scaling phases, M&A
                  integration, or parental leave coverage.
                </p>
              </div>
              <Link
                href="/contact?subject=ContractStaffing"
                className="inline-flex items-center gap-2 text-xs font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 group"
              >
                <span>Request Interim Talent</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </GlassCard>
          </motion.div>

          {/* Card 3: Executive Search (Tall / Premium) */}
          <motion.div variants={fadeSlideUp} className="lg:row-span-2">
            <GlassCard
              hoverEffect="tilt"
              glowColor="gold"
              className="h-full p-8 md:p-10 flex flex-col justify-between border-amber-400/40 dark:border-amber-500/30 bg-gradient-to-b from-amber-50/40 via-white to-white dark:bg-gradient-to-b dark:from-[#0F1C35]/95 dark:via-[#0A1325]/95 dark:to-[#050D1F] relative overflow-hidden shadow-md dark:shadow-none"
            >
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-amber-500/10 rounded-full blur-[60px] pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                    <Crown className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 animate-pulse-glow">
                    Premium Practice
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Executive & Board Search</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                  Discreet, confidential search mandates for Chief Executive, C-Suite, Non-Executive
                  Director, and Advisory Board appointments. We leverage bespoke executive mapping and
                  global partner networks to engage passive titans of industry.
                </p>

                <div className="space-y-3.5 text-xs text-slate-700 dark:text-slate-300 mb-8">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                    <span>Total Discretion & NDA Protection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                    <span>Global Peer Benchmarking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                    <span>Board Compensation Modeling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                    <span>Full Succession Strategy</span>
                  </div>
                </div>
              </div>

              <AnimatedButton
                href="/contact?subject=ExecutiveSearch"
                variant="solid-gold"
                fullWidth
                className="text-slate-950 font-bold py-3.5 text-sm"
              >
                <span>Initiate Executive Search</span>
                <ArrowRight className="w-4 h-4" />
              </AnimatedButton>
            </GlassCard>
          </motion.div>

          {/* Card 4: CV Rewrite */}
          <motion.div variants={fadeSlideUp}>
            <GlassCard
              hoverEffect="tilt"
              className="h-full p-8 flex flex-col justify-between border-slate-200 dark:border-white/10 bg-white dark:bg-transparent hover:border-blue-500/40 shadow-sm dark:shadow-none"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30 flex items-center justify-center">
                    <FileEdit className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-amber-700 dark:text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                    From $300
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">CV Rewrite (3 Tiers)</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Transform your existing resume with Sapphire, Ruby, or Diamond tiers tailored to your
                  seniority level.
                </p>
              </div>
              <Link
                href="/services/cv-rewrite"
                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group"
              >
                <span>Compare Tiers & Features</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </GlassCard>
          </motion.div>

          {/* Card 5: New CV Writing (Flagship) */}
          <motion.div variants={fadeSlideUp}>
            <GlassCard
              hoverEffect="tilt"
              className="h-full p-8 flex flex-col justify-between border-blue-500/30 bg-blue-50/30 dark:bg-gradient-to-br dark:from-[#0F1C35]/95 dark:to-[#050D1F] shadow-sm dark:shadow-none"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white border border-blue-400/40 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-amber-700 dark:text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                    $995 USD
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">New CV Writing</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Our flagship package: a complete ground-up executive curriculum vitae crafted for
                  C-Suite and board-level roles.
                </p>
              </div>
              <Link
                href="/services/new-cv"
                className="inline-flex items-center gap-2 text-xs font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 group"
              >
                <span>Explore Flagship Package</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </GlassCard>
          </motion.div>

          {/* Card 6: Cover Letter */}
          <motion.div variants={fadeSlideUp} className="md:col-span-2 lg:col-span-1">
            <GlassCard
              hoverEffect="tilt"
              className="h-full p-8 flex flex-col justify-between border-slate-200 dark:border-white/10 bg-white dark:bg-transparent shadow-sm dark:shadow-none"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 flex items-center justify-center">
                    <MailCheck className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-amber-700 dark:text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                    $300 USD
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Executive Cover Letter</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  ATS-optimized, tailored value proposition letters built to make an unforgettable first
                  impression on nominating committees.
                </p>
              </div>
              <Link
                href="/services/cover-letter"
                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group"
              >
                <span>View Cover Letter Service</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
