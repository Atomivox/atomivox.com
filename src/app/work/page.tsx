import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Work — Atomivox",
  description: "Real client outcomes, in before and after. Case studies coming soon.",
};

export default function WorkPage() {
  return (
    <section className="border-b-2 border-ink">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-32">
        <span className="inline-flex items-center gap-3 font-display text-sm uppercase tracking-[0.35em] text-pink">
          <span className="h-px w-8 bg-pink" />
          Work
        </span>
        <h1 className="mt-6 font-display text-5xl uppercase leading-[0.9] text-ink sm:text-6xl">
          The proof is being <span className="text-swirl">written.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-ink/75">
          We&apos;re in early client engagements. Case studies coming soon. In the
          meantime, book a Brand Audit and experience the process yourself.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href="/contact" variant="primary">
            Book a Brand Audit
          </Button>
        </div>
      </div>
    </section>
  );
}
