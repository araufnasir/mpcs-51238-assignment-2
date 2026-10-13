import type { ButtonHTMLAttributes } from "react";
import { focusRingClipped, type as t } from "./type";

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "aria-pressed"> & { selected?: boolean };

/** A toggle button for filtering. Selected chips fill with cyan. */
export function FilterChip({ selected = false, className = "", ...props }: Props) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={`nau-pixel ${t.label} border-4 border-na-border bg-na-background px-4 py-2.5
        aria-[pressed=false]:enabled:state-hover:border-na-text aria-[pressed=false]:enabled:state-pressed:bg-na-pressed
        aria-pressed:border-na-secondary aria-pressed:bg-na-secondary aria-pressed:text-na-background aria-pressed:enabled:state-pressed:brightness-75 ${focusRingClipped}
        disabled:cursor-not-allowed disabled:border-dashed disabled:border-na-muted disabled:bg-transparent disabled:text-na-muted ${className}`}
      {...props}
    />
  );
}
