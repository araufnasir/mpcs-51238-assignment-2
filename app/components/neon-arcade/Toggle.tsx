import type { InputHTMLAttributes } from "react";
import { focusRingClipped, type as t } from "./type";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "role"> & { label: string };

/** An on/off switch. A native checkbox with role="switch", so it needs no script. On is a cyan fill. */
export function Toggle({ label, className = "", ...props }: Props) {
  return (
    <label className={`group inline-flex cursor-pointer items-center gap-3 ${t.body} has-disabled:cursor-not-allowed has-disabled:text-na-muted`}>
      <input
        type="checkbox"
        role="switch"
        className={`nau-pixel nau-toggle h-8 w-16 shrink-0 cursor-pointer appearance-none border-4 border-na-border bg-na-background
          enabled:state-hover:border-na-text enabled:group-state-hover:border-na-text enabled:state-pressed:bg-na-pressed
          checked:border-na-secondary checked:bg-na-secondary ${focusRingClipped}
          disabled:cursor-not-allowed disabled:border-dashed disabled:border-na-muted disabled:checked:bg-transparent ${className}`}
        {...props}
      />
      {label}
    </label>
  );
}
