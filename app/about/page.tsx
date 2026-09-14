import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { MissionValues } from "@/components/about/MissionValues";
import { HowItWorks } from "@/components/about/HowItWorks";
import { SectorsGrid } from "@/components/about/SectorsGrid";
import { StatsBar } from "@/components/home/StatsBar";
import { CTABanner } from "@/components/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about NexRole's mission to bridge elite global professionals with transformative leadership opportunities across 38+ countries.",
  alternates: {
    canonical: "/about",
  },
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
      <StatsBar />
      <CTABanner
        title={
          <>
            Ready to find your <span className="italic text-gradient-gold">next role?</span>
          </>
        }
        subtext="Speak with a practice lead or review our active global leadership portfolio."
        primaryBtnText="Browse Jobs"
        primaryBtnHref="/jobs"
        secondaryBtnText="Contact Us"
        secondaryBtnHref="/contact"
      />
    </>
  );
}
