import { VerdictCard } from "@/components/verdict-card";
import { Shell } from "@/components/shell";
import { ButtonLink, Container, Kicker } from "@/components/ui";
import { IconBuilding, IconServer, IconShield } from "@/components/icons";
import { Mark } from "@/components/logo";
import { copyFor, regulationTags } from "@/lib/content";
import { pagePath } from "@/lib/paths";
import type { Lang } from "@/lib/site";

const whatIcons = [IconServer, IconShield, IconBuilding];

export function HomePage({ lang }: { lang: Lang }) {
  const copy = copyFor(lang);
  const home = copy.home;

  return (
    <Shell lang={lang}>
      <section className="bg-white">
        <Container className="grid items-center gap-12 py-14 md:grid-cols-[1.05fr_0.95fr] md:py-20">
          <div>
            <Kicker>{home.kicker}</Kicker>
            <h1 className="display mt-5 text-balance text-navy">{home.title}</h1>
            <p className="mt-5 max-w-md text-lg text-ink-soft">{home.lede}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={pagePath(lang, "contact")}>{home.primary}</ButtonLink>
              <ButtonLink href={pagePath(lang, "product")} variant="ghost">
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
        </Container>
      </section>

      <section className="border-t border-line bg-paper">
        <Container className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-20">
          <div>
            <Kicker>{home.highlightKicker}</Kicker>
            <h2 className="mt-4 font-display text-4xl font-extrabold text-balance text-navy md:text-5xl">
              {home.highlightTitle}
            </h2>
            <p className="mt-4 max-w-md text-lg text-ink-soft">{home.highlightBody}</p>
            <ButtonLink href={pagePath(lang, "product")} variant="ghost" className="mt-8">
              {home.highlightLink}
            </ButtonLink>
            <ul className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2" aria-label={regulationTags.join(", ")}>
              {regulationTags.map((tag, index) => (
                <li key={tag} className="inline-flex items-center gap-3 text-sm font-semibold text-navy">
                  {index > 0 ? <span className="h-1 w-1 rounded-full bg-red" aria-hidden="true" /> : null}
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <VerdictCard lang={lang} />
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
