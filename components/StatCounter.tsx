"use client";

import React from "react";
import { useCountUp } from "@/lib/hooks/useCountUp";
import * as LucideIcons from "lucide-react";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  iconName?: string;
  className?: string;
}

export function StatCounter({
  value,
  suffix = "",
  label,
  iconName = "Users",
  className = "",
}: StatCounterProps) {
  const { count, ref } = useCountUp({ end: value, duration: 1800 });

  // Dynamically resolve lucide icon safely
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.Users;

  return (
    <div ref={ref} className={`text-center p-6 flex flex-col items-center justify-center ${className}`}>
      <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 text-amber-600 dark:text-amber-400 shadow-[0_0_15px_rgba(217,119,6,0.1)]">
        <IconComponent className="w-6 h-6" />
      </div>

      <div className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-baseline justify-center">
        <span>{count.toLocaleString()}</span>
        <span className="text-amber-600 dark:text-amber-400 ml-0.5">{suffix}</span>
      </div>

      <p className="mt-2 text-sm md:text-base font-medium text-slate-600 dark:text-slate-400">{label}</p>
    </div>
  );
}
