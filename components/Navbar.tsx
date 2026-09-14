"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { AnimatedButton } from "@/components/AnimatedButton";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navbarSlideDown, mobileMenuOverlay, staggerContainer } from "@/lib/motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Jobs", href: "/jobs" },
  { name: "Services", href: "/services" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        variants={navbarSlideDown}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 dark:bg-[#050D1F]/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10 shadow-sm py-3.5"
            : "bg-white/70 dark:bg-[#050D1F]/70 backdrop-blur-md border-b border-slate-200/50 dark:border-white/5 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Wordmark */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-700 to-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.3)] border border-blue-400/30 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight">
              <span className="text-slate-900 dark:text-white">Nex</span>
              <span className="text-electric">Role</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 text-sm font-medium transition-colors hover:text-slate-950 dark:hover:text-white group ${
                    isActive ? "text-blue-600 dark:text-blue-400 font-semibold" : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  <span>{link.name}</span>

                  {/* Animated underline sweep on hover */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-electric rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-full shadow-[0_0_10px_#2563EB]"
                        : "w-0 group-hover:w-full group-hover:shadow-[0_0_8px_#2563EB]"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Far Right CTA + Theme Switcher */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <AnimatedButton
              href="/contact?subject=PostAJob"
              variant="solid-gold"
              pill
              className="text-xs px-5 py-2.5 font-bold tracking-wide"
            >
              <span>Post a Job</span>
            </AnimatedButton>
          </div>

          {/* Mobile Right Controls: Theme Toggle + Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Slide-in Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={mobileMenuOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-white/98 dark:bg-[#050D1F]/98 backdrop-blur-2xl flex flex-col justify-between p-8 md:hidden text-slate-900 dark:text-white"
          >
            <div>
              {/* Header inside overlay */}
              <div className="flex items-center justify-between pb-8 border-b border-slate-200 dark:border-white/10">
                <Link href="/" className="flex items-center gap-2">
                  <span className="text-2xl font-extrabold tracking-tight">
                    <span className="text-slate-900 dark:text-white">Nex</span>
                    <span className="text-electric">Role</span>
                  </span>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close Navigation Menu"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Staggered Links */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-6 pt-10"
              >
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      <Link
                        href={link.href}
                        className={`text-2xl font-bold flex items-center justify-between ${
                          isActive ? "text-electric" : "text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ArrowRight
                          className={`w-5 h-5 ${isActive ? "opacity-100" : "opacity-40"}`}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Bottom Mobile Action Buttons */}
            <div className="pt-8 border-t border-slate-200 dark:border-white/10 space-y-3">
              <AnimatedButton
                href="/contact?subject=PostAJob"
                variant="solid-gold"
                fullWidth
                pill
                className="py-3.5 text-sm font-bold"
              >
                <span>Post a Job</span>
              </AnimatedButton>
              <AnimatedButton
                href="/jobs"
                variant="outlined-white"
                fullWidth
                pill
                className="py-3.5 text-sm"
              >
                <span>Browse Live Roles</span>
              </AnimatedButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
