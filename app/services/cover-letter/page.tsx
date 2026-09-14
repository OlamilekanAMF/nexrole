"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ChevronRight,
  Clock,
  RotateCcw,
  ShieldCheck,
  Lock,
  ArrowRight,
  CheckCircle2,
  PackagePlus,
} from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { AnimatedButton } from "@/components/AnimatedButton";
import { CTABanner } from "@/components/CTABanner";
import servicesData from "@/data/services.json";
import { wordContainer, wordReveal, fadeSlideUp, fadeSlideLeft, fadeSlideRight, staggerContainer } from "@/lib/motion";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbSchema, createServiceSchema } from "@/lib/seo/schema";

export default function CoverLetterPage() {
  const service = servicesData.coverLetter;
  const headlineWords = ["Executive", "Cover", "Letter"];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Executive Cover Letter", url: "/services/cover-letter" },
  ];

  const serviceJsonLd = createServiceSchema({
    name: "Executive Cover Letter Writing",
    description:
      "Targeted cover letters crafted by executive search recruiters to directly address hiring committees, boards, and PE investors.",
    price: service.price,
    deliveryTime: service.deliveryTime,
    url: "https://nexrole.com/services/cover-letter",
  });

  return (
    <div className="w-full">
      <JsonLd data={[createBreadcrumbSchema(breadcrumbs), serviceJsonLd]} />
      {/* ─── SECTION 1: HERO ─── */}
      <section className="relative min-h-[48vh] flex flex-col justify-center overflow-hidden py-16 bg-slate-50/80 dark:bg-navy-surface/20 border-b border-slate-200/80 dark:border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-6">
            <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400 dark:text-slate-600" />
            <Link href="/services" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400 dark:text-slate-600" />
            <span className="text-amber-500 dark:text-amber-400 font-semibold">Cover Letter</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-semibold tracking-wider uppercase mb-5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Targeted Executive Proposition</span>
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
            {service.description}
          </motion.p>
        </div>
      </section>

      {/* ─── SECTION 2: ABOUT + PRICE CARD ─── */}
      <section className="py-20 md:py-28 relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            variants={fadeSlideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              About This Service
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              When applying for high-stakes leadership roles, a generic cover letter is an instant
              disqualifier. Hiring committees and executive search partners look for a compelling
              business rationale: why you, why this firm, and why now.
            </p>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Our <strong>Executive Cover Letter</strong> service produces a bespoke, high-impact value
              proposition document. We articulate your strategic vision, highlight relevant commercial
              milestones, and frame your personal leadership philosophy in direct response to the
              target mandate.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
                <span className="block text-2xl font-black text-amber-500 dark:text-amber-400">24 Hours</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Standard Delivery</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
                <span className="block text-2xl font-black text-slate-900 dark:text-white">100%</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">ATS Optimized & Tailored</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeSlideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <GlassCard
              hoverEffect="tilt"
              glowColor="gold"
              className="p-8 md:p-10 border-amber-400/60 dark:border-amber-500/40 bg-white dark:bg-gradient-to-b dark:from-[#0F1C35] dark:to-[#060D1F] shadow-xl dark:shadow-[0_15px_50px_-10px_rgba(245,158,11,0.2)]"
            >
              <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-white/10 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-500 dark:text-amber-400">
                    {service.label}
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-5xl font-black text-slate-900 dark:text-white">${service.price}</span>
                    <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">USD</span>
                  </div>
                </div>
                <span className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-500 dark:text-amber-400">
                  <Sparkles className="w-6 h-6" />
                </span>
              </div>

              <div className="space-y-4 mb-8 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-white/5">
                  <span className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs">
                    <Clock className="w-4 h-4 text-amber-500 dark:text-amber-400" /> Guaranteed Delivery
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white text-xs">{service.deliveryTime}</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-white/5">
                  <span className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs">
                    <RotateCcw className="w-4 h-4 text-amber-500 dark:text-amber-400" /> Revisions Included
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white text-xs">{service.revisions}</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-white/5">
                  <span className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs">
                    <ShieldCheck className="w-4 h-4 text-amber-500 dark:text-amber-400" /> Formatting Standard
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white text-xs">{service.format}</span>
                </div>
              </div>

              <AnimatedButton
                href={service.paymentHref}
                variant="solid-gold"
                fullWidth
                className="py-4 text-sm font-extrabold shadow-md dark:shadow-[0_0_25px_rgba(245,158,11,0.4)]"
              >
                <span>Get Started — $300</span>
                <ArrowRight className="w-4 h-4" />
              </AnimatedButton>

              <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                <Lock className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                <span>Secure checkout powered by Lemon Squeezy</span>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 3: WHAT'S INCLUDED ─── */}
      <section className="py-20 md:py-28 bg-slate-100/70 dark:bg-navy-surface/30 border-y border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500 dark:text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full inline-block mb-3">
              Included Deliverables
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Crafted for Board & Executive Committees
            </h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          >
            {service.features.map((feat, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, scale: 0.85 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="p-5 flex items-center gap-3.5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm"
              >
                <div className="w-7 h-7 rounded-full bg-amber-500/20 dark:bg-amber-500 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-navy-deep stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-slate-900 dark:text-white">{feat}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 4: PAIR IT UP (UPSELL BUNDLE) ─── */}
      <section className="py-20 md:py-28 relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-500 dark:text-blue-400 bg-blue-500/10 border border-blue-500/30 px-3.5 py-1 rounded-full inline-block mb-3">
            Synergistic Package
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Maximum impact — pair it with a CV rewrite.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3">
            Ensure complete narrative continuity across your application by matching your cover letter
            tone with a Ruby or Diamond executive CV rewrite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: Cover Letter Alone */}
          <GlassCard hoverEffect="tilt" className="p-8 flex flex-col justify-between bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 shadow-lg">
            <div>
              <span className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400">Standalone Option</span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1 mb-2">Cover Letter Only</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-6">
                Targeted value proposition letter for one specific executive application.
              </p>
              <div className="text-4xl font-black text-slate-900 dark:text-white mb-6">$300 USD</div>
            </div>
            <AnimatedButton
              href="/payment?service=cover-letter&amount=300&currency=USD"
              variant="outlined-white"
              fullWidth
              className="py-3 text-xs font-bold border-slate-300 dark:border-white/20 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10"
            >
              <span>Choose Cover Letter — $300</span>
            </AnimatedButton>
          </GlassCard>

          {/* Card 2: Bundle (Cover Letter + Ruby) */}
          <GlassCard
            hoverEffect="tilt"
            glowColor="gold"
            className="p-8 flex flex-col justify-between border-amber-400/60 dark:border-amber-500/40 bg-gradient-to-b from-amber-50/40 via-white to-white dark:from-[#0F1C35] dark:to-[#081226] shadow-xl relative"
          >
            <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-wider">
              Recommended Bundle
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-amber-500 dark:text-amber-400">
                <PackagePlus className="w-4 h-4" /> Full Application Suite
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1 mb-2">Cover Letter + Ruby CV</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mb-6">
                Both documents written in unison with seamless governance narrative alignment.
              </p>
              <div className="text-4xl font-black text-slate-900 dark:text-white mb-6">
                $800 <span className="text-sm font-normal text-slate-500 dark:text-slate-400">USD</span>
              </div>
            </div>
            <AnimatedButton
              href="/payment?service=cv-rewrite-ruby&amount=800&currency=USD"
              variant="solid-gold"
              fullWidth
              className="py-3 text-xs font-bold"
            >
              <span>Get Full Bundle — $800</span>
              <ArrowRight className="w-4 h-4" />
            </AnimatedButton>
          </GlassCard>
        </div>
      </section>

      {/* ─── SECTION 5: CTA BANNER ─── */}
      <CTABanner
        title={
          <>
            Make an unforgettable <span className="italic text-gradient-gold">first impression.</span>
          </>
        }
        subtext="Order your executive cover letter today with guaranteed 24-hour delivery."
        primaryBtnText="Get Started — $300"
        primaryBtnHref="/payment?service=cover-letter&amount=300&currency=USD"
        secondaryBtnText="Explore Full CV Packages"
        secondaryBtnHref="/services"
      />
    </div>
  );
}
