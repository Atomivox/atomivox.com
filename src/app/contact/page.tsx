import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Atomivox",
  description:
    "Start with a Brand Audit, or book a 30-minute discovery call. We respond within one business day.",
};

export default function ContactPage() {
  return (
    <section className="bg-dark-gradient">
      <div className="mx-auto max-w-3xl px-6 py-28 lg:py-36">
        <span className="font-display text-sm uppercase tracking-[0.3em] text-pink">
          Contact
        </span>
        <h1 className="mt-6 font-display text-5xl uppercase leading-[0.95] text-bone sm:text-6xl">
          Let&apos;s talk.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-bone/75">
          Not sure which product is right? Start with a Brand Audit. Want to talk
          first? Book a 30-minute discovery call. Here&apos;s how to reach us.
        </p>

        <form className="mt-12 grid gap-6">
          <div className="grid gap-2">
            <label className="text-sm uppercase tracking-widest text-bone/60">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="rounded-xl border border-bone/15 bg-bone/[0.04] px-4 py-3 text-bone outline-none focus:border-pink"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm uppercase tracking-widest text-bone/60">
              Company
            </label>
            <input
              type="text"
              name="company"
              className="rounded-xl border border-bone/15 bg-bone/[0.04] px-4 py-3 text-bone outline-none focus:border-pink"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm uppercase tracking-widest text-bone/60">
              What are you working on?
            </label>
            <textarea
              name="message"
              rows={4}
              className="rounded-xl border border-bone/15 bg-bone/[0.04] px-4 py-3 text-bone outline-none focus:border-pink"
            />
          </div>
          <button
            type="submit"
            className="justify-self-start rounded-full bg-pink px-8 py-4 font-display text-base uppercase tracking-widest text-bone transition-transform hover:scale-[1.03]"
          >
            Send
          </button>
        </form>

        <p className="mt-8 text-sm uppercase tracking-widest text-bone/40">
          We respond within one business day.
        </p>
      </div>
    </section>
  );
}
