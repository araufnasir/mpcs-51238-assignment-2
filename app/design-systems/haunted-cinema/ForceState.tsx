import type { ReactNode } from "react";

type Props = { state?: "hover" | "focus" | "pressed"; children: ReactNode };

/**
 * Shows a state without interaction. The wrapper sets data-force; the components' own
 * state variants (see globals.css) match it as well as the real pseudo-class. The components
 * themselves are unchanged and stay fully interactive.
 */
export function ForceState({ state, children }: Props) {
  return <div data-force={state} className="contents">{children}</div>;
}
