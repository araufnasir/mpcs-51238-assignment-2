import type { CSSProperties, ReactNode } from "react";

type Props = {
  /** Classes for the clipped box: background, border color, padding. */
  className?: string;
  /** Classes for the shadow wrapper, such as grid spans. */
  outer?: string;
  shadowColor?: string;
  offset?: string;
  children: ReactNode;
};

/** A 4px-bordered box with stepped corners and a hard offset shadow. */
export function PixelBox({ className = "", outer = "", shadowColor, offset, children }: Props) {
  const vars = { "--shadow-color": shadowColor, "--offset": offset } as CSSProperties;
  return (
    <div className={`na-shadow ${outer}`} style={vars}>
      <div className={`na-pixel h-full border-4 ${className}`}>{children}</div>
    </div>
  );
}
