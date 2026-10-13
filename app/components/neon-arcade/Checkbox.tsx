import type { InputHTMLAttributes } from "react";
import { focusRingClipped, type as t } from "./type";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & { label: string };

/** Shared by Checkbox and Radio. Checked is a cyan fill. */
export const choiceInput = `shrink-0 cursor-pointer appearance-none border-4 border-na-border bg-na-background
  enabled:state-hover:border-na-text enabled:group-state-hover:border-na-text enabled:state-pressed:bg-na-pressed
  checked:border-na-secondary checked:bg-na-secondary ${focusRingClipped}
  disabled:cursor-not-allowed disabled:border-dashed disabled:border-na-muted`;

export const choiceLabel = `group inline-flex cursor-pointer items-center gap-3 ${t.body} has-disabled:cursor-not-allowed has-disabled:text-na-muted`;

export function Checkbox({ label, className = "", ...props }: Props) {
  return (
    <label className={choiceLabel}>
      <input type="checkbox" className={`nau-pixel nau-check size-7 ${choiceInput} ${className}`} {...props} />
      {label}
    </label>
  );
}
