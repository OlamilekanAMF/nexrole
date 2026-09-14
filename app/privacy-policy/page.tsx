import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "NexRole Privacy Policy and GDPR Data Protection Standards.",
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: "introduction",
      title: "Introduction & Scope",
      content: (
        <>
          <p>
            NexRole Global Recruitment Agency (&ldquo;NexRole,&rdquo; &ldquo;we,&rdquo;
            &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is strictly committed
            to protecting the personal data of candidates, hiring partners, and website visitors.
          </p>
          <p>
            This policy describes the types of information we may collect from you or that you may
            provide when you visit nexrole.com and our practices for collecting, using, maintaining,
            protecting, and disclosing that information.
          </p>
        </>
      ),
    },
    {
      id: "information-collected",
      title: "Information We Collect",
      content: (
        <>
          <p>We collect several types of information from and about users of our platform, including:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-300">
            <li>
              <strong>Candidate Identity & Career Data:</strong> Name, postal address, email address,
              telephone number, employment history, qualifications, compensation records, and
              curriculum vitae documents.
            </li>
            <li>
              <strong>Organizational Partner Data:</strong> Corporate entity names, representative
              contact details, hiring briefs, job descriptions, and billing records.
            </li>
            <li>
              <strong>Transactional Data:</strong> Payment verification tokens generated via our
              Lemon Squeezy integration. Note: NexRole does not store full credit card numbers on our
              servers.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "how-we-use",
      title: "How We Use Your Information",
      content: (
        <>
          <p>We use information that we collect about you or that you provide to us:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-300">
            <li>To match candidates with active, unlisted, or prospective employer vacancies.</li>
            <li>To perform executive CV writing, rewriting, and formatting services.</li>
            <li>To process authorized payments and deliver fulfillment vouchers.</li>
            <li>To notify you about changes to our platform, mandates, or policies.</li>
            <li>To comply with regulatory employment and data protection obligations.</li>
          </ul>
        </>
      ),
    },
    {
      id: "data-sharing",
      title: "Confidentiality & Third-Party Disclosure",
      content: (
        <>
          <p>
            Candidate CVs and personal profiles are <strong>never</strong> circulated to prospective
            employers without explicit verbal or written authorization from the candidate.
          </p>
          <p>
            We may disclose aggregated, non-identifying market insights to partners. Third-party
            service providers (e.g. Lemon Squeezy for payments, Web3Forms for inquiry routing) operate
            under strict confidentiality and data-processing covenants.
          </p>
        </>
      ),
    },
    {
      id: "data-retention",
      title: "Data Retention & Your Rights (GDPR/NDPR)",
      content: (
        <>
          <p>
            Under UK GDPR, European GDPR, and applicable global data privacy regulations, you have the
            right to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
            <li>Request access to your personal dossier held by NexRole.</li>
            <li>Request correction of inaccurate or incomplete records.</li>
            <li>Request complete erasure (&ldquo;Right to be Forgotten&rdquo;) of your CV data.</li>
            <li>Withdraw consent to talent pool communications at any time.</li>
          </ul>
          <p className="pt-2">
            To exercise any of these statutory rights, please contact our Data Protection Officer at{" "}
            <a href="mailto:privacy@nexrole.com" className="text-blue-400 underline">
              privacy@nexrole.com
            </a>
            .
          </p>
        </>
      ),
    },
  ];

  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="How NexRole handles, secures, and honors candidate confidentiality and institutional hiring data globally."
      sections={sections}
    />
  );
}
