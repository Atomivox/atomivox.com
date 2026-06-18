"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Clock from "./Clock";
import { Scribble } from "./Marks";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-bone/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Atomivox home">
          <Image src="/brand/logo-color.png" alt="Atomivox" width={132} height={38} priority className="h-8 w-auto" />
        </Link>

        {/* desktop links */}
        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="group relative font-display text-lg uppercase tracking-[0.12em] text-ink transition-colors hover:text-pink">
              {l.label}
              <Scribble className="pointer-events-none absolute -bottom-2 left-0 h-2 w-full text-pink opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            </Link>
          ))}
        </div>

        {/* right cluster */}
        <div className="flex items-center gap-6">
          <Clock city="Ireland" tz="Europe/Dublin" gmt="+1" className="hidden lg:block" />
          <Clock city="New York" tz="America/New_York" gmt="-4" className="hidden lg:block" />
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-[5px] bg-ink px-5 py-2.5 font-display text-sm uppercase tracking-[0.12em] text-bone transition-colors hover:bg-pink sm:inline-flex"
          >
            Book a Brand Audit
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-pink" />
          </Link>

          {/* mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span className="relative block h-4 w-6">
              <span className={`absolute left-0 block h-0.5 w-6 bg-ink transition-all ${open ? "top-1/2 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1/2 block h-0.5 w-6 bg-ink transition-all ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 block h-0.5 w-6 bg-ink transition-all ${open ? "top-1/2 -rotate-45" : "bottom-0"}`} />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink/10 bg-bone px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-display text-2xl uppercase tracking-[0.1em] text-ink hover:text-pink">
                {l.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 inline-flex w-fit items-center gap-2 rounded-[5px] bg-ink px-5 py-3 font-display text-base uppercase tracking-[0.12em] text-bone">
              Book a Brand Audit
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-pink" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
