import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { ArrowRight } from "lucide-react";
import servicesData from "@/data/services.json";

export const metadata: Metadata = {
  title: "Pricing Disclosure & Rate Card",
  description: "Official NexRole Pricing Disclosure, Service Tiers, and Employer Engagement Terms.",
};

export default function PricingDisclosurePage() {
  const { newCV, cvRewrite, coverLetter } = servicesData;

  const sections = [
    {
      id: "principles",
      title: "Fee Transparency Principles",
      content: (
        <>
          <p>
            NexRole operates with strict fee transparency. We do not assess hidden intake retainers,
            clerical file fees, or undisclosed currency conversion surcharges. All prices quoted
            represent the total, all-inclusive investment for the described scope of work.
          </p>
        </>
      ),
    },
    {
      id: "cv-pricing-table",
      title: "Executive CV Services Rate Card",
      content: (
        <>
          <p className="mb-4">
            Current published fee schedule for individual career collateral and board positioning
            services:
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-white/10 my-4">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead className="bg-slate-100 dark:bg-white/5 border-b border-slate-200 dark:border-white/10 text-slate-900 dark:text-white">
                <tr>
                  <th className="p-3.5 font-bold">Service Package</th>
                  <th className="p-3.5 font-bold">Price (USD)</th>
                  <th className="p-3.5 font-bold">Turnaround</th>
                  <th className="p-3.5 font-bold">Consultation</th>
                  <th className="p-3.5 font-bold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-white/5 text-slate-600 dark:text-slate-300">
                <tr className="hover:bg-slate-50 dark:hover:bg-white/[0.02]">
                  <td className="p-3.5 font-bold text-slate-900 dark:text-white">Cover Letter</td>
                  <td className="p-3.5 text-amber-600 dark:text-amber-400 font-bold">${coverLetter.price}</td>
                  <td className="p-3.5">{coverLetter.deliveryTime}</td>
                  <td className="p-3.5">{coverLetter.consultation}</td>
                  <td className="p-3.5">
                    <Link
                      href="/services/cover-letter"
                      className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 font-medium"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 dark:hover:bg-white/[0.02]">
                  <td className="p-3.5 font-bold text-slate-900 dark:text-white">CV Rewrite — Sapphire</td>
                  <td className="p-3.5 text-blue-600 dark:text-blue-400 font-bold">${cvRewrite.tiers.sapphire.price}</td>
                  <td className="p-3.5">{cvRewrite.tiers.sapphire.deliveryTime}</td>
                  <td className="p-3.5">{cvRewrite.tiers.sapphire.consultation}</td>
                  <td className="p-3.5">
                    <Link
                      href="/services/cv-rewrite"
                      className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 font-medium"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 dark:hover:bg-white/[0.02] bg-amber-50/40 dark:bg-amber-500/5">
                  <td className="p-3.5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span>CV Rewrite — Ruby</span>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500 text-slate-950">
                      Popular
                    </span>
                  </td>
                  <td className="p-3.5 text-amber-600 dark:text-amber-400 font-extrabold">
                    ${cvRewrite.tiers.ruby.price}
                  </td>
                  <td className="p-3.5">{cvRewrite.tiers.ruby.deliveryTime}</td>
                  <td className="p-3.5">{cvRewrite.tiers.ruby.consultation}</td>
                  <td className="p-3.5">
                    <Link
                      href="/services/cv-rewrite"
                      className="text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1 font-medium"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 dark:hover:bg-white/[0.02]">
                  <td className="p-3.5 font-bold text-slate-900 dark:text-white">CV Rewrite — Diamond</td>
                  <td className="p-3.5 text-purple-600 dark:text-purple-300 font-bold">
                    ${cvRewrite.tiers.diamond.price}
                  </td>
                  <td className="p-3.5">{cvRewrite.tiers.diamond.deliveryTime}</td>
                  <td className="p-3.5">{cvRewrite.tiers.diamond.consultation}</td>
                  <td className="p-3.5">
                    <Link
                      href="/services/cv-rewrite"
                      className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 font-medium"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 dark:hover:bg-white/[0.02] bg-blue-50/40 dark:bg-blue-500/5">
                  <td className="p-3.5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span>New CV Writing (Flagship)</span>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-blue-600 text-white">
                      Flagship
                    </span>
                  </td>
                  <td className="p-3.5 text-amber-600 dark:text-amber-400 font-extrabold">${newCV.price}</td>
                  <td className="p-3.5">{newCV.deliveryTime}</td>
                  <td className="p-3.5">{newCV.consultation}</td>
                  <td className="p-3.5">
                    <Link
                      href="/services/new-cv"
                      className="text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1 font-medium"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      id: "employer-fees",
      title: "Employer Recruitment Structure",
      content: (
        <>
          <p>
            Employer engagements operate under two primary models, tailored to role seniority and
            urgency:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300">
            <li>
              <strong>Contingency Placement:</strong> A competitive percentage of first-year base salary,
              payable exclusively upon successful candidate placement and commencement of employment.
            </li>
            <li>
              <strong>Retained Executive Search:</strong> Structured milestone retainers (typically
              divided into commencement, shortlist presentation, and successful placement stages) for
              C-Suite and Board appointments.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "payment-methods",
      title: "Accepted Currencies & Gateway Terms",
      content: (
        <>
          <p>
            Payments are securely processed via Lemon Squeezy (acting as Merchant of Record). We support settlements in USD, GBP, EUR, and
            CAD. Foreign exchange conversions are executed automatically by Lemon Squeezy or your issuing bank at
            the prevailing interbank exchange rate at the timestamp of transaction authorization.
          </p>
        </>
      ),
    },
  ];

  return (
    <LegalPageLayout
      title="Pricing Disclosure"
      subtitle="Complete schedule of individual CV writing rates, employer recruitment models, and multi-currency terms."
      sections={sections}
    />
  );
}
