import type { InputHTMLAttributes } from "react";
import { focusRing, type as t } from "./type";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & { label: string };

/** Shared by Checkbox and Radio. */
export const choiceInput = `size-6 shrink-0 cursor-pointer appearance-none border-2 border-hc-border bg-hc-background
  enabled:state-hover:border-hc-text enabled:group-hover:border-hc-text enabled:state-pressed:bg-hc-surface
  checked:border-hc-text checked:bg-hc-text ${focusRing}
  disabled:cursor-not-allowed disabled:border-dashed disabled:border-hc-muted`;

export const choiceLabel = `group inline-flex cursor-pointer items-center gap-3 ${t.body} has-disabled:cursor-not-allowed has-disabled:text-hc-muted`;

export function Checkbox({ label, className = "", ...props }: Props) {
  return (
    <label className={choiceLabel}>
      <input type="checkbox" className={`hcu-check ${choiceInput} ${className}`} {...props} />
      {label}
    </label>
  );
}
