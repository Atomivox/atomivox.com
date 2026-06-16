import Link from "next/link";

type Variant = "primary" | "outline" | "dark" | "outline-bone";

const variants: Record<Variant, string> = {
  primary: "bg-pink text-bone hover:bg-plum",
  outline: "border-2 border-ink text-ink hover:bg-ink hover:text-bone",
  dark: "bg-ink text-bone hover:bg-pink",
  "outline-bone": "border-2 border-bone text-bone hover:bg-bone hover:text-plum",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center px-7 py-4 font-display text-base uppercase tracking-[0.15em] transition-colors duration-300 ${variants[variant]} ${className ?? ""}`}
    >
      <span>{children}</span>
      {/* fixed-width slot so the button never resizes; arrow slides in on hover */}
      <span className="relative ml-3 h-4 w-4 overflow-hidden">
        <svg
          viewBox="0 0 16 16"
          fill="none"
          className="absolute inset-0 h-4 w-4 -translate-x-6 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100"
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
