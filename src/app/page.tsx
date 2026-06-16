import Link from "next/link";
import Image from "next/image";

const products = [
  {
    name: "Brand Audit™",
    body: "An honest outside view of your brand and website. What's working, what's undermining you, what to fix first.",
    meta: "From €950 · 5 to 7 days · Credited toward CORE Messaging within 60 days",
    href: "/services/brand-audit",
  },
  {
    name: "CORE Messaging™",
    body: "Our flagship. A guided series that extracts the story from your founding team's heads and builds it into something the whole business can use.",
    meta: "From €8,500 · 4 to 8 weeks",
    href: "/services/core-messaging",
  },
  {
    name: "Customer Clarity™",
    body: "You think you know why customers chose you. You're probably half right. Structured interviews turned into a clear report, in their words, not yours.",
    meta: "From €2,500 · 2 to 4 weeks",
    href: "/services/customer-clarity",
  },
  {
    name: "Brand Website™",
    body: "A website built on the brand position. Not instead of it.",
    meta: "From €12,000 · 2 to 3 months",
    href: "/services/brand-website",
  },
];

const steps = [
  {
    n: "01",
    title: "Uncover",
    body: "The right questions, asked in the right order. We find what makes you genuinely different and the parts you only think do.",
  },
  {
    n: "02",
    title: "Build",
    body: "Your market position. The message that makes people lean in. The story your whole team tells the same way. The document everything else is supposed to come from.",
  },
  {
    n: "03",
    title: "Apply",
    body: "The story becomes the website, the pitch, the sales deck, the new hire's onboarding. One clear message across every surface of the business.",
  },
];

const marqueeItems = [
  "Brand Strategy",
  "Storytelling",
  "Brand Architecture",
  "Copywriting",
  "Positioning",
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 font-display text-sm uppercase tracking-[0.35em] text-pink">
      <span className="h-px w-10 bg-pink" />
      {children}
    </span>
  );
}

