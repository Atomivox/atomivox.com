import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Atomivox",
  description:
    "Atomivox was built by someone who spent a decade inside the marketing industry — and decided to build the thing it refuses to.",
};

export default function AboutPage() {
  return (
    <section className="bg-dark-gradient">
      <div className="mx-auto max-w-3xl px-6 py-28 lg:py-36">
        <span className="font-display text-sm uppercase tracking-[0.3em] text-pink">
          About
        </span>
        <h1 className="mt-6 font-display text-5xl uppercase leading-[0.95] text-bone sm:text-6xl">
          Built by someone who spent a decade inside the industry.
        </h1>
        <div className="mt-10 grid gap-6 text-lg leading-relaxed text-bone/75">
          <p>
            The marketing industry profits from the gap between what your
            business is worth and what the market thinks it&apos;s worth. Atomivox
            exists to close it.
          </p>
          <p>
            We&apos;ve worked ourselves out of engagements because the brand we
            built was so tight the client didn&apos;t need us anymore. No
            retainers. No ongoing dependency. Productised, scoped, time-bound. You
            own everything.
          </p>
          <p className="text-bone/50">The full story is coming together here soon.</p>
        </div>
        <Link
          href="/contact"
          className="mt-10 inline-block rounded-full bg-pink px-8 py-4 font-display text-base uppercase tracking-widest text-bone transition-transform hover:scale-[1.03]"
        >
          Book a Brand Audit
        </Link>
      </div>
    </section>
  );
}
