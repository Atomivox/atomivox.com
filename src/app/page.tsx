import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import ImpactObject from "@/components/ImpactObject";
import Button from "@/components/Button";

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

function Label({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-3 font-display text-sm uppercase tracking-[0.35em] text-pink">
      <span className="text-ink/30">{index}</span>
      <span className="h-px w-8 bg-pink" />
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* ─────────────────────── THE PROBLEM ─────────────────────── */}
      <section className="relative overflow-hidden border-b-2 border-ink">
        <ImpactObject label="Grand Piano on a Rope" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal className="max-w-2xl">
            <Label index="01">The problem</Label>
            <h2 className="mt-6 font-display text-4xl uppercase leading-[0.95] text-ink sm:text-6xl">
              The playbook is <span className="text-swirl">broken.</span> It was
              never your fault.
            </h2>
            <div className="mt-8 grid gap-6 text-lg leading-relaxed text-ink/75">
              <p>Website. Agency. Ads. Fractional CMO.</p>
              <p>
                You followed the playbook. The needle didn&apos;t move. Or it
                moved just enough to justify the next invoice.
              </p>
              <p>
                Welcome to the marketing casino. The chips are your budget. The
                house is the industry.{" "}
                <span className="font-semibold text-pink">
                  And the house always wins.
                </span>
              </p>
              <p>
                Here&apos;s what nobody said: marketing only works when the
                groundwork is already there. A position the market understands. A
                message that travels without you in the room.
              </p>
              <p className="font-display text-2xl uppercase tracking-wide text-ink">
                So the agency never builds you one.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────── THE REAL PROBLEM ───────────────────── */}
      <section className="border-b-2 border-ink">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal className="max-w-4xl">
            <Label index="02">The real problem</Label>
            <h2 className="mt-6 font-display text-4xl uppercase leading-[0.95] text-ink sm:text-6xl">
              Your team knows the business at a ten. Your buyer arrives at a{" "}
              <span className="text-swirl">one.</span>
            </h2>
            <div className="mt-8 grid max-w-3xl gap-6 text-lg leading-relaxed text-ink/75">
              <p>
                Every attempt to close that gap from the inside comes out
                sounding like it was written for people who already get it.
                Because it was.
              </p>
              <p>
                The people who know your business best are the least equipped to
                explain it simply. Prospects shrug. Marketing produces activity,
                not pipeline. The founder ends up doing most of the selling.
              </p>
              <p className="font-display text-2xl uppercase tracking-wide text-ink">
                Founders who built something great should not lose to competitors
                with weaker products and better marketing.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ──────────────────────── THE GUIDE ──────────────────────── */}
      <section className="relative overflow-hidden border-b-2 border-ink">
        <ImpactObject label="Boxing Gloves" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal className="max-w-2xl">
            <Label index="03">The guide</Label>
            <h2 className="mt-6 font-display text-4xl uppercase leading-[0.95] text-ink sm:text-6xl">
              We&apos;ve been on <span className="text-swirl">both sides</span> of
              this brief.
            </h2>
            <div className="mt-8 grid gap-6 text-lg leading-relaxed text-ink/75">
              <p>
                We&apos;ve watched founders sign off on their third €25k website
                rebuild and say &ldquo;hopefully this one does the trick.&rdquo;
                We know every step of the sequence that got them there.
              </p>
              <p>
                Atomivox was built by someone who spent a decade inside that
                industry. We&apos;ve worked ourselves out of engagements because
                the brand we built was so tight the client didn&apos;t need us
                anymore.
              </p>
              <p className="font-display text-2xl uppercase tracking-wide text-ink">
                That&apos;s the outcome we&apos;re built to deliver.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────── WHAT WE DO ─────────────────────── */}
      <section id="services" className="border-b-2 border-ink">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal className="max-w-3xl">
            <Label index="04">What we do</Label>
            <h2 className="mt-6 font-display text-4xl uppercase leading-[0.95] text-ink sm:text-6xl">
              We do one thing. We do it <span className="text-swirl">properly.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/75">
              Your position in the market. The message that travels without you.
              The story your whole team tells the same way. Not campaigns. Not
              SEO. The groundwork, built once, used by everyone.
            </p>
          </Reveal>

          <Reveal className="mt-14 grid border-2 border-ink sm:grid-cols-2">
            {products.map((p, i) => (
              <ProductCard
                key={p.name}
                name={p.name}
                body={p.body}
                meta={p.meta}
                href={p.href}
                className={`${i % 2 === 0 ? "sm:border-r-2" : ""} ${
                  i < 2 ? "border-b-2" : ""
                } border-ink`}
              />
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────── HOW IT WORKS ─────────────────────── */}
      <section className="border-b-2 border-ink">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal className="max-w-3xl">
            <Label index="05">How it works</Label>
            <h2 className="mt-6 font-display text-4xl uppercase leading-[0.95] text-ink sm:text-6xl">
              The CORE Messaging Process
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/75">
              Three steps. No homework you&apos;ll never finish. No decks that
              live in Dropbox.
            </p>
          </Reveal>

          <div className="mt-12 border-t-2 border-ink">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="grid items-baseline gap-4 border-b-2 border-ink py-8 transition-colors hover:bg-pink/5 md:grid-cols-[8rem_14rem_1fr] md:gap-8">
                  <span className="font-display text-6xl leading-none text-pink">
                    {s.n}
                  </span>
                  <h3 className="font-display text-3xl uppercase tracking-wide text-ink">
                    {s.title}
                  </h3>
                  <p className="max-w-2xl text-base leading-relaxed text-ink/70">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── SOCIAL PROOF (bold ink pop) ─────────────── */}
      <section className="border-b-2 border-ink bg-ink text-bone">
        <Reveal className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10 lg:py-32">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-3 font-display text-sm uppercase tracking-[0.35em] text-pink">
              <span className="h-px w-8 bg-pink" />
              What changes when the story is clear
            </span>
          </div>
          <p className="mx-auto mt-8 max-w-3xl font-display text-3xl uppercase leading-tight sm:text-5xl">
            We&apos;re in early engagements. Case studies coming. In the meantime,
            book a <span className="text-swirl">Brand Audit.</span>
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-bone/65">
            Five days. Less than your last homepage rewrite. You&apos;ll know
            exactly what&apos;s broken and what to fix first. Proceed to CORE
            Messaging within sixty days and the fee is credited in full.
          </p>
          <div className="mt-10 flex justify-center">
            <Button href="/contact" variant="primary">
              Book a Brand Audit
            </Button>
          </div>
        </Reveal>
      </section>

      {/* ─────────────────────── WHO IT'S FOR ─────────────────────── */}
      <section className="border-b-2 border-ink">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <Label index="06">Who it&apos;s for</Label>
            <h2 className="mt-6 font-display text-4xl uppercase leading-[0.95] text-ink sm:text-6xl">
              This is for you if.
            </h2>
          </Reveal>

          <Reveal className="mt-12 grid border-2 border-ink md:grid-cols-2">
            <div className="bg-pink p-8 text-bone lg:p-10">
              <h3 className="font-display text-2xl uppercase tracking-wide">
                Right fit
              </h3>
              <ul className="mt-6 space-y-4 text-lg leading-relaxed text-bone/90">
                <li>You sell brilliantly in person and can&apos;t scale the conversation</li>
                <li>Your team describes the business differently every time</li>
                <li>You&apos;ve been playing in the marketing casino and you&apos;re done</li>
                <li>You want the groundwork done properly, probably for the first time</li>
              </ul>
            </div>
            <div className="border-t-2 border-ink p-8 md:border-l-2 md:border-t-0 lg:p-10">
              <h3 className="font-display text-2xl uppercase tracking-wide text-ink/50">
                Wrong fit
              </h3>
              <ul className="mt-6 space-y-4 text-lg leading-relaxed text-ink/55">
                <li>You want someone to run your marketing ongoing</li>
                <li>You think the website is the problem</li>
                <li>You want validation, not truth</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────── STAKES ───────────────────────── */}
      <section className="relative overflow-hidden border-b-2 border-ink">
        <ImpactObject label="The Anvil" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal className="max-w-2xl">
            <Label index="07">The stakes</Label>
            <h2 className="mt-6 font-display text-4xl uppercase leading-[0.95] text-ink sm:text-6xl">
              Every month without the groundwork is just{" "}
              <span className="text-swirl">expensive.</span>
            </h2>
            <div className="mt-8 grid gap-6 text-lg leading-relaxed text-ink/75">
              <p>
                Another spin. Another agency invoice. Another campaign that
                produces impressions and no revenue. Another good hire who
                can&apos;t perform because there&apos;s no story to work from.
              </p>
              <p>
                The gap between what your business is worth and what the market
                thinks it&apos;s worth keeps widening.
              </p>
              <p className="font-display text-2xl uppercase tracking-wide text-ink">
                It&apos;s not a slow emergency. It&apos;s just expensive. And it
                compounds.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────── FINAL CTA (gradient pop) ─────────────── */}
      <section className="bg-brand-gradient">
        <Reveal className="mx-auto max-w-7xl px-6 py-28 text-center text-bone lg:px-10 lg:py-40">
          <h2 className="mx-auto max-w-3xl font-display text-5xl uppercase leading-[0.9] sm:text-7xl">
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
            <Button href="/contact" variant="dark">
              Book Your Brand Audit
            </Button>
            <Button href="/contact" variant="outline-bone">
              Book a discovery call
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
