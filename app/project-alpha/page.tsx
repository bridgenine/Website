import type { Metadata } from "next";
import { ProductPage } from "@/components/product-page";
import { metadataFor } from "@/lib/seo";

export const metadata: Metadata = metadataFor("en", "product");

export default function Page() {
  return <ProductPage lang="en" />;
}
