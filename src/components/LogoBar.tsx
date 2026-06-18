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

export default function LogoBar() {
  return (
    <div className="relative overflow-hidden border-y border-hairline bg-bone py-7">
      <div className="flex w-max animate-ticker items-center">
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0 items-center gap-16 pr-16" aria-hidden={group === 1}>
            {logos.map((l) => (
              <img
                key={l.src + group}
                src={l.src}
                alt={group === 0 ? l.alt : ""}
                className="h-7 w-auto shrink-0 object-contain opacity-55"
                style={{ filter: "grayscale(1) brightness(0)" }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* edge fades — hide the start/end, with a subtle blue cast */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bone to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bone to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-sky/30 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-sky/30 to-transparent" />
    </div>
  );
}
