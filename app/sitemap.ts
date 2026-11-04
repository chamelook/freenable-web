import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.freenable.co.kr";
  return [
    { url: `${baseUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/terms/`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/privacy/`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
