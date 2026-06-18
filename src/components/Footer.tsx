import Link from "next/link";
import Image from "next/image";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "https://www.linkedin.com/in/kevmullins/", label: "LinkedIn", external: true },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-10">
          {/* left: bug + sticker + line */}
          <div>
            <Image
              src="/brand/bug-white.png"
              alt="Atomivox"
              width={429}
              height={425}
              className="h-48 w-48"
            />
            <p className="mt-10 max-w-sm font-display text-3xl uppercase leading-[0.95] tracking-wide">
              Brand position. <span className="text-pink">Clear message.</span>{" "}
              Story that scales.
            </p>
          </div>

          {/* right: navigate */}
          <div className="lg:pl-12">
            <span className="font-display text-sm uppercase tracking-[0.35em] text-bone/40">
              Navigate
            </span>
            <ul className="mt-6">
              {nav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group inline-flex items-center font-display text-5xl uppercase leading-[1.05] tracking-tight text-bone transition-colors hover:text-pink sm:text-6xl"
                  >
                    {item.label}
                    <span className="ml-3 inline-block -translate-x-3 text-3xl opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                      ↗
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-bone/15 pt-8 sm:flex-row sm:items-center">
          <span className="font-display text-2xl uppercase tracking-tight text-bone">
            © 2026 Atomivox
          </span>
          <div className="flex gap-8 font-display text-xs uppercase tracking-[0.25em] text-bone/50">
            <Link href="/privacy" className="hover:text-pink">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-pink">Site Credit</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
