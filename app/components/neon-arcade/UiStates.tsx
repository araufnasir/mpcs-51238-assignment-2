import type { ReactNode } from "react";
import { PixelIcon } from "./fields";
import { type as t } from "./type";

type Props = { title: string; children?: ReactNode; action?: ReactNode };

const checkRects: [number, number, number][] = [[1, 3, 1], [2, 4, 1], [3, 5, 1], [4, 4, 1], [5, 3, 1], [6, 2, 1], [7, 1, 1]];
const boxRects: [number, number, number][] = [[0, 0, 9], [0, 1, 1], [8, 1, 1], [0, 2, 1], [8, 2, 1], [0, 3, 1], [8, 3, 1], [0, 4, 1], [8, 4, 1], [0, 5, 1], [8, 5, 1], [0, 6, 9]];

/** Nothing to show: a dashed frame, so it reads as a gap and not as content. */
export function EmptyState({ title, children, action }: Props) {
  return (
    <div className="nau-pixel flex flex-col items-center gap-3 border-4 border-dashed border-na-border p-8 text-center">
      <PixelIcon rects={boxRects} size={9} className="h-8 w-10 text-na-muted" />
      <h3 className={t.heading}>{title}</h3>
      {children && <p className={`${t.body} max-w-[40ch] text-na-muted`}>{children}</p>}
      {action && <div className="pb-1 pt-2">{action}</div>}
    </div>
  );
}

/** Content on its way: blocks that blink in steps, unless the visitor prefers reduced motion. */
export function LoadingState({ label }: { label: string }) {
  return (
    <div role="status" aria-live="polite" className="nau-pixel border-4 border-na-border p-6">
      <p className={`${t.label} mb-4`}>{label}</p>
      <div className="space-y-3" aria-hidden>
        {[100, 83, 91].map((width) => (
          <div key={width} className="h-8 bg-na-surface motion-safe:animate-[nau-blink_1s_steps(1)_infinite]" style={{ width: `${width}%` }} />
        ))}
      </div>
    </div>
  );
}

/** Something failed: stripes, a warning block and the word "Error", so it never depends on color. */
export function ErrorState({ title, children, action }: Props) {
  return (
    <div role="alert" className="nau-pixel flex border-4 border-na-text bg-na-surface">
      <div aria-hidden className="w-5 shrink-0 bg-[repeating-linear-gradient(135deg,var(--na-text)_0_6px,transparent_6px_12px)]" />
      <div className="flex flex-1 flex-col items-start gap-3 p-6">
        <p className={`${t.label} flex items-center gap-3`}>
          <span aria-hidden className="flex size-6 items-center justify-center bg-na-text font-na-display text-xs text-na-background">!</span>
          Error
        </p>
        <h3 className={t.heading}>{title}</h3>
        {children && <p className={t.body}>{children}</p>}
        {action && <div className="pb-1 pt-2">{action}</div>}
      </div>
    </div>
  );
}

/** It worked: a solid frame with a pixel check mark. */
export function SuccessState({ title, children, action }: Props) {
  return (
    <div role="status" className="nau-pixel flex items-start gap-4 border-4 border-na-text p-6">
      <PixelIcon rects={checkRects} size={9} className="size-10 shrink-0" />
      <div className="flex flex-col items-start gap-3">
        <h3 className={t.heading}>{title}</h3>
        {children && <p className={t.body}>{children}</p>}
        {action && <div className="pb-1 pt-2">{action}</div>}
      </div>
    </div>
  );
}
