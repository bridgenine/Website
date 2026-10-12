import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { copyFor } from "@/lib/content";

export function Shell({ children }: { children: ReactNode }) {
  const copy = copyFor();

  return (
    <div lang="en" className="flex min-h-screen min-w-0 flex-col overflow-x-clip">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-navy"
      >
        {copy.skip}
      </a>
      <Header />
      <main id="content" tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>
      <Footer />
    </div>
  );
}
