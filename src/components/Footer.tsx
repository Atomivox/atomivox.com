import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-bone/10 bg-[#0d000c]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex items-center gap-6">
          <Image
            src="/brand/bug-pink.png"
            alt="Atomivox"
            width={722}
            height={718}
            className="h-16 w-16 shrink-0"
          />
          <p className="max-w-md font-display text-2xl uppercase leading-tight tracking-wide text-bone">
            Brand position. <span className="text-pink">Clear message.</span>{" "}
            Story that scales.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-bone/40">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-bone/70">
              <li><Link href="/services/brand-audit" className="hover:text-bone">Brand Audit</Link></li>
              <li><Link href="/services/core-messaging" className="hover:text-bone">CORE Messaging</Link></li>
              <li><Link href="/services/customer-clarity" className="hover:text-bone">Customer Clarity</Link></li>
              <li><Link href="/services/brand-website" className="hover:text-bone">Brand Website</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-widest text-bone/40">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-bone/70">
              <li><Link href="/about" className="hover:text-bone">About</Link></li>
              <li><Link href="/work" className="hover:text-bone">Work</Link></li>
              <li><Link href="/contact" className="hover:text-bone">Contact</Link></li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-xs uppercase tracking-widest text-bone/40">
              Get started
            </h3>
            <Link
              href="/contact"
              className="mt-4 inline-block rounded-full bg-pink px-5 py-2.5 font-display text-sm uppercase tracking-widest text-bone transition-transform hover:scale-[1.03]"
            >
              Book a Brand Audit
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-bone/10 pt-8 text-xs uppercase tracking-widest text-bone/40 sm:flex-row">
          <span>© {new Date().getFullYear()} Atomivox. All rights reserved.</span>
          <span>B2B Brand Studio · Ireland</span>
        </div>
      </div>
    </footer>
  );
}
