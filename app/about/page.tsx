import type { Metadata } from "next";
import { AboutPage } from "@/components/about-page";
import { metadataFor } from "@/lib/seo";

export const metadata: Metadata = metadataFor("en", "about");

export default function Page() {
  return <AboutPage lang="en" />;
}
