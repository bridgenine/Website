import Link from "next/link";
import { Shell } from "@/components/shell";
import { Container, PageIntro } from "@/components/ui";
import { copyFor } from "@/lib/content";
import { pagePath } from "@/lib/paths";

export function SolutionsPage() {
  const solutions = copyFor().solutions;

  return (
    <Shell>
      <PageIntro kicker={solutions.kicker} title={solutions.title} lede={solutions.lede} />
      <Container className="grid gap-4 pb-20 md:grid-cols-2">
        <article className="rounded-3xl border border-line bg-white p-6 md:p-8">
          <p className="text-xs font-bold tracking-[0.14em] text-red uppercase">
            {solutions.kicker}
          </p>
          <h2 className="type-section mt-3 text-navy">{solutions.productTitle}</h2>
          <p className="measure mt-3 text-ink-soft">{solutions.productBody}</p>
          <Link
            href={pagePath("product")}
            className="mt-6 inline-flex text-sm font-bold text-red"
          >
            {solutions.productLink}
          </Link>
        </article>
        <article className="rounded-3xl border border-dashed border-navy/25 bg-paper p-6 md:p-8">
          <p className="text-xs font-bold tracking-[0.16em] text-red uppercase">
            {solutions.placeholderLabel}
          </p>
          <h2 className="type-section mt-3 text-navy">{solutions.placeholderTitle}</h2>
          <p className="measure mt-3 text-ink-soft">{solutions.placeholderBody}</p>
        </article>
      </Container>
    </Shell>
  );
}
