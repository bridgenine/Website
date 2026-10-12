"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { langFromPath } from "@/lib/paths";

export function HtmlLang() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = langFromPath(pathname);
  }, [pathname]);

  return null;
}
