import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import Faq from "@/components/Faq";
import Button from "@/components/Button";
import { Star, Bolt, Scribble, Cross } from "@/components/Marks";

const products = [
  { index: "001", kicker: "Entry", name: "Brand Audit™", body: "An honest outside read on your brand and site. What's working, what's bleeding you, what to fix first.", meta: "From €950 · 5–7 days · Credited toward CORE Messaging", href: "/services/brand-audit" },
  { index: "002", kicker: "Flagship", accent: true, name: "CORE Messaging™", body: "My flagship. A guided series that drags the story out of the founders' heads and hands it to the whole crew.", meta: "From €8,500 · 4–8 weeks", href: "/services/core-messaging" },
  { index: "003", kicker: "Research", name: "Customer Clarity™", body: "Most founders are half right about why customers buy. I interview them to find out which half — in their words, not yours.", meta: "From €2,500 · 2–4 weeks", href: "/services/customer-clarity" },
  { index: "004", kicker: "Build", name: "Brand Website™", body: "A site that works, because the foundation came first.", meta: "From €12,000 · 2–3 months", href: "/services/brand-website" },
];

const steps = [
  { n: "01", title: "Uncover", body: "The right questions, in the right order. What makes you different, and what you only think does." },
  { n: "02", title: "Build", body: "Position, message, story. The source file everything else pulls from." },
  { n: "03", title: "Apply", body: "The site, the pitch, the sales deck, the onboarding. One message, everywhere it goes." },
];

type MarkType = (p: { className?: string }) => React.JSX.Element;

function Label({ index, mark: Mark, children }: { index: string; mark: MarkType; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 font-display text-sm uppercase tracking-[0.3em] text-ink/50 transition-colors group-hover/section:text-bone/60">
      <span className="text-pink">{index}</span>
      <Mark className="h-4 w-4 text-pink" />
      {children}
    </span>
  );
}

function Section({ id, invert = true, children }: { id?: string; invert?: boolean; children: React.ReactNode }) {
  return (
    <section
      id={id}
      className={`border-b border-hairline ${invert ? "group/section transition-colors duration-300 hover:bg-ink" : ""}`}
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">{children}</div>
    </section>
  );
}

