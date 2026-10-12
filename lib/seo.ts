import type { Metadata } from "next";
import { copyFor } from "@/lib/content";
import { pagePath, type PageId } from "@/lib/paths";
import { site, type Lang } from "@/lib/site";

function absolute(path: string) {
  if (path === "/") return `${site.url}/`;
  return `${site.url}${path}`;
}

const shareImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Bridgenine — on-prem AI compliance for Indonesian businesses",
};

export function metadataFor(lang: Lang, page: PageId): Metadata {
  const meta = copyFor(lang).meta[page];
  const path = pagePath(lang, page);
  const en = absolute(pagePath("en", page));
  const id = absolute(pagePath("id", page));
  const title =
    page === "home" ? { absolute: meta.title } : meta.title;

  return {
    title,
    description: meta.description,
    alternates: {
      canonical: absolute(path),
      languages: {
        en,
        id,
        "x-default": en,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: absolute(path),
      siteName: site.name,
      locale: lang === "id" ? "id_ID" : "en_US",
      alternateLocale: lang === "id" ? ["en_US"] : ["id_ID"],
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
