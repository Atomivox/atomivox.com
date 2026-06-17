import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import Faq from "@/components/Faq";
import Button from "@/components/Button";

const products = [
  {
    index: "001",
    kicker: "Entry",
    name: "Brand Audit™",
    body: "An honest outside view of your brand and website. What's working, what's undermining you, what to fix first.",
    meta: "From €950 · 5–7 days · Credited toward CORE Messaging",
    href: "/services/brand-audit",
  },
  {
    index: "002",
    kicker: "Flagship",
    accent: true,
    name: "CORE Messaging™",
    body: "A guided series that extracts the story from your founding team's heads and builds it into something the whole business can use.",
    meta: "From €8,500 · 4–8 weeks",
    href: "/services/core-messaging",
  },
  {
    index: "003",
    kicker: "Research",
    name: "Customer Clarity™",
    body: "You think you know why customers chose you. You're probably half right. Structured interviews, turned into a clear report in their words.",
    meta: "From €2,500 · 2–4 weeks",
    href: "/services/customer-clarity",
  },
  {
    index: "004",
    kicker: "Build",
    name: "Brand Website™",
    body: "A website built on the brand position. Not instead of it.",
    meta: "From €12,000 · 2–3 months",
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
    body: "Your market position. The message that makes people lean in. The story your whole team tells the same way.",
  },
  {
    n: "03",
    title: "Apply",
    body: "The story becomes the website, the pitch, the sales deck, the onboarding. One clear message across every surface of the business.",
  },
];

