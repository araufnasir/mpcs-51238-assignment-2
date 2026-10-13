import type { ButtonHTMLAttributes } from "react";
import { focusRing, type as t } from "./type";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" };

const base = `${t.label} border px-5 py-2.5 transition-colors duration-100
  enabled:state-pressed:translate-y-px ${focusRing}
  disabled:cursor-not-allowed disabled:border-dotted disabled:border-ln-muted disabled:bg-transparent disabled:text-ln-muted`;

const variants = {
  /** Oxblood lives here and nowhere else. */
  primary:
    "border-ln-accent bg-ln-accent text-ln-background enabled:state-hover:border-[color-mix(in_srgb,var(--ln-accent)_80%,black)] enabled:state-hover:bg-[color-mix(in_srgb,var(--ln-accent)_80%,black)] enabled:state-hover:underline enabled:state-hover:underline-offset-4 enabled:state-pressed:border-[color-mix(in_srgb,var(--ln-accent)_60%,black)] enabled:state-pressed:bg-[color-mix(in_srgb,var(--ln-accent)_60%,black)]",
  secondary:
    "border-ln-text bg-transparent text-ln-text enabled:state-hover:bg-ln-text enabled:state-hover:text-ln-background enabled:state-pressed:bg-[color-mix(in_srgb,var(--ln-text)_80%,var(--ln-background))] enabled:state-pressed:text-ln-background",
};

export function Button({ variant = "secondary", className = "", type = "button", ...props }: Props) {
  return <button type={type} className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
