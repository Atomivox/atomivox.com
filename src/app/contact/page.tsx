import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Atomivox",
  description:
    "Start with a Brand Audit, or book a 30-minute discovery call. We respond within one business day.",
};

export default function ContactPage() {
  return (
    <section className="border-b border-hairline">
      <div className="mx-auto max-w-3xl px-6 py-20 lg:py-28">
        <span className="inline-flex items-center gap-3 font-display text-sm uppercase tracking-[0.3em] text-ink/50">
          <span className="h-2 w-2 bg-pink" />
          Contact
        </span>
        <h1 className="mt-6 font-display text-6xl uppercase leading-[0.85] tracking-[-0.01em] text-ink sm:text-7xl">
          Let&apos;s <span className="text-swirl">talk.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
          Not sure which product is right? Start with a Brand Audit. Want to talk
          first? Book a 30-minute discovery call. Here&apos;s how to reach us.
        </p>

        <form className="mt-12 grid gap-6">
          {[
            { label: "Name", name: "name", type: "text" },
            { label: "Company", name: "company", type: "text" },
          ].map((f) => (
            <div key={f.name} className="grid gap-2">
              <label className="font-display text-sm uppercase tracking-[0.2em] text-ink/60">
                {f.label}
              </label>
              <input
                type={f.type}
                name={f.name}
                className="border border-hairline bg-transparent px-4 py-3 text-ink outline-none transition-colors focus:border-pink"
              />
            </div>
          ))}
          <div className="grid gap-2">
            <label className="font-display text-sm uppercase tracking-[0.2em] text-ink/60">
              What are you working on?
            </label>
            <textarea
              name="message"
              rows={4}
              className="border border-hairline bg-transparent px-4 py-3 text-ink outline-none transition-colors focus:border-pink"
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
