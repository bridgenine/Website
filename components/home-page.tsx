import Link from "next/link";
import { Shell } from "@/components/shell";
import { ButtonLink, Container, Kicker } from "@/components/ui";
import { IconBuilding, IconFlow, IconUsers } from "@/components/icons";
import { Mark } from "@/components/logo";
import { copyFor } from "@/lib/content";
import { pagePath } from "@/lib/paths";
import type { Lang } from "@/lib/site";

const whatIcons = [IconUsers, IconFlow, IconBuilding];

export function HomePage({ lang }: { lang: Lang }) {
  const copy = copyFor(lang);
  const home = copy.home;

  return (
    <Shell lang={lang}>
      <section className="bg-white">
        <Container className="grid items-center gap-12 py-14 md:grid-cols-[1.05fr_0.95fr] md:py-20">
          <div className="min-w-0">
            <Kicker>{home.kicker}</Kicker>
            <h1 className="display mt-5 text-balance text-navy">{home.title}</h1>
            <p className="mt-5 max-w-md text-lg text-ink-soft">{home.lede}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={pagePath(lang, "contact")}>{home.primary}</ButtonLink>
              <ButtonLink href={pagePath(lang, "services")} variant="ghost">
                {home.secondary}
              </ButtonLink>
            </div>
          </div>
          <div className="flex min-h-72 items-center justify-center rounded-3xl border border-line bg-paper text-navy">
            <Mark className="h-24 w-36" />
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 md:py-20">
          <h2 className="font-display text-3xl font-extrabold text-navy md:text-4xl">
            {home.whatTitle}
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {home.what.map((card, index) => {
              const Icon = whatIcons[index];
              return (
                <article key={card.title} className="rounded-3xl border border-line bg-white p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm font-bold text-red">
                      0{index + 1}
                    </span>
                    <Icon className="h-6 w-6 text-navy" />
                  </div>
                  <h3 className="mt-8 text-2xl font-extrabold text-navy">{card.title}</h3>
                  <p className="mt-2 text-ink-soft">{card.body}</p>
                </article>
              );
            })}
          </div>
          <ButtonLink href={pagePath(lang, "services")} variant="ghost" className="mt-8">
            {home.servicesLink}
          </ButtonLink>
        </Container>
      </section>

      <section className="border-t border-line bg-paper">
        <Container className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-20">
          <div>
            <Kicker>{home.solutionsKicker}</Kicker>
            <h2 className="mt-4 font-display text-4xl font-extrabold text-balance text-navy md:text-5xl">
              {home.solutionsTitle}
            </h2>
            <p className="mt-4 max-w-md text-lg text-ink-soft">{home.solutionsBody}</p>
            <ButtonLink href={pagePath(lang, "solutions")} variant="ghost" className="mt-8">
              {home.solutionsLink}
            </ButtonLink>
          </div>
          <Link
            href={pagePath(lang, "product")}
            className="block rounded-3xl border border-line bg-white p-6"
          >
            <p className="text-xs font-bold tracking-[0.14em] text-red uppercase">
              {copy.solutions.kicker}
            </p>
            <p className="mt-4 font-display text-3xl font-extrabold text-navy">
              {copy.solutions.productTitle}
            </p>
            <p className="mt-2 text-ink-soft">{copy.solutions.productBody}</p>
          </Link>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 md:py-24">
          <div className="max-w-2xl border-t-2 border-red pt-8">
            <h2 className="font-display text-4xl font-extrabold text-balance text-navy md:text-6xl">
              {home.ctaTitle}
            </h2>
            <p className="mt-4 text-lg text-ink-soft">{home.ctaBody}</p>
            <ButtonLink href={pagePath(lang, "contact")} className="mt-8">
              {home.primary}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </Shell>
  );
}
