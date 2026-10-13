import type { CSSProperties, ReactNode } from "react";

type Props = { className?: string; offset?: string; shadowColor?: string; children: ReactNode };

/** A 4px-bordered box with stepped corners and a hard offset shadow. */
export function PixelBox({ className = "", offset = "6px", shadowColor, children }: Props) {
  const vars = { "--offset": offset, "--shadow-color": shadowColor } as CSSProperties;
  return (
    <div className="nau-shadow" style={vars}>
      <div className={`nau-pixel border-4 ${className}`}>{children}</div>
    </div>
  );
}
