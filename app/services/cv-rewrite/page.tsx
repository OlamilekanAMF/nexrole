"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Clock,
  PhoneCall,
  RotateCcw,
  ArrowRight,
  Check,
  Minus,
} from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { AnimatedButton } from "@/components/AnimatedButton";
import { CTABanner } from "@/components/CTABanner";
import servicesData from "@/data/services.json";
import { wordContainer, wordReveal, fadeSlideUp, staggerContainer } from "@/lib/motion";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbSchema, createServiceSchema } from "@/lib/seo/schema";

export default function CVRewritePage() {
  const { tiers } = servicesData.cvRewrite;
  const headlineWords = ["CV", "Rewrite", "Packages"];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "CV Rewrite", url: "/services/cv-rewrite" },
  ];

  const tierSchemas = [
    createServiceSchema({
      name: `CV Rewrite — ${tiers.sapphire.name}`,
      description: "Professional CV enhancement and ATS formatting for mid-to-senior professionals.",
      price: tiers.sapphire.price,
      deliveryTime: tiers.sapphire.deliveryTime,
      url: "https://nexrole.com/services/cv-rewrite#sapphire",
    }),
    createServiceSchema({
      name: `CV Rewrite — ${tiers.ruby.name} (Executive Recommended)`,
      description: "Comprehensive executive restructuring, achievements quantification, and 1-on-1 strategy call.",
      price: tiers.ruby.price,
      deliveryTime: tiers.ruby.deliveryTime,
      url: "https://nexrole.com/services/cv-rewrite#ruby",
    }),
    createServiceSchema({
      name: `CV Rewrite — ${tiers.diamond.name} (VIP Rush)`,
      description: "Urgent 6-10hr turnaround, full career portfolio revamp, priority writer assignment.",
      price: tiers.diamond.price,
      deliveryTime: tiers.diamond.deliveryTime,
      url: "https://nexrole.com/services/cv-rewrite#diamond",
    }),
  ];

  return (
    <div className="w-full">
      <JsonLd data={[createBreadcrumbSchema(breadcrumbs), ...tierSchemas]} />
      {/* ─── SECTION 1: HERO ─── */}
      <section className="relative min-h-[48vh] flex flex-col justify-center overflow-hidden py-16 bg-navy-surface/20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-blue-400 font-semibold">CV Rewrite</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Executive Resume Service</span>
          </motion.div>

          <motion.h1
            variants={wordContainer}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4"
          >
            {headlineWords.map((word, i) => (
              <motion.span key={i} variants={wordReveal} className="inline-block mr-3">
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            variants={fadeSlideUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15 }}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed"
          >
            A professional rewrite of your existing CV — sharper language, stronger executive
            framing, and board-level credibility. Choose the tier that matches your career horizon.
          </motion.p>
        </div>
      </section>

      {/* ─── SECTION 2: PRICING TIERS ─── */}
      <section className="py-20 md:py-28 relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Choose your package
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3">
            Every tier is written by our seasoned executive search consultants. Higher tiers add deeper
            governance positioning, board-market targeting, and rapid delivery.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        >
          {/* CARD 1 — SAPPHIRE */}
          <motion.div variants={fadeSlideUp} className="flex">
            <GlassCard
              hoverEffect="tilt"
              className="w-full p-8 flex flex-col justify-between border-slate-200 dark:border-blue-500/30 bg-white dark:bg-[#0F1C35]/80 shadow-sm dark:shadow-none"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400">
                    Sapphire Tier
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-5xl font-black text-slate-900 dark:text-white">${tiers.sapphire.price}</span>
                  <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">USD</span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 min-h-[36px] mb-6 leading-relaxed">
                  {tiers.sapphire.label}
                </p>

                {/* Specs */}
                <div className="py-4 border-y border-slate-100 dark:border-white/10 space-y-2.5 text-xs text-slate-500 dark:text-slate-400 mb-6">
                  <div className="flex justify-between">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Delivery:
                    </span>
                    <span className="text-slate-900 dark:text-white font-semibold">{tiers.sapphire.deliveryTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-1.5">
                      <PhoneCall className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Consultation:
                    </span>
                    <span className="text-slate-900 dark:text-white font-semibold">{tiers.sapphire.consultation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-1.5">
                      <RotateCcw className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Revisions:
                    </span>
                    <span className="text-slate-900 dark:text-white font-semibold">{tiers.sapphire.revisions}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tiers.sapphire.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <AnimatedButton
                href={tiers.sapphire.paymentHref}
                variant="outlined-blue"
                fullWidth
                className="py-3.5 text-xs font-bold"
              >
                <span>Choose Sapphire — $300</span>
                <ArrowRight className="w-4 h-4" />
              </AnimatedButton>
            </GlassCard>
          </motion.div>

          {/* CARD 2 — RUBY (RECOMMENDED) */}
          <motion.div variants={fadeSlideUp} className="flex">
            <GlassCard
              hoverEffect="tilt"
              glowColor="gold"
              className="w-full p-8 md:p-10 flex flex-col justify-between border-amber-400/60 dark:border-amber-500/50 bg-gradient-to-b from-amber-50/40 via-white to-white dark:bg-gradient-to-b dark:from-[#0F1C35] dark:via-[#0A1428] dark:to-[#060D1F] shadow-xl dark:shadow-[0_15px_60px_-10px_rgba(245,158,11,0.25)] relative lg:-translate-y-3"
            >
              {/* Pulsing Recommended Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black tracking-wider uppercase shadow-[0_0_20px_rgba(245,158,11,0.3)] flex items-center gap-1.5 animate-pulse-glow">
                <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                <span>Recommended Choice</span>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4 mt-2">
                  <span className="text-xs font-black uppercase tracking-widest text-amber-700 dark:text-amber-400">
                    Ruby Tier
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-5xl font-black text-slate-900 dark:text-white">${tiers.ruby.price}</span>
                  <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">USD</span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 min-h-[36px] mb-6 leading-relaxed">
                  {tiers.ruby.label}
                </p>

                {/* Specs */}
                <div className="py-4 border-y border-slate-100 dark:border-white/10 space-y-2.5 text-xs text-slate-500 dark:text-slate-400 mb-6">
                  <div className="flex justify-between">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" /> Delivery:
                    </span>
                    <span className="text-slate-900 dark:text-white font-semibold">{tiers.ruby.deliveryTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-1.5">
                      <PhoneCall className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" /> Consultation:
                    </span>
                    <span className="text-slate-900 dark:text-white font-semibold">{tiers.ruby.consultation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-1.5">
                      <RotateCcw className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" /> Revisions:
                    </span>
                    <span className="text-slate-900 dark:text-white font-semibold">{tiers.ruby.revisions}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tiers.ruby.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <AnimatedButton
                href={tiers.ruby.paymentHref}
                variant="solid-gold"
                fullWidth
                className="py-4 text-sm font-black text-slate-950 shadow-[0_0_25px_rgba(245,158,11,0.3)]"
              >
                <span>Choose Ruby — $500</span>
                <ArrowRight className="w-4 h-4" />
              </AnimatedButton>
            </GlassCard>
          </motion.div>

          {/* CARD 3 — DIAMOND */}
          <motion.div variants={fadeSlideUp} className="flex">
            <GlassCard
              hoverEffect="tilt"
              className="w-full p-8 flex flex-col justify-between border-purple-300/40 dark:border-purple-400/30 bg-purple-50/20 dark:bg-[#0F1C35]/80 shadow-sm dark:shadow-none"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-widest text-purple-700 dark:text-purple-300">
                    Diamond Tier
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-5xl font-black text-slate-900 dark:text-white">${tiers.diamond.price}</span>
                  <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">USD</span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 min-h-[36px] mb-6 leading-relaxed">
                  {tiers.diamond.label}
                </p>

                {/* Specs */}
                <div className="py-4 border-y border-slate-100 dark:border-white/10 space-y-2.5 text-xs text-slate-500 dark:text-slate-400 mb-6">
                  <div className="flex justify-between">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-purple-600 dark:text-purple-300" /> Delivery:
                    </span>
                    <span className="text-slate-900 dark:text-white font-semibold">{tiers.diamond.deliveryTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-1.5">
                      <PhoneCall className="w-3.5 h-3.5 text-purple-600 dark:text-purple-300" /> Consultation:
                    </span>
                    <span className="text-slate-900 dark:text-white font-semibold">{tiers.diamond.consultation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-1.5">
                      <RotateCcw className="w-3.5 h-3.5 text-purple-600 dark:text-purple-300" /> Revisions:
                    </span>
                    <span className="text-slate-900 dark:text-white font-semibold">{tiers.diamond.revisions}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tiers.diamond.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-300 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <AnimatedButton
                href={tiers.diamond.paymentHref}
                variant="outlined-white"
                fullWidth
                className="py-3.5 text-xs font-bold border-purple-300/40 text-purple-700 dark:text-purple-200 hover:bg-purple-50 dark:hover:bg-white/5"
              >
                <span>Choose Diamond — $700</span>
                <ArrowRight className="w-4 h-4" />
              </AnimatedButton>
            </GlassCard>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── SECTION 3: TIER COMPARISON TABLE ─── */}
      <section className="py-20 bg-slate-50/70 dark:bg-navy-surface/30 border-y border-slate-200/80 dark:border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full inline-block mb-3">
              Feature Matrix
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Compare Tier Deliverables
            </h2>
          </div>

          <div className="glass-card overflow-x-auto border-slate-200 dark:border-white/10 bg-white dark:bg-[#0F1C35]/80 shadow-sm dark:shadow-none">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02]">
                  <th className="p-5 font-bold text-slate-600 dark:text-slate-400">Deliverables & Strategy</th>
                  <th className="p-5 font-bold text-blue-600 dark:text-blue-400 text-center">Sapphire ($300)</th>
                  <th className="p-5 font-bold text-amber-700 dark:text-amber-400 text-center bg-amber-500/10 dark:bg-amber-500/5 border-x border-amber-500/20">
                    Ruby ($500)
                  </th>
                  <th className="p-5 font-bold text-purple-700 dark:text-purple-300 text-center">Diamond ($700)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-xs sm:text-sm">
                {[
                  { feature: "Executive CV Rewrite & Syntax Overhaul", s: true, r: true, d: true },
                  { feature: "Executive Positioning Enhancement", s: true, r: true, d: true },
                  { feature: "Professional Formatting & ATS Design", s: true, r: true, d: true },
                  { feature: "Board-Level & C-Suite Framing", s: false, r: true, d: true },
                  { feature: "Governance & Executive Narrative", s: false, r: true, d: true },
                  { feature: "Market Differentiation Strategy", s: false, r: true, d: true },
                  { feature: "Strategic Career Repositioning", s: false, r: false, d: true },
                  { feature: "Premium Board Market Targeting", s: false, r: false, d: true },
                  { feature: "Consultation Round", s: "1 Session", r: "Priority", d: "Priority+" },
                  { feature: "Revision Coverage", s: "1 Round", r: "1 Round", d: "Priority Rounds" },
                  { feature: "Guaranteed Turnaround", s: "20–24 hrs", r: "14–18 hrs", d: "6–10 hrs" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-medium text-slate-700 dark:text-slate-300">{row.feature}</td>
                    <td className="p-4 text-center">
                      {typeof row.s === "boolean" ? (
                        row.s ? (
                          <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 mx-auto" />
                        ) : (
                          <Minus className="w-4 h-4 text-slate-400 dark:text-slate-600 mx-auto" />
                        )
                      ) : (
                        <span className="text-slate-700 dark:text-slate-300 font-semibold">{row.s}</span>
                      )}
                    </td>
                    <td className="p-4 text-center bg-amber-500/10 dark:bg-amber-500/5 border-x border-amber-500/20 font-semibold text-slate-900 dark:text-white">
                      {typeof row.r === "boolean" ? (
                        row.r ? (
                          <Check className="w-4 h-4 text-amber-600 dark:text-amber-400 mx-auto" />
                        ) : (
                          <Minus className="w-4 h-4 text-slate-400 dark:text-slate-600 mx-auto" />
                        )
                      ) : (
                        <span className="text-amber-700 dark:text-amber-400 font-bold">{row.r}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.d === "boolean" ? (
                        row.d ? (
                          <Check className="w-4 h-4 text-purple-600 dark:text-purple-300 mx-auto" />
                        ) : (
                          <Minus className="w-4 h-4 text-slate-400 dark:text-slate-600 mx-auto" />
                        )
                      ) : (
                        <span className="text-slate-700 dark:text-slate-300 font-semibold">{row.d}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: NOT SURE WHICH TIER? ─── */}
      <section className="py-20 text-center max-w-3xl mx-auto px-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
          Not sure which tier is right for you?
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          Send us your current CV for a complimentary preliminary assessment. Our consultants will
          recommend the exact tier that delivers maximum ROI for your target positions.
        </p>
        <AnimatedButton
          href="/contact?subject=CVTierConsultation"
          variant="outlined-white"
          className="px-8 py-3.5 text-sm"
        >
          <span>Contact Our Team for Guidance</span>
          <ArrowRight className="w-4 h-4" />
        </AnimatedButton>
      </section>

      {/* ─── CTA BANNER ─── */}
      <CTABanner
        title={
          <>
            Ready to rewrite your <span className="italic text-gradient-gold">career story?</span>
          </>
        }
        subtext="Choose Sapphire ($300), Ruby ($500), or Diamond ($700) with instant Lemon Squeezy checkout."
        primaryBtnText="Get Ruby Package ($500)"
        primaryBtnHref="/payment?service=cv-rewrite-ruby&amount=500&currency=USD"
        secondaryBtnText="Explore Flagship CV ($995)"
        secondaryBtnHref="/services/new-cv"
      />
    </div>
  );
}
