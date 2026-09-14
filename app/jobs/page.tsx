import type { Metadata } from "next";
import { Suspense } from "react";
import { getJobs } from "@/lib/api/jobs";
import { JobsClient } from "@/components/jobs/JobsClient";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbSchema, createJobPostingSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Live Opportunities & Executive Search",
  description:
    "Explore active global opportunities across Legal, Finance, Technology, HR, Operations, and Board-level mandates.",
  alternates: {
    canonical: "/jobs",
  },
};

export default async function JobsPage() {
  const jobs = await getJobs();

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Live Opportunities", url: "/jobs" },
  ];

  const jobSchemas = jobs.slice(0, 10).map((j) => createJobPostingSchema(j));

  return (
    <>
      <JsonLd data={[createBreadcrumbSchema(breadcrumbs), ...jobSchemas]} />
      <Suspense
        fallback={
          <div className="min-h-[60vh] flex items-center justify-center text-slate-400">
            <div className="w-8 h-8 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" />
          </div>
        }
      >
        <JobsClient initialJobs={jobs} />
      </Suspense>
    </>
  );
}
