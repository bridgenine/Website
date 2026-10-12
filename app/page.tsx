import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { metadataFor } from "@/lib/seo";

export const metadata: Metadata = metadataFor("home");

export default function Page() {
  return <HomePage />;
}
