/* eslint-disable @next/next/no-img-element */

const logos = [
  { src: "/logos/mb2.png", alt: "MB2 Dental" },
  { src: "/logos/kontakt.webp", alt: "Kontakt" },
  { src: "/logos/layer8.png", alt: "Layer8" },
  { src: "/logos/lendcare.webp", alt: "LendCare" },
  { src: "/logos/outmin.svg", alt: "Outmin" },
  { src: "/logos/uts.svg", alt: "UTS" },
  { src: "/logos/zartis.webp", alt: "Zartis" },
  { src: "/logos/restore.svg", alt: "The Restore Network" },
  { src: "/logos/widescope.png", alt: "Widescope" },
  { src: "/logos/vfco.png", alt: "VFCO" },
  { src: "/logos/avi.png", alt: "AVI" },
];

const fade =
  "linear-gradient(to right, transparent, #000 9%, #000 91%, transparent)";

export default function LogoBar() {
  return (
    <div className="border-y border-hairline bg-bone py-7">
      <p className="mx-auto mb-5 max-w-7xl px-6 font-display text-xs uppercase tracking-[0.3em] text-ink/40 lg:px-10">
        Trusted by founders at
      </p>
      <div
        className="overflow-hidden"
        style={{ WebkitMaskImage: fade, maskImage: fade }}
      >
        <div className="flex w-max animate-ticker items-center">
          {[0, 1].map((group) => (
            <div key={group} className="flex shrink-0 items-center gap-16 pr-16" aria-hidden={group === 1}>
              {logos.map((l) => (
                <img
                  key={l.src + group}
                  src={l.src}
                  alt={group === 0 ? l.alt : ""}
                  className="h-6 w-auto shrink-0 object-contain opacity-50 sm:h-7"
                  style={{ filter: "grayscale(1) brightness(0)" }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
