"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, BriefcaseBusiness, UserRoundCheck, MessageCircle, Sparkles } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { fadeSlideLeft, fadeSlideRight, staggerContainer } from "@/lib/motion";

export function MissionValues() {
  const values = [
    {
      icon: Shield,
      title: "Transparency",
      description: "We communicate clearly about roles, application steps, expectations, and what we can and cannot promise.",
      color: "blue",
    },
    {
      icon: BriefcaseBusiness,
      title: "Relevant Matching",
      description: "We focus on the skills, experience, qualifications, and professional background that genuinely align with each role.",
      color: "gold",
    },
    {
      icon: UserRoundCheck,
      title: "Professionalism & Privacy",
      description: "We handle candidate information respectfully and aim to make every interaction professional, useful, and confidential.",
      color: "blue",
    },
    {
      icon: MessageCircle,
      title: "Respectful Communication",
      description: "We respect candidates' existing employment and encourage them to consider opportunities only where their current agreement permits it.",
      color: "gold",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-slate-50/70 dark:bg-navy-surface/20 border-y border-slate-200/80 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div variants={fadeSlideLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Approach</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              Recruitment built on <span className="italic text-gradient-gold">clarity and fit.</span>
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              We work with employers to understand genuine hiring requirements, source relevant professionals, and qualify suitable candidates before referral. For candidates, we share opportunities that may fit their background and provide clear information so they can make informed decisions.
            </p>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-l-2 border-amber-500 pl-4">
              Recruitment outcomes are decided by the employer. We do not guarantee employment, interviews, or acceptance, and candidates should independently review every opportunity before applying.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((val, idx) => {
              const Icon = val.icon;
              const isGold = val.color === "gold";
              return (
                <motion.div key={idx} variants={fadeSlideRight}>
                  <GlassCard hoverEffect="lift" className="p-6 h-full border-slate-200 dark:border-white/10 hover:border-blue-500/40 dark:hover:border-blue-500/30 transition-all">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${isGold ? "bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30" : "bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30"}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{val.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{val.description}</p>
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
