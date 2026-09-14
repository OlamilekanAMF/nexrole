"use client";

import React from "react";
import { Star } from "lucide-react";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  quote: string;
  type?: "Candidate" | "Employer";
  avatar?: string | null;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className = "" }: TestimonialCardProps) {
  // Generate initials for avatar fallback
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  const isCandidate = testimonial.type === "Candidate";

  return (
    <div
      className={`glass-card p-6 md:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/40 hover:shadow-[0_12px_36px_-8px_rgba(37,99,235,0.15)] ${className}`}
    >
      <div>
        {/* Header: Avatar, Info, Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 border border-blue-400/30 flex items-center justify-center text-sm font-bold text-white shadow-sm">
              {initials}
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">{testimonial.name}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {testimonial.role} · <span className="text-slate-700 dark:text-slate-300 font-medium">{testimonial.company}</span>
              </p>
            </div>
          </div>

          {testimonial.type && (
            <span
              className={`text-[10px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full border ${
                isCandidate
                  ? "bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-500/30"
                  : "bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-500/30"
              }`}
            >
              {testimonial.type}
            </span>
          )}
        </div>

        {/* Stars */}
        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i < testimonial.rating
                  ? "text-amber-500 fill-amber-500 drop-shadow-[0_0_4px_rgba(245,158,11,0.4)]"
                  : "text-slate-300 dark:text-slate-700"
              }`}
            />
          ))}
        </div>

        {/* Quote */}
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic line-clamp-4">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>
    </div>
  );
}
