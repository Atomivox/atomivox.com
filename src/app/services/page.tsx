import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Services — Atomivox",
  description:
    "We do one thing: build the brand foundation. Brand Audit, CORE Messaging, Customer Clarity, and Brand Website.",
};

const journey = ["Brand Audit", "CORE Messaging", "Customer Clarity", "Brand Website"];

export default function ServicesPage() {
  return (
    <section className="border-b-2 border-ink">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <span className="inline-flex items-center gap-3 font-display text-sm uppercase tracking-[0.35em] text-pink">
          <span className="h-px w-8 bg-pink" />
          Services
        </span>
        <h1 className="mt-6 max-w-3xl font-display text-5xl uppercase leading-[0.9] text-ink sm:text-7xl">
          We do one thing. We build the brand{" "}
          <span className="text-swirl">foundation.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink/75">
          A natural journey, not a menu. Most founders start with a Brand Audit
          and move through as the work earns the next step.
        </p>

        <div className="mt-14 flex flex-wrap items-center gap-3">
          {journey.map((step, i) => (
            <span key={step} className="flex items-center gap-3">
              <span className="font-display text-lg uppercase tracking-widest text-ink">
                {step}
              </span>
              {i < journey.length - 1 && <span className="text-pink">→</span>}
            </span>
          ))}
        </div>

        <p className="mt-16 text-ink/50">
          Full service pages are coming together. In the meantime, the fastest
          way in is a Brand Audit.
        </p>
        <div className="mt-8">
          <Button href="/contact" variant="primary">
            Book a Brand Audit
          </Button>
        </div>
      </div>
    </section>
  );
}
