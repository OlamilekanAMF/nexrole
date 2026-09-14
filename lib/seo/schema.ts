export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["EmploymentAgency", "ProfessionalService"],
  "@id": "https://nexrole.com/#organization",
  name: "NexRole",
  legalName: "NexRole Global Recruitment Ltd",
  url: "https://nexrole.com",
  logo: "https://nexrole.com/icon.svg",
  image: "https://nexrole.com/icon-512.png",
  description:
    "NexRole is a global executive recruitment agency and CV studio connecting board-level leadership, engineering, and commercial talent across 38+ countries.",
  email: "support@nexrole.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "GB",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Global (38+ Countries)",
  },
  priceRange: "$$$",
  sameAs: [
    "https://twitter.com/nexrole",
    "https://linkedin.com/company/nexrole",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+44-20-7946-0991",
      contactType: "customer service",
      email: "support@nexrole.com",
      availableLanguage: ["English"],
    },
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://nexrole.com/#website",
  url: "https://nexrole.com",
  name: "NexRole",
  publisher: {
    "@id": "https://nexrole.com/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://nexrole.com/jobs?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export function createFaqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function createServiceSchema({
  name,
  description,
  price,
  deliveryTime,
  url,
}: {
  name: string;
  description: string;
  price: string | number;
  deliveryTime: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: "Executive Career Consultation & CV Writing",
    description,
    provider: {
      "@id": "https://nexrole.com/#organization",
    },
    url,
    offers: {
      "@type": "Offer",
      price: typeof price === "number" ? price.toString() : price.replace(/[^0-9.]/g, ""),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      deliveryLeadTime: {
        "@type": "QuantitativeValue",
        description: deliveryTime,
      },
    },
  };
}

export function createBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `https://nexrole.com${item.url}`,
    })),
  };
}

export function createJobPostingSchema(job: {
  title: string;
  description: string;
  company: string;
  location: string;
  type: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    hiringOrganization: {
      "@type": "Organization",
      name: job.company || "NexRole Partner Network",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location,
      },
    },
    employmentType:
      job.type === "Contract"
        ? "CONTRACTOR"
        : job.type === "Executive"
        ? "FULL_TIME"
        : "FULL_TIME",
    directApply: true,
  };
}

