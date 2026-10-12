import type { Metadata } from "next";
import { copyFor } from "@/lib/content";
import { pagePath, type PageId } from "@/lib/paths";
import { site } from "@/lib/site";

function absolute(path: string) {
  if (path === "/") return `${site.url}/`;
  return `${site.url}${path}`;
}

const shareImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Bridgenine — consulting and workflow automation",
};

export function metadataFor(page: PageId): Metadata {
  const meta = copyFor().meta[page];
  const path = pagePath(page);
  const title = page === "home" ? { absolute: meta.title } : meta.title;

  return {
    title,
    description: meta.description,
    alternates: {
      canonical: absolute(path),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: absolute(path),
      siteName: site.name,
      locale: "en_US",
      type: "website",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/og.png"],
    },
  };
}
