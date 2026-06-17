const words = [
  "Brand Strategy",
  "Storytelling",
  "Brand Architecture",
  "Copywriting",
  "Positioning",
];

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-hairline bg-bone py-5">
      <div className="flex w-max animate-ticker">
        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex shrink-0 items-center"
            aria-hidden={group === 1}
          >
            {words.map((word) => (
              <span key={word} className="flex items-center">
                <span className="px-8 font-display text-3xl uppercase tracking-tight text-ink sm:text-5xl">
                  {word}
                </span>
                <span className="text-2xl text-pink">✳</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
