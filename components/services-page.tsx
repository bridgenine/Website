import { Shell } from "@/components/shell";
import { ButtonLink, Container, PageIntro } from "@/components/ui";
import { copyFor } from "@/lib/content";
import { pagePath } from "@/lib/paths";
import type { Lang } from "@/lib/site";

export function ServicesPage({ lang }: { lang: Lang }) {
  const services = copyFor(lang).services;

  return (
    <Shell lang={lang}>
      <PageIntro kicker={services.kicker} title={services.title} lede={services.lede} />
      <Container className="pb-16">
        <div className="grid gap-4 md:grid-cols-3">
          {services.items.map((item, index) => (
            <article key={item.title} className="rounded-3xl border border-line bg-white p-6">
              <span className="font-display text-sm font-bold text-red">0{index + 1}</span>
              <h2 className="mt-6 text-2xl font-extrabold text-navy">{item.title}</h2>
              <p className="mt-2 text-ink-soft">{item.body}</p>
            </article>
          ))}
        </div>
      </Container>
      <section className="border-t border-line bg-paper">
        <Container className="py-14">
          <div className="rounded-3xl border border-dashed border-navy/25 bg-white p-6 md:p-8">
            <p className="text-xs font-bold tracking-[0.16em] text-red uppercase">
              {services.placeholderLabel}
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-navy">{services.placeholderTitle}</h2>
            <p className="mt-2 max-w-lg text-ink-soft">{services.placeholderBody}</p>
          </div>
          <ButtonLink href={pagePath(lang, "contact")} className="mt-8">
            {copyFor(lang).nav.demo}
          </ButtonLink>
        </Container>
      </section>
    </Shell>
  );
}
