import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nexrole.com";

  const routes: Array<{
    path: string;
    priority: number;
    changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly";
  }> = [
    { path: "", priority: 1.0, changeFrequency: "daily" },
    { path: "/jobs", priority: 0.95, changeFrequency: "daily" },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" },
    { path: "/services/new-cv", priority: 0.9, changeFrequency: "weekly" },
    { path: "/services/cv-rewrite", priority: 0.9, changeFrequency: "weekly" },
    { path: "/services/cover-letter", priority: 0.85, changeFrequency: "weekly" },
    { path: "/reviews", priority: 0.85, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/payment", priority: 0.7, changeFrequency: "monthly" },
    { path: "/pricing-disclosure", priority: 0.6, changeFrequency: "monthly" },
    { path: "/refund-policy", priority: 0.5, changeFrequency: "yearly" },
    { path: "/cancellation-policy", priority: 0.5, changeFrequency: "yearly" },
    { path: "/privacy-policy", priority: 0.5, changeFrequency: "yearly" },
    { path: "/terms-of-service", priority: 0.5, changeFrequency: "yearly" },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
