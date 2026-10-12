import { copyFor, type ReviewStatus } from "@/lib/content";

function StatusMark({ status }: { status: ReviewStatus }) {
  if (status === "fail") {
    return <span className="h-1.5 w-1.5 rounded-full bg-red" aria-hidden="true" />;
  }
  if (status === "warning") {
    return (
      <span
        className="h-1.5 w-1.5 rounded-full ring-2 ring-red"
        aria-hidden="true"
      />
    );
  }
  return <span className="h-1.5 w-1.5 rounded-full bg-navy" aria-hidden="true" />;
}

export function VerdictCard() {
  const copy = copyFor();
  const art = copy.illustration;

  return (
    <figure className="rounded-3xl border border-line bg-white p-4 shadow-[0_18px_50px_rgba(28,35,64,0.06)] sm:p-5">
      <figcaption className="flex items-center justify-between gap-3">
        <span className="text-xs font-bold tracking-[0.14em] text-red uppercase">
          {art.label}
        </span>
        <span className="text-sm font-semibold text-navy">{art.invoice}</span>
      </figcaption>
      <ul className="mt-4 divide-y divide-line">
        {art.rows.map((row) => (
          <li key={row.label} className="flex items-center justify-between gap-3 py-2.5">
            <span className="min-w-0">
              <span className="block text-sm font-bold text-navy">{row.label}</span>
              <span className="block text-xs text-ink-soft">{row.note}</span>
            </span>
            <span
              className={`inline-flex shrink-0 items-center gap-2 text-xs font-bold ${
                row.status === "fail" ? "text-red" : "text-navy"
              }`}
            >
              <StatusMark status={row.status} />
              {copy.status[row.status]}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-ink-soft">{art.caption}</p>
    </figure>
  );
}
