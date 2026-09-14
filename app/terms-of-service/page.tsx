import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "NexRole Terms of Service governing candidates, employers, and CV service clients.",
};

export default function TermsOfServicePage() {
  const sections = [
    {
      id: "agreement",
      title: "Agreement to Terms",
      content: (
        <>
          <p>
            These Terms of Service constitute a legally binding agreement made between you, whether
            personally or on behalf of an entity (&ldquo;you&rdquo;) and NexRole Global Recruitment
            Agency (&ldquo;NexRole,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;),
            concerning your access to and use of the nexrole.com website as well as any related
            recruitment or CV writing services.
          </p>
        </>
      ),
    },
    {
      id: "services-provided",
      title: "Nature of Services",
      content: (
        <>
          <p>
            NexRole provides professional executive recruitment, talent introduction, executive CV
            writing, resume restructuring, and career collateral advisory services.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-300">
            <li>
              <strong>Recruitment Introductions:</strong> We act as an intermediary connecting
              qualified candidates with independent hiring organizations. Final hiring decisions rest
              solely with the prospective employer.
            </li>
            <li>
              <strong>CV & Career Collateral:</strong> All CV rewrite and new creation deliverables are
              developed based on background information provided by the candidate. NexRole does not
              guarantee employment outcomes or interview quotas.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "payments-and-fees",
      title: "Fees, Retainers & Payment Processing",
      content: (
        <>
          <p>
            All individual CV service fees are clearly stated on our Pricing Disclosure page and are
            payable in advance via our authorized Lemon Squeezy gateway.
          </p>
          <p>
            Employer placement fees, retainer terms, and contingency percentages are formalized via
            separate, signed Recruitment Service Level Agreements (SLAs).
          </p>
        </>
      ),
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property & Deliverables",
      content: (
        <>
          <p>
            Upon full settlement of invoice fees, the client retains full ownership and copyright of
            their personalized completed CV, cover letter, or career narrative document.
          </p>
          <p>
            NexRole proprietary scoring rubrics, benchmark datasets, and internal assessment models
            remain the exclusive intellectual property of NexRole Global.
          </p>
        </>
      ),
    },
    {
      id: "limitation-liability",
      title: "Limitation of Liability",
      content: (
        <>
          <p>
            To the maximum extent permitted by applicable law, NexRole shall not be liable for any
            indirect, punitive, incidental, special, consequential, or exemplary damages arising out of
            or relating to the use of our services or failure of third-party interview offers.
          </p>
        </>
      ),
    },
  ];

  return (
    <LegalPageLayout
      title="Terms of Service"
      subtitle="Standard legal covenants governing candidate placements, CV deliverables, and institutional hiring mandates."
      sections={sections}
    />
  );
}
