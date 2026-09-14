"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Check, LifeBuoy } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { AnimatedButton } from "@/components/AnimatedButton";

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const orderNumber =
    searchParams.get("order_number") ||
    searchParams.get("order_id") ||
    `NR-${Date.now().toString(36).toUpperCase()}`;

  return (
    <div className="w-full min-h-[75vh] flex items-center justify-center py-20 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl text-center"
      >
        <GlassCard
          glowColor="gold"
          className="p-8 sm:p-12 border-slate-200 dark:border-amber-500/40 bg-white dark:bg-gradient-to-b dark:from-[#0F1C35] dark:to-[#050D1F] shadow-2xl"
        >
          {/* Animated Gold Checkmark */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
            className="w-20 h-20 rounded-full bg-amber-500/20 border-2 border-amber-500/60 flex items-center justify-center text-amber-500 dark:text-amber-400 mx-auto mb-6 shadow-md dark:shadow-[0_0_35px_rgba(245,158,11,0.5)]"
          >
            <Check className="w-10 h-10 stroke-[3]" />
          </motion.div>

          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 inline-block mb-3">
            Transaction Confirmed
          </span>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            Payment Received
          </h1>

          {/* Reference number box */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 max-w-sm mx-auto mb-6">
            <span className="text-[11px] text-slate-500 dark:text-slate-400 block mb-1">
              Order Reference Number
            </span>
            <span className="text-lg font-mono font-bold text-amber-600 dark:text-amber-400 tracking-wider">
              {orderNumber}
            </span>
          </div>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-md mx-auto">
            A receipt has been sent to your email address. Our team will contact you within a few hours to begin your service.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <AnimatedButton
              href="/"
              variant="solid-gold"
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold"
            >
              <span>Return to Homepage</span>
            </AnimatedButton>
            <AnimatedButton
              href="/contact"
              variant="outlined-white"
              className="w-full sm:w-auto px-8 py-3.5 text-xs border-slate-300 dark:border-white/20 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10"
            >
              <LifeBuoy className="w-4 h-4 mr-1.5" />
              <span>Contact Support Desk</span>
            </AnimatedButton>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[70vh] flex items-center justify-center text-slate-400">
          <div className="w-8 h-8 rounded-full border-2 border-amber-500 border-t-transparent animate-spin" />
        </div>
      }
    >
      <PaymentSuccessContent />
    </Suspense>
  );
}
