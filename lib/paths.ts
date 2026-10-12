export type PageId = "home" | "about" | "services" | "solutions" | "product" | "contact";

const slugs: Record<PageId, string> = {
  home: "",
  about: "about",
  services: "services",
  solutions: "solutions",
  product: "project-alpha",
  contact: "contact",
};

export function pagePath(page: PageId): string {
  const slug = slugs[page];
  if (!slug) return "/";
  return `/${slug}/`;
}

export function normalizePath(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  const trimmed = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return trimmed.replace(/\/{2,}/g, "/");
}
