import type { Metadata } from "next";
import { SolutionsPage } from "@/components/solutions-page";
import { metadataFor } from "@/lib/seo";

export const metadata: Metadata = metadataFor("solutions");

export default function Page() {
  return <SolutionsPage />;
}
