"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Search, MapPin, Briefcase, ArrowRight, Sparkles } from "lucide-react";
import { wordContainer, wordReveal, springFloat, fadeSlideUp } from "@/lib/motion";

export function Hero() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [sector, setSector] = useState("All");
  const [location, setLocation] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (keyword) params.set("keyword", keyword);
    if (sector && sector !== "All") params.set("sector", sector);
    if (location) params.set("location", location);
    router.push(`/jobs?${params.toString()}`);
  };

  const headlineWords = ["Connecting", "the", "right", "people", "with", "the"];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-16 md:py-24">
      {/* Dynamic Background Atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[450px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Subtle Grid Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT COLUMN: Headings, Search bar, CTAs */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Global Recruitment Platform</span>
            </motion.div>

            {/* Headline with word-by-word stagger */}
            <motion.h1
              variants={wordContainer}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]"
            >
              {headlineWords.map((word, index) => (
                <motion.span key={index} variants={wordReveal} className="inline-block mr-3">
                  {word}
                </motion.span>
              ))}
              <motion.span
                variants={wordReveal}
                className="inline-block italic text-gradient-gold drop-shadow-[0_0_20px_rgba(245,158,11,0.25)]"
              >
                right roles.
              </motion.span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeSlideUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed"
            >
              NexRole places elite professionals with leading organisations worldwide — faster,
              smarter, and with real executive CV support built in.
            </motion.p>

            {/* Floating Glassmorphism Job Search Bar */}
            <motion.form
              onSubmit={handleSearch}
              variants={springFloat}
              initial="hidden"
              animate="visible"
              className="glass-card p-3 md:p-4 shadow-xl border border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#0F1C35]/95"
            >
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                {/* Keyword Field */}
                <div className="sm:col-span-4 flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus-within:border-blue-500/50 transition-colors">
                  <Search className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Job title or skill..."
                    className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none"
                  />
                </div>

                {/* Sector Dropdown */}
                <div className="sm:col-span-3 flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus-within:border-blue-500/50 transition-colors">
                  <Briefcase className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  <select
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    className="w-full bg-transparent text-sm text-slate-900 dark:text-white focus:outline-none cursor-pointer [&>option]:bg-white [&>option]:text-slate-900 dark:[&>option]:bg-navy-surface dark:[&>option]:text-white"
                  >
                    <option value="All">All Sectors</option>
                    <option value="Legal">Legal</option>
                    <option value="Finance">Finance</option>
                    <option value="Technology">Technology</option>
                    <option value="Human Resources">HR</option>
                    <option value="Operations">Operations</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>

                {/* Location Input */}
                <div className="sm:col-span-3 flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus-within:border-blue-500/50 transition-colors">
                  <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Location / Remote..."
                    className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none"
                  />
                </div>

                {/* Submit Search Button */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full h-full py-2.5 px-4 rounded-btn bg-electric hover:bg-blue-600 text-white font-semibold text-sm flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/25 transition-all duration-200 cursor-pointer"
                  >
                    <span>Search</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.form>

            {/* Sub-links */}
            <motion.div
              variants={fadeSlideUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 pt-1 text-sm font-medium"
            >
              <Link
                href="/jobs"
                className="text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5 group font-semibold"
              >
                <span>Browse All Live Jobs</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-blue-600 dark:text-blue-400" />
              </Link>
              <span className="text-slate-300 dark:text-slate-600">•</span>
              <Link
                href="/contact?subject=EmployerHiring"
                className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center gap-1.5 group font-medium"
              >
                <span>For Employers & Hiring Partners</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-600 dark:text-amber-400" />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Stacked 3D Floating Glassmorphism Job Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[460px] select-none">
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[100px]" />

            {/* Orbiting ring decoration */}
            <div className="absolute w-80 h-80 rounded-full border border-blue-500/20 animate-spin [animation-duration:40s] pointer-events-none" />
            <div className="absolute w-96 h-96 rounded-full border border-amber-500/20 animate-spin [animation-duration:60s] [animation-direction:reverse] pointer-events-none" />

            {/* Stacked Floating Job Cards */}
            {/* Card 1: Top Card */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotateZ: [0, 1.5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="glass-card p-5 w-72 sm:w-80 shadow-2xl absolute -top-4 sm:top-2 -right-2 sm:right-6 border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#0F1C35]/95 backdrop-blur-2xl z-30"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30">
                  Full-time
                </span>
                <span className="text-[10px] font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded border border-slate-200 dark:border-white/10">
                  Legal
                </span>
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug line-clamp-1 mb-1">
                Senior Legal Counsel (Fintech)
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mb-3">Stripe Global · London, UK</p>
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-white/10 text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Compensation</span>
                <span className="font-bold text-amber-600 dark:text-amber-400">£140,000 – £165,000</span>
              </div>
            </motion.div>

            {/* Card 2: Center Card */}
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotateZ: [0, -1, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="glass-card p-5 w-72 sm:w-80 shadow-2xl absolute top-36 sm:top-40 left-0 sm:left-4 border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#0F1C35]/95 backdrop-blur-2xl z-20"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-500/30">
                  Executive
                </span>
                <span className="text-[10px] font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded border border-slate-200 dark:border-white/10">
                  Technology
                </span>
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug line-clamp-1 mb-1">
                VP of Engineering (Cloud AI)
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mb-3">Nexus Technologies · Remote</p>
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-white/10 text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Compensation</span>
                <span className="font-bold text-amber-600 dark:text-amber-400">$210,000 – $240,000</span>
              </div>
            </motion.div>

            {/* Card 3: Bottom Offset Card */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotateZ: [0, 2, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="glass-card p-5 w-72 sm:w-80 shadow-2xl absolute top-72 sm:top-80 right-2 sm:right-10 border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#0F1C35]/95 backdrop-blur-2xl z-10"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/30">
                  Contract
                </span>
                <span className="text-[10px] font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded border border-slate-200 dark:border-white/10">
                  Operations
                </span>
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug line-clamp-1 mb-1">
                Interim Chief Operating Officer
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mb-3">Apex Growth Partners · Zurich</p>
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-white/10 text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Day Rate</span>
                <span className="font-bold text-amber-600 dark:text-amber-400">CHF 1,400 / day</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
