import type { Metadata } from "next";
import { ServicesPage } from "@/components/services-page";
import { metadataFor } from "@/lib/seo";

export const metadata: Metadata = metadataFor("en", "services");

export default function Page() {
  return <ServicesPage lang="en" />;
}
