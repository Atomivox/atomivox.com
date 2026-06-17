import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import Faq from "@/components/Faq";
import Button from "@/components/Button";
import { Star, Bolt, Scribble, Eye, Skull, Barbed, Cross } from "@/components/Marks";

const products = [
  { index: "001", kicker: "Entry", name: "Brand Audit™", body: "An honest outside view of your brand and website. What's working, what's undermining you, what to fix first.", meta: "From €950 · 5–7 days · Credited toward CORE Messaging", href: "/services/brand-audit" },
  { index: "002", kicker: "Flagship", accent: true, name: "CORE Messaging™", body: "A guided series that extracts the story from your founding team's heads and builds it into something the whole business can use.", meta: "From €8,500 · 4–8 weeks", href: "/services/core-messaging" },
  { index: "003", kicker: "Research", name: "Customer Clarity™", body: "You think you know why customers chose you. You're probably half right. Structured interviews, turned into a clear report in their words.", meta: "From €2,500 · 2–4 weeks", href: "/services/customer-clarity" },
  { index: "004", kicker: "Build", name: "Brand Website™", body: "A website built on the brand position. Not instead of it.", meta: "From €12,000 · 2–3 months", href: "/services/brand-website" },
];

const steps = [
  { n: "01", title: "Uncover", body: "The right questions, asked in the right order. We find what makes you genuinely different and the parts you only think do." },
  { n: "02", title: "Build", body: "Your market position. The message that makes people lean in. The story your whole team tells the same way." },
  { n: "03", title: "Apply", body: "The story becomes the website, the pitch, the sales deck, the onboarding. One clear message across every surface." },
];

type MarkType = (p: { className?: string }) => React.JSX.Element;

