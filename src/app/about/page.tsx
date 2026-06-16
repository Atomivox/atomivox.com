import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About — Atomivox",
  description:
    "Atomivox was built by someone who spent a decade inside the marketing industry — and decided to build the thing it refuses to.",
};

export default function AboutPage() {
  return (
    <section className="border-b-2 border-ink">
      <div className="mx-auto max-w-3xl px-6 py-24 lg:py-32">
        <span className="inline-flex items-center gap-3 font-display text-sm uppercase tracking-[0.35em] text-pink">
          <span className="h-px w-8 bg-pink" />
          About
        </span>
        <h1 className="mt-6 font-display text-5xl uppercase leading-[0.9] text-ink sm:text-6xl">
          Built by someone who spent a decade{" "}
          <span className="text-swirl">inside the industry.</span>
        </h1>
        <div className="mt-10 grid gap-6 text-lg leading-relaxed text-ink/75">
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
          <p className="text-ink/50">The full story is coming together here soon.</p>
        </div>
        <div className="mt-10">
          <Button href="/contact" variant="primary">
            Book a Brand Audit
          </Button>
        </div>
      </div>
    </section>
  );
}