function Marquee() {
  return (
    <div className="overflow-hidden border-y-2 border-ink/20 bg-pink py-4">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0 items-center" aria-hidden={group === 1}>
            {marqueeItems.map((item) => (
              <span key={item} className="flex items-center">
                <span className="px-8 font-display text-2xl uppercase tracking-[0.2em] text-ink">
                  {item}
                </span>
                <span className="text-plum">✺</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="relative overflow-hidden bg-dark-gradient">
        <div aria-hidden className="burst pointer-events-none absolute inset-0" />
        <Image
          src="/brand/bug-purple.png"
          alt=""
          aria-hidden
          width={722}
          height={718}
          className="pointer-events-none absolute -right-24 top-1/2 hidden w-[34rem] -translate-y-1/2 opacity-40 mix-blend-screen lg:block"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
          <Eyebrow>B2B Brand Studio · Ireland</Eyebrow>
          <h1 className="mt-8 max-w-4xl font-display text-5xl uppercase leading-[0.9] tracking-tight text-bone sm:text-7xl lg:text-[7.5rem]">
            You can&apos;t scale a story that only exists in your{" "}
            <span className="text-brand-gradient">head.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-bone/75 sm:text-2xl">
            We build the brand position, message, and story your marketing has
            been missing.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="border-2 border-pink bg-pink px-8 py-4 text-center font-display text-base uppercase tracking-[0.2em] text-bone transition-colors hover:bg-transparent hover:text-pink"
            >
              Book a Brand Audit
            </Link>
            <Link
              href="/contact"
              className="border-2 border-bone/25 px-8 py-4 text-center font-display text-base uppercase tracking-[0.2em] text-bone/90 transition-colors hover:border-bone hover:text-bone"
            >
              Book a discovery call
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────── MARQUEE ─────────────────────── */}
      <Marquee />

      {/* ─────────────────────── THE PROBLEM ─────────────────────── */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Eyebrow>The problem</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-4xl uppercase leading-[0.95] text-bone sm:text-6xl">
            The playbook is broken. It was never your fault.
          </h2>
          <div className="mt-10 grid max-w-4xl gap-6 text-lg leading-relaxed text-bone/75">
            <p>Website. Agency. Ads. Fractional CMO.</p>
            <p>
              You followed the playbook. The needle didn&apos;t move. Or it moved
              just enough to justify the next invoice.
            </p>
            <p>
              Welcome to the marketing casino. The chips are your budget. The
              house is the industry.{" "}
              <span className="text-gold">And the house always wins.</span>
            </p>
            <p>
              Here&apos;s what nobody said: marketing only works when the
              groundwork is already there. A position the market understands. A
              message that travels without you in the room.
            </p>
            <p>Without it, every tactic you buy is noise with a budget behind it.</p>
            <p>
              The industry knows this. It sells the tactics anyway. Because once
              a business has a clear story and a sharp position, it stops needing
              an agency.
            </p>
            <p className="font-display text-2xl uppercase tracking-wide text-bone">
              So the agency never builds you one.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────────── THE REAL PROBLEM ───────────────────── */}
      <section className="bg-plum/40">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Eyebrow>The real problem</Eyebrow>
          <h2 className="mt-6 max-w-4xl font-display text-4xl uppercase leading-[0.95] text-bone sm:text-6xl">
            Your team knows the business at a ten. Your buyer arrives at a{" "}
            <span className="text-pink">one.</span>
          </h2>
          <div className="mt-10 grid max-w-4xl gap-6 text-lg leading-relaxed text-bone/75">
            <p>
              Every attempt to close that gap from the inside comes out sounding
              like it was written for people who already get it.
            </p>
            <p>Because it was.</p>
            <p>
              The people who know your business best are the least equipped to
              explain it simply. Prospects shrug. Marketing produces activity,
              not pipeline. The founder ends up doing most of the selling.
            </p>
            <p className="font-display text-2xl uppercase tracking-wide text-bone">
              Founders who built something great should not lose to competitors
              with weaker products and better marketing.
            </p>
            <p>
              The industry should be helping close that gap. Instead, it&apos;s
              profiting from it.
            </p>
          </div>
        </div>
      </section>

      {/* ──────────────────────── THE GUIDE ──────────────────────── */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Eyebrow>The guide</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-4xl uppercase leading-[0.95] text-bone sm:text-6xl">
            We&apos;ve been on both sides of this brief.
          </h2>
          <div className="mt-10 grid max-w-4xl gap-6 text-lg leading-relaxed text-bone/75">
            <p>
              We&apos;ve watched founders sign off on their third €25k website
              rebuild and say &ldquo;hopefully this one does the trick.&rdquo;
            </p>
            <p>We know every step of the sequence that got them there.</p>
            <p>
              Atomivox was built by someone who spent a decade inside that
              industry. We&apos;ve worked ourselves out of engagements because
              the brand we built was so tight the client didn&apos;t need us
              anymore.
            </p>
            <p className="font-display text-2xl uppercase tracking-wide text-bone">
              That&apos;s the outcome we&apos;re built to deliver.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────── WHAT WE DO ─────────────────────── */}
      <section id="services" className="bg-dark-gradient">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-4xl uppercase leading-[0.95] text-bone sm:text-6xl">
            We do one thing. We do it properly.
          </h2>
          <div className="mt-10 grid max-w-4xl gap-6 text-lg leading-relaxed text-bone/75">
            <p>
              Your position in the market. The message that travels without you.
              The story your whole team tells the same way.
            </p>
            <p>
              Not campaigns. Not SEO. Not a rebrand for the sake of a fresh coat
              of paint.
            </p>
            <p className="font-display text-2xl uppercase tracking-wide text-bone">
              The groundwork. Built once. Built right. Used by everyone.
            </p>
          </div>

          <div className="mt-16 grid border border-bone/15 sm:grid-cols-2">
            {products.map((p, i) => (
              <Link
                key={p.name}
                href={p.href}
                className={`group flex flex-col p-8 transition-colors hover:bg-pink lg:p-10 ${
                  i % 2 === 0 ? "sm:border-r" : ""
                } ${i < 2 ? "border-b" : ""} border-bone/15`}
              >
                <h3 className="font-display text-3xl uppercase tracking-wide text-bone group-hover:text-ink">
                  {p.name}
                </h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-bone/70 group-hover:text-ink/80">
                  {p.body}
                </p>
                <p className="mt-6 text-sm italic text-gold/90 group-hover:text-ink/70">
                  {p.meta}
                </p>
                <span className="mt-4 font-display text-sm uppercase tracking-[0.2em] text-pink transition-transform group-hover:translate-x-1 group-hover:text-ink">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────── HOW IT WORKS ─────────────────────── */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-6 font-display text-4xl uppercase leading-[0.95] text-bone sm:text-6xl">
            The CORE Messaging Process
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bone/75">
            Three steps. No homework you&apos;ll never finish. No decks that live
            in Dropbox.
          </p>

          <div className="mt-14 border-b border-bone/15">
            {steps.map((s) => (
              <div
                key={s.n}
                className="grid items-baseline gap-4 border-t border-bone/15 py-8 transition-colors hover:bg-bone/[0.03] md:grid-cols-[8rem_14rem_1fr] md:gap-8"
              >
                <span className="font-display text-6xl leading-none text-pink">
                  {s.n}
                </span>
                <h3 className="font-display text-3xl uppercase tracking-wide text-bone">
                  {s.title}
                </h3>
                <p className="max-w-2xl text-base leading-relaxed text-bone/70">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────── SOCIAL PROOF ─────────────────────── */}
      <section className="bg-plum/40">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10 lg:py-32">
          <Eyebrow>What changes when the story is clear</Eyebrow>
          <p className="mx-auto mt-8 max-w-3xl font-display text-3xl uppercase leading-tight text-bone sm:text-4xl">
            We&apos;re in early engagements. Case studies coming. In the meantime,
            book a Brand Audit.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-bone/65">
            Five days. Less than your last homepage rewrite. You&apos;ll know
            exactly what&apos;s broken and what to fix first. Proceed to CORE
            Messaging within sixty days and the fee is credited in full.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-block border-2 border-pink bg-pink px-8 py-4 font-display text-base uppercase tracking-[0.2em] text-bone transition-colors hover:bg-transparent hover:text-pink"
          >
            Book a Brand Audit
          </Link>
        </div>
      </section>

      {/* ─────────────────────── WHO IT'S FOR ─────────────────────── */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Eyebrow>Who it&apos;s for</Eyebrow>
          <h2 className="mt-6 font-display text-4xl uppercase leading-[0.95] text-bone sm:text-6xl">
            This is for you if.
          </h2>

          <div className="mt-14 grid gap-px border border-bone/15 md:grid-cols-2">
            <div className="bg-pink/[0.06] p-8 lg:p-10">
              <h3 className="font-display text-2xl uppercase tracking-wide text-pink">
                Right fit
              </h3>
              <ul className="mt-6 space-y-4 text-lg leading-relaxed text-bone/80">
                <li>You sell brilliantly in person and can&apos;t scale the conversation</li>
                <li>Your team describes the business differently every time</li>
                <li>You&apos;ve been playing in the marketing casino and you&apos;re done</li>
                <li>You want the groundwork done properly, probably for the first time</li>
              </ul>
            </div>
            <div className="bg-bone/[0.02] p-8 lg:p-10">
              <h3 className="font-display text-2xl uppercase tracking-wide text-bone/50">
                Wrong fit
              </h3>
              <ul className="mt-6 space-y-4 text-lg leading-relaxed text-bone/55">
                <li>You want someone to run your marketing ongoing</li>
                <li>You think the website is the problem</li>
                <li>You want validation, not truth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── STAKES ───────────────────────── */}
      <section className="bg-dark-gradient">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Eyebrow>The stakes</Eyebrow>
          <h2 className="mt-6 max-w-4xl font-display text-4xl uppercase leading-[0.95] text-bone sm:text-6xl">
            Every month without the groundwork is another month in the marketing
            casino.
          </h2>
          <div className="mt-10 grid max-w-4xl gap-6 text-lg leading-relaxed text-bone/75">
            <p>
              Another spin. Another agency invoice. Another campaign that produces
              impressions and no revenue. Another good hire who can&apos;t perform
              because there&apos;s no story to work from.
            </p>
            <p>
              The gap between what your business is worth and what the market
              thinks it&apos;s worth keeps widening.
            </p>
            <p className="font-display text-2xl uppercase tracking-wide text-bone">
              It&apos;s not a slow emergency. It&apos;s just expensive. And it
              compounds.
            </p>
          </div>
        </div>
      </section>

      {/* ──────────────────────── FINAL CTA ──────────────────────── */}
      <section className="relative overflow-hidden bg-brand-gradient">
        <Image
          src="/brand/bug-white.png"
          alt=""
          aria-hidden
          width={429}
          height={425}
          className="pointer-events-none absolute -bottom-16 -left-16 w-72 opacity-10"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-28 text-center lg:px-10 lg:py-40">
          <h2 className="mx-auto max-w-3xl font-display text-5xl uppercase leading-[0.9] text-bone sm:text-7xl">
            Start with the Brand Audit.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-bone/90">
            Five to seven days. An honest outside view of where you actually
            stand. From €950. Credited toward CORE Messaging within sixty days.
          </p>
          <p className="mt-4 font-display text-lg uppercase tracking-[0.2em] text-bone/80">
            No retainer. No ongoing commitment. Just clarity.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="border-2 border-ink bg-ink px-8 py-4 font-display text-base uppercase tracking-[0.2em] text-bone transition-colors hover:bg-transparent hover:text-ink"
            >
              Book Your Brand Audit
            </Link>
            <Link
              href="/contact"
              className="border-2 border-bone/40 px-8 py-4 font-display text-base uppercase tracking-[0.2em] text-bone transition-colors hover:bg-bone hover:text-plum"
            >
              Book a 30-minute discovery call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
