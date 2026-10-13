import type { ComponentProps } from "react";
import NextLink from "next/link";
import { focusRing } from "./type";

type Props = ComponentProps<typeof NextLink> & { disabled?: boolean };

const base = `underline decoration-1 underline-offset-4 ${focusRing}
  state-hover:bg-ln-surface state-hover:decoration-[3px] state-pressed:bg-ln-pressed`;

/** A text link. A disabled link is plain text, not an anchor, so it can't be focused or followed. */
export function Link({ disabled, className = "", children, ...props }: Props) {
  if (disabled) {
    return (
      <span aria-disabled="true" className={`cursor-not-allowed text-ln-muted underline decoration-dotted decoration-1 underline-offset-4 ${className}`}>
        {children}
      </span>
    );
  }
  return (
    <NextLink className={`${base} ${className}`} {...props}>
      {children}
    </NextLink>
  );
}
