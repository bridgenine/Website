import type { Lang } from "@/lib/site";

export type PageId = "home" | "about" | "product" | "contact";

const slugs: Record<PageId, string> = {
  home: "",
  about: "about",
  product: "project-alpha",
  contact: "contact",
};

export function pagePath(lang: Lang, page: PageId): string {
  const slug = slugs[page];
  const prefix = lang === "id" ? "/id" : "";
  if (!slug) return prefix ? `${prefix}/` : "/";
  return `${prefix}/${slug}/`;
}

export function normalizePath(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  const trimmed = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return trimmed.replace(/\/{2,}/g, "/");
}

export function langFromPath(pathname: string): Lang {
  const path = normalizePath(pathname);
  return path === "/id/" || path.startsWith("/id/") ? "id" : "en";
}

export function switchLangPath(pathname: string, target: Lang): string {
  const path = normalizePath(pathname);
  const stripped = path.replace(/^\/id(?=\/)/, "") || "/";
  if (target === "en") return stripped;
  return stripped === "/" ? "/id/" : `/id${stripped}`;
}
