"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, ChevronRight, Calendar, ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { fadeSlideUp } from "@/lib/motion";

export interface LegalSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface LegalPageLayoutProps {
  title: string;
  lastUpdated?: string;
  subtitle?: string;
  sections: LegalSection[];
}

export function LegalPageLayout({
  title,
  lastUpdated = "September 2026",
  subtitle = "Please review this document carefully as it governs your engagement with NexRole Global Recruitment Agency.",
  sections,
}: LegalPageLayoutProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="w-full">
      {/* ─── COMPACT HERO ─── */}
      <section className="relative min-h-[35vh] flex flex-col justify-center overflow-hidden py-14 bg-slate-50/80 dark:bg-navy-surface/20 border-b border-slate-200/80 dark:border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4">
            <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400 dark:text-slate-600" />
            <span className="text-slate-500 dark:text-slate-400">Legal</span>
            <ChevronRight className="w-3 h-3 text-slate-400 dark:text-slate-600" />
            <span className="text-blue-600 dark:text-blue-400 font-semibold">{title}</span>
          </nav>

          <motion.h1
            variants={fadeSlideUp}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3"
          >
            {title}
          </motion.h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-medium">
              <Shield className="w-3.5 h-3.5" /> Termly Standard Compliance
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" /> Last Updated: {lastUpdated}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl mt-4 leading-relaxed">
            {subtitle}
          </p>
        </div>
      </section>

      {/* ─── CONTENT + STICKY TOC ─── */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Content Area (Max 800px) */}
          <div className="lg:col-span-8 space-y-12 max-w-[800px]">
            {sections.map((sec, idx) => (
              <motion.article
                key={sec.id}
                id={sec.id}
                variants={fadeSlideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="scroll-mt-28 space-y-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-amber-500 dark:text-amber-400">0{idx + 1}</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {sec.title}
                  </h2>
                </div>

                <div className="pt-2 text-slate-600 dark:text-slate-300 space-y-3.5 border-l border-slate-200 dark:border-white/10 pl-4">
                  {sec.content}
                </div>
              </motion.article>
            ))}
          </div>

          {/* Sticky Desktop TOC Sidebar */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28">
            <GlassCard className="p-6 border-slate-200 dark:border-white/10 bg-white dark:bg-[#0F1C35]/80 shadow-sm space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Table of Contents
              </h3>
              <nav className="space-y-1">
                {sections.map((sec) => {
                  const isActive = activeSection === sec.id;
                  return (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className={`block px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                        isActive
                          ? "bg-blue-50 dark:bg-blue-500/20 text-blue-700 dark:text-white font-bold border-l-2 border-blue-600"
                          : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                      }`}
                    >
                      {sec.title}
                    </a>
                  );
                })}
              </nav>

              <div className="pt-4 border-t border-slate-100 dark:border-white/10">
                <Link
                  href="/contact"
                  className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-semibold flex items-center gap-1.5"
                >
                  <span>Have questions on this policy?</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </GlassCard>
          </aside>
        </div>
      </section>
    </div>
  );
}
