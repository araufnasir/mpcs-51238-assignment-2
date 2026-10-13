import type { InputHTMLAttributes } from "react";
import { focusRing, type as t } from "./type";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "role"> & { label: string };

/** An on/off switch. A native checkbox with role="switch", so it needs no script. On is an ink fill. */
export function Toggle({ label, className = "", ...props }: Props) {
  return (
    <label className={`group inline-flex cursor-pointer items-center gap-3 ${t.body} has-disabled:cursor-not-allowed has-disabled:text-ln-muted`}>
      <input
        type="checkbox"
        role="switch"
        className={`lnu-toggle h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-none border border-ln-text bg-ln-background
          enabled:state-hover:bg-ln-surface enabled:group-state-hover:bg-ln-surface enabled:state-pressed:bg-ln-pressed
          checked:bg-ln-text enabled:checked:state-hover:bg-[color-mix(in_srgb,var(--ln-text)_85%,var(--ln-background))] ${focusRing}
          disabled:cursor-not-allowed disabled:border-dotted disabled:border-ln-muted disabled:checked:bg-transparent ${className}`}
        {...props}
      />
      {label}
    </label>
  );
}
