/**
 * Starter set of hand-drawn punk marks (placeholders for Kevin's vector pack).
 * All use currentColor so they inherit pink/ink/bone from context.
 */

type P = { className?: string };

export function Spark({ className = "" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2.5V8M12 16v5.5M2.5 12H8M16 12h5.5M5.4 5.4l3 3M15.6 15.6l3 3M18.6 5.4l-3 3M8.4 15.6l-3 3" />
    </svg>
  );
}

export function Bolt({ className = "" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M13.5 2 5.5 13.2h4.7L8.8 22l9.2-12.4h-5.2L13.5 2Z" />
    </svg>
  );
}

export function Star({ className = "" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 1.8l3 6.4 6.9.7-5.2 4.7 1.5 6.9L12 18.6 5.8 22.5l1.5-6.9L2.1 8.9l6.9-.7L12 1.8Z" />
    </svg>
  );
}

export function Scribble({ className = "" }: P) {
  return (
    <svg viewBox="0 0 48 12" className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M1 7c5-7 10 5 15-1s10 5 16-1 9 4 14 0" />
    </svg>
  );
}

export function Cross({ className = "" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden>
      <path d="M5 5.5 19 18.5M18.5 5 5.5 19" />
    </svg>
  );
}

export const MARKS = [Spark, Bolt, Star, Cross, Spark, Bolt, Star];
