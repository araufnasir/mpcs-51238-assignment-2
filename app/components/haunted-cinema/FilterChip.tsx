import type { ButtonHTMLAttributes } from "react";
import { focusRing, type as t } from "./type";

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "aria-pressed"> & { selected?: boolean };

/** A toggle button for filtering. Selected chips invert to bone. */
export function FilterChip({ selected = false, className = "", ...props }: Props) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={`${t.label} border-2 border-hc-text px-4 py-2
        aria-[pressed=false]:enabled:state-hover:bg-hc-surface aria-[pressed=false]:enabled:state-pressed:bg-hc-pressed
        aria-pressed:bg-hc-text aria-pressed:text-hc-background aria-pressed:enabled:state-pressed:bg-hc-muted ${focusRing}
        disabled:cursor-not-allowed disabled:border-dashed disabled:border-hc-muted disabled:bg-transparent disabled:text-hc-muted ${className}`}
      {...props}
    />
  );
}
