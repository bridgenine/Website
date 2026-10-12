import { ContactForm } from "@/components/contact-form";
import { Shell } from "@/components/shell";
import { Container, PageIntro } from "@/components/ui";
import { copyFor } from "@/lib/content";
import type { Lang } from "@/lib/site";

export function ContactPage({ lang }: { lang: Lang }) {
  const contact = copyFor(lang).contact;

  return (
    <Shell lang={lang}>
      <PageIntro kicker={contact.kicker} title={contact.title} lede={contact.lede} />
      <Container className="grid gap-10 pb-20 md:grid-cols-[1fr_0.8fr]">
        <ContactForm lang={lang} />
        <aside className="md:pt-2">
          <h2 className="text-sm font-bold tracking-[0.16em] text-red uppercase">
            {contact.nextTitle}
          </h2>
          <ol className="mt-5 space-y-5">
            {contact.next.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="font-display text-sm font-bold text-red">0{index + 1}</span>
                <span className="font-semibold text-navy">{step}</span>
              </li>
            ))}
          </ol>
        </aside>
      </Container>
    </Shell>
  );
}
