"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { GlassCard } from "@/components/GlassCard";
import { AnimatedButton } from "@/components/AnimatedButton";
import servicesData from "@/data/services.json";
import { staggerContainer, fadeSlideUp } from "@/lib/motion";

export function PricingOverview() {
  const { newCV, cvRewrite, coverLetter } = servicesData;

  const packages = [
    {
      name: "CV Rewrite",
      badge: "Flexible Tiers",
      badgeColor: "blue",
      price: `$${cvRewrite.tiers.sapphire.price}`,
      priceSuffix: "USD starting",
      description: "Complete professional enhancement of your existing resume with 3 flexible tiers.",
      features: [
        "Executive narrative revamp",
        "ATS compliance formatting",
        "Sapphire, Ruby & Diamond packages",
        "Fast 6–24 hour delivery options",
      ],
      ctaText: "View 3 Rewrite Tiers",
      ctaHref: "/services/cv-rewrite",
      ctaVariant: "outlined-blue" as const,
      popular: false,
    },
    {
      name: "New CV Writing",
      badge: "Flagship Service",
      badgeColor: "gold",
      price: `$${newCV.price}`,
      priceSuffix: "USD one-time",
      description: "Our premier ground-up curriculum vitae build, engineered for C-Suite and board mandates.",
      features: [
        "Complete ground-up executive creation",
        "Board-level & governance narrative",
        "Market differentiation strategy",
        "Priority+ consultation session",
        "Guaranteed 6–10 hour rapid delivery",
      ],
      ctaText: "Get Flagship — $995",
      ctaHref: "/services/new-cv",
      ctaVariant: "solid-gold" as const,
      popular: true,
    },
    {
      name: "Cover Letter & Bundles",
      badge: "Essential Pairing",
      badgeColor: "blue",
      price: `$${coverLetter.price}`,
      priceSuffix: "USD",
      description: "ATS-optimized value proposition letters tailored to your target executive appointment.",
      features: [
        "Targeted leadership narrative",
        "ATS keyword optimization",
        "Personalized value proposition",
        "24-hour turnaround",
        "Save when bundled with CV",
      ],
      ctaText: "View Cover Letter",
      ctaHref: "/services/cover-letter",
      ctaVariant: "outlined-white" as const,
      popular: false,
    },
  ];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Transparent Investment"
          title="Transparent Pricing"
          subtext="Clear, flat-fee executive writing services with zero hidden retainers. Sourced directly from our standardized rate card."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 items-stretch"
        >
          {packages.map((pkg, idx) => (
            <motion.div key={idx} variants={fadeSlideUp} className="flex">
              <GlassCard
                hoverEffect="lift"
                glowColor={pkg.popular ? "gold" : "blue"}
                className={`w-full p-8 md:p-9 flex flex-col justify-between relative ${
                  pkg.popular
                    ? "border-amber-400/60 dark:border-amber-500/40 bg-gradient-to-b from-amber-50/40 via-white to-white dark:bg-gradient-to-b dark:from-[#0F1C35] dark:to-[#081226] shadow-[0_0_40px_rgba(245,158,11,0.15)] md:-translate-y-2"
                    : "border-slate-200 dark:border-white/10 bg-white dark:bg-transparent shadow-sm dark:shadow-none"
                }`}
              >
                {/* Popular Pill */}
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black tracking-wider uppercase shadow-[0_0_15px_rgba(245,158,11,0.3)] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        pkg.badgeColor === "gold"
                          ? "bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30"
                          : "bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30"
                      }`}
                    >
                      {pkg.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{pkg.name}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6 min-h-[40px]">
                    {pkg.description}
                  </p>

                  <div className="pb-6 border-b border-slate-100 dark:border-white/10 mb-6 flex items-baseline gap-1.5">
                    <span className="text-4xl font-extrabold text-slate-900 dark:text-white">{pkg.price}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{pkg.priceSuffix}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            pkg.popular ? "text-amber-600 dark:text-amber-400" : "text-blue-600 dark:text-blue-400"
                          }`}
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <AnimatedButton
                  href={pkg.ctaHref}
                  variant={pkg.ctaVariant}
                  fullWidth
                  className={`py-3.5 text-xs sm:text-sm ${
                    pkg.popular ? "text-slate-950 font-bold" : ""
                  }`}
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </AnimatedButton>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Employer package row */}
        <div className="mt-12 glass-card p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] shadow-sm dark:shadow-none">
          <div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">Need an Employer Search Retainer?</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              Custom retained and contingency packages for volume hiring and bespoke C-Suite mandates.
            </p>
          </div>
          <AnimatedButton
            href="/contact?subject=EmployerRetainer"
            variant="outlined-white"
            className="text-xs font-semibold px-6 py-3 shrink-0"
          >
            <span>Inquire About Employer Rates</span>
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
