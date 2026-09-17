import type { MetadataRoute } from "next";
import { integrations } from "@/lib/integrations";
import { posts } from "@/lib/blog";
import { audiences } from "@/lib/audiences";
import { changelog } from "@/lib/changelog";
import { competitors } from "@/lib/competitors";
import { parseDisplayDate } from "@/lib/dates";

// Only pages with a real content date get lastModified. Stamping every URL with
// the build time tells Google everything changed on every deploy, so it learns
// to ignore the field entirely.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://annoture.com";

  const postDates = posts.map((p) => parseDisplayDate(p.updated ?? p.date));
  const latestPostDate = new Date(Math.max(...postDates.map((d) => d.getTime())));
  const latestChangelogDate = new Date(
    Math.max(...changelog.map((e) => parseDisplayDate(e.date).getTime()))
  );

  return [
    {
      url: base,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/features`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/use-cases/qa-testing`,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/use-cases/bug-reporting`,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/compare/bugherd-and-marker-io`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...competitors.map((c) => ({
      url: `${base}/compare/${c.slug}`,
      lastModified: parseDisplayDate(c.pricingCheckedOn),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    {
      url: `${base}/chrome-extension`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/faq`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/about`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/contact`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/privacy-policy`,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${base}/terms`,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${base}/cookies`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/changelog`,
      lastModified: latestChangelogDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${base}/brand`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${base}/blog`,
      lastModified: latestPostDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((p, i) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: postDates[i],
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    {
      url: `${base}/integrations`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...audiences.map((a) => ({
      url: `${base}/for/${a.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...integrations.map((i) => ({
      url: `${base}/integrations/${i.slug}`,
      changeFrequency: "monthly" as const,
      priority: i.status === "available" ? 0.85 : 0.7,
    })),
  ];
}
