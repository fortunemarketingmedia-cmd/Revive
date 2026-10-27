import type { MetadataRoute } from "next";
import { treatments } from "@/lib/content/treatments";
import { clinicData } from "@/lib/content/clinic";

const SITE_URL = "https://www.reviveskinclinics.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/treatments`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/gallery`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    ...clinicData.branches.map((branch) => ({
      url: `${SITE_URL}/locations/${branch.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ];

  const treatmentPages: MetadataRoute.Sitemap = treatments.map((treatment) => ({
    url: `${SITE_URL}/treatments/${treatment.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...treatmentPages];
}
