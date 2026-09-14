"use client";

import React from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { TestimonialCard, type Testimonial } from "@/components/TestimonialCard";
import reviewsData from "@/data/reviews.json";

export function Testimonials() {
  const reviews = reviewsData as Testimonial[];
  const firstRow = reviews.slice(0, 6);
  const secondRow = reviews.slice(6, 12);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-slate-100/70 dark:bg-navy-surface/30 border-y border-slate-200 dark:border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-12">
        <SectionHeader
          eyebrow="Proven Impact"
          eyebrowColor="gold"
          title="What people say about NexRole"
          subtext="Hear directly from senior executives placed into tier-1 positions and organizational leaders who scale their teams with us."
          align="center"
        />
      </div>

      {/* Infinite Scrolling Marquee Rows (Opposite Directions) */}
      <div className="space-y-6">
        {/* Row 1: Left */}
        <MarqueeStrip direction="left" speed={45}>
          {firstRow.map((review) => (
            <div key={review.id} className="w-[340px] sm:w-[380px] shrink-0">
              <TestimonialCard testimonial={review} className="h-full" />
            </div>
          ))}
        </MarqueeStrip>

        {/* Row 2: Right */}
        <MarqueeStrip direction="right" speed={50}>
          {secondRow.map((review) => (
            <div key={review.id} className="w-[340px] sm:w-[380px] shrink-0">
              <TestimonialCard testimonial={review} className="h-full" />
            </div>
          ))}
        </MarqueeStrip>
      </div>
    </section>
  );
}
