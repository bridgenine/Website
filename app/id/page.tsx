import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { metadataFor } from "@/lib/seo";

export const metadata: Metadata = metadataFor("id", "home");

export default function Page() {
  return <HomePage lang="id" />;
}
