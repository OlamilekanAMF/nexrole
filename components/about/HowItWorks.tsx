"use client";

import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, Search, UserCheck, Mail, FileText, ArrowRight, Handshake } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { staggerContainer, fadeSlideUp } from "@/lib/motion";

export function HowItWorks() {
  const steps = [
    { number: "01", icon: ClipboardList, title: "Understand the role", description: "We clarify the employer's genuine hiring requirements, including the responsibilities, skills, qualifications, and experience needed." },
    { number: "02", icon: Search, title: "Source relevant professionals", description: "We identify professionals whose background and capabilities may align with the available position." },
    { number: "03", icon: UserCheck, title: "Review and qualify", description: "We review relevant experience and qualifications before referring candidates who appear suitable for the role." },
    { number: "04", icon: Mail, title: "Share relevant opportunities", description: "We contact candidates about opportunities that may fit their professional background and explain the next steps." },
    { number: "05", icon: FileText, title: "Support the application", description: "Where appropriate, we can provide optional professional CV/resume and cover-letter support. These services are not a fee to access a job." },
    { number: "06", icon: ArrowRight, title: "Connect with the process", description: "Qualified candidates proceed through the appropriate employer or application process with clear information about the opportunity." },
    { number: "07", icon: Handshake, title: "Employer decides", description: "The employer makes the final decision about interviews, selection, and employment. No outcome is guaranteed." },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader eyebrow="Our Process" title="How NexRole Works" subtext="A clear, practical process for helping employers and candidates move toward the right recruitment conversation." align="center" />
        <div className="relative mt-16">
          <div className="hidden lg:block absolute top-1/4 left-12 right-12 h-0.5 -translate-y-1/2 z-0">
            <svg className="w-full h-2 overflow-visible" preserveAspectRatio="none">
              <motion.line x1="0%" y1="50%" x2="100%" y2="50%" stroke="rgba(37, 99, 235, 0.3)" strokeWidth="2" strokeDasharray="6 6" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeInOut" }} />
            </svg>
          </div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div key={idx} variants={fadeSlideUp} className="glass-card p-6 flex flex-col items-center text-center relative group hover:-translate-y-2 hover:border-blue-500/40 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-white dark:bg-[#050D1F] border-2 border-blue-500/60 shadow-md dark:shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center mb-5">
                    <span className="text-sm font-mono font-bold text-blue-600 dark:text-blue-400">{step.number}</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4"><Icon className="w-5 h-5" /></div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{step.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
