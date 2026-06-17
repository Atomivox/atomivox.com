import Link from "next/link";

type Props = {
  name: string;
  body: string;
  meta: string;
  href: string;
  index: string;
  kicker: string;
  accent?: boolean;
  className?: string;
};

export default function ProductCard({
  name,
  body,
  meta,
  href,
  index,
  kicker,
  accent = false,
  className,
}: Props) {
  const theme = accent
    ? "bg-pink text-bone"
    : "bg-bone text-ink hover:bg-ink hover:text-bone";
  const muted = accent ? "text-bone/80" : "text-ink/55 group-hover:text-bone/70";
  const bodyText = accent
    ? "text-bone/90"
    : "text-ink/70 group-hover:text-bone/80";

  return (
    <Link
      href={href}
      className={`group flex min-h-[20rem] flex-col rounded-[5px] p-8 transition-colors duration-300 lg:p-10 ${theme} ${className ?? ""}`}
    >
      <div className={`flex items-center justify-between font-display text-xs uppercase tracking-[0.25em] ${muted}`}>
        <span>{kicker}</span>
        <span>AVX</span>
      </div>

      <h3 className="mt-8 font-display text-4xl uppercase tracking-wide">{name}</h3>
      <div className="mt-4 h-px w-12 bg-current opacity-30" />
      <p className={`mt-5 flex-1 leading-relaxed ${bodyText}`}>{body}</p>
      <p className={`mt-5 text-sm italic ${muted}`}>{meta}</p>

      <div className="mt-8 flex items-center justify-between font-display uppercase tracking-[0.2em]">
        <span className="text-4xl leading-none">{index}</span>
        <span className="inline-flex items-center text-sm">
          Learn more
          <svg viewBox="0 0 16 16" fill="none" className="ml-2 h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
