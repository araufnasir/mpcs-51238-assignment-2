import type { ButtonHTMLAttributes } from "react";
import { focusRing, type as t } from "./type";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" };

const base = `${t.label} inline-flex items-center justify-center border-2 px-5 py-3 transition duration-100
  enabled:state-hover:-translate-x-0.5 enabled:state-hover:-translate-y-0.5 enabled:state-hover:shadow-[4px_4px_0_var(--hc-text)]
  enabled:state-pressed:translate-x-0 enabled:state-pressed:translate-y-0 enabled:state-pressed:shadow-none
  ${focusRing}
  disabled:cursor-not-allowed disabled:border-dashed disabled:border-hc-muted disabled:bg-transparent disabled:text-hc-muted`;

const variants = {
  /** The accent lives here and nowhere else. */
  primary:
    "border-hc-accent bg-hc-accent text-hc-text enabled:state-pressed:border-[color-mix(in_srgb,var(--hc-accent)_70%,black)] enabled:state-pressed:bg-[color-mix(in_srgb,var(--hc-accent)_70%,black)]",
  secondary:
    "border-hc-text bg-transparent text-hc-text enabled:state-hover:bg-hc-surface enabled:state-pressed:bg-hc-pressed",
};

export function Button({ variant = "secondary", className = "", type = "button", ...props }: Props) {
  return <button type={type} className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
