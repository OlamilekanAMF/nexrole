"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Play, MessageSquarePlus, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { TestimonialCard, type Testimonial } from "@/components/TestimonialCard";
import { StatsBar } from "@/components/home/StatsBar";
import { AnimatedButton } from "@/components/AnimatedButton";
import reviewsData from "@/data/reviews.json";
import { fadeSlideUp, staggerContainer } from "@/lib/motion";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbSchema } from "@/lib/seo/schema";

export default function ReviewsPage() {
  const reviews = reviewsData as Testimonial[];
  const [filter, setFilter] = useState<"All" | "Candidate" | "Employer">("All");

  const filteredReviews = reviews.filter((r) => {
    if (filter === "All") return true;
    return r.type === filter;
  });

  const rowOne = reviews.slice(0, 6);
  const rowTwo = reviews.slice(6, 12);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Executive Reviews & Placements", url: "/reviews" },
  ];

  return (
    <div className="w-full">
      <JsonLd data={createBreadcrumbSchema(breadcrumbs)} />
      {/* ─── SECTION 1: PAGE HERO ─── */}
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center text-center overflow-hidden py-16 bg-slate-50/80 dark:bg-navy-surface/20 border-b border-slate-200/80 dark:border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-semibold tracking-wider uppercase"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Candidate & Employer Feedback</span>
          </motion.div>

          <motion.h1
            variants={fadeSlideUp}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight"
          >
            Trusted by professionals{" "}
            <span className="italic text-gradient-gold">worldwide.</span>
          </motion.h1>

          <motion.p
            variants={fadeSlideUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed"
          >
            Real results. Real people. Real executive placements across 38+ countries.
          </motion.p>

          {/* Animated 5 Gold Stars + Rating Display */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, scale: 0.3 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + s * 0.08 }}
                >
                  <Star className="w-6 h-6 text-amber-400 fill-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                </motion.div>
              ))}
            </div>

            <div className="text-sm font-semibold text-slate-600 dark:text-slate-300">
              <span className="text-slate-900 dark:text-white font-extrabold text-base">4.9 / 5.0</span> from over 200+
              verified reviews
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 2: MARQUEE TESTIMONIALS (2 ROWS) ─── */}
      <section className="py-12 bg-slate-100/70 dark:bg-[#050D1F] border-y border-slate-200 dark:border-white/5 overflow-hidden">
        <div className="space-y-6">
          <MarqueeStrip direction="left" speed={40}>
            {rowOne.map((rev) => (
              <div key={rev.id} className="w-[360px] shrink-0">
                <TestimonialCard testimonial={rev} className="h-full" />
              </div>
            ))}
          </MarqueeStrip>

          <MarqueeStrip direction="right" speed={45}>
            {rowTwo.map((rev) => (
              <div key={rev.id} className="w-[360px] shrink-0">
                <TestimonialCard testimonial={rev} className="h-full" />
              </div>
            ))}
          </MarqueeStrip>
        </div>
      </section>

      {/* ─── SECTION 3: FEATURED REVIEWS GRID (FILTERABLE) ─── */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <SectionHeader
            eyebrow="Detailed Testimonials"
            title="Voices from Our Network"
            subtext="Filter by candidate career journeys or organizational hiring experiences."
            align="left"
            className="mb-0"
          />

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-slate-200/60 dark:bg-white/5 p-1 rounded-full border border-slate-200 dark:border-white/10 shrink-0">
            {(["All", "Candidate", "Employer"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  filter === t
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {t === "All" ? "All Reviews" : `${t}s`}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredReviews.map((review) => (
            <motion.div key={review.id} variants={fadeSlideUp}>
              <TestimonialCard testimonial={review} className="h-full" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── SECTION 4: VIDEO TESTIMONIALS (CARDS) ─── */}
      <section className="py-20 bg-slate-100/60 dark:bg-navy-surface/30 border-y border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Visual Stories"
            title="Video Case Studies"
            subtext="Watch executives discuss their career moves and how NexRole positioned them for board appointments."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "From VP to General Counsel in 21 Days",
                executive: "Sarah Mitchell · London, UK",
                time: "2:45 min",
              },
              {
                title: "Scaling Engineering Leadership Across Europe",
                executive: "Henrik Johansson · Berlin, Germany",
                time: "3:10 min",
              },
              {
                title: "Overcoming Cross-Border Relocation Hurdles",
                executive: "Priya Sharma · Singapore",
                time: "2:15 min",
              },
            ].map((video, idx) => (
              <div
                key={idx}
                className="overflow-hidden group rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm hover:border-amber-500/40 hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Video Mock Thumbnail with Play Button */}
                <div className="relative aspect-video bg-gradient-to-tr from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center border-b border-slate-200 dark:border-white/10 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="w-14 h-14 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.4)] group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                  <span className="absolute bottom-3 right-3 text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/70 text-slate-300">
                    {video.time}
                  </span>
                </div>

                <div className="p-6">
                  <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors mb-1">
                    {video.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{video.executive}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: STATS BAR ─── */}
      <StatsBar />

      {/* ─── SECTION 6: LEAVE A REVIEW CTA ─── */}
      <section className="py-24 text-center max-w-3xl mx-auto px-6">
        <span className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-500 dark:text-amber-400 mx-auto mb-6 shadow-[0_0_20px_rgba(245,158,11,0.25)]">
          <MessageSquarePlus className="w-7 h-7" />
        </span>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
          Had a great experience? <span className="italic text-gradient-gold">Tell others.</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed">
          Your feedback helps other elite professionals and hiring organisations discover the NexRole
          standard.
        </p>

        <AnimatedButton
          href="/contact?subject=SubmitReview"
          variant="solid-gold"
          className="font-bold px-8 py-3.5 text-sm shadow-md"
        >
          <span>Leave a Review</span>
        </AnimatedButton>
      </section>
    </div>
  );
}
