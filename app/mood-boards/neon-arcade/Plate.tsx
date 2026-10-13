import type { ReactNode } from "react";
import { PixelBox } from "./PixelBox";

type Props = { number: number; title: string; span: string; children: ReactNode };

/** One numbered artifact on the board. */
export function Plate({ number, title, span, children }: Props) {
  return (
    <PixelBox outer={span} className="border-na-line bg-na-surface p-5">
      <figure>
        <figcaption className="mb-4 flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.1em]">
          <span>{title}</span>
          <span className="font-na-display text-[10px]">{String(number).padStart(2, "0")}</span>
        </figcaption>
        {children}
      </figure>
    </PixelBox>
  );
}
