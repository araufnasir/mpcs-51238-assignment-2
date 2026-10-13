import type { InputHTMLAttributes } from "react";
import { choiceLabel } from "./Checkbox";
import { focusRing } from "./type";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & { label: string };

/** Radios are stepped octagons, so they read as radios without a single curve. The background is the ring. */
export function Radio({ label, className = "", ...props }: Props) {
  return (
    <label className={choiceLabel}>
      <input
        type="radio"
        className={`nau-octagon nau-radio size-8 shrink-0 cursor-pointer appearance-none bg-na-border
          enabled:state-hover:bg-na-text enabled:group-state-hover:bg-na-text enabled:state-pressed:[--nau-fill:var(--na-pressed)]
          checked:bg-na-secondary checked:[--nau-fill:var(--na-secondary)] state-focus:bg-na-secondary ${focusRing}
          disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        {...props}
      />
      {label}
    </label>
  );
}
