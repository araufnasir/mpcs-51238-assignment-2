import { focusRing } from "./type";

/** Shared by the text input, search field and select. */
export const fieldClasses = `w-full border-2 border-hc-border bg-hc-background px-3 py-2.5 font-hc-body text-lg text-hc-text placeholder:text-hc-muted
  enabled:state-hover:border-hc-text state-focus:border-hc-text ${focusRing}
  disabled:cursor-not-allowed disabled:border-dashed disabled:text-hc-muted
  aria-invalid:border-hc-text aria-invalid:shadow-[inset_0_0_0_2px_var(--hc-text)]`;
