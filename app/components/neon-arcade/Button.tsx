import type { ButtonHTMLAttributes } from "react";
import { focusRing, type as t } from "./type";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" };

/** The button carries the hard shadow and lift; its face is clipped into stepped corners. */
const base = `group [--offset:4px] transition-[filter,translate] duration-100 [filter:drop-shadow(var(--offset)_var(--offset)_0_var(--shadow-color))]
  enabled:state-hover:[--offset:7px] enabled:state-hover:-translate-x-[3px] enabled:state-hover:-translate-y-[3px]
  enabled:state-pressed:[--offset:0px] enabled:state-pressed:translate-x-1 enabled:state-pressed:translate-y-1
  ${focusRing} disabled:cursor-not-allowed disabled:[filter:none]`;

const face = `nau-pixel block border-4 px-6 py-3.5 ${t.label}
  group-disabled:border-dashed group-disabled:border-na-muted group-disabled:bg-transparent group-disabled:text-na-muted`;

const variants = {
  /** The accent, and its glow, live here and nowhere else. */
  primary: {
    button: "[--shadow-color:var(--na-text)] [filter:drop-shadow(var(--offset)_var(--offset)_0_var(--shadow-color))_drop-shadow(0_0_12px_color-mix(in_srgb,var(--na-accent)_65%,transparent))]",
    face: "border-na-text bg-na-accent text-na-background group-enabled:group-state-pressed:bg-[color-mix(in_srgb,var(--na-accent)_70%,black)]",
  },
  secondary: {
    button: "[--shadow-color:var(--na-border)]",
    face: "border-na-text bg-na-background text-na-text group-enabled:group-state-hover:bg-na-surface group-enabled:group-state-pressed:bg-na-pressed",
  },
};

export function Button({ variant = "secondary", className = "", type = "button", children, ...props }: Props) {
  const v = variants[variant];
  return (
    <button type={type} className={`${base} ${v.button} ${className}`} {...props}>
      <span className={`${face} ${v.face}`}>{children}</span>
    </button>
  );
}
