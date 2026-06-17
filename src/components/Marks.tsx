/**
 * Punk marks extracted from Kevin's hand-drawn vector pack (Doodles/).
 * Rendered as CSS masks so each one paints in the current text colour
 * (pink / ink / bone) and fits the design system.
 */

type P = { className?: string };

function make(src: string) {
  const Mark = ({ className = "" }: P) => (
    <span
      aria-hidden
      className={`inline-block bg-current align-middle ${className}`}
      style={{
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
  return Mark;
}

export const Eye = make("/marks/eye.png");
export const Star = make("/marks/star.png");
export const Bolt = make("/marks/bolt.png");
export const Scribble = make("/marks/scribble.png");
export const Skull = make("/marks/skull.png");
export const Barbed = make("/marks/barbed.png");
export const Cross = make("/marks/cross.png");
