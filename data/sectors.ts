export interface Sector {
  name: string;
  slug: string;
  icon: string;
  description: string;
}

export const sectors: Sector[] = [
  {
    name: "Legal",
    slug: "legal",
    icon: "Scale",
    description: "Corporate law, compliance, litigation, and regulatory advisory roles across global jurisdictions.",
  },
  {
    name: "Finance",
    slug: "finance",
    icon: "Briefcase",
    description: "Investment banking, private equity, corporate finance, and financial planning positions.",
  },
  {
    name: "Technology",
    slug: "technology",
    icon: "Monitor",
    description: "Software engineering, data science, DevOps, AI/ML, and technology leadership roles.",
  },
  {
    name: "Human Resources",
    slug: "hr",
    icon: "Users",
    description: "Talent acquisition, people operations, organizational development, and HR leadership.",
  },
  {
    name: "Operations",
    slug: "operations",
    icon: "Settings",
    description: "Supply chain, logistics, project management, and operational excellence positions.",
  },
  {
    name: "Marketing",
    slug: "marketing",
    icon: "Megaphone",
    description: "Brand strategy, digital marketing, growth, content, and marketing leadership roles.",
  },
];

export const sectorNames = sectors.map((s) => s.name);

export const filterSectors = [
  "All",
  "Legal",
  "Finance",
  "Technology",
  "HR",
  "Operations",
  "Marketing",
  "Admin",
  "Executive",
];
