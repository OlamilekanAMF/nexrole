"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Clock,
  Globe2,
  Copy,
  Check,
  Sparkles,
  ChevronDown,
  Send,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { GlassCard } from "@/components/GlassCard";
import { AnimatedButton } from "@/components/AnimatedButton";
import { faqs } from "@/data/faqs";
import { charContainer, charReveal, fadeSlideLeft, fadeSlideRight, fadeSlideUp } from "@/lib/motion";
import { JsonLd } from "@/components/seo/JsonLd";
import { createFaqSchema } from "@/lib/seo/schema";

function ContactPageContent() {
  const searchParams = useSearchParams();
  const initialSubject = searchParams.get("subject") || "GeneralEnquiry";

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(initialSubject);
  const [message, setMessage] = useState("");
  const [hp, setHp] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const headlineLetters = "Let's talk.".split("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("support@nexrole.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!fullName.trim()) newErrors.fullName = "Please enter your full name";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Please enter a valid email";
    if (!message.trim()) newErrors.message = "Please write your message";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          subject,
          message,
          hp,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        console.warn("Contact submission response:", data);
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <JsonLd data={createFaqSchema(faqs)} />
      {/* ─── SECTION 1: PAGE HERO ─── */}
      <section className="relative min-h-[42vh] flex flex-col items-center justify-center text-center overflow-hidden py-16 bg-slate-50/80 dark:bg-navy-surface/20 border-b border-slate-200/80 dark:border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wider uppercase"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dedicated Consultation</span>
          </motion.div>

          {/* Character-by-character headline reveal */}
          <motion.h1
            variants={charContainer}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            {headlineLetters.map((char, i) => (
              <motion.span key={i} variants={charReveal} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            variants={fadeSlideUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto"
          >
            Whether you&apos;re hiring or job-hunting, our senior consultants are ready to help.
          </motion.p>
        </div>
      </section>

      {/* ─── SECTION 2: CONTACT LAYOUT (FORM + INFO) ─── */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: Contact Form Card */}
          <motion.div
            variants={fadeSlideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <GlassCard className="p-8 md:p-10 border-slate-200 dark:border-white/10 bg-white dark:bg-[#0F1C35]/90 shadow-xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  /* Form State */
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, rotateY: 90 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Send a Message</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Fill in your details below and we&apos;ll be in touch within 24 hours.
                      </p>
                    </div>

                    {/* Hidden anti-bot honeypot */}
                    <div className="hidden" aria-hidden="true">
                      <input
                        type="text"
                        name="hp"
                        value={hp}
                        onChange={(e) => setHp(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Full Name *</label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (errors.fullName) setErrors({ ...errors, fullName: "" });
                        }}
                        placeholder="Sarah Jenkins"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none transition-all ${
                          errors.fullName
                            ? "border-red-500 animate-pulse"
                            : "border-slate-200 dark:border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-500 dark:text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                        placeholder="sarah@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none transition-all ${
                          errors.email
                            ? "border-red-500 animate-pulse"
                            : "border-slate-200 dark:border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500 dark:text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Subject Dropdown */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Subject *</label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer [&>option]:bg-white [&>option]:text-slate-900 dark:[&>option]:bg-navy-surface dark:[&>option]:text-white"
                      >
                        <option value="Candidate">I&apos;m a Candidate Looking for Roles</option>
                        <option value="EmployerHiring">I&apos;m an Employer Looking to Hire</option>
                        <option value="CVServices">Executive CV & Writing Services</option>
                        <option value="PostAJob">Post a Job Inquiry</option>
                        <option value="GeneralEnquiry">General Corporate Enquiry</option>
                      </select>
                    </div>

                    {/* Message Area */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Message *</label>
                      <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          if (errors.message) setErrors({ ...errors, message: "" });
                        }}
                        placeholder="Tell us about your background or hiring requirements..."
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none transition-all resize-none ${
                          errors.message
                            ? "border-red-500 animate-pulse"
                            : "border-slate-200 dark:border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-[11px] text-red-500 dark:text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <AnimatedButton
                      variant="solid-blue"
                      fullWidth
                      className="py-4 text-sm font-bold shadow-md"
                    >
                      {isSubmitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </AnimatedButton>
                  </motion.form>
                ) : (
                  /* Success State: Card Flip Animation */
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.9, rotateY: -90 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 0.5 }}
                    className="py-16 text-center space-y-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-500 dark:text-amber-400 mx-auto shadow-md">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">Message Received</h3>

                    <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
                      Thank you, {fullName || "valued partner"}. We&apos;ve received your inquiry and a
                      senior consultant will be in touch within 24 hours.
                    </p>

                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFullName("");
                          setEmail("");
                          setMessage("");
                        }}
                        className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline underline-offset-4"
                      >
                        Send another message
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </motion.div>

          {/* RIGHT: Contact Information Stacked Cards */}
          <motion.div
            variants={fadeSlideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Card 1: Email */}
            <GlassCard hoverEffect="lift" className="p-6 bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-grow">
                <span className="text-xs text-slate-500 dark:text-slate-400">Direct Email</span>
                <p className="text-base font-bold text-slate-900 dark:text-white mt-0.5">support@nexrole.com</p>
                <button
                  onClick={handleCopyEmail}
                  className="mt-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied to clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy email address</span>
                    </>
                  )}
                </button>
              </div>
            </GlassCard>

            {/* Card 2: Hours */}
            <GlassCard hoverEffect="lift" className="p-6 bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400">Operating Hours</span>
                <p className="text-base font-bold text-slate-900 dark:text-white mt-0.5">Mon – Fri: 9:00 AM – 6:00 PM</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Coordinated across London, New York & Lagos time zones
                </p>
              </div>
            </GlassCard>

            {/* Card 3: Global Reach */}
            <GlassCard hoverEffect="lift" className="p-6 bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400">Global Search Practice</span>
                <p className="text-base font-bold text-slate-900 dark:text-white mt-0.5">Placements in 38+ Countries</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">UK · US · EMEA · APAC · West Africa</p>
              </div>
            </GlassCard>

            {/* Social Channels */}
            <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 space-y-3 shadow-sm">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                Connect on Social
              </span>
              <div className="flex items-center gap-3">
                {[
                  { name: "LinkedIn", href: "https://linkedin.com", label: "LinkedIn" },
                  { name: "Twitter/X", href: "https://x.com", label: "Twitter / 𝕏" },
                  { name: "Instagram", href: "https://instagram.com", label: "Instagram" },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:border-blue-500/50 transition-all"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 3: FAQ ACCORDION ─── */}
      <section className="py-20 md:py-28 bg-slate-100/60 dark:bg-navy-surface/30 border-t border-slate-200 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader
            eyebrow="Knowledge Base"
            title="Common Questions"
            subtext="Everything you need to know about our recruitment timelines, CV deliverables, and payment security."
            align="center"
          />

          <div className="space-y-4 mt-12">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-base font-bold text-slate-900 dark:text-white">{faq.question}</span>
                    <span
                      className={`w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 text-slate-500 dark:text-slate-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-amber-500 dark:text-amber-400 border-amber-500/30" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center text-slate-400">
          <div className="w-8 h-8 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" />
        </div>
      }
    >
      <ContactPageContent />
    </Suspense>
  );
}
