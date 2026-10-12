type IconProps = { className?: string };

function base(className?: string) {
  return className ?? "h-6 w-6";
}

export function IconServer({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={base(className)} aria-hidden="true" fill="none">
      <rect x="3" y="4" width="18" height="6" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <rect x="3" y="14" width="18" height="6" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7 7h.01M7 17h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function IconFile({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={base(className)} aria-hidden="true" fill="none">
      <path d="M7 3.5h7l5 5V20a1.5 1.5 0 0 1-1.5 1.5h-10.5A1.5 1.5 0 0 1 5.5 20V5A1.5 1.5 0 0 1 7 3.5Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M14 3.5V9h5.5M8 13h8M8 17h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconShield({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={base(className)} aria-hidden="true" fill="none">
      <path d="M12 3 5 6v6.2c0 4.2 2.8 7.2 7 8.8 4.2-1.6 7-4.6 7-8.8V6l-7-3Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="m8.5 12 2.4 2.4 4.6-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconChart({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={base(className)} aria-hidden="true" fill="none">
      <path d="M4 19h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7 16V10M12 16V6M17 16v-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconUsers({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={base(className)} aria-hidden="true" fill="none">
      <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4.5 19c.6-2.4 2.4-3.8 4.5-3.8s3.9 1.4 4.5 3.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="16.5" cy="9.5" r="2.2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 15.2c1.6.2 2.9 1.1 3.6 2.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconBuilding({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={base(className)} aria-hidden="true" fill="none">
      <path d="M4 20h16M6 20V6.5A1.5 1.5 0 0 1 7.5 5h5A1.5 1.5 0 0 1 14 6.5V20M14 10h3.5A1.5 1.5 0 0 1 19 11.5V20" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8.5 8.5h2M8.5 12h2M8.5 15.5h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconStamp({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={base(className)} aria-hidden="true" fill="none">
      <rect x="4" y="14" width="16" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 14V9.5A4 4 0 0 1 12 5.5 4 4 0 0 1 16 9.5V14" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
