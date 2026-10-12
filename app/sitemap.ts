import type { MetadataRoute } from "next";
import { pagePath, type PageId } from "@/lib/paths";
import { site, type Lang } from "@/lib/site";

export const dynamic = "force-static";

const pages: { id: PageId; priority: number }[] = [
  { id: "home", priority: 1 },
  { id: "product", priority: 0.9 },
  { id: "about", priority: 0.7 },
  { id: "contact", priority: 0.6 },
];

function absolute(path: string) {
  return path === "/" ? `${site.url}/` : `${site.url}${path}`;
}

const langs: Lang[] = ["en", "id"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ id, priority }) =>
    langs.map((lang) => ({
      url: absolute(pagePath(lang, id)),
      changeFrequency: "monthly" as const,
      priority,
      alternates: {
        languages: {
          en: absolute(pagePath("en", id)),
          id: absolute(pagePath("id", id)),
        },
      },
    })),
  );
}
