import type { Metadata } from "next";
import { ProductPage } from "@/components/product-page";
import { metadataFor } from "@/lib/seo";

export const metadata: Metadata = metadataFor("id", "product");

export default function Page() {
  return <ProductPage lang="id" />;
}
