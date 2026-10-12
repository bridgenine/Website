import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 ${className}`}>{children}</div>
  );
}

const buttonStyles = {
  red: "bg-red text-white hover:bg-red-deep",
  ghost: "bg-white text-navy ring-1 ring-navy/15 hover:ring-red",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "red",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof buttonStyles;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-center text-sm font-bold tracking-tight transition-colors ${buttonStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-xs font-bold tracking-[0.16em] text-navy uppercase">
      <span className="h-0.5 w-6 bg-red" aria-hidden="true" />
      {children}
    </p>
  );
}

export function PageIntro({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="bg-white">
      <Container className="pt-14 pb-6 md:pt-20">
        <Kicker>{kicker}</Kicker>
        <h1 className="display mt-5 max-w-4xl text-balance text-navy">{title}</h1>
        {lede ? (
          <p className="mt-5 max-w-xl text-lg text-pretty text-ink-soft">{lede}</p>
        ) : null}
      </Container>
    </header>
  );
}
