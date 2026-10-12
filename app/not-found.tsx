import Link from "next/link";
import { Mark } from "@/components/logo";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-5 py-20">
      <Mark className="h-10 w-16 text-navy" />
      <h1 className="type-hero mt-6 text-navy">Page not found</h1>
      <p className="measure mt-3 text-ink-soft">That page is not on this site.</p>
      <div className="mt-8">
        <Link href="/" className="text-sm font-bold text-red">
          Home
        </Link>
      </div>
    </div>
  );
}
