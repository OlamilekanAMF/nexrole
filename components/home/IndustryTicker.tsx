"use client";

import React from "react";
import { MarqueeStrip } from "@/components/MarqueeStrip";

const sectorsList = [
  "Legal Practice",
  "Investment Finance",
  "Cloud & AI Technology",
  "Human Resources",
  "Global Operations",
  "Brand & Growth Marketing",
  "Executive Administration",
  "Board & C-Suite Search",
  "Fintech Leadership",
  "Corporate Governance",
];

export function IndustryTicker() {
  return (
    <div className="w-full py-6 border-y border-slate-200 dark:border-white/5 bg-slate-100/70 dark:bg-[#050D1F] backdrop-blur-md">
      <MarqueeStrip speed={30}>
        {sectorsList.map((sector, index) => (
          <div key={index} className="flex items-center gap-6 shrink-0">
            <span className="text-sm font-semibold tracking-wider uppercase text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-default">
              {sector}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_6px_#D97706]" />
          </div>
        ))}
      </MarqueeStrip>
    </div>
  );
}
