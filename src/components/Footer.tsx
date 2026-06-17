import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-bone">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex items-center gap-5">
          <Image
            src="/brand/bug-pink.png"
            alt="Atomivox"
            width={722}
            height={718}
            className="h-14 w-14 shrink-0"
          />
          <p className="max-w-md font-display text-3xl uppercase leading-[0.95] tracking-wide text-ink">
            Brand position. <span className="text-pink">Clear message.</span>{" "}
            Story that scales.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-8 border-t border-hairline pt-10 sm:grid-cols-3">
          <div>
            <h3 className="font-display text-xs uppercase tracking-[0.2em] text-ink/40">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-ink/70">
              <li><Link href="/services" className="hover:text-pink">Brand Audit</Link></li>
              <li><Link href="/services" className="hover:text-pink">CORE Messaging</Link></li>
              <li><Link href="/services" className="hover:text-pink">Customer Clarity</Link></li>
              <li><Link href="/services" className="hover:text-pink">Brand Website</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xs uppercase tracking-[0.2em] text-ink/40">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-ink/70">
              <li><Link href="/about" className="hover:text-pink">About</Link></li>
              <li><Link href="/work" className="hover:text-pink">Work</Link></li>
              <li><Link href="/contact" className="hover:text-pink">Contact</Link></li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-display text-xs uppercase tracking-[0.2em] text-ink/40">
              Get started
            </h3>
            <Link
              href="/contact"
              className="mt-4 inline-block bg-pink px-5 py-3 font-display text-sm uppercase tracking-[0.15em] text-bone transition-colors hover:bg-ink"
            >
              Book a Brand Audit
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-hairline pt-6 font-display text-xs uppercase tracking-[0.2em] text-ink/40 sm:flex-row">
          <span>© {new Date().getFullYear()} Atomivox</span>
          <span>B2B Brand Studio · Ireland</span>
        </div>
      </div>
    </footer>
  );
}
