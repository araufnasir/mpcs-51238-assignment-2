import type { ReactNode } from "react";

type Props = { number: number; title: string; span: string; children: ReactNode };

/** One numbered artifact: a hairline rule, a small-caps caption, then the piece. */
export function Plate({ number, title, span, children }: Props) {
  return (
    <figure className={`border-t border-ln-text pt-3 ${span}`}>
      <figcaption className="ln-smallcaps mb-5 flex items-baseline justify-between gap-4 text-base">
        <span>{title}</span>
        <span className="tabular-nums text-ln-muted">No. {String(number).padStart(2, "0")}</span>
      </figcaption>
      {children}
    </figure>
  );
}
