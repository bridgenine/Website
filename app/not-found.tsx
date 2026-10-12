import Link from "next/link";
import { Mark } from "@/components/logo";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-5 py-20">
      <Mark className="h-10 w-16 text-navy" />
      <h1 className="display mt-8 text-navy">Page not found</h1>
      <p className="mt-3 text-lg text-ink-soft">Halaman tidak ditemukan</p>
      <div className="mt-8 flex flex-wrap gap-4 text-sm font-bold">
        <Link href="/" className="text-red">
          Home
        </Link>
        <Link href="/id/" className="text-navy">
          Beranda
        </Link>
      </div>
    </div>
  );
}
