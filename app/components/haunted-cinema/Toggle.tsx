import type { InputHTMLAttributes } from "react";
import { focusRing, type as t } from "./type";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "role"> & { label: string };

/** An on/off switch. A native checkbox with role="switch", so it needs no script. */
export function Toggle({ label, className = "", ...props }: Props) {
  return (
    <label className={`group inline-flex cursor-pointer items-center gap-3 ${t.body} has-disabled:cursor-not-allowed has-disabled:text-hc-muted`}>
      <input
        type="checkbox"
        role="switch"
        className={`hcu-toggle h-8 w-14 shrink-0 cursor-pointer appearance-none border-2 border-hc-border bg-hc-background
          enabled:state-hover:border-hc-text enabled:group-hover:border-hc-text enabled:state-pressed:bg-hc-surface
          checked:border-hc-text checked:bg-hc-text ${focusRing}
          disabled:cursor-not-allowed disabled:border-dashed disabled:border-hc-muted disabled:checked:bg-transparent ${className}`}
        {...props}
      />
      {label}
    </label>
  );
}
