import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Cancellation Policy",
  description: "NexRole Cancellation Policy for CV services, consultations, and hiring engagements.",
};

export default function CancellationPolicyPage() {
  const sections = [
    {
      id: "scope",
      title: "Scope & Applicability",
      content: (
        <>
          <p>
            This Cancellation Policy governs the termination or rescheduling of individual CV writing
            orders, consultation appointments, and employer recruitment mandates with NexRole Global
            Recruitment Agency.
          </p>
        </>
      ),
    },
    {
      id: "cv-service-cancellation",
      title: "CV & Writing Services Cancellation",
      content: (
        <>
          <p>Because our services represent bespoke intellectual labor, the following rules apply:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
            <li>
              <strong>Immediate Cancellation Window:</strong> You may cancel an order for a full
              refund (less merchant processing fees) within two (2) hours of payment confirmation,
              provided intake review has not formally commenced.
            </li>
            <li>
              <strong>Work in Progress:</strong> Once an executive writer has been assigned and
              actively begins drafting or structural assessment, cancellations will incur a 50%
              consultant labor fee.
            </li>
            <li>
              <strong>Completed Drafts:</strong> Once the initial draft has been transmitted to your
              email, the order is deemed fulfilled and non-cancellable, subject to your included
              revision guarantees.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "consultation-rescheduling",
      title: "Consultation Calls & Rescheduling",
      content: (
        <>
          <p>
            For Priority and Priority+ consultation sessions (included with Ruby, Diamond, and Flagship
            packages):
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
            <li>You may reschedule your consultation call up to 6 hours prior to the booked time.</li>
            <li>
              No-shows without prior notification may forfeit that consultation round at the practice
              lead&apos;s discretion.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "employer-mandates",
      title: "Employer Recruitment Mandates",
      content: (
        <>
          <p>
            Cancellation, postponement, or pausing of retained or contingency employer search
            mandates is governed exclusively by the terms set forth in your signed Master Services
            Agreement (MSA).
          </p>
        </>
      ),
    },
  ];

  return (
    <LegalPageLayout
      title="Cancellation Policy"
      subtitle="Procedures and timelines for cancelling, postponing, or rescheduling CV packages and consultative sessions."
      sections={sections}
    />
  );
}