function Head({ index, mark, label, title, copy }: { index: string; mark: MarkType; label: string; title: React.ReactNode; copy: React.ReactNode }) {
  return (
    <Reveal>
      <Label index={index} mark={mark}>{label}</Label>
      <div className="mt-8 grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
        <h2 className="font-display text-5xl uppercase leading-[0.9] tracking-[-0.01em] text-ink transition-colors group-hover/section:text-bone sm:text-7xl lg:col-span-7">
          {title}
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-ink/70 transition-colors group-hover/section:text-bone/75 lg:col-span-5">
          {copy}
        </div>
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
          title={<>The playbook&apos;s <span className="text-swirl">broken.</span> That was never your fault.</>}
          copy={
            <>
              <p>Website. Agency. Ads. Fractional CMO. You ran every play. The needle didn&apos;t budge — or it budged just enough to justify the next round.</p>
              <p>Welcome to the marketing casino. The game&apos;s rigged, and not by the people you hired. Good agencies get dealt the same bad hand: sell a story that was never written down.</p>
              <p className="font-display text-2xl uppercase tracking-wide text-ink transition-colors group-hover/section:text-bone">Build on sand, act surprised when it slides.</p>
            </>
          }
        />
      </Section>

      {/* 02 — THE REAL PROBLEM */}
      <Section>
        <Head
          index="02"
          mark={Bolt}
          label="The real problem"
          title={<>Your team knows the business at a ten. Your buyer walks in at a <span className="text-swirl">one.</span></>}
          copy={
            <>
              <p>Close that gap from the inside and it comes out written for people who already get it. Because it was.</p>
              <p>The people who know the business best are the worst at saying it simply. Prospects shrug. Marketing makes noise. The founder does the selling. Again.</p>
              <p className="font-display text-2xl uppercase tracking-wide text-ink transition-colors group-hover/section:text-bone">Fixable. Just do it before the next tactic, not after the next ten.</p>
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
          title={<>I&apos;ve sat on both sides of this brief.</>}
          copy={
            <>
              <p>I&apos;ve watched founders greenlight their third €25k website and mutter &ldquo;hopefully this one does the trick.&rdquo; I get it.</p>
              <p>I spent a decade on the other side. Watched good people pour great work onto a foundation that was never there, then carry the blame when it didn&apos;t land. The execution was never the problem.</p>
              <p className="font-display text-2xl uppercase tracking-wide text-ink transition-colors group-hover/section:text-bone">Working myself out of a job is the job.</p>
              <p className="font-punk text-2xl text-pink">— Kevin, Atomivox</p>
            </>
          }
        />
      </Section>

      {/* 04 — WHAT WE DO + CARDS */}
      <Section id="services">
        <Head
          index="04"
          mark={Star}
          label="What I do"
          title={<>One thing. Done <span className="text-swirl">properly.</span></>}
          copy={
            <>
              <p>Your position in the market. The message that travels without you. The story your whole team tells the same way.</p>
              <p>Build it once. Then hand it to your agency, your fractional CMO, your next hire, and watch their work finally land.</p>
            </>
          }
        />
        <Reveal className="mt-14 grid gap-px overflow-hidden rounded-[5px] bg-hairline sm:grid-cols-2">
          {products.map((p) => (
            <ProductCard key={p.name} index={p.index} kicker={p.kicker} accent={p.accent} name={p.name} body={p.body} meta={p.meta} href={p.href} />
          ))}
        </Reveal>
      </Section>

      {/* 05 — HOW IT WORKS (interactive rows) */}
      <Section invert={false}>
        <Reveal>
          <span className="inline-flex items-center gap-3 font-display text-sm uppercase tracking-[0.3em] text-ink/50">
            <span className="text-pink">05</span>
            <Bolt className="h-4 w-4 text-pink" />
            How it works
          </span>
          <h2 className="mt-8 font-display text-5xl uppercase leading-[0.9] tracking-[-0.01em] text-ink sm:text-7xl">
            The CORE Messaging Process
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
            Three steps. Real sessions, real outputs. No deck left to rot in Dropbox.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="group/row grid items-start gap-4 rounded-[5px] border border-hairline p-6 transition-colors duration-300 hover:bg-ink md:grid-cols-[7rem_15rem_1fr] md:gap-8 md:p-8">
                <span className="font-display text-6xl leading-[0.8] text-pink transition-transform duration-300 group-hover/row:translate-x-1">{s.n}</span>
                <h3 className="font-display text-3xl uppercase tracking-wide text-ink transition-colors group-hover/row:text-bone">{s.title}</h3>
                <p className="leading-relaxed text-ink/70 transition-colors group-hover/row:text-bone/75">{s.body}</p>
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
          title={<>This one&apos;s for you if.</>}
          copy={<p>The honest fit test. I&apos;d rather tell you now than waste your money later.</p>}
        />
        <Reveal className="mt-12 grid overflow-hidden rounded-[5px] border border-hairline transition-colors group-hover/section:border-bone/20 md:grid-cols-2">
          <div className="p-8 lg:p-10">
            <h3 className="font-display text-2xl uppercase tracking-wide text-pink">Right fit</h3>
            <ul className="mt-6 space-y-4 text-lg leading-relaxed text-ink/80 transition-colors group-hover/section:text-bone/85">
              {["You sell brilliantly in person and can't clone yourself", "Your team describes the business three different ways before lunch", "You've run every play in the book and you're done guessing", "You want the groundwork done right, finally"].map((t) => (
                <li key={t} className="flex gap-3"><Star className="mt-1.5 h-3.5 w-3.5 shrink-0 text-pink" /><span>{t}</span></li>
              ))}
            </ul>
          </div>
          <div className="border-t border-hairline p-8 transition-colors group-hover/section:border-bone/20 md:border-l md:border-t-0 lg:p-10">
            <h3 className="font-display text-2xl uppercase tracking-wide text-ink/40 transition-colors group-hover/section:text-bone/50">Wrong fit</h3>
            <ul className="mt-6 space-y-4 text-lg leading-relaxed text-ink/50 transition-colors group-hover/section:text-bone/55">
              {["You want a hired gun to run your marketing forever", "You're sure the website's the problem", "You want to hear that everything's fine"].map((t) => (
                <li key={t} className="flex gap-3"><Cross className="mt-1.5 h-3.5 w-3.5 shrink-0 text-pink" /><span>{t}</span></li>
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
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10 lg:py-36">
          <Reveal>
            <h2 className="font-punk mx-auto max-w-4xl break-words text-[2.1rem] font-extrabold uppercase leading-[0.95] tracking-[-0.01em] text-ink sm:text-7xl">
              Start with the <span className="text-swirl">Brand Audit.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-ink/75">
              Five to seven days. An honest read on where you actually stand. From €950, credited toward CORE Messaging within sixty days. One fee, a clear map of what&apos;s broken and what to fix first.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" variant="primary">Book Your Brand Audit</Button>
              <Button href="/contact" variant="outline">Book a 30-minute call</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