function Label({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 font-display text-sm uppercase tracking-[0.3em] text-ink/50">
      <span className="text-pink">{index}</span>
      <span className="h-2 w-2 bg-pink" />
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />

      {/* THE PROBLEM */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal className="max-w-4xl">
            <Label index="01">The problem</Label>
            <h2 className="mt-6 max-w-3xl font-display text-5xl uppercase leading-[0.9] tracking-[-0.01em] text-ink sm:text-7xl">
              The playbook is <span className="text-swirl">broken.</span> It was
              never your fault.
            </h2>
            <div className="mt-8 grid gap-5 text-lg leading-relaxed text-ink/70">
              <p>You followed it. Website. Agency. Ads. Fractional CMO. The needle didn&apos;t move — or it moved just enough to justify the next invoice.</p>
              <p>
                Welcome to the marketing casino. The chips are your budget. The
                house is the industry.{" "}
                <span className="font-semibold text-ink">And the house always wins.</span>
              </p>
              <p>
                Here&apos;s what nobody said: marketing only works when the
                groundwork is already there. A position the market understands. A
                message that travels without you in the room. Without it, every
                tactic you buy is noise with a budget behind it.
              </p>
              <p className="font-display text-2xl uppercase tracking-wide text-ink">
                Once a business has a clear story, it stops needing an agency. So the agency never builds you one.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE REAL PROBLEM */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal className="max-w-4xl">
            <Label index="02">The real problem</Label>
            <h2 className="mt-6 max-w-4xl font-display text-5xl uppercase leading-[0.9] tracking-[-0.01em] text-ink sm:text-7xl">
              Your team knows the business at a ten. Your buyer arrives at a{" "}
              <span className="text-pink">one.</span>
            </h2>
            <div className="mt-8 grid max-w-3xl gap-5 text-lg leading-relaxed text-ink/70">
              <p>
                Every attempt to close that gap from the inside comes out sounding
                like it was written for people who already get it. Because it was.
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

      {/* THE GUIDE */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal className="max-w-4xl">
            <Label index="03">The guide</Label>
            <h2 className="mt-6 max-w-3xl font-display text-5xl uppercase leading-[0.9] tracking-[-0.01em] text-ink sm:text-7xl">
              We&apos;ve been on both sides of this brief.
            </h2>
            <div className="mt-8 grid max-w-3xl gap-5 text-lg leading-relaxed text-ink/70">
              <p>
                We&apos;ve watched founders sign off on their third €25k website
                rebuild and say &ldquo;hopefully this one does the trick.&rdquo; We
                know every step of the sequence that got them there.
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

      {/* WHAT WE DO + SERVICES GRID */}
      <section id="services" className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal className="max-w-4xl">
            <Label index="04">What we do</Label>
            <h2 className="mt-6 max-w-3xl font-display text-5xl uppercase leading-[0.9] tracking-[-0.01em] text-ink sm:text-7xl">
              We do one thing. We do it <span className="text-swirl">properly.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/70">
              Your position in the market. The message that travels without you.
              The story your whole team tells the same way. Not campaigns. Not
              SEO. The groundwork — built once, used by everyone.
            </p>
          </Reveal>

          <Reveal className="mt-14 grid gap-px bg-hairline sm:grid-cols-2">
            {products.map((p) => (
              <ProductCard
                key={p.name}
                index={p.index}
                kicker={p.kicker}
                accent={p.accent}
                name={p.name}
                body={p.body}
                meta={p.meta}
                href={p.href}
              />
            ))}
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal className="max-w-4xl">
            <Label index="05">How it works</Label>
            <h2 className="mt-6 font-display text-5xl uppercase leading-[0.9] tracking-[-0.01em] text-ink sm:text-7xl">
              The CORE Messaging Process
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/70">
              Three steps. No homework you&apos;ll never finish. No decks that live
              in a folder.
            </p>
          </Reveal>

          <div className="mt-12 border-t border-hairline">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="grid items-baseline gap-4 border-b border-hairline py-8 md:grid-cols-[8rem_14rem_1fr] md:gap-8">
                  <span className="font-display text-6xl leading-none text-pink">{s.n}</span>
                  <h3 className="font-display text-3xl uppercase tracking-wide text-ink">{s.title}</h3>
                  <p className="max-w-2xl leading-relaxed text-ink/70">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <Label index="06">Who it&apos;s for</Label>
            <h2 className="mt-6 font-display text-5xl uppercase leading-[0.9] tracking-[-0.01em] text-ink sm:text-7xl">
              This is for you if.
            </h2>
          </Reveal>

          <Reveal className="mt-12 grid border border-hairline md:grid-cols-2">
            <div className="p-8 lg:p-10">
              <h3 className="font-display text-2xl uppercase tracking-wide text-pink">Right fit</h3>
              <ul className="mt-6 space-y-4 text-lg leading-relaxed text-ink/80">
                <li>You sell brilliantly in person and can&apos;t scale the conversation</li>
                <li>Your team describes the business differently every time</li>
                <li>You&apos;ve been playing in the marketing casino and you&apos;re done</li>
                <li>You want the groundwork done properly, probably for the first time</li>
              </ul>
            </div>
            <div className="border-t border-hairline p-8 md:border-l md:border-t-0 lg:p-10">
              <h3 className="font-display text-2xl uppercase tracking-wide text-ink/40">Wrong fit</h3>
              <ul className="mt-6 space-y-4 text-lg leading-relaxed text-ink/50">
                <li>You want someone to run your marketing ongoing</li>
                <li>You think the website is the problem</li>
                <li>You want validation, not truth</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <Label index="07">Questions</Label>
            <h2 className="mt-6 font-display text-5xl uppercase leading-[0.9] tracking-[-0.01em] text-ink sm:text-7xl">
              The honest answers.
            </h2>
          </Reveal>
          <Faq />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10 lg:py-36">
          <Reveal>
            <h2 className="mx-auto max-w-4xl font-display text-6xl uppercase leading-[0.85] tracking-[-0.01em] text-ink sm:text-8xl">
              Start with the <span className="text-swirl">Brand Audit.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-ink/70">
              Five to seven days. An honest outside view of where you actually
              stand. From €950, credited toward CORE Messaging within sixty days.
              No retainer. No ongoing commitment. Just clarity.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" variant="primary">Book Your Brand Audit</Button>
              <Button href="/contact" variant="outline">Book a discovery call</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
