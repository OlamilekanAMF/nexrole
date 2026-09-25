import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { MissionValues } from "@/components/about/MissionValues";
import { HowItWorks } from "@/components/about/HowItWorks";
import { SectorsGrid } from "@/components/about/SectorsGrid";
import { CTABanner } from "@/components/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn how NexRole helps employers identify relevant professionals and helps candidates discover suitable employment opportunities through a clear, professional recruitment process.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
  ];

  return (
    <>
      <JsonLd data={createBreadcrumbSchema(breadcrumbs)} />
      <AboutHero />
      <MissionValues />
      <HowItWorks />
      <SectorsGrid />
      <CTABanner
        title={<>Explore the right <span className="italic text-gradient-gold">next step.</span></>}
        subtext="Employers can share their hiring needs, while candidates can review current opportunities and contact our team with questions."
        primaryBtnText="Browse Jobs"
        primaryBtnHref="/jobs"
        secondaryBtnText="Contact Us"
        secondaryBtnHref="/contact"
      />
    </>
  );
}
