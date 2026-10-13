/** The four type roles. Every component sets its text with one of these. */
export const type = {
  display: "font-hc-display text-5xl leading-[0.95] md:text-7xl",
  heading: "font-hc-display text-3xl leading-[1.1]",
  body: "font-hc-body text-lg leading-[1.6]",
  bodySmall: "font-hc-body text-base leading-[1.5]",
  label: "font-hc-label text-base font-semibold uppercase leading-none tracking-[0.14em]",
  labelSmall: "font-hc-label text-sm font-semibold uppercase leading-none tracking-[0.14em]",
};

/** Shared by every control that lifts, sinks or dims on interaction. */
export const focusRing = "state-focus:outline-[3px] state-focus:outline-offset-[3px] state-focus:outline-hc-text";
