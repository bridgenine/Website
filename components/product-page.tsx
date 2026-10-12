import Link from "next/link";
import { VerdictCard } from "@/components/verdict-card";
import { Shell } from "@/components/shell";
import { ButtonLink, Container, Kicker, PageIntro } from "@/components/ui";
import { copyFor } from "@/lib/content";
import { pagePath } from "@/lib/paths";
import { site } from "@/lib/site";

export function ProductPage() {
  const product = copyFor().product;
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Project Alpha",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Self-hosted",
    url: `${site.url}${pagePath("product")}`,
    description: copyFor().meta.product.description,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };

  return (
    <Shell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PageIntro kicker={product.kicker} title={product.title} lede={product.lede} />
      <Container className="pb-4">
        <Link href={pagePath("solutions")} className="text-sm font-bold text-red">
          {copyFor().nav.solutions}
        </Link>
      </Container>
      <Container className="max-w-xl pb-8">
        <VerdictCard />
      </Container>

      <section className="bg-white">
        <Container className="pb-16">
          <h2 className="text-sm font-bold tracking-[0.16em] text-red uppercase">
            {product.problemTitle}
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {product.problems.map((item) => (
              <article key={item.title} className="rounded-3xl bg-paper p-6">
                <h3 className="type-title text-navy">{item.title}</h3>
                <p className="mt-2 text-ink-soft">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-white">
        <Container className="py-12 md:py-16">
          <h2 className="type-section text-navy">{product.howTitle}</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {product.steps.map((step, index) => (
              <li key={step.title} className="rounded-3xl border border-line p-5">
                <span className="text-sm font-semibold text-red">0{index + 1}</span>
                <h3 className="type-title mt-4 text-navy">{step.title}</h3>
                <p className="mt-2 text-ink-soft">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-line bg-paper">
        <Container className="py-12 md:py-16">
          <h2 className="type-section text-navy">{product.featuresTitle}</h2>
          <ul className="mt-6 grid gap-x-10 md:grid-cols-2">
            {product.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 border-b border-line py-3 font-medium text-navy"
              >
                <span className="h-px w-4 shrink-0 bg-red" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="grid gap-8 py-12 md:grid-cols-2 md:py-16">
          <div>
            <Kicker>{product.privacyBody}</Kicker>
            <h2 className="type-section mt-3 text-navy">{product.privacyTitle}</h2>
          </div>
          <ul className="flex flex-col justify-center gap-4">
            {product.privacy.map((item) => (
              <li key={item} className="border-l-2 border-red pl-4 font-medium text-navy">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-line bg-paper">
        <Container className="py-12 md:py-16">
          <h2 className="type-section text-navy">{product.audienceTitle}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {product.audiences.map((item) => (
              <article key={item.title} className="rounded-3xl border border-line bg-white p-6">
                <h3 className="type-title text-navy">{item.title}</h3>
                <p className="mt-2 text-ink-soft">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-12 md:py-16">
          <div className="max-w-2xl border-t-2 border-red pt-6">
            <h2 className="type-section text-navy">{product.ctaTitle}</h2>
            <p className="measure mt-3 text-ink-soft">{product.ctaBody}</p>
            <ButtonLink href={pagePath("contact")} className="mt-8">
              {product.ctaTitle}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </Shell>
  );
}
