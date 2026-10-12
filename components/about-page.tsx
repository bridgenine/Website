import { Shell } from "@/components/shell";
import { ButtonLink, Container, PageIntro } from "@/components/ui";
import { Mark } from "@/components/logo";
import { copyFor } from "@/lib/content";
import { pagePath } from "@/lib/paths";

export function AboutPage() {
  const copy = copyFor();
  const about = copy.about;

  return (
    <Shell>
      <PageIntro kicker={about.kicker} title={about.title} lede={about.lede} />
      <Container className="grid items-center gap-10 pb-16 md:grid-cols-[auto_1fr] md:pb-20">
        <div className="flex h-36 w-44 items-center justify-center rounded-3xl border border-line bg-paper text-navy">
          <Mark className="h-16 w-24" />
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {about.points.map((point) => (
            <article key={point.title} className="border-t-2 border-navy pt-4">
              <h2 className="type-title text-navy">{point.title}</h2>
              <p className="mt-2 text-ink-soft">{point.body}</p>
            </article>
          ))}
        </div>
      </Container>
      <section className="border-t border-line bg-paper">
        <Container className="py-14">
          <div className="rounded-3xl border border-dashed border-navy/25 bg-white p-6 md:p-8">
            <p className="text-xs font-bold tracking-[0.16em] text-red uppercase">
              {about.placeholderLabel}
            </p>
            <h2 className="type-title mt-3 text-navy">{about.placeholderTitle}</h2>
            <p className="measure mt-2 text-ink-soft">{about.placeholderBody}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={pagePath("services")}>{copy.nav.services}</ButtonLink>
            <ButtonLink href={pagePath("solutions")} variant="ghost">
              {copy.nav.solutions}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </Shell>
  );
}
