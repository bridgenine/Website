import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { metadataFor } from "@/lib/seo";

export const metadata: Metadata = metadataFor("en", "home");

export default function Page() {
  return <HomePage lang="en" />;
}
