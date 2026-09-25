import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "NexRole privacy policy covering candidate, employer, and website user data handling.",
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: "introduction",
      title: "Introduction & Scope",
      content: (
        <>
          <p>
            NexRole Global Recruitment Agency (&ldquo;NexRole,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo;
            or &ldquo;us&rdquo;) respects the privacy of candidates, employers, clients, and website
            visitors.
          </p>
          <p>
            This policy explains what personal information we collect, how we use it, when we may share
            it, and how you can contact us about your information. It applies to information collected
            through the nexrole.com website, contact forms, recruitment communications, and related
            services.
          </p>
        </>
      ),
    },
    {
      id: "information-collected",
      title: "Information We Collect",
      content: (
        <>
          <p>We may collect and process the following information:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-300">
            <li>
              <strong>Candidate information:</strong> full name, contact details, work history, skills,
              qualifications, CVs, cover letters, and professional background.
            </li>
            <li>
              <strong>Employer and client information:</strong> company details, job requirements,
              hiring needs, contact information, and any information relevant to a recruitment brief.
            </li>
            <li>
              <strong>Website interaction data:</strong> information you provide through contact forms,
              messages, enquiry submissions, or direct communication with our team.
            </li>
            <li>
              <strong>Transaction information:</strong> information needed to process payments for CV or
              related services through approved providers.
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
          <p>We use personal information to:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-300">
            <li>Assess suitability for relevant employment opportunities or recruitment introductions.</li>
            <li>Review candidate experience and qualifications against genuine job requirements.</li>
            <li>Provide optional CV/resume, cover-letter, and related career-document services.</li>
            <li>Communicate with candidates, employers, and clients about opportunities or services.</li>
            <li>Process payments and provide service-related confirmations.</li>
            <li>Maintain compliance, document business activity, and improve our recruitment processes.</li>
          </ul>
          <p className="pt-2">
            We do not promise employment, interviews, or acceptance based solely on the information you
            provide. We also do not sell personal data.
          </p>
        </>
      ),
    },
    {
      id: "sharing",
      title: "How We Share Information",
      content: (
        <>
          <p>
            We may share information only where necessary to operate our recruitment and service
            functions, including with:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-300">
            <li>Employers or hiring partners where a candidate has consented to being considered.</li>
            <li>Approved service providers used to process payments, deliver emails, or support website operations.</li>
            <li>Legal or regulatory authorities where required by law or to protect legitimate interests.</li>
          </ul>
          <p className="pt-2">
            Candidate CVs and personal details are not typically shared with employers without a clear
            recruitment purpose and appropriate consent or instruction from the candidate.
          </p>
        </>
      ),
    },
    {
      id: "retention-rights",
      title: "Retention, Security, and Your Rights",
      content: (
        <>
          <p>
            We retain personal data only as long as necessary for the purposes described above, to meet
            legal obligations, or to support legitimate business needs. We use reasonable administrative,
            technical, and organisational measures to protect personal information from unauthorised
            access, disclosure, alteration, or destruction.
          </p>
          <p>
            Depending on your location and applicable law, you may have rights to request access to,
            correction of, deletion of, or objection to the processing of your personal data. You may
            also withdraw consent to certain communications at any time.
          </p>
          <p className="pt-2">
            To exercise your rights or ask a question about this policy, please contact us at{" "}
            <a href="mailto:privacy@nexroleagency.com" className="text-blue-600 dark:text-blue-400 underline">
              privacy@nexroleagency.com
            </a>
            .
          </p>
        </>
      ),
    },
    {
      id: "cookies",
      title: "Cookies and Website Usage",
      content: (
        <>
          <p>
            Our website may use cookies or similar technologies to support functionality, improve user
            experience, and help understand website performance. You can control or disable cookies
            through your browser settings, but some website features may not work as intended if cookies
            are disabled.
          </p>
        </>
      ),
    },
  ];

  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="How NexRole handles personal information for recruitment, client communications, and professional career-document services."
      sections={sections}
    />
  );
}
