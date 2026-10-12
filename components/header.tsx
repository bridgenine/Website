"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { copyFor } from "@/lib/content";
import { normalizePath, pagePath, type PageId } from "@/lib/paths";

const pages: PageId[] = ["home", "services", "solutions", "about", "contact"];

export function Header() {
  const copy = copyFor();
  const pathname = usePathname();
  const current = normalizePath(pathname);
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const open = menuPath === current;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const items = pages.map((id) => ({
    id,
    href: pagePath(id),
    label: copy.nav[id],
  }));

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5">
        <Logo />
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {items.map((item) => {
            const active =
              current === item.href ||
              (item.id === "solutions" && current.includes("/project-alpha"));
            return (
              <Link
                key={item.id}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-1 text-sm font-semibold ${
                  active ? "text-navy" : "text-ink-soft hover:text-navy"
                }`}
              >
                {item.label}
                <span
                  className={`absolute right-0 -bottom-1 left-0 h-0.5 bg-red ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href={pagePath("contact")}
            className="hidden min-h-10 items-center rounded-full bg-red px-4 text-sm font-bold text-white hover:bg-red-deep sm:inline-flex"
          >
            {copy.nav.demo}
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setMenuPath(open ? null : current)}
          >
            <span className="sr-only">{open ? copy.nav.close : copy.nav.menu}</span>
            <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
              <span className="h-0.5 w-full bg-navy" />
              <span className="h-0.5 w-2/3 bg-red" />
            </span>
          </button>
        </div>
      </div>
      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-50 flex flex-col bg-white px-6 py-5 lg:hidden"
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              className="inline-flex h-10 items-center rounded-full px-3 text-sm font-bold text-red"
              onClick={() => setMenuPath(null)}
            >
              {copy.nav.close}
            </button>
          </div>
          <nav className="mt-12 flex flex-col gap-5" aria-label="Primary">
            {items.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="type-section text-navy"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href={pagePath("contact")}
            className="mt-10 inline-flex min-h-12 w-fit items-center rounded-full bg-red px-5 text-sm font-bold text-white"
          >
            {copy.nav.demo}
          </Link>
        </div>
      ) : null}
    </header>
  );
}
