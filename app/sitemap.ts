import type { MetadataRoute } from "next";
import { pagePath, type PageId } from "@/lib/paths";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const pages: { id: PageId; priority: number }[] = [
  { id: "home", priority: 1 },
  { id: "services", priority: 0.9 },
  { id: "solutions", priority: 0.8 },
  { id: "product", priority: 0.8 },
  { id: "about", priority: 0.7 },
  { id: "contact", priority: 0.6 },
];

function absolute(path: string) {
  return path === "/" ? `${site.url}/` : `${site.url}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ id, priority }) => ({
    url: absolute(pagePath(id)),
    changeFrequency: "monthly" as const,
    priority,
  }));
}
