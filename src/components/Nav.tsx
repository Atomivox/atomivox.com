"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-bone/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center" aria-label="Atomivox home">
          <Image
            src="/brand/logo-color.png"
            alt="Atomivox"
            width={132}
            height={38}
            priority
            className="h-8 w-auto"
          />
        </Link>

        {/* desktop */}
        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-lg uppercase tracking-[0.15em] text-ink transition-colors hover:text-pink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-pink px-5 py-2.5 font-display text-sm uppercase tracking-[0.15em] text-bone transition-colors hover:bg-ink"
          >
            Book a Brand Audit
          </Link>
        </div>

        {/* mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-ink transition-all ${open ? "top-1/2 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-0.5 w-6 bg-ink transition-all ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-ink transition-all ${open ? "top-1/2 -rotate-45" : "bottom-0"}`}
            />
          </span>
        </button>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="border-t border-hairline bg-bone px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl uppercase tracking-[0.12em] text-ink hover:text-pink"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block bg-pink px-5 py-3 text-center font-display text-base uppercase tracking-[0.15em] text-bone"
            >
              Book a Brand Audit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
