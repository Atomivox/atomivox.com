"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const faqs = [
  {
    q: "Is the Brand Audit just a sales pitch for CORE Messaging?",
    a: "No. It's a standalone, paid piece of work with its own deliverables: a written report, a recorded walkthrough, and a priority action list. If it makes sense to go further, the audit fee comes off CORE Messaging within sixty days. If it doesn't, you still walk away knowing exactly what's broken.",
  },
  {
    q: "How is this different from hiring a copywriter or an agency?",
    a: "They sell execution: words, campaigns, a website. I build the thing execution is supposed to sit on — your position, your message, your story. Once that exists, their work finally lands, and gets cheaper.",
  },
  {
    q: "Do I need to do prep work?",
    a: "You need to show up and think with me. The process pulls the story out of your head, so I need your time in the sessions. No long homework you'll never finish.",
  },
  {
    q: "What if I've already done brand work before?",
    a: "Bring it. Often the pieces exist but were never sharpened into something the whole company can use. I'll pressure-test what you have and build what's missing.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mt-12 border-t border-hairline transition-colors group-hover/section:border-bone/15">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-hairline transition-colors group-hover/section:border-bone/15">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-display text-2xl uppercase tracking-wide text-ink transition-colors group-hover/section:text-bone sm:text-3xl">
                {item.q}
              </span>
              <span className={`shrink-0 text-3xl leading-none text-pink transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-7 text-lg leading-relaxed text-ink/70 transition-colors group-hover/section:text-bone/75">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
