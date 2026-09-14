"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { JobCard } from "@/components/JobCard";
import { getFeaturedJobs } from "@/lib/api/jobs";
import { staggerContainer, fadeSlideUp } from "@/lib/motion";

export function FeaturedJobs() {
  const featuredJobs = getFeaturedJobs().slice(0, 6);

  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header: Left-aligned with glowing blue dot */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeader
            eyebrow="Market Radar"
            eyebrowColor="blue"
            withDot
            title="Featured Opportunities"
            subtext="Handpicked leadership, technical, and board-level roles currently open across our global partner network."
            align="left"
            className="mb-0"
          />

          <Link
            href="/jobs"
            className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-electric hover:text-blue-700 transition-colors group"
          >
            <span>Explore All 20+ Active Mandates</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        {/* 3-Column Bento Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featuredJobs.map((job) => (
            <motion.div
              key={job.id}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <JobCard job={job} className="h-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* Centered Mobile Link */}
        <motion.div
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/jobs"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 hover:border-blue-500/40 text-sm font-bold text-slate-900 dark:text-white transition-all duration-300 group shadow-md hover:shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400" />
            <span>View All Live Roles</span>
            <ArrowRight className="w-4 h-4 text-electric dark:text-blue-400 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
