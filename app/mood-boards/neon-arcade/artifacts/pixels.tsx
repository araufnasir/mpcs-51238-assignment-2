/** Pixel art helpers. One character is one pixel; "." is transparent. */

const colors: Record<string, string> = {
  m: "var(--na-accent)",
  c: "var(--na-secondary)",
  w: "var(--na-text)",
  p: "var(--na-surface)",
  k: "var(--na-background)",
  l: "var(--na-line)",
};

export type Grid = string[][];
type Tint = Record<string, string>;

/** Turns text rows into a grid and checks that every row is the same width. */
export function sprite(rows: string[]): Grid {
  rows.forEach((row, i) => {
    if (row.length !== rows[0].length) throw new Error(`Sprite row ${i} is ${row.length} wide, expected ${rows[0].length}`);
  });
  return rows.map((row) => [...row]);
}

export function canvas(width: number, height: number): Grid {
  return Array.from({ length: height }, () => Array<string>(width).fill("."));
}

/** Draws a sprite onto a canvas, optionally swapping some of its colors. */
export function stamp(target: Grid, art: Grid, x: number, y: number, tint: Tint = {}) {
  art.forEach((row, dy) =>
    row.forEach((ch, dx) => {
      if (ch !== ".") target[y + dy][x + dx] = tint[ch] ?? ch;
    }),
  );
}

export function dot(target: Grid, points: [number, number][], color: string) {
  points.forEach(([x, y]) => (target[y][x] = color));
}

export function disc(target: Grid, cx: number, cy: number, r: number, color: string, skip: (y: number) => boolean = () => false) {
  target.forEach((row, y) =>
    row.forEach((_, x) => {
      if ((x - cx) ** 2 + (y - cy) ** 2 <= r * r && !skip(y)) target[y][x] = color;
    }),
  );
}

export function Sprite({ art, label, className = "w-full" }: { art: Grid; label: string; className?: string }) {
  const height = art.length;
  const width = art[0].length;
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label={label}
      shapeRendering="crispEdges"
      className={`block h-auto ${className}`}
    >
      <rect width={width} height={height} fill={colors.k} />
      {art.map((row, y) =>
        [...row.join("").matchAll(/(.)\1*/g)].map((run) =>
          run[1] === "." ? null : (
            <rect key={`${y}-${run.index}`} x={run.index} y={y} width={run[0].length} height={1} fill={colors[run[1]]} />
          ),
        ),
      )}
    </svg>
  );
}
