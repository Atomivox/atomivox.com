import Image from "next/image";

/**
 * Large vintage "impact" object anchored to the right, sitting BEHIND the
 * section text, with pink mist drifting behind it. Pass `src` once the real
 * black-and-white cut-out exists; until then it renders a labelled placeholder.
 */
export default function ImpactObject({
  src,
  alt = "",
  label,
}: {
  src?: string;
  alt?: string;
  label: string;
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[55%] max-w-3xl items-center justify-end overflow-hidden lg:flex"
    >
      {/* pink mist */}
      <div className="mist-a absolute right-16 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full bg-pink/35 blur-[90px]" />
      <div className="mist-b absolute right-48 top-1/3 h-72 w-72 rounded-full bg-plum/25 blur-[80px]" />

      {/* object */}
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={760}
          height={760}
          className="relative w-[78%] max-w-xl object-contain grayscale"
        />
      ) : (
        <div className="relative mr-6 flex aspect-square w-[26rem] items-center justify-center rounded-3xl border-2 border-dashed border-ink/20 bg-ink/[0.02]">
          <span className="px-6 text-center font-display text-2xl uppercase tracking-[0.2em] text-ink/30">
            {label}
            <span className="mt-2 block text-xs tracking-widest text-ink/20">
              image placeholder
            </span>
          </span>
        </div>
      )}
    </div>
  );
}
