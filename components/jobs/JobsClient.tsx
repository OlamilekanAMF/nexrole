"use client";

import React, { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Briefcase, Sparkles, AlertCircle, ArrowRight } from "lucide-react";
import { JobCard } from "@/components/JobCard";
import { AnimatedButton } from "@/components/AnimatedButton";
import { filterSectors } from "@/data/sectors";
import type { Job } from "@/lib/api/jobs";
import { springFloat, staggerContainer, fadeSlideUp } from "@/lib/motion";

interface JobsClientProps {
  initialJobs: Job[];
}

export function JobsClient({ initialJobs }: JobsClientProps) {
  const searchParams = useSearchParams();
  const urlSector = searchParams.get("sector") || "All";
  const urlKeyword = searchParams.get("keyword") || "";
  const urlLocation = searchParams.get("location") || "";

  const [activeSector, setActiveSector] = useState(urlSector);
  const [keyword, setKeyword] = useState(urlKeyword);
  const [location, setLocation] = useState(urlLocation);

  const filteredJobs = useMemo(() => {
    return initialJobs.filter((job) => {
      // Keyword filter
      if (keyword.trim()) {
        const query = keyword.toLowerCase();
        const match =
          job.title.toLowerCase().includes(query) ||
          job.company.toLowerCase().includes(query) ||
          job.description.toLowerCase().includes(query);
        if (!match) return false;
      }

      // Location filter
      if (location.trim()) {
        const locQuery = location.toLowerCase();
        if (!job.location.toLowerCase().includes(locQuery)) return false;
      }

      // Sector filter
      if (activeSector !== "All") {
        if (activeSector === "Executive") {
          if (job.type !== "Executive") return false;
        } else {
          if (
            job.sector.toLowerCase() !== activeSector.toLowerCase() &&
            !job.sector.toLowerCase().includes(activeSector.toLowerCase())
          ) {
            return false;
          }
        }
      }

      return true;
    });
  }, [initialJobs, keyword, location, activeSector]);

  return (
    <div className="w-full">
      {/* ─── SECTION 1: PAGE HERO ─── */}
      <section className="relative min-h-[48vh] flex items-center justify-center overflow-hidden py-16 bg-slate-50/80 dark:bg-navy-surface/20 border-b border-slate-200/80 dark:border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs font-semibold tracking-wider uppercase mb-5"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Verified Global Opportunities</span>
          </motion.div>

          <motion.h1
            variants={fadeSlideUp}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4"
          >
            Find your next <span className="italic text-gradient-gold">opportunity.</span>
          </motion.h1>

          <motion.p
            variants={fadeSlideUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Browse live roles across Legal, Finance, Technology, HR, Operations, and Executive
            leadership.
          </motion.p>

          {/* Full-width Search Bar */}
          <motion.div
            variants={springFloat}
            initial="hidden"
            animate="visible"
            className="glass-card p-3 md:p-4 max-w-4xl mx-auto border border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#0F1C35]/95 shadow-xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
              <div className="sm:col-span-5 flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus-within:border-blue-500/50">
                <Search className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <input
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Keyword, job title, company..."
                  className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none"
                />
              </div>

              <div className="sm:col-span-4 flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus-within:border-blue-500/50">
                <MapPin className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location or 'Remote'..."
                  className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none"
                />
              </div>

              <div className="sm:col-span-3">
                <button
                  onClick={(e) => e.preventDefault()}
                  className="w-full py-2.5 px-5 rounded-btn bg-electric hover:bg-blue-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-500/25 transition-all cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 2: FILTER BAR ─── */}
      <div className="sticky top-[74px] z-30 bg-white/90 dark:bg-[#050D1F]/90 backdrop-blur-xl border-y border-slate-200 dark:border-white/10 py-3 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mr-2 shrink-0 flex items-center gap-1">
              <Briefcase className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" /> Sector:
            </span>
            {filterSectors.map((sec) => {
              const isActive = activeSector.toLowerCase() === sec.toLowerCase();

              return (
                <button
                  key={sec}
                  onClick={() => setActiveSector(sec)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-electric text-white shadow-md shadow-blue-500/30 border border-blue-400"
                      : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10"
                  }`}
                >
                  {sec}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── SECTION 3: JOB LISTINGS GRID ─── */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Showing <span className="text-slate-900 dark:text-white font-bold">{filteredJobs.length}</span> live{" "}
            {filteredJobs.length === 1 ? "mandate" : "mandates"}
          </p>

          {(keyword || location || activeSector !== "All") && (
            <button
              onClick={() => {
                setKeyword("");
                setLocation("");
                setActiveSector("All");
              }}
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline underline-offset-4 cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {filteredJobs.length > 0 ? (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <JobCard job={job} className="h-full" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Empty State */
          <div className="glass-card p-12 md:p-16 text-center max-w-md mx-auto space-y-4 border-dashed border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 shadow-md">
            <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto">
              <AlertCircle className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">No roles match your search</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              We frequently receive confidential, unlisted mandates. Let us know what you&apos;re looking
              for and we&apos;ll notify you when an executive role opens.
            </p>
            <div className="pt-2">
              <AnimatedButton
                href="/contact?subject=JobApplication"
                variant="solid-gold"
                className="text-xs font-bold text-slate-950 px-5 py-2.5"
              >
                <span>Submit Confidential Resume</span>
              </AnimatedButton>
            </div>
          </div>
        )}
      </section>

      {/* ─── SECTION 4: CTA STRIP ─── */}
      <section className="border-t border-slate-200 dark:border-white/10 bg-slate-100/60 dark:bg-navy-surface/30 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">Are you an employer?</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Post your confidential brief and receive shortlisted executive profiles in days.
              </p>
            </div>
          </div>

          <AnimatedButton
            href="/contact?subject=EmployerHiring"
            variant="solid-gold"
            pill
            className="text-xs font-bold text-slate-950 px-6 py-2.5 shrink-0"
          >
            <span>Post a Job</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </AnimatedButton>
        </div>
      </section>
    </div>
  );
}
