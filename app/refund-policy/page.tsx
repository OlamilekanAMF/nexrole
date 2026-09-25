import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "NexRole Refund and Satisfaction Policy for CV and Writing Services.",
};

export default function RefundPolicyPage() {
  const sections = [
    {
      id: "overview",
      title: "Satisfaction Commitment & Scope",
      content: (
        <>
          <p>
            At NexRole, we take profound pride in the executive caliber of our CV writing, rewrite, and
            career consulting deliverables. Because our services involve bespoke, time-intensive
            consultant labor and personalized editorial craftsmanship, our refund policy balances
            client protection with professional fairness.
          </p>
        </>
      ),
    },
    {
      id: "revision-rounds",
      title: "Complimentary Revision Guarantee",
      content: (
        <>
          <p>
            Every CV package purchased through NexRole (Sapphire, Ruby, Diamond, New CV Writing, and
            Cover Letter) includes designated revision rounds at zero additional cost:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-300">
            <li>
              <strong>14-Day Revision Window:</strong> You may request wording changes, structural
              realignments, or metric adjustments within 14 days of receiving your first draft.
            </li>
            <li>
              <strong>Consultant Collaboration:</strong> If your initial draft does not meet your
              expectations, your file will be escalated to a senior practice director for immediate
              recalibration.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "refund-eligibility",
      title: "Refund Eligibility Conditions",
      content: (
        <>
          <p>Full or partial refunds may be granted under the following explicit circumstances:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-300">
            <li>
              <strong>Cancellation Before Commencement:</strong> If you cancel your order within 2
              hours of payment and before our consultants have commenced your intake analysis, a 100%
              refund will be issued minus standard gateway transaction fees.
            </li>
            <li>
              <strong>Material Delivery Failure:</strong> If NexRole fails to deliver your initial
              draft within twice the guaranteed turnaround window without prior agreed schedule
              extensions.
            </li>
          </ul>
          <p className="pt-2">
            Refunds cannot be issued purely on subjective dissatisfaction after all revision rounds
            have been exhausted and final deliverables transferred.
          </p>
        </>
      ),
    },
    {
      id: "processing",
      title: "How to Request a Refund",
      content: (
        <>
          <p>
            To initiate a formal refund review, email{" "}
            <a href="mailto:support@nexroleagency.com" className="text-blue-600 dark:text-blue-400 underline">
              support@nexroleagency.com
            </a>{" "}
            with your full name, transaction reference number, and a detailed summary of your claim.
            Our finance team investigates and responds within 3 business days. Approved refunds are
            credited back to the original Lemon Squeezy funding method within 5–10 business days.
          </p>
        </>
      ),
    },
  ];

  return (
    <LegalPageLayout
      title="Refund Policy"
      subtitle="Clear guidelines regarding revision coverage, draft adjustments, and refund dispute resolution."
      sections={sections}
    />
  );
}
