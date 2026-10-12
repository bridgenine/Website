import type { Metadata } from "next";
import { ContactPage } from "@/components/contact-page";
import { metadataFor } from "@/lib/seo";

export const metadata: Metadata = metadataFor("en", "contact");

export default function Page() {
  return <ContactPage lang="en" />;
}
