import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { copyFor } from "@/lib/content";
import type { Lang } from "@/lib/site";

export function Shell({ lang, children }: { lang: Lang; children: ReactNode }) {
  const copy = copyFor(lang);

  return (
    <div lang={lang} className="flex min-h-screen flex-col">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-navy"
      >
        {copy.skip}
      </a>
      <Header lang={lang} />
      <main id="content" tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>
      <Footer lang={lang} />
    </div>
  );
}
