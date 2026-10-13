import type { ButtonHTMLAttributes } from "react";
import { focusRing, type as t } from "./type";

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "aria-pressed"> & { selected?: boolean };

/** A toggle button for filtering. Selected chips fill with ink. */
export function FilterChip({ selected = false, className = "", ...props }: Props) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={`${t.label} border border-ln-text px-3.5 py-1.5
        aria-[pressed=false]:enabled:state-hover:bg-ln-surface aria-[pressed=false]:enabled:state-hover:underline aria-[pressed=false]:enabled:state-hover:underline-offset-4
        aria-[pressed=false]:enabled:state-pressed:bg-ln-pressed
        aria-pressed:bg-ln-text aria-pressed:text-ln-background aria-pressed:enabled:state-pressed:bg-ln-muted ${focusRing}
        disabled:cursor-not-allowed disabled:border-dotted disabled:border-ln-muted disabled:bg-transparent disabled:text-ln-muted ${className}`}
      {...props}
    />
  );
}
