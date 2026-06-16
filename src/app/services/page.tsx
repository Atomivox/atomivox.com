import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Atomivox",
  description:
    "We do one thing: build the brand foundation. Brand Audit, CORE Messaging, Customer Clarity, and Brand Website.",
};

const journey = ["Brand Audit", "CORE Messaging", "Customer Clarity", "Brand Website"];

export default function ServicesPage() {
  return (
    <section className="bg-dark-gradient">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <span className="font-display text-sm uppercase tracking-[0.3em] text-pink">
          Services
        </span>
        <h1 className="mt-6 max-w-3xl font-display text-5xl uppercase leading-[0.95] text-bone sm:text-7xl">
          We do one thing. We build the brand foundation.
        </h1>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-bone/75">
          A natural journey, not a menu. Most founders start with a Brand Audit
          and move through as the work earns the next step.
        </p>

        <div className="mt-14 flex flex-wrap items-center gap-3">
          {journey.map((step, i) => (
            <span key={step} className="flex items-center gap-3">
              <span className="font-display text-lg uppercase tracking-widest text-bone">
                {step}
              </span>
              {i < journey.length - 1 && <span className="text-pink">→</span>}
            </span>
          ))}
        </div>

        <p className="mt-16 text-bone/50">
          Full service pages are coming together. In the meantime, the fastest
          way in is a Brand Audit.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-pink px-8 py-4 font-display text-base uppercase tracking-widest text-bone transition-transform hover:scale-[1.03]"
        >
          Book a Brand Audit
        </Link>
      </div>
    </section>
  );
}
