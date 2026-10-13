import type { ReactNode } from "react";
import { focusRing } from "./type";

/** Shared by the text input, search field and select. A ruled line, like a form on paper. */
export const fieldClasses = `w-full rounded-none border-0 border-b border-ln-text bg-transparent px-1 py-2 text-lg text-ln-text placeholder:italic placeholder:text-ln-muted
  enabled:state-hover:bg-ln-surface state-focus:bg-ln-surface ${focusRing}
  disabled:cursor-not-allowed disabled:border-dotted disabled:border-ln-muted disabled:text-ln-muted
  aria-invalid:border-b-[3px] aria-invalid:border-double`;

/** A thin line drawing, in the current text color. */
export function LineIcon({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square" className={className}>
      {children}
    </svg>
  );
}
