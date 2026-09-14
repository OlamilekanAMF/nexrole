"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Award, Sparkles } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { fadeSlideLeft, fadeSlideRight, staggerContainer } from "@/lib/motion";

export function MissionValues() {
  const values = [
    {
      icon: Shield,
      title: "Radical Transparency",
      description:
        "No hidden caveats or inflated promises. We provide candid compensation data, direct recruiter feedback, and clear progress milestones at every stage.",
      color: "blue",
    },
    {
      icon: Zap,
      title: "Speed with Purpose",
      description:
        "High-caliber executive placement shouldn't require months of indecision. Our agile search frameworks cut average time-to-hire by over 40%.",
      color: "gold",
    },
    {
      icon: Award,
      title: "Uncompromising Excellence",
      description:
        "From board-level positioning to meticulous CV documentation, every artifact and interaction reflects the caliber of top-tier executive leadership.",
      color: "blue",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-slate-50/70 dark:bg-navy-surface/20 border-y border-slate-200/80 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column Statement */}
          <motion.div
            variants={fadeSlideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Foundational Thesis</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              We believe every professional deserves a role that{" "}
              <span className="italic text-gradient-gold">matches their ambition.</span>
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Traditional recruitment treats senior candidates like commodities and employers like
              transactions. NexRole was engineered to invert this model: human-centric alignment,
              rigorous industry research, and strategic positioning for both parties.
            </p>

            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center gap-8 text-xs text-slate-500 dark:text-slate-400">
              <div>
                <span className="block text-xl font-extrabold text-slate-900 dark:text-white">96%</span>
                <span>Placement Retention</span>
              </div>
              <div className="h-8 w-px bg-slate-200 dark:bg-white/10" />
              <div>
                <span className="block text-xl font-extrabold text-amber-600 dark:text-amber-400">14 Days</span>
                <span>Avg. Shortlist Delivery</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column Stacked Values Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-4"
          >
            {values.map((val, idx) => {
              const Icon = val.icon;
              const isGold = val.color === "gold";

              return (
                <motion.div key={idx} variants={fadeSlideRight}>
                  <GlassCard
                    hoverEffect="lift"
                    className="p-6 border-slate-200 dark:border-white/10 hover:border-blue-500/40 dark:hover:border-blue-500/30 transition-all flex items-start gap-4"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl shrink-0 flex items-center justify-center ${
                        isGold
                          ? "bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                          : "bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30 shadow-[0_0_15px_rgba(37,99,235,0.2)]"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">{val.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
