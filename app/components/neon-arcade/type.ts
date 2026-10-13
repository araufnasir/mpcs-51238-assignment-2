/** The four type roles. Pixel type is for short headings only; everything read is monospace. */
export const type = {
  display: "font-na-display text-2xl leading-[1.3] md:text-4xl",
  heading: "font-na-display text-base leading-[1.5]",
  body: "font-na-body text-base leading-7",
  bodySmall: "font-na-body text-sm leading-6",
  label: "font-na-body text-sm font-bold uppercase leading-none tracking-[0.1em]",
  labelSmall: "font-na-body text-xs font-bold uppercase leading-none tracking-[0.1em]",
};

/** Track names are too long for pixel type, so they are set in bold body. */
export const trackTitle = "font-na-body text-xl font-bold leading-snug";

/** Cyan marks focus, everywhere. Clipped controls drop their clip so the ring is not cut off. */
export const focusRing = "state-focus:outline-4 state-focus:outline-offset-4 state-focus:outline-na-secondary";
export const focusRingClipped = `state-focus:[clip-path:none] ${focusRing}`;
