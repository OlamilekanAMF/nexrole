"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Scale, Briefcase, Monitor, Users, Settings, Megaphone, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { sectors } from "@/data/sectors";
import { staggerContainer, scaleIn } from "@/lib/motion";

const iconMap: Record<string, React.ElementType> = {
  Scale,
  Briefcase,
  Monitor,
  Users,
  Settings,
  Megaphone,
};

export function SectorsGrid() {
  return (
    <section className="py-24 md:py-32 relative bg-slate-50/50 dark:bg-navy-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Specialisms"
          eyebrowColor="blue"
          title="Sectors We Cover"
          subtext="Deep functional expertise backed by specialized consultant desks with direct sector heritage."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {sectors.map((sector) => {
            const Icon = iconMap[sector.icon] || Briefcase;

            return (
              <motion.div key={sector.slug} variants={scaleIn}>
                <Link
                  href={`/jobs?sector=${encodeURIComponent(sector.name)}`}
                  className="glass-card p-8 block h-full relative group hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_12px_35px_-5px_rgba(37,99,235,0.15)] transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/20 to-indigo-900/30 dark:from-blue-600/30 dark:to-indigo-900/40 border border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:text-amber-500 dark:group-hover:text-amber-400 group-hover:border-amber-500/40 group-hover:scale-105 transition-all shadow-[0_0_20px_rgba(37,99,235,0.15)]">
                      <Icon className="w-7 h-7" />
                    </div>

                    <span className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white group-hover:border-slate-300 dark:group-hover:border-white/20 transition-all">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {sector.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {sector.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
