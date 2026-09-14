"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, FileUp, Sparkles, Handshake } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { staggerContainer, fadeSlideUp } from "@/lib/motion";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Register & Explore",
      description:
        "Browse verified opportunities across our core global sectors or register your confidential profile directly with our search practice.",
    },
    {
      number: "02",
      icon: FileUp,
      title: "Apply or Optimize CV",
      description:
        "Submit your existing application or engage our executive writing studio to transform your credentials into a board-ready positioning document.",
    },
    {
      number: "03",
      icon: Sparkles,
      title: "Precision Matching",
      description:
        "Our sector partners evaluate your executive footprint against active briefs, ensuring tight alignment with organizational culture and compensation goals.",
    },
    {
      number: "04",
      icon: Handshake,
      title: "Interview & Placement",
      description:
        "Receive personalized briefing notes, executive interview preparation, and compensation negotiation advocacy through final onboarding.",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          eyebrow="The Methodology"
          title="How NexRole Works"
          subtext="An orchestrated 4-stage talent lifecycle engineered for speed, discretion, and optimal long-term tenure."
          align="center"
        />

        {/* Timeline Grid with Connecting SVG Line */}
        <div className="relative mt-16">
          {/* Desktop Connecting SVG Line */}
          <div className="hidden lg:block absolute top-1/4 left-12 right-12 h-0.5 -translate-y-1/2 z-0">
            <svg className="w-full h-2 overflow-visible" preserveAspectRatio="none">
              <motion.line
                x1="0%"
                y1="50%"
                x2="100%"
                y2="50%"
                stroke="rgba(37, 99, 235, 0.3)"
                strokeWidth="2"
                strokeDasharray="6 6"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
          >
            {steps.map((step, idx) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={idx}
                  variants={fadeSlideUp}
                  className="glass-card p-6 flex flex-col items-center text-center relative group hover:-translate-y-2 hover:border-blue-500/40 transition-all duration-300"
                >
                  {/* Step Number Circle Badge */}
                  <div className="w-14 h-14 rounded-full bg-white dark:bg-[#050D1F] border-2 border-blue-500/60 shadow-md dark:shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center text-sm font-extrabold text-slate-900 dark:text-white mb-6 group-hover:border-amber-500 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all">
                    <span>{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 group-hover:text-amber-500 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title & Description */}
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{step.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
