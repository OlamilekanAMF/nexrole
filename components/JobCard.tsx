"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Building2, ArrowRight } from "lucide-react";
import type { Job } from "@/lib/api/jobs";

interface JobCardProps {
  job: Job;
  className?: string;
}

export function JobCard({ job, className = "" }: JobCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const typeBadgeStyles: Record<string, string> = {
    "Full-time": "bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-500/30",
    Contract: "bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-500/30",
    Executive: "bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-500/30",
  };

  const badgeClass =
    typeBadgeStyles[job.type] || "bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10";

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`glass-card relative overflow-hidden p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5 hover:border-blue-500/40 hover:shadow-[0_12px_36px_-10px_rgba(37,99,235,0.15)] ${className}`}
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full border ${badgeClass}`}
          >
            {job.type}
          </span>
          <span className="text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-md border border-slate-200 dark:border-white/10">
            {job.sector}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1 mb-2">
          {job.title}
        </h3>

        {/* Company & Location */}
        <div className="flex flex-col gap-1.5 text-xs text-slate-600 dark:text-slate-300 mb-4">
          <div className="flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{job.company}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{job.location}</span>
          </div>
        </div>

        {/* Short Description */}
        {job.description && (
          <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mb-4 leading-relaxed">
            {job.description}
          </p>
        )}
      </div>

      <div>
        {/* Salary */}
        <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between mb-2">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Compensation</span>
          <span className="text-sm font-bold text-amber-600 dark:text-amber-400">{job.salary}</span>
        </div>

        {/* Slide-up Action Button */}
        <div className="relative h-10 mt-2 overflow-hidden rounded-btn">
          <Link
            href={`/contact?subject=JobApplication&jobId=${job.id}&title=${encodeURIComponent(
              job.title
            )}`}
            className={`absolute inset-0 w-full h-full flex items-center justify-center gap-2 text-xs font-semibold rounded-btn transition-all duration-300 ${
              isHovered
                ? "bg-electric text-white translate-y-0 opacity-100 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                : "bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-200 translate-y-1 opacity-95 border border-slate-200 dark:border-white/10"
            }`}
          >
            <span>View & Apply</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
