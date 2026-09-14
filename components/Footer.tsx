"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Mail, Clock, Globe, ArrowUpRight } from "lucide-react";
import { fadeSlideUp } from "@/lib/motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050D1F] text-white pt-20 pb-12 overflow-hidden animated-gradient-border">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10"
        >
          {/* Column 1: Brand & Bio (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight">
                <span className="text-white">Nex</span>
                <span className="text-electric">Role</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Connecting elite professionals with leading organisations worldwide — faster,
              smarter, and with high-impact executive CV positioning built in.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { name: "LinkedIn", href: "https://linkedin.com", label: "LI" },
                { name: "Twitter/X", href: "https://x.com", label: "𝕏" },
                { name: "Instagram", href: "https://instagram.com", label: "IG" },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold tracking-wider uppercase text-slate-400">
              Navigation & Services
            </h4>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm text-slate-400">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Browse Jobs", href: "/jobs" },
                { name: "Services", href: "/services" },
                { name: "New CV Writing", href: "/services/new-cv" },
                { name: "CV Rewrite", href: "/services/cv-rewrite" },
                { name: "Cover Letter", href: "/services/cover-letter" },
                { name: "Reviews", href: "/reviews" },
                { name: "Contact Us", href: "/contact" },
                { name: "Make a Payment", href: "/payment" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info & Hours (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold tracking-wider uppercase text-slate-400">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-slate-500">Inquiries & Support</p>
                  <a
                    href="mailto:support@nexrole.com"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    support@nexrole.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-slate-500">Operating Hours</p>
                  <p className="text-white">Mon – Fri: 9:00 AM – 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-slate-500">Global Reach</p>
                  <p className="text-white">Active in 38+ countries</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar with Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} NexRole Global Ltd. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/refund-policy" className="hover:text-slate-300 transition-colors">
              Refund Policy
            </Link>
            <Link href="/cancellation-policy" className="hover:text-slate-300 transition-colors">
              Cancellation
            </Link>
            <Link href="/pricing-disclosure" className="hover:text-slate-300 transition-colors">
              Pricing Disclosure
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
