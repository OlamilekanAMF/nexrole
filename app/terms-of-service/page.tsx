import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "NexRole terms of service for employer, candidate, and CV service engagements.",
};

export default function TermsOfServicePage() {
  const sections = [
    {
      id: "agreement",
      title: "Agreement to Terms",
      content: (
        <>
          <p>
            These Terms of Service constitute a legally binding agreement between you, whether as an
            individual or on behalf of an entity (&ldquo;you&rdquo;), and NexRole Global Recruitment
            Agency (&ldquo;NexRole,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;),
            relating to your use of the nexrole.com website and any related recruitment or professional
            career-document services.
          </p>
          <p>
            By using our website, contacting our team, or engaging us for recruitment or CV-related
            support, you agree to these terms. If you do not agree, please do not use our services.
          </p>
        </>
      ),
    },
    {
      id: "services",
      title: "Nature of Our Services",
      content: (
        <>
          <p>
            NexRole provides recruitment support for employers and job seekers. Our services may include
            identifying professionals for genuine hiring requirements, reviewing relevant candidate
            experience and qualifications, sharing suitable opportunities with candidates, and providing
            optional professional CV/resume and cover-letter support.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-300">
            <li>
              <strong>For employers:</strong> We source professionals based on the requirements of a
              genuine role and refer candidates whose skills, experience, and qualifications align with
              the position. We do not make hiring decisions on behalf of the employer.
            </li>
            <li>
              <strong>For candidates:</strong> We identify opportunities that may match an individual&apos;s
              background and professional experience. Some opportunities may be remote or may involve
              work that can be pursued alongside an existing role only where the candidate&apos;s current
              employment agreement and the new employer&apos;s requirements permit it.
            </li>
            <li>
              <strong>CV and career-document services:</strong> Our CV writing, rewrite, and cover-letter
              services are professional career-document services. They are separate from the recruitment
              process and are not a guarantee of employment, interviews, or acceptance.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "no-guarantee",
      title: "No Guarantee of Employment or Outcome",
      content: (
        <>
          <p>
            We do not guarantee interviews, offers, employment, or acceptance. Any opportunity shared by
            NexRole is subject to the relevant employer&apos;s own recruitment process, requirements, and
            final decision-making.
          </p>
          <p>
            Candidates should independently review the details of any opportunity, including role scope,
            remuneration, working arrangements, contract terms, and any employer-specific requirements,
            before applying or accepting anything.
          </p>
        </>
      ),
    },
    {
      id: "fees-and-payments",
      title: "Fees, Payment, and Service Terms",
      content: (
        <>
          <p>
            Fees for CV writing, CV rewrites, and related professional services are clearly stated on
            our Pricing Disclosure page and are payable in accordance with the selected service terms.
          </p>
          <p>
            Recruitment-related fees or charges, if applicable, will be communicated in writing through
            an agreed service arrangement with the relevant employer or client. We do not charge a fee
            to access a job opportunity itself unless a separate, clearly disclosed service arrangement
            has been agreed.
          </p>
          <p>
            Payments may be processed through authorized third-party providers, and all payment details
            are handled in accordance with the provider&apos;s terms and our privacy practices.
          </p>
        </>
      ),
    },
    {
      id: "candidate-responsibility",
      title: "Candidate Responsibilities",
      content: (
        <>
          <p>
            Candidates are responsible for providing accurate and complete information about their
            experience, qualifications, availability, and work status. You must ensure that any details
            provided to us are truthful and current.
          </p>
          <p>
            Candidates should also consider whether a role or opportunity is compatible with their current
            employment agreement, work authorisation status, and any other terms that may apply to an
            additional or side role.
          </p>
        </>
      ),
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property and Deliverables",
      content: (
        <>
          <p>
            Any CV, resume, cover letter, or other professional career-document deliverables produced by
            NexRole for a client remain subject to the applicable service terms and the client&apos;s
            instructions, as agreed at the time of service.
          </p>
          <p>
            Our internal methodologies, templates, review frameworks, and proprietary recruitment-related
            processes remain the property of NexRole and may not be copied or reused without written
            consent.
          </p>
        </>
      ),
    },
    {
      id: "limitation",
      title: "Limitation of Liability",
      content: (
        <>
          <p>
            To the maximum extent permitted by applicable law, NexRole shall not be liable for any
            indirect, incidental, consequential, special, or punitive damages arising from the use or
            inability to use our website, services, or any opportunity introduced through our platform.
          </p>
          <p>
            Our total liability in relation to any services or website use shall be limited to the fees
            paid for the relevant service, where applicable, or as otherwise required by law.
          </p>
        </>
      ),
    },
  ];

  return (
    <LegalPageLayout
      title="Terms of Service"
      subtitle="These terms govern how NexRole supports employers, job seekers, and clients who engage our recruitment and career-document services."
      sections={sections}
    />
  );
}
