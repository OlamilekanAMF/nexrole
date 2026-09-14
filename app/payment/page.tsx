"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  CreditCard,
  Clock,
  ArrowRight,
  Sparkles,
  BadgeCheck,
  Globe2,
} from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { fadeSlideUp, scaleIn } from "@/lib/motion";

interface ServiceCardItem {
  id: string;
  title: string;
  description: string;
  price: string;
  delivery: string;
  href: string;
  buttonText: string;
  isFeatured?: boolean;
  recommendedBadge?: string;
  fullWidth?: boolean;
}

const serviceCards: ServiceCardItem[] = [
  {
    id: "new-cv",
    title: "New CV Writing",
    description: "Complete executive-level CV built from the ground up",
    price: "$995",
    delivery: "6–10 hrs",
    href: "https://nexrole.lemonsqueezy.com/checkout/buy/VARIANT_ID_1",
    buttonText: "Get Started — $995",
  },
  {
    id: "cv-sapphire",
    title: "CV Rewrite — Sapphire",
    description: "A strong professional rewrite of your existing CV",
    price: "$300",
    delivery: "20–24 hrs",
    href: "https://nexrole.lemonsqueezy.com/checkout/buy/VARIANT_ID_2",
    buttonText: "Get Started — $300",
  },
  {
    id: "cv-ruby",
    title: "CV Rewrite — Ruby",
    description: "Sapphire plus board-level positioning and strategy",
    price: "$500",
    delivery: "14–18 hrs",
    href: "https://nexrole.lemonsqueezy.com/checkout/buy/VARIANT_ID_3",
    buttonText: "Get Started — $500",
    isFeatured: true,
    recommendedBadge: "Recommended",
  },
  {
    id: "cv-diamond",
    title: "CV Rewrite — Diamond",
    description: "Most complete rewrite with premium board-market targeting",
    price: "$700",
    delivery: "6–10 hrs",
    href: "https://nexrole.lemonsqueezy.com/checkout/buy/VARIANT_ID_4",
    buttonText: "Get Started — $700",
  },
  {
    id: "cover-letter",
    title: "Cover Letter",
    description: "ATS-optimized executive cover letter for your target role",
    price: "$300",
    delivery: "24 hrs",
    href: "https://nexrole.lemonsqueezy.com/checkout/buy/VARIANT_ID_5",
    buttonText: "Get Started — $300",
    fullWidth: true,
  },
];

declare global {
  interface Window {
    createLemonSqueezy?: () => void;
  }
}

