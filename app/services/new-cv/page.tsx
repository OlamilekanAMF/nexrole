"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Clock,
  PhoneCall,
  RotateCcw,
  Lock,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Shield,
  Briefcase,
  Globe2,
} from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { AnimatedButton } from "@/components/AnimatedButton";
import { CTABanner } from "@/components/CTABanner";
import servicesData from "@/data/services.json";
import { wordContainer, wordReveal, fadeSlideUp, fadeSlideLeft, fadeSlideRight, staggerContainer } from "@/lib/motion";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbSchema, createServiceSchema } from "@/lib/seo/schema";

export default function NewCVPage() {
  const service = servicesData.newCV;

  const headlineWords = ["New", "CV", "Writing"];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "New CV Writing", url: "/services/new-cv" },
  ];

  const serviceJsonLd = createServiceSchema({
    name: "New CV Writing — Executive Tier",
    description:
      "Bespoke executive CV created from the ground up by senior recruitment directors with board-level storytelling.",
    price: service.price,
    deliveryTime: service.deliveryTime,
    url: "https://nexrole.com/services/new-cv",
  });

  return (
    <div className="w-full">
      <JsonLd data={[createBreadcrumbSchema(breadcrumbs), serviceJsonLd]} />
      {/* ─── SECTION 1: BREADCRUMB + HERO ─── */}
      <section className="relative min-h-[50vh] flex flex-col justify-center overflow-hidden py-16 bg-navy-surface/20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-amber-400 font-semibold">New CV Writing</span>
          </nav>

          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500 text-slate-950 text-xs font-black tracking-wider uppercase mb-6 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
          >
            <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
            <span>Flagship Executive Service</span>
          </motion.div>

          {/* Headline Word Stagger */}
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
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed"
          >
            {service.description}
          </motion.p>
        </div>
      </section>

      {/* ─── SECTION 2: ABOUT THIS SERVICE + FLOATING PRICE CARD ─── */}
      <section className="py-20 md:py-28 relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: About Text */}
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
              When targeting C-suite, Managing Director, or Board positions, your document must do far
              more than list prior responsibilities. Nominating committees demand evidence of commercial
              vision, governance stewardship, organizational scale, and shareholder value generation.
            </p>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Our flagship <strong>New CV Writing</strong> service is an intensive, ground-up rebuild
              conducted by former executive recruiters. We distill decades of multifaceted career
              achievements into a sharp, commanding narrative engineered to bypass ATS filters and seize
              the attention of board chairs and executive search partners within 7 seconds.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
                <span className="block text-2xl font-black text-amber-600 dark:text-amber-400">100%</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Ground-Up Creation</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
                <span className="block text-2xl font-black text-slate-900 dark:text-white">6–10 hrs</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Guaranteed Turnaround</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Floating Glassmorphism Price Card */}
          <motion.div
            variants={fadeSlideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <GlassCard
                hoverEffect="tilt"
                glowColor="gold"
                className="p-8 md:p-10 border-amber-400/60 dark:border-amber-500/40 bg-gradient-to-b from-amber-50/40 via-white to-white dark:bg-gradient-to-b dark:from-[#0F1C35] dark:to-[#060D1F] shadow-xl dark:shadow-[0_15px_50px_-10px_rgba(245,158,11,0.2)] relative"
              >
                <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-white/10 mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                      {service.label}
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-5xl font-black text-slate-900 dark:text-white">${service.price}</span>
                      <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">USD</span>
                    </div>
                  </div>
                  <span className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                    <Sparkles className="w-6 h-6" />
                  </span>
                </div>

                {/* Specs */}
                <div className="space-y-4 mb-8 text-sm text-slate-700 dark:text-slate-300">
                  <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-white/5">
                    <span className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs">
                      <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400" /> Guaranteed Delivery
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white text-xs">{service.deliveryTime}</span>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-white/5">
                    <span className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs">
                      <PhoneCall className="w-4 h-4 text-amber-600 dark:text-amber-400" /> Consultation
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white text-xs">{service.consultation}</span>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-white/5">
                    <span className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs">
                      <RotateCcw className="w-4 h-4 text-amber-600 dark:text-amber-400" /> Revisions
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white text-xs">{service.revisions}</span>
                  </div>
                </div>

                {/* Direct Payment Checkout Link */}
                <AnimatedButton
                  href={service.paymentHref}
                  variant="solid-gold"
                  fullWidth
                  className="py-4 text-sm font-extrabold text-slate-950 shadow-[0_0_30px_rgba(245,158,11,0.3)]"
                >
                  <span>Get Started — $995</span>
                  <ArrowRight className="w-4 h-4" />
                </AnimatedButton>

                <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                  <Lock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Secure multi-currency checkout via Lemon Squeezy</span>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 3: WHAT'S INCLUDED ─── */}
      <section className="py-20 md:py-28 bg-slate-50/70 dark:bg-navy-surface/30 border-y border-slate-200/80 dark:border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full inline-block mb-3">
              Full Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Everything included, nothing held back.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
              Our flagship tier combines 10 distinct deliverables to position you ahead of competing
              senior applicants.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          >
            {service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, scale: 0.85 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="glass-card p-5 flex items-center gap-3.5 border-slate-200 dark:border-white/10 hover:border-amber-500/40 transition-all bg-white dark:bg-white/[0.04]"
              >
                <div className="w-7 h-7 rounded-full bg-amber-500 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(245,158,11,0.4)]">
                  <CheckCircle2 className="w-4 h-4 text-slate-950 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-slate-900 dark:text-white">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 4: WHO THIS IS FOR ─── */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/30 px-3.5 py-1 rounded-full inline-block mb-3">
              Target Profiles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Who this service is engineered for
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Senior Executives",
                desc: "Directors, Vice Presidents, Managing Directors, and C-Suite professionals targeting board-level and chair appointments.",
              },
              {
                icon: Briefcase,
                title: "Strategic Career Changers",
                desc: "Experienced leaders pivoting industries or moving from corporate operational leadership into private equity advisory.",
              },
              {
                icon: Globe2,
                title: "International Candidates",
                desc: "Global executives relocating or expanding cross-border into UK, US, European, UAE, or African markets.",
              },
            ].map((profile, i) => {
              const Icon = profile.icon;
              return (
                <GlassCard
                  key={i}
                  hoverEffect="tilt"
                  className="p-8 text-center flex flex-col items-center border-slate-200 dark:border-white/10 bg-white dark:bg-transparent shadow-sm dark:shadow-none"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{profile.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{profile.desc}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: CTA BANNER ─── */}
      <CTABanner
        title={
          <>
            Ready to stand out at the <span className="italic text-gradient-gold">highest level?</span>
          </>
        }
        subtext="Let's build an executive CV that opens doors at the highest level. Guaranteed delivery in 6–10 hours."
        primaryBtnText="Get Started — $995"
        primaryBtnHref="/payment?service=new-cv&amount=995&currency=USD"
        secondaryBtnText="Have Questions? Contact Us"
        secondaryBtnHref="/contact?subject=NewCVInquiry"
        smallNote="Secure checkout powered by Lemon Squeezy · 100% Satisfaction Guarantee"
      />
    </div>
  );
}
