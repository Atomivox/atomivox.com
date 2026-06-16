import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-bone/10 bg-[#120011]/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center" aria-label="Atomivox home">
          <Image
            src="/brand/logo-white.png"
            alt="Atomivox"
            width={127}
            height={36}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-base uppercase tracking-[0.2em] text-bone/70 transition-colors hover:text-pink"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="border-2 border-pink bg-pink px-5 py-2.5 font-display text-sm uppercase tracking-[0.2em] text-bone transition-colors hover:bg-transparent hover:text-pink"
        >
          Book a Brand Audit
        </Link>
      </nav>
    </header>
  );
}
