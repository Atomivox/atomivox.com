import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work — Atomivox",
  description: "Real client outcomes, in before and after. Case studies coming soon.",
};

export default function WorkPage() {
  return (
    <section className="bg-dark-gradient">
      <div className="mx-auto max-w-3xl px-6 py-28 lg:py-36 text-center">
        <span className="font-display text-sm uppercase tracking-[0.3em] text-pink">
          Work
        </span>
        <h1 className="mt-6 font-display text-5xl uppercase leading-[0.95] text-bone sm:text-6xl">
          The proof is being written.
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-bone/75">
          We&apos;re in early client engagements. Case studies coming soon. In the
          meantime, book a Brand Audit and experience the process yourself.
        </p>
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
