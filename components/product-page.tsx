import { Shell } from "@/components/shell";
import { ButtonLink, Container, Kicker, PageIntro } from "@/components/ui";
import { copyFor } from "@/lib/content";
import { pagePath } from "@/lib/paths";
import { site, type Lang } from "@/lib/site";

export function ProductPage({ lang }: { lang: Lang }) {
  const product = copyFor(lang).product;
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Project Alpha",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Self-hosted",
    url: `${site.url}${pagePath(lang, "product")}`,
    description: copyFor(lang).meta.product.description,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };

  return (
    <Shell lang={lang}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PageIntro kicker={product.kicker} title={product.title} lede={product.lede} />

      <section className="bg-white">
        <Container className="pb-16">
          <h2 className="text-sm font-bold tracking-[0.16em] text-red uppercase">
            {product.problemTitle}
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {product.problems.map((item) => (
              <article key={item.title} className="rounded-3xl bg-paper p-6">
                <h3 className="text-2xl font-extrabold text-navy">{item.title}</h3>
                <p className="mt-2 text-ink-soft">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-white">
        <Container className="py-16 md:py-20">
          <h2 className="font-display text-3xl font-extrabold text-navy md:text-4xl">
            {product.howTitle}
          </h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {product.steps.map((step, index) => (
              <li key={step.title} className="rounded-3xl border border-line p-5">
                <span className="font-display text-sm font-bold text-red">
                  0{index + 1}
                </span>
                <h3 className="mt-6 text-2xl font-extrabold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-line bg-paper">
        <Container className="py-16 md:py-20">
          <h2 className="font-display text-3xl font-extrabold text-navy md:text-4xl">
            {product.featuresTitle}
          </h2>
          <ul className="mt-6 grid gap-x-10 md:grid-cols-2">
            {product.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 border-b border-line py-4 font-semibold text-navy"
              >
                <span className="h-px w-4 shrink-0 bg-red" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="grid gap-10 py-16 md:grid-cols-2 md:py-20">
          <div>
            <Kicker>{product.privacyBody}</Kicker>
            <h2 className="mt-4 font-display text-4xl font-extrabold text-balance text-navy">
              {product.privacyTitle}
            </h2>
          </div>
          <ul className="flex flex-col justify-center gap-4">
            {product.privacy.map((item) => (
              <li key={item} className="border-l-2 border-red pl-4 text-lg font-semibold text-navy">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-line bg-paper">
        <Container className="py-16 md:py-20">
          <h2 className="font-display text-3xl font-extrabold text-navy md:text-4xl">
            {product.audienceTitle}
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {product.audiences.map((item) => (
              <article key={item.title} className="rounded-3xl border border-line bg-white p-6">
                <h3 className="text-xl font-extrabold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 md:py-20">
          <div className="max-w-2xl border-t-2 border-red pt-8">
            <h2 className="font-display text-4xl font-extrabold text-navy md:text-5xl">
              {product.ctaTitle}
            </h2>
            <p className="mt-4 text-lg text-ink-soft">{product.ctaBody}</p>
            <ButtonLink href={pagePath(lang, "contact")} className="mt-8">
              {product.ctaTitle}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </Shell>
  );
}
