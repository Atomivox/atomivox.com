"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import InkCanvas from "./InkCanvas";
import { MarkerCircle, MarkerUnderline } from "./Marker";
import { Star } from "./Marks";
import { registerGsap, gsap, prefersReducedMotion } from "@/lib/gsap";

export default function Hero() {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const root = scope.current;
    if (!root) return;

    const eyebrow = root.querySelector("[data-eyebrow]");
    const l1 = root.querySelector("[data-l1]");
    const l2 = root.querySelector("[data-l2]");
    const loud = root.querySelector("[data-loud]");
    const tail = root.querySelectorAll("[data-tail]");
    const items = [eyebrow, l1, l2, ...Array.from(tail)].filter(Boolean);

    if (prefersReducedMotion()) {
      gsap.set([...items, loud], { opacity: 1, y: 0, scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(items, { opacity: 0, y: 34 });
      gsap.set(loud, { opacity: 0, scale: 1.28, transformOrigin: "left center" });

      const tl = gsap.timeline({ delay: 0.45 });
      tl.to(eyebrow, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
        .to(l1, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.3")
        .to(l2, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.5")
        .to(loud, { opacity: 1, scale: 1, duration: 1.0, ease: "power4.out" }, "-=0.25")
        .to(Array.from(tail), { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.12 }, "-=0.5");
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden">
      <InkCanvas className="absolute inset-0 -z-10 h-full w-full" />

      {/* punk stamp */}
      <div className="pointer-events-none absolute right-6 top-28 hidden rotate-6 lg:block">
        <span className="border border-pink/50 px-3 py-1 font-display text-[11px] uppercase tracking-[0.3em] text-pink/80">
          Controlled menace · Est. 2026
        </span>
      </div>

      <div ref={scope} className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
        <p data-eyebrow className="inline-flex items-center gap-3 font-display text-sm uppercase tracking-[0.32em] text-ink/60">
          <Star className="h-4 w-4 text-pink" />
          Brand studio for B2B founders
        </p>

        <h1 className="mt-7 font-display uppercase leading-[0.78] tracking-[-0.01em] text-ink">
          <span data-l1 className="block text-6xl sm:text-8xl lg:text-[7.5rem]">Get clear.</span>
          <span data-l2 className="block text-6xl sm:text-8xl lg:text-[7.5rem]">Then get</span>
          <span data-loud className="-ml-1 block">
            <MarkerCircle playOnLoad>
              <span className="block text-[6rem] leading-[0.72] sm:text-[12rem] lg:text-[17rem]">loud.</span>
            </MarkerCircle>
          </span>
        </h1>

        <div className="mt-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <p data-tail className="max-w-md text-xl leading-relaxed text-ink/80 sm:text-2xl">
            I build the position, message, and story your marketing&apos;s been{" "}
            <MarkerUnderline>missing.</MarkerUnderline>
          </p>

          <div data-tail className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-[5px] bg-ink px-7 py-4 font-display text-base uppercase tracking-[0.12em] text-bone transition-colors hover:bg-pink"
            >
              Book a Brand Audit
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-pink" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-[5px] border-2 border-ink px-7 py-4 font-display text-base uppercase tracking-[0.12em] text-ink transition-colors hover:bg-ink hover:text-bone"
            >
              Book a discovery call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
