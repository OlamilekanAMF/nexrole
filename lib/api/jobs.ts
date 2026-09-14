import jobsData from "@/data/jobs.json";

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  sector: string;
  type: "Full-time" | "Contract" | "Executive";
  salary: string;
  description: string;
  featured: boolean;
}

const ADZUNA_APP_ID = process.env.ADZUNA_APP_ID || "";
const ADZUNA_APP_KEY = process.env.ADZUNA_APP_KEY || "";

interface AdzunaResult {
  id: string;
  title: string;
  company: { display_name: string };
  location: { display_name: string };
  category: { label: string };
  contract_type?: string;
  salary_min?: number;
  salary_max?: number;
  description: string;
}

interface RemotiveResult {
  id: number;
  title: string;
  company_name: string;
  candidate_required_location: string;
  category: string;
  job_type: string;
  salary: string;
  description: string;
}

function mapSector(category: string): string {
  const lc = category.toLowerCase();
  if (lc.includes("legal") || lc.includes("law")) return "Legal";
  if (lc.includes("financ") || lc.includes("account") || lc.includes("banking")) return "Finance";
  if (lc.includes("tech") || lc.includes("it") || lc.includes("engineer") || lc.includes("software")) return "Technology";
  if (lc.includes("hr") || lc.includes("human") || lc.includes("recruit")) return "Human Resources";
  if (lc.includes("operat") || lc.includes("supply") || lc.includes("logist")) return "Operations";
  if (lc.includes("market") || lc.includes("brand") || lc.includes("content")) return "Marketing";
  if (lc.includes("admin") || lc.includes("office")) return "Admin";
  return "Technology";
}

function mapJobType(type?: string): "Full-time" | "Contract" | "Executive" {
  if (!type) return "Full-time";
  const lc = type.toLowerCase();
  if (lc.includes("contract") || lc.includes("temporary") || lc.includes("freelance")) return "Contract";
  if (lc.includes("executive") || lc.includes("senior") || lc.includes("director")) return "Executive";
  return "Full-time";
}

export async function fetchAdzunaJobs(): Promise<Job[]> {
  if (!ADZUNA_APP_ID || !ADZUNA_APP_KEY) return [];

  try {
    const res = await fetch(
      `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${ADZUNA_APP_ID}&app_key=${ADZUNA_APP_KEY}&results_per_page=10&what=senior+executive&content-type=application/json`,
      { next: { revalidate: 3600 }, signal: AbortSignal.timeout(4000) }
    );

    if (!res.ok) return [];

    const data = await res.json();
    return (data.results || []).map((job: AdzunaResult, i: number) => ({
      id: `adzuna-${job.id || i}`,
      title: job.title,
      company: job.company?.display_name || "Confidential",
      location: job.location?.display_name || "London, UK",
      sector: mapSector(job.category?.label || ""),
      type: mapJobType(job.contract_type),
      salary:
        job.salary_min && job.salary_max
          ? `£${Math.round(job.salary_min / 1000)}k – £${Math.round(job.salary_max / 1000)}k`
          : "£85,000 – £120,000",
      description: job.description?.substring(0, 150) || "",
      featured: i < 3,
    }));
  } catch {
    return [];
  }
}

export async function fetchRemotiveJobs(): Promise<Job[]> {
  try {
    const res = await fetch(
      "https://remotive.com/api/remote-jobs?limit=10",
      { next: { revalidate: 3600 }, signal: AbortSignal.timeout(4000) }
    );

    if (!res.ok) return [];

    const data = await res.json();
    return (data.jobs || []).map((job: RemotiveResult, i: number) => ({
      id: `remotive-${job.id || i}`,
      title: job.title,
      company: job.company_name || "Confidential",
      location: job.candidate_required_location || "Remote Worldwide",
      sector: mapSector(job.category || "Technology"),
      type: mapJobType(job.job_type),
      salary: job.salary || "$110,000 – $145,000",
      description: job.description?.replace(/<[^>]*>/g, "").substring(0, 150) || "",
      featured: false,
    }));
  } catch {
    return [];
  }
}

export async function getJobs(): Promise<Job[]> {
  const [adzuna, remotive] = await Promise.allSettled([
    fetchAdzunaJobs(),
    fetchRemotiveJobs(),
  ]);

  const adzunaJobs = adzuna.status === "fulfilled" ? adzuna.value : [];
  const remotiveJobs = remotive.status === "fulfilled" ? remotive.value : [];

  const apiJobs = [...adzunaJobs, ...remotiveJobs];

  // Fallback to rich mock data if external APIs are empty or offline
  if (apiJobs.length === 0) {
    return jobsData as Job[];
  }

  return apiJobs;
}

export function getFeaturedJobs(): Job[] {
  return (jobsData as Job[]).filter((job) => job.featured);
}
