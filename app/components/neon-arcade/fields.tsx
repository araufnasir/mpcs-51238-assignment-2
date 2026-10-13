import { focusRingClipped } from "./type";

/** Shared by the text input, search field and select. */
export const fieldClasses = `nau-pixel w-full border-4 border-na-border bg-na-background px-3 py-2.5 font-na-body text-base text-na-text placeholder:text-na-muted
  enabled:state-hover:border-na-text state-focus:border-na-secondary ${focusRingClipped}
  disabled:cursor-not-allowed disabled:border-dashed disabled:text-na-muted
  aria-invalid:border-na-text aria-invalid:shadow-[inset_0_0_0_4px_var(--na-text)]`;

type Rects = [x: number, y: number, w: number][];

/** A small icon drawn from square pixels. */
export function PixelIcon({ rects, size, className = "" }: { rects: Rects; size: number; className?: string }) {
  return (
    <svg aria-hidden viewBox={`0 0 ${size} ${size}`} shapeRendering="crispEdges" fill="currentColor" className={className}>
      {rects.map(([x, y, w]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={w} height={1} />
      ))}
    </svg>
  );
}

export const chevronRects: Rects = [[0, 3, 2], [7, 3, 2], [1, 4, 2], [6, 4, 2], [2, 5, 2], [5, 5, 2], [3, 6, 3]];
export const searchRects: Rects = [[3, 1, 4], [2, 2, 1], [7, 2, 1], [1, 3, 1], [8, 3, 1], [1, 4, 1], [8, 4, 1], [1, 5, 1], [8, 5, 1], [2, 6, 1], [7, 6, 2], [3, 7, 4], [8, 7, 2], [9, 8, 2], [10, 9, 1]];
export const crossRects: Rects = [[0, 0, 2], [6, 0, 2], [1, 1, 2], [5, 1, 2], [2, 2, 2], [4, 2, 2], [3, 3, 2], [2, 4, 2], [4, 4, 2], [1, 5, 2], [5, 5, 2], [0, 6, 2], [6, 6, 2]];
