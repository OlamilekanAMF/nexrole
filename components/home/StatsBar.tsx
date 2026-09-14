"use client";

import React from "react";
import { StatCounter } from "@/components/StatCounter";
import { stats } from "@/data/stats";

export function StatsBar() {
  return (
    <section className="relative py-16 md:py-20 bg-slate-100/70 dark:bg-[#081226] border-y border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 shadow-sm hover:border-amber-500/40 hover:shadow-md transition-all duration-300"
            >
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                iconName={stat.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
