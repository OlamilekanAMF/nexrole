import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesBento } from "@/components/services/ServicesBento";
import { CVSpotlight } from "@/components/services/CVSpotlight";
import { EmployerProcess } from "@/components/services/EmployerProcess";
import { PricingOverview } from "@/components/services/PricingOverview";
import { CTABanner } from "@/components/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbSchema, createServiceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Recruitment & Executive CV Services",
  description:
    "Explore NexRole's end-to-end recruitment, executive search, and CV writing solutions tailored for global leadership.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ];

  const serviceCatalog = [
    createServiceSchema({
      name: "Executive Placement & Talent Acquisition",
      description: "Direct executive search and placement across 38+ countries in Legal, Finance, Tech, HR, Ops.",
      price: "Bespoke",
      deliveryTime: "Ongoing Mandates",
      url: "https://nexrole.com/services",
    }),
    createServiceSchema({
      name: "New CV Writing — Executive Tier",
      description: "Bespoke executive CV created from the ground up by senior recruitment directors with board-level storytelling.",
      price: 995,
      deliveryTime: "6–10 hrs",
      url: "https://nexrole.com/services/new-cv",
    }),
    createServiceSchema({
      name: "Executive CV Rewrite",
      description: "3-tier career progression CV restructuring with ATS optimization, metrics revamp, and executive coaching.",
      price: 500,
      deliveryTime: "14–18 hrs",
      url: "https://nexrole.com/services/cv-rewrite",
    }),
    createServiceSchema({
      name: "Executive Cover Letter",
      description: "High-impact narrative cover letters tailored for executive committees, hiring boards, and VC/PE founders.",
      price: 300,
      deliveryTime: "24 hrs",
      url: "https://nexrole.com/services/cover-letter",
    }),
  ];

  return (
    <>
      <JsonLd data={[createBreadcrumbSchema(breadcrumbs), ...serviceCatalog]} />
      <ServicesHero />
      <ServicesBento />
      <CVSpotlight />
      <EmployerProcess />
      <PricingOverview />
      <CTABanner
        title={
          <>
            Ready to stand out at the <span className="italic text-gradient-gold">highest level?</span>
          </>
        }
        subtext="Let's build a CV that opens doors or connect you with active board and executive vacancies."
        primaryBtnText="Get Flagship CV ($995)"
        primaryBtnHref="/services/new-cv"
        secondaryBtnText="Compare Rewrite Tiers"
        secondaryBtnHref="/services/cv-rewrite"
      />
    </>
  );
}
