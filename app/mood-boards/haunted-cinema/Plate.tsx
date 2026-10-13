import type { ReactNode } from "react";

type Props = { number: number; title: string; span: string; children: ReactNode };

/** One numbered artifact on the board. */
export function Plate({ number, title, span, children }: Props) {
  return (
    <figure className={`border border-hc-muted/60 p-5 ${span}`}>
      <figcaption className="mb-4 flex items-baseline justify-between font-hc-label text-sm font-semibold uppercase tracking-[0.14em]">
        <span>{title}</span>
        <span className="text-hc-muted">No. {String(number).padStart(2, "0")}</span>
      </figcaption>
      {children}
    </figure>
  );
}
