const BARS = 26;

/** DecideAI-style barcode/equalizer: dense on the left, spacing out to the right. */
export default function BarViz({ className = "" }: { className?: string }) {
  return (
    <div className={`flex h-16 items-end overflow-hidden ${className}`}>
      {Array.from({ length: BARS }).map((_, i) => (
        <span
          key={i}
          className="bar-pulse block h-full w-[3px] shrink-0 bg-pink"
          style={{
            marginRight: `${1 + i * 0.9}px`,
            animationDelay: `${i * 0.05}s`,
          }}
        />
      ))}
    </div>
  );
}
