import Link from "next/link";

export default function ProductCard({
  name,
  body,
  meta,
  href,
  className,
}: {
  name: string;
  body: string;
  meta: string;
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group flex flex-col bg-bone p-8 transition-colors duration-300 hover:bg-ink lg:p-10 ${className ?? ""}`}
    >
      <h3 className="font-display text-3xl uppercase tracking-wide text-ink transition-colors group-hover:text-bone">
        {name}
      </h3>
      <p className="mt-4 flex-1 leading-relaxed text-ink/70 transition-colors group-hover:text-bone/80">
        {body}
      </p>
      <p className="mt-6 text-sm italic text-ink/50 transition-colors group-hover:text-pink">
        {meta}
      </p>
      <span className="mt-6 inline-flex items-center font-display text-sm uppercase tracking-[0.15em] text-pink">
        Learn more
        <svg
          viewBox="0 0 16 16"
          fill="none"
          className="ml-2 h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
        >
          <path
            d="M1 8h13M9 3l5 5-5 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}
