import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Atomivox",
  description:
    "Start with a Brand Audit, or book a 30-minute discovery call. We respond within one business day.",
};

export default function ContactPage() {
  return (
    <section className="border-b-2 border-ink">
      <div className="mx-auto max-w-3xl px-6 py-24 lg:py-32">
        <span className="inline-flex items-center gap-3 font-display text-sm uppercase tracking-[0.35em] text-pink">
          <span className="h-px w-8 bg-pink" />
          Contact
        </span>
        <h1 className="mt-6 font-display text-5xl uppercase leading-[0.9] text-ink sm:text-7xl">
          Let&apos;s <span className="text-swirl">talk.</span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink/75">
          Not sure which product is right? Start with a Brand Audit. Want to talk
          first? Book a 30-minute discovery call. Here&apos;s how to reach us.
        </p>

        <form className="mt-12 grid gap-6">
          <div className="grid gap-2">
            <label className="font-display text-sm uppercase tracking-[0.2em] text-ink/60">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="border-2 border-ink bg-bone px-4 py-3 text-ink outline-none focus:border-pink"
            />
          </div>
          <div className="grid gap-2">
            <label className="font-display text-sm uppercase tracking-[0.2em] text-ink/60">
              Company
            </label>
            <input
              type="text"
              name="company"
              className="border-2 border-ink bg-bone px-4 py-3 text-ink outline-none focus:border-pink"
            />
          </div>
          <div className="grid gap-2">
            <label className="font-display text-sm uppercase tracking-[0.2em] text-ink/60">
              What are you working on?
            </label>
            <textarea
              name="message"
              rows={4}
              className="border-2 border-ink bg-bone px-4 py-3 text-ink outline-none focus:border-pink"
            />
          </div>
          <button
            type="submit"
            className="justify-self-start bg-pink px-7 py-4 font-display text-base uppercase tracking-[0.15em] text-bone transition-colors hover:bg-ink"
          >
            Send
          </button>
        </form>

        <p className="mt-8 font-display text-sm uppercase tracking-[0.2em] text-ink/40">
          We respond within one business day.
        </p>
      </div>
    </section>
  );
}
