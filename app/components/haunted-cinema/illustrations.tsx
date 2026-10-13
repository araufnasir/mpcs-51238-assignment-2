import { useId, type ReactNode } from "react";

/**
 * Original SVG illustrations, flat-filled with palette variables only.
 * "board" is the full mood-board treatment, with the red sky and red frame.
 * "quiet" uses Bone and Ash only and no ground, so a drawing can sit on the page at low opacity.
 */
export type Tone = "board" | "quiet";

type Common = { tone?: Tone; label?: string; decorative?: boolean; className?: string };

const TEXT = "var(--hc-text)";
const MUTED = "var(--hc-muted)";
const BACKGROUND = "var(--hc-background)";
const SURFACE = "var(--hc-surface)";
const ACCENT = "var(--hc-accent)";

type ArtProps = { viewBox: string; label?: string; decorative?: boolean; className?: string; children: ReactNode };

/** The SVG frame. A decorative drawing is hidden from screen readers. */
export function Art({ viewBox, label, decorative, className = "block h-auto w-full", children }: ArtProps) {
  return decorative ? (
    <svg viewBox={viewBox} aria-hidden className={className}>{children}</svg>
  ) : (
    <svg viewBox={viewBox} role="img" aria-label={label} className={className}>{children}</svg>
  );
}

/** A sky that fades from the page color to the accent. Board tone only. */
export function Sky({ id, height }: { id: string; height: number }) {
  return (
    <>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={BACKGROUND} />
          <stop offset="1" stopColor={ACCENT} />
        </linearGradient>
      </defs>
      <rect width="300" height={height} fill={`url(#${id})`} />
    </>
  );
}

export function MoonAndTree({ tone = "board", label = "A full moon behind a bare tree", ...rest }: Common) {
  const board = tone === "board";
  const tree = board ? BACKGROUND : MUTED;
  return (
    <Art viewBox="0 0 300 200" label={label} {...rest}>
      {board && <Sky id="sky-tree" height={200} />}
      <circle cx="205" cy="85" r="54" fill={TEXT} />
      <circle cx="190" cy="70" r="9" fill={MUTED} opacity=".5" />
      <circle cx="222" cy="102" r="12" fill={MUTED} opacity=".5" />
      <g fill="none" stroke={tree} strokeLinecap="round">
        <path d="M62 200C64 160 58 130 66 98" strokeWidth="10" />
        <path d="M66 98C50 80 40 70 22 52M66 98C82 76 96 66 128 46M61 128C45 118 34 114 14 108M64 114C88 100 104 98 132 90" strokeWidth="5" />
        <path d="M44 72 36 48M100 62 112 36M116 55 140 58M28 56 10 50M118 94 136 112" strokeWidth="2.5" />
      </g>
      {board && <rect y="180" width="300" height="20" fill={BACKGROUND} />}
    </Art>
  );
}

const bats = [
  { x: 70, y: 60, s: 1.3, r: -12 },
  { x: 150, y: 40, s: 0.8, r: 8 },
  { x: 215, y: 85, s: 1.1, r: 14 },
  { x: 110, y: 105, s: 0.7, r: -6 },
  { x: 245, y: 35, s: 0.6, r: -10 },
  { x: 40, y: 120, s: 0.55, r: 6 },
];

export function Bats({ tone = "board", label = "A swarm of bats crossing the moon", ...rest }: Common) {
  const board = tone === "board";
  return (
    <Art viewBox="0 0 300 160" label={label} {...rest}>
      {board && <rect width="300" height="160" fill={SURFACE} />}
      <circle cx="150" cy="80" r="62" fill={MUTED} />
      {bats.map(({ x, y, s, r }) => (
        <path
          key={`${x}-${y}`}
          transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}
          d="M0 0C-8-10-20-12-34-4-27-4-22 0-20 7-14 2-8 4-4 11L0 6 4 11C8 4 14 2 20 7 22 0 27-4 34-4 20-12 8-10 0 0z"
          fill={board ? BACKGROUND : TEXT}
        />
      ))}
    </Art>
  );
}

/** The five frame drawings, each in a 60-unit box. The red one is muted in the quiet tone. */
function filmFrames(tone: Tone): ReactNode[] {
  return [
    <circle key="moon" cx="30" cy="30" r="14" fill={TEXT} />,
    <path key="cross" d="M26 12h8v12h10v8H34v18h-8V32H16v-8h10z" fill={TEXT} />,
    <rect key="block" x="8" y="8" width="44" height="44" fill={tone === "board" ? ACCENT : MUTED} />,
    <path key="door" d="M16 54V22a14 14 0 0 1 28 0v32z" fill={TEXT} />,
    <path key="rays" d="M30 4 40 56H20z" fill={MUTED} />,
  ];
}

export function FilmStrip({ tone = "board", label = "A strip of film with five small frames", ...rest }: Common) {
  return (
    <Art viewBox="0 0 320 120" label={label} {...rest}>
      <rect width="320" height="120" fill={BACKGROUND} stroke={MUTED} />
      {filmFrames(tone).map((frame, i) => (
        <g key={i} transform={`translate(${12 + i * 61} 0)`}>
          {[0, 1, 2, 3].map((hole) => (
            <g key={hole}>
              <rect x={hole * 14} y="6" width="8" height="8" fill={MUTED} />
              <rect x={hole * 14} y="106" width="8" height="8" fill={MUTED} />
            </g>
          ))}
          <rect y="20" width="56" height="80" fill={SURFACE} />
          <g transform="translate(0 30)">{frame}</g>
        </g>
      ))}
    </Art>
  );
}

/** The same film frames, tiled into a thin strip that runs the full width. Decorative, quiet tone. */
export function FilmDivider({ className = "" }: { className?: string }) {
  const id = useId();
  return (
    <svg aria-hidden className={`block h-7 w-full ${className}`}>
      <defs>
        <pattern id={id} width="220" height="28" patternUnits="userSpaceOnUse">
          {filmFrames("quiet").map((frame, i) => (
            <g key={i} transform={`translate(${i * 44} 0)`}>
              {[4, 16, 28].map((x) => (
                <g key={x}>
                  <rect x={x} y="3" width="5" height="4" fill={MUTED} />
                  <rect x={x} y="21" width="5" height="4" fill={MUTED} />
                </g>
              ))}
              <rect x="3" y="9.5" width="38" height="9" fill="none" stroke={MUTED} />
              <g transform="translate(17.5 9.5) scale(.15)">{frame}</g>
            </g>
          ))}
        </pattern>
      </defs>
      <rect width="100%" height="28" fill={`url(#${id})`} />
    </svg>
  );
}