export default function PaymentPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.createLemonSqueezy === "function") {
      window.createLemonSqueezy();
    }
  }, []);

  return (
    <div className="w-full">
      {/* ─── SECTION 1: HERO ─── */}
      <section className="relative min-h-[38vh] flex flex-col items-center justify-center text-center overflow-hidden py-14 bg-slate-50/80 dark:bg-navy-surface/20 border-b border-slate-200/80 dark:border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-wider uppercase"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>256-Bit Encrypted Payment Portal</span>
          </motion.div>

          <motion.h1
            variants={fadeSlideUp}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Complete Your Payment <span className="italic text-gradient-gold">Securely</span>
          </motion.h1>

          <motion.p
            variants={fadeSlideUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto"
          >
            Use our multi-currency portal to complete your authorized service checkout. Please enter
            the exact amount provided by your NexRole consultant.
          </motion.p>

          {/* Security Badges Row */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="pt-3 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400"
          >
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">
              <Lock className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" /> SSL Encrypted
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" /> PCI DSS Compliant
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">
              <CreditCard className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" /> Lemon Squeezy Gateway
            </span>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 2: LEMON SQUEEZY SERVICE CARDS ─── */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Select your service to proceed
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            Choose your service below to open our 256-bit encrypted Lemon Squeezy checkout overlay. No
            lengthy forms required.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {serviceCards.map((service) => {
            const isRuby = service.isFeatured;
            const isFull = service.fullWidth;

            return (
              <div
                key={service.id}
                className={isFull ? "lg:col-span-2" : "col-span-1"}
              >
                <GlassCard
                  hoverEffect="tilt"
                  glowColor={isRuby ? "gold" : "blue"}
                  className={`h-full p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 relative ${
                    isRuby
                      ? "border-amber-400/60 dark:border-amber-500/40 bg-gradient-to-b from-amber-50/50 via-white to-white dark:from-[#132347] dark:to-[#0F1C35] shadow-xl dark:shadow-[0_0_35px_rgba(245,158,11,0.12)]"
                      : "border-slate-200 dark:border-white/10 bg-white dark:bg-[#0F1C35]/90 shadow-md dark:shadow-none hover:border-blue-500/40"
                  }`}
                >
                  {/* Top Bar with Badge or Delivery */}
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {service.recommendedBadge && (
                        <span className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider shadow-sm">
                          <Sparkles className="w-3 h-3" />
                          {service.recommendedBadge}
                        </span>
                      )}
                    </div>

                    {/* Meta Row: Price & Delivery Time */}
                    <div className="flex items-center justify-between py-4 my-4 border-y border-slate-100 dark:border-white/10">
                      <div>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-semibold uppercase tracking-wider mb-0.5">
                          Investment
                        </span>
                        <div
                          className={`text-3xl sm:text-4xl font-black ${
                            isRuby
                              ? "text-amber-500 dark:text-amber-400 drop-shadow-sm"
                              : "text-slate-900 dark:text-white"
                          }`}
                        >
                          {service.price}
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-semibold uppercase tracking-wider mb-1">
                          Delivery Window
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-700 dark:text-slate-300 font-medium">
                          <Clock className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
                          {service.delivery}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Lemon Squeezy Anchor Button */}
                  <div className="pt-2">
                    <a
                      href={service.href}
                      className={`lemonsqueezy-button w-full relative inline-flex items-center justify-center gap-2 overflow-hidden px-6 py-4 text-sm font-black rounded-xl transition-all duration-300 group select-none ${
                        isRuby
                          ? "bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-md"
                          : "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                      }`}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <span>{service.buttonText}</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </a>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center mt-2.5">
                      Opens instant Lemon Squeezy checkout overlay
                    </p>
                  </div>
                </GlassCard>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── SECTION 3: WHAT HAPPENS NEXT ─── */}
      <section className="py-16 max-w-6xl mx-auto px-6 border-t border-slate-200 dark:border-white/5">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-500 dark:text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 inline-block mb-3">
            Simple 3-Step Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Happens Next
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
            Here is what you can expect the moment your payment is confirmed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="p-6 rounded-2xl border-slate-200 dark:border-white/10 bg-white dark:bg-[#0F1C35]/70 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
              01
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Instant Checkout & Confirmation</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Complete payment in seconds via Lemon Squeezy. You will receive an immediate automated invoice and receipt in your inbox.
            </p>
          </GlassCard>

          <GlassCard className="p-6 rounded-2xl border-slate-200 dark:border-white/10 bg-white dark:bg-[#0F1C35]/70 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-sm">
              02
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Executive Consultant Assignment</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Within a few hours, a dedicated senior CV writer matching your industry domain contacts you to review target roles.
            </p>
          </GlassCard>

          <GlassCard className="p-6 rounded-2xl border-slate-200 dark:border-white/10 bg-white dark:bg-[#0F1C35]/70 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
              03
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Draft Delivery & 14-Day Revisions</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Your ATS-optimized executive documents arrive on schedule with 14 days of complimentary, fine-tuned revision rounds.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* ─── SECTION 4: TRUST BADGES ROW ─── */}
      <section className="py-12 max-w-6xl mx-auto px-6 border-t border-slate-200 dark:border-white/5 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-xs space-y-1">
            <BadgeCheck className="w-5 h-5 text-amber-500 dark:text-amber-400 mx-auto" />
            <p className="text-xs font-bold text-slate-900 dark:text-white">14-Day Revision Guarantee</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">100% satisfaction commitment</p>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-xs space-y-1">
            <Lock className="w-5 h-5 text-emerald-500 dark:text-emerald-400 mx-auto" />
            <p className="text-xs font-bold text-slate-900 dark:text-white">256-Bit SSL Encryption</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">Bank-grade checkout security</p>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-xs space-y-1">
            <ShieldCheck className="w-5 h-5 text-blue-500 dark:text-blue-400 mx-auto" />
            <p className="text-xs font-bold text-slate-900 dark:text-white">Lemon Squeezy MOR</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">Global compliance & automated tax</p>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-xs space-y-1">
            <Globe2 className="w-5 h-5 text-purple-500 dark:text-purple-400 mx-auto" />
            <p className="text-xs font-bold text-slate-900 dark:text-white">Global Currency Support</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">All major cards & digital wallets</p>
          </div>
        </div>
      </section>
    </div>
  );
}