function Label({ index, mark: Mark, children, dark = false }: { index: string; mark: MarkType; children: React.ReactNode; dark?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-3 font-display text-sm uppercase tracking-[0.3em] ${dark ? "text-bone/60" : "text-ink/50"}`}>
      <span className="text-pink">{index}</span>
      <Mark className="h-4 w-4 text-pink" />
      {children}
    </span>
  );
}

function Section({ dark = false, id, children }: { dark?: boolean; id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={`border-b ${dark ? "border-white/10 bg-ink text-bone" : "border-hairline text-ink"}`}>
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">{children}</div>
    </section>
  );
}

function Head({ index, mark, label, title, copy, dark = false }: { index: string; mark: MarkType; label: string; title: React.ReactNode; copy: React.ReactNode; dark?: boolean }) {
  return (
    <Reveal className="grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <Label index={index} mark={mark} dark={dark}>{label}</Label>
        <h2 className="mt-6 font-display text-5xl uppercase leading-[0.9] tracking-[-0.01em] sm:text-7xl">{title}</h2>
      </div>
      <div className={`space-y-5 text-lg leading-relaxed lg:col-span-5 lg:pt-3 ${dark ? "text-bone/70" : "text-ink/70"}`}>
        {copy}
      </div>
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />

      {/* 01 — THE PROBLEM */}
      <Section>
        <Head
          index="01"
          mark={Star}
          label="The problem"
          title={<>The playbook is <span className="text-swirl">broken.</span></>}
          copy={
            <>
              <p>You followed it. Website. Agency. Ads. Fractional CMO. The needle didn&apos;t move — or it moved just enough to justify the next invoice.</p>
              <p>Welcome to the marketing casino. The chips are your budget. The house is the industry. <span className="font-semibold text-pink">And the house always wins.</span></p>
              <p className="font-display text-xl uppercase tracking-wide text-ink">Once a business has a clear story, it stops needing an agency. So the agency never builds you one.</p>
            </>
          }
        />
      </Section>

      {/* 02 — THE REAL PROBLEM (black) */}
      <Section dark>
        <Head
          dark
          index="02"
          mark={Bolt}
          label="The real problem"
          title={<>Your buyer arrives at a <span className="text-swirl">one.</span></>}
          copy={
            <>
              <p>Your team knows the business at a ten. Every attempt to close that gap from the inside comes out sounding like it was written for people who already get it. Because it was.</p>
              <p>Prospects shrug. Marketing produces activity, not pipeline. The founder ends up doing most of the selling.</p>
              <p className="font-display text-xl uppercase tracking-wide text-bone">Founders who built something great should not lose to competitors with weaker products and better marketing.</p>
            </>
          }
        />
      </Section>

      {/* 03 — THE GUIDE */}
      <Section>
        <Head
          index="03"
          mark={Scribble}
          label="The guide"
          title={<>We&apos;ve been on both sides of this brief.</>}
          copy={
            <>
              <p>We&apos;ve watched founders sign off on their third €25k website rebuild and say &ldquo;hopefully this one does the trick.&rdquo;</p>
              <p>Atomivox was built by someone who spent a decade inside that industry. We&apos;ve worked ourselves out of engagements because the brand we built was so tight the client didn&apos;t need us anymore.</p>
              <p className="font-display text-xl uppercase tracking-wide text-ink">That&apos;s the outcome we&apos;re built to deliver.</p>
            </>
          }
        />
      </Section>

      {/* 04 — WHAT WE DO + CARDS */}
      <Section id="services">
        <Head
          index="04"
          mark={Star}
          label="What we do"
          title={<>We do one thing. We do it <span className="text-swirl">properly.</span></>}
          copy={<p>Your position in the market. The message that travels without you. The story your whole team tells the same way. Not campaigns. Not SEO. The groundwork — built once, used by everyone.</p>}
        />
        <Reveal className="mt-14 grid gap-px overflow-hidden rounded-[5px] bg-hairline sm:grid-cols-2">
          {products.map((p) => (
            <ProductCard key={p.name} index={p.index} kicker={p.kicker} accent={p.accent} name={p.name} body={p.body} meta={p.meta} href={p.href} />
          ))}
        </Reveal>
      </Section>

      {/* 05 — HOW IT WORKS (black tracklist) */}
      <Section dark>
        <Head
          dark
          index="05"
          mark={Bolt}
          label="How it works"
          title={<>The CORE Messaging Process</>}
          copy={<p>Three steps. No homework you&apos;ll never finish. No decks that live in a folder.</p>}
        />
        <div className="mt-12 border-t border-white/10">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="grid items-baseline gap-4 border-b border-white/10 py-8 md:grid-cols-[8rem_14rem_1fr] md:gap-8">
                <span className="font-display text-6xl leading-none text-pink">{s.n}</span>
                <h3 className="font-display text-3xl uppercase tracking-wide text-bone">{s.title}</h3>
                <p className="max-w-2xl leading-relaxed text-bone/70">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 06 — WHO IT'S FOR */}
      <Section>
        <Head
          index="06"
          mark={Scribble}
          label="Who it's for"
          title={<>This is for you if.</>}
          copy={<p>The honest fit test. We&apos;d rather tell you now than waste your money later.</p>}
        />
        <Reveal className="mt-12 grid overflow-hidden rounded-[5px] border border-hairline md:grid-cols-2">
          <div className="p-8 lg:p-10">
            <h3 className="font-display text-2xl uppercase tracking-wide text-pink">Right fit</h3>
            <ul className="mt-6 space-y-4 text-lg leading-relaxed text-ink/80">
              {["You sell brilliantly in person and can't scale the conversation", "Your team describes the business differently every time", "You've been playing in the marketing casino and you're done", "You want the groundwork done properly, probably for the first time"].map((t) => (
                <li key={t} className="flex gap-3"><Star className="mt-1.5 h-3.5 w-3.5 shrink-0 text-pink" /><span>{t}</span></li>
              ))}
            </ul>
          </div>
          <div className="border-t border-hairline p-8 md:border-l md:border-t-0 lg:p-10">
            <h3 className="font-display text-2xl uppercase tracking-wide text-ink/40">Wrong fit</h3>
            <ul className="mt-6 space-y-4 text-lg leading-relaxed text-ink/50">
              {["You want someone to run your marketing ongoing", "You think the website is the problem", "You want validation, not truth"].map((t) => (
                <li key={t} className="flex gap-3"><Cross className="mt-1.5 h-3.5 w-3.5 shrink-0 text-ink/30" /><span>{t}</span></li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      {/* 07 — FAQ */}
      <Section>
        <Head
          index="07"
          mark={Star}
          label="Questions"
          title={<>The honest answers.</>}
          copy={<p>The things founders actually ask before they book. No spin.</p>}
        />
        <Faq />
      </Section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-b border-hairline">
        <Eye className="pointer-events-none absolute left-[7%] top-12 hidden h-16 w-16 text-pink/25 lg:block" />
        <Skull className="pointer-events-none absolute right-[9%] top-20 hidden h-16 w-16 text-ink/15 lg:block" />
        <Bolt className="pointer-events-none absolute bottom-24 right-[16%] hidden h-12 w-12 text-pink/25 lg:block" />
        <Star className="pointer-events-none absolute bottom-16 left-[15%] hidden h-10 w-10 text-pink/30 lg:block" />
        <Barbed className="pointer-events-none absolute bottom-10 left-1/2 hidden h-6 w-48 -translate-x-1/2 text-ink/15 lg:block" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center lg:px-10 lg:py-36">
          <Reveal>
            <h2 className="mx-auto max-w-4xl font-display text-6xl uppercase leading-[0.85] tracking-[-0.01em] text-ink sm:text-8xl">
              Start with the <span className="text-swirl">Brand Audit.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-ink/70">
              Five to seven days. An honest outside view of where you actually stand. From €950, credited toward CORE Messaging within sixty days. No retainer. No commitment. Just clarity.
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
