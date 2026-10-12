import Link from "next/link";
import { Logo } from "@/components/logo";
import { copyFor } from "@/lib/content";
import { pagePath, type PageId } from "@/lib/paths";

const pages: PageId[] = ["home", "services", "solutions", "product", "about", "contact"];

export function Footer() {
  const copy = copyFor();

  return (
    <footer className="mt-auto border-t border-line bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm text-ink-soft">{copy.footer.line}</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold" aria-label="Footer">
          {pages.map((id) => (
            <Link key={id} href={pagePath(id)} className="text-navy hover:text-red">
              {copy.nav[id]}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto w-full max-w-6xl px-5 py-4 text-xs text-ink-soft">
          © {new Date().getFullYear()} Bridgenine
        </p>
      </div>
    </footer>
  );
}
