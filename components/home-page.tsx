import Link from "next/link";
import { Shell } from "@/components/shell";
import { ButtonLink, Container, Kicker } from "@/components/ui";
import { IconBuilding, IconFlow, IconUsers } from "@/components/icons";
import { Mark } from "@/components/logo";
import { copyFor } from "@/lib/content";
import { pagePath } from "@/lib/paths";

const whatIcons = [IconUsers, IconFlow, IconBuilding];

export function HomePage() {
  const copy = copyFor();
  const home = copy.home;

  return (
    <Shell>
      <section className="bg-white">
        <Container className="grid items-center gap-10 py-12 md:grid-cols-[1.05fr_0.95fr] md:py-16">
          <div className="min-w-0">
            <Kicker>{home.kicker}</Kicker>
            <h1 className="type-hero mt-3 max-w-[28ch] text-navy">{home.title}</h1>
            <p className="measure mt-4 text-ink-soft">{home.lede}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={pagePath("contact")}>{home.primary}</ButtonLink>
              <ButtonLink href={pagePath("services")} variant="ghost">
                {home.secondary}
              </ButtonLink>
            </div>
          </div>
          <div className="flex min-h-52 items-center justify-center rounded-3xl border border-line bg-paper text-navy">
            <Mark className="h-16 w-24" />
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-12 md:py-16">
          <h2 className="type-section text-navy">{home.whatTitle}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {home.what.map((card, index) => {
              const Icon = whatIcons[index];
              return (
                <article key={card.title} className="rounded-3xl border border-line bg-white p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-red">0{index + 1}</span>
                    <Icon className="h-5 w-5 text-navy" />
                  </div>
                  <h3 className="type-title mt-5 text-navy">{card.title}</h3>
                  <p className="mt-2 text-ink-soft">{card.body}</p>
                </article>
              );
            })}
          </div>
          <ButtonLink href={pagePath("services")} variant="ghost" className="mt-8">
            {home.servicesLink}
          </ButtonLink>
        </Container>
      </section>

      <section className="border-t border-line bg-paper">
        <Container className="grid items-center gap-8 py-12 md:grid-cols-2 md:py-16">
          <div>
            <Kicker>{home.solutionsKicker}</Kicker>
            <h2 className="type-section mt-3 text-navy">{home.solutionsTitle}</h2>
            <p className="measure mt-3 text-ink-soft">{home.solutionsBody}</p>
            <ButtonLink href={pagePath("solutions")} variant="ghost" className="mt-8">
              {home.solutionsLink}
            </ButtonLink>
          </div>
          <Link
            href={pagePath("product")}
            className="block rounded-3xl border border-line bg-white p-6"
          >
            <p className="text-xs font-bold tracking-[0.14em] text-red uppercase">
              {copy.solutions.kicker}
            </p>
            <p className="type-title mt-3 text-navy">{copy.solutions.productTitle}</p>
            <p className="mt-2 text-ink-soft">{copy.solutions.productBody}</p>
          </Link>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-12 md:py-16">
          <div className="max-w-2xl border-t-2 border-red pt-6">
            <h2 className="type-section text-navy">{home.ctaTitle}</h2>
            <p className="measure mt-3 text-ink-soft">{home.ctaBody}</p>
            <ButtonLink href={pagePath("contact")} className="mt-8">
              {home.primary}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </Shell>
  );
}
