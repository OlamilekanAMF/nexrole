import React from "react";
import { Hero } from "@/components/home/Hero";
import { IndustryTicker } from "@/components/home/IndustryTicker";
import { StatsBar } from "@/components/home/StatsBar";
import { HowWeHelp } from "@/components/home/HowWeHelp";
import { FeaturedJobs } from "@/components/home/FeaturedJobs";
import { CVUpsell } from "@/components/home/CVUpsell";
import { Testimonials } from "@/components/home/Testimonials";
import { CTABanner } from "@/components/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IndustryTicker />
      <StatsBar />
      <HowWeHelp />
      <FeaturedJobs />
      <CVUpsell />
      <Testimonials />
      <CTABanner
        title={
          <>
            Ready to accelerate your <span className="italic text-gradient-gold">career?</span>
          </>
        }
        subtext="Explore active global leadership opportunities or let our specialist team rewrite your executive credentials today."
        primaryBtnText="Browse Live Roles"
        primaryBtnHref="/jobs"
        secondaryBtnText="Explore CV Packages"
        secondaryBtnHref="/services"
      />
    </>
  );
}
