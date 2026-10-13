import type { InputHTMLAttributes } from "react";
import { focusRing, type as t } from "./type";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & { label: string };

/** Shared by Checkbox and Radio. Selected is an ink fill. */
export const choiceInput = `size-[22px] shrink-0 cursor-pointer appearance-none border border-ln-text bg-ln-background
  enabled:state-hover:bg-ln-surface enabled:group-state-hover:bg-ln-surface enabled:state-pressed:bg-ln-pressed
  checked:bg-ln-text ${focusRing}
  disabled:cursor-not-allowed disabled:border-dotted disabled:border-ln-muted`;

export const choiceLabel = `group inline-flex cursor-pointer items-center gap-3 ${t.body} has-disabled:cursor-not-allowed has-disabled:text-ln-muted`;

export function Checkbox({ label, className = "", ...props }: Props) {
  return (
    <label className={choiceLabel}>
      <input type="checkbox" className={`lnu-check rounded-none ${choiceInput} ${className}`} {...props} />
      {label}
    </label>
  );
}
