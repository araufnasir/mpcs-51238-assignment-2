const smallCaps = "[font-variant-caps:all-small-caps] tracking-[0.08em]";

/** The four type roles, all in one typeface. Weight and size do the work. */
export const type = {
  display: "text-6xl font-light leading-[0.9] tracking-tight md:text-8xl",
  heading: "text-3xl font-normal leading-tight",
  body: "text-lg leading-[1.65]",
  bodySmall: "text-base leading-snug",
  label: `${smallCaps} text-lg leading-none`,
  labelSmall: `${smallCaps} text-base leading-none`,
};

/** Large, light track numbers. */
export const numeral = "font-extralight leading-none tabular-nums";

export const focusRing = "state-focus:outline-2 state-focus:outline-offset-[3px] state-focus:outline-ln-text";
