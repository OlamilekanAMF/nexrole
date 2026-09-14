"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileSearch, UserCheck2, Briefcase, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedButton } from "@/components/AnimatedButton";
import { staggerContainer, fadeSlideUp } from "@/lib/motion";

export function EmployerProcess() {
  const steps = [
    {
      step: "01",
      icon: FileSearch,
      title: "Tell us your needs",
      desc: "Define your technical requirements, leadership culture, and compensation parameters with your practice lead.",
    },
    {
      step: "02",
      icon: UserCheck2,
      title: "We source & vet candidates",
      desc: "Our search consultants tap confidential industry talent, delivering an evaluated shortlist within 7–14 days.",
    },
    {
      step: "03",
      icon: Briefcase,
      title: "You interview & hire",
      desc: "Meet pre-qualified leaders ready to execute. We handle scheduling, reference dossiers, and compensation negotiation.",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative bg-slate-50/60 dark:bg-navy-surface/40">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <SectionHeader
          eyebrow="Frictionless Execution"
          eyebrowColor="gold"
          title="Hiring? We make it simple."
          subtext="Streamlined executive talent acquisition designed for busy founders, boards, and talent executives."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mt-16 mb-12"
        >
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeSlideUp}
                className="glass-card p-8 flex flex-col items-center text-center relative group hover:-translate-y-1.5 hover:border-amber-500/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(245,158,11,0.2)] group-hover:scale-105 transition-all">
                  <Icon className="w-7 h-7" />
                </div>

                <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 mb-2">{item.step}</span>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <AnimatedButton
          href="/contact?subject=EmployerHiring"
          variant="solid-gold"
          className="text-slate-950 font-bold px-8 py-3.5 text-sm shadow-[0_0_25px_rgba(245,158,11,0.25)]"
        >
          <span>Talk to Our Team</span>
          <ArrowRight className="w-4 h-4" />
        </AnimatedButton>
      </div>
    </section>
  );
}
