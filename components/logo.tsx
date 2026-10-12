import Link from "next/link";
import { pagePath } from "@/lib/paths";
import type { Lang } from "@/lib/site";

export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 40" className={className} aria-hidden="true">
      <rect x="4" y="9" width="56" height="5" rx="2.5" className="fill-red" />
      <rect x="8" y="16" width="8" height="20" rx="3" fill="currentColor" />
      <rect x="48" y="16" width="8" height="20" rx="3" fill="currentColor" />
      <path
        d="M16 30V20c0-8 32-8 32 0v10h-8V20c0-3.2-16-3.2-16 0v10H16Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Logo({
  lang,
  className = "",
}: {
  lang: Lang;
  className?: string;
}) {
  return (
    <Link
      href={pagePath(lang, "home")}
      className={`inline-flex items-center gap-2.5 rounded-full text-navy ${className}`}
    >
      <Mark className="h-8 w-12" />
      <span className="font-display text-[1.15rem] leading-none font-extrabold tracking-tight sm:text-[1.35rem]">
        Bridgenine
      </span>
    </Link>
  );
}
