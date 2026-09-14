"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserCheck, Building2, CheckCircle2, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { GlassCard } from "@/components/GlassCard";
import { AnimatedButton } from "@/components/AnimatedButton";
import { fadeSlideLeft, fadeSlideRight, staggerContainer } from "@/lib/motion";

export function HowWeHelp() {
  const candidateChecks = [
    "Live roles across 6+ specialized global sectors",
    "Fast, confidential, and guided application support",
    "Executive CV rewrite or built from scratch by experts",
    "Access to unadvertised leadership and board mandates",
  ];

  const employerChecks = [
    "Permanent, contract & retained executive search",
    "Pre-vetted, competency-assessed candidate shortlists",
    "Dedicated sector-specialist consultants per brief",
    "Fast 7-14 day average time to interview shortlist",
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          eyebrow="Dual Pathway"
          title="Two ways we help you move forward"
          subtext="Whether advancing your individual career trajectory or building out senior organizational leadership, NexRole delivers clarity and momentum."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {/* LEFT CARD — For Candidates */}
          <motion.div
            variants={fadeSlideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <GlassCard
              hoverEffect="tilt"
              glowColor="blue"
              className="h-full flex flex-col justify-between border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#0F1C35]/95 shadow-xl p-8 md:p-10"
            >
              <div>
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                    <UserCheck className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30">
                    For Professionals
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                  Find your next role
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                  Step into roles that match your ambition. We partner with forward-thinking
                  enterprises worldwide to place visionary leaders in transformative positions.
                </p>

                {/* Animated Checklist */}
                <motion.ul
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-3.5 mb-10"
                >
                  {candidateChecks.map((item, i) => (
                    <motion.li
                      key={i}
                      variants={{
                        hidden: { opacity: 0, x: -15 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center gap-4">
                <AnimatedButton
                  href="/jobs"
                  variant="solid-blue"
                  className="w-full sm:w-auto px-7 py-3 text-sm"
                >
                  <span>Browse Jobs</span>
                  <ArrowRight className="w-4 h-4" />
                </AnimatedButton>
                <AnimatedButton
                  href="/services/new-cv"
                  variant="outlined-white"
                  className="w-full sm:w-auto px-6 py-3 text-sm border-slate-300 dark:border-white/20 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10"
                >
                  <span>CV Services</span>
                </AnimatedButton>
              </div>
            </GlassCard>
          </motion.div>

          {/* RIGHT CARD — For Employers */}
          <motion.div
            variants={fadeSlideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <GlassCard
              hoverEffect="tilt"
              glowColor="gold"
              className="h-full flex flex-col justify-between border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#0F1C35]/95 shadow-xl p-8 md:p-10"
            >
              <div>
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 shadow-sm">
                    <Building2 className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/30">
                    For Organizations
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                  Hire better, faster
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                  Eliminate hiring friction. Our sector-specialist search partners tap deeply into
                  passive talent pools to curate world-class leadership shortlists with speed.
                </p>

                {/* Animated Checklist */}
                <motion.ul
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-3.5 mb-10"
                >
                  {employerChecks.map((item, i) => (
                    <motion.li
                      key={i}
                      variants={{
                        hidden: { opacity: 0, x: 15 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center gap-4">
                <AnimatedButton
                  href="/contact?subject=EmployerHiring"
                  variant="solid-gold"
                  className="w-full sm:w-auto px-7 py-3 text-sm text-slate-950 font-bold"
                >
                  <span>Talk to Us</span>
                  <ArrowRight className="w-4 h-4" />
                </AnimatedButton>
                <AnimatedButton
                  href="/services"
                  variant="outlined-white"
                  className="w-full sm:w-auto px-6 py-3 text-sm border-slate-300 dark:border-white/20 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10"
                >
                  <span>Search Solutions</span>
                </AnimatedButton>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
