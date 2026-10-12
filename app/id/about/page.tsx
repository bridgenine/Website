import type { Metadata } from "next";
import { AboutPage } from "@/components/about-page";
import { metadataFor } from "@/lib/seo";

export const metadata: Metadata = metadataFor("id", "about");

export default function Page() {
  return <AboutPage lang="id" />;
}
