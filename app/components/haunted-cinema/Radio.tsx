import type { InputHTMLAttributes } from "react";
import { choiceInput, choiceLabel } from "./Checkbox";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & { label: string };

/** Radios stay round so they read as radios; every other corner in the system is square. */
export function Radio({ label, className = "", ...props }: Props) {
  return (
    <label className={choiceLabel}>
      <input type="radio" className={`hcu-radio rounded-full ${choiceInput} ${className}`} {...props} />
      {label}
    </label>
  );
}
