import type { ReactNode } from "react";
import type { Artifact } from "../../../lib/artifact";

const INK = "var(--ln-text)";
const PAPER = "var(--ln-surface)";
const OXBLOOD = "var(--ln-accent)";

/** One-color line drawing: 1.25px ink strokes at any size, oxblood used once per drawing. */
const Line = ({ viewBox, label, className = "w-full", children }: { viewBox: string; label: string; className?: string; children: ReactNode }) => (
  <svg viewBox={viewBox} role="img" aria-label={label} className={`mx-auto block h-auto [&_*]:[vector-effect:non-scaling-stroke] ${className}`}>
    <g fill="none" stroke={INK} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </g>
  </svg>
);

const grooves = [80, 70, 60, 50, 40];
const sleeveLines = [150, 160, 170, 180];

function Note({ x, y, stem, color = INK }: { x: number; y: number; stem?: number; color?: string }) {
  return (
    <g stroke={color} fill={color}>
      <ellipse cx={x} cy={y} rx="9" ry="6.5" transform={`rotate(-20 ${x} ${y})`} />
      {stem !== undefined && <path d={`M${x + 8} ${y - 2}V${stem}`} fill="none" strokeWidth="1.5" />}
    </g>
  );
}

const staffLines = [30, 45, 60, 75, 90];
const headstones = [
  { x: 24, top: 96, width: 44 },
  { x: 88, top: 116, width: 38 },
  { x: 168, top: 100, width: 46 },
];
const hatching = Array.from({ length: 22 }, (_, i) => 6 + i * 13);
const stars: [number, number][] = [[30, 30], [78, 58], [140, 26], [118, 70], [270, 150]];

export const illustrationArtifacts: Artifact[] = [
  {
    title: "Record and sleeve",
    span: "md:col-span-6",
    node: (
      <Line viewBox="0 0 320 220" label="A vinyl record sliding out of its square sleeve">
        <circle cx="205" cy="108" r="92" fill={PAPER} />
        {grooves.map((r) => (
          <circle key={r} cx="205" cy="108" r={r} strokeWidth="0.75" />
        ))}
        <circle cx="205" cy="108" r="26" fill={OXBLOOD} stroke={OXBLOOD} />
        <circle cx="205" cy="108" r="3" fill={PAPER} />
        <rect x="14" y="18" width="180" height="180" fill={PAPER} />
        <circle cx="104" cy="82" r="34" />
        <circle cx="104" cy="82" r="22" strokeWidth="0.75" />
        {sleeveLines.map((y, i) => (
          <path key={y} d={`M34 ${y}H${i % 2 ? 120 : 164}`} strokeWidth="0.75" />
        ))}
      </Line>
    ),
  },
  {
    title: "Glove",
    span: "md:col-span-3",
    node: (
      <Line viewBox="0 0 200 250" label="A single glove, palm down" className="w-full max-w-44">
        <rect x="34" y="112" width="22" height="66" rx="11" fill={PAPER} transform="rotate(-32 45 145)" />
        <rect x="64" y="40" width="20" height="74" rx="10" fill={PAPER} />
        <rect x="86" y="26" width="20" height="88" rx="10" fill={PAPER} />
        <rect x="108" y="34" width="20" height="80" rx="10" fill={PAPER} />
        <rect x="130" y="54" width="18" height="60" rx="9" fill={PAPER} />
        <rect x="62" y="98" width="88" height="88" rx="8" fill={PAPER} />
        <path d="M76 112Q84 118 92 112M98 108Q106 114 114 108M120 112Q128 118 136 112" strokeWidth="0.75" />
        <rect x="58" y="184" width="96" height="40" fill={OXBLOOD} stroke={OXBLOOD} />
        <path d="M58 194H154M58 214H154" stroke={PAPER} strokeWidth="0.75" />
      </Line>
    ),
  },
  {
    title: "Hat",
    span: "md:col-span-4",
    node: (
      <Line viewBox="0 0 260 160" label="A brimmed hat with a dark band">
        <path d="M12 112C30 78 230 78 248 112C230 150 30 150 12 112Z" fill={PAPER} />
        <path d="M62 108C60 52 84 26 130 26C176 26 200 52 198 108C160 124 100 124 62 108Z" fill={PAPER} />
        <path d="M96 32Q130 56 164 32" strokeWidth="0.75" />
        <path d="M62 90C100 106 160 106 198 90L198 108C160 124 100 124 62 108Z" fill={OXBLOOD} stroke={OXBLOOD} />
      </Line>
    ),
  },
  {
    title: "Moon and headstones",
    span: "md:col-span-5",
    node: (
      <Line viewBox="0 0 300 200" label="A full moon over three headstones">
        <circle cx="214" cy="68" r="46" fill={OXBLOOD} stroke={OXBLOOD} />
        {stars.map(([x, y]) => (
          <path key={`${x}-${y}`} d={`M${x - 4} ${y}H${x + 4}M${x} ${y - 4}V${y + 4}`} strokeWidth="0.75" />
        ))}
        {headstones.map(({ x, top, width }) => (
          <g key={x}>
            <path d={`M${x} 160V${top + width / 2}A${width / 2} ${width / 2} 0 0 1 ${x + width} ${top + width / 2}V160Z`} fill={PAPER} />
            <path d={`M${x + width / 2} ${top + 16}V${top + 44}M${x + width / 2 - 8} ${top + 24}H${x + width / 2 + 8}`} strokeWidth="0.75" />
          </g>
        ))}
        <path d="M0 160H300" />
        {hatching.map((x) => (
          <path key={x} d={`M${x} 176L${x + 10} 162`} strokeWidth="0.75" />
        ))}
      </Line>
    ),
  },
  {
    title: "Bar of notes",
    span: "md:col-span-6",
    node: (
      <Line viewBox="0 0 320 120" label="Four notes on a five-line staff" className="w-full">
        {staffLines.map((y) => (
          <path key={y} d={`M10 ${y}H310`} strokeWidth="0.75" />
        ))}
        <path d="M10 30V90M310 30V90" />
        <path d="M304 30V90" strokeWidth="3" />
        <Note x={100} y={75} stem={30} />
        <Note x={150} y={60} stem={15} />
        <path d="M108 30L158 15V25L108 40Z" fill={INK} />
        <Note x={210} y={45} stem={90} />
        <Note x={260} y={90} stem={45} color={OXBLOOD} />
      </Line>
    ),
  },
  {
    title: "Microphone",
    span: "md:col-span-3",
    node: (
      <Line viewBox="0 0 160 240" label="A vintage microphone on a short stand" className="w-full max-w-40">
        <defs>
          <clipPath id="mic-head">
            <circle cx="80" cy="62" r="38" />
          </clipPath>
        </defs>
        <circle cx="80" cy="62" r="38" fill={PAPER} />
        <g clipPath="url(#mic-head)" strokeWidth="0.75">
          {[-24, -12, 0, 12, 24].map((dx) => (
            <path key={dx} d={`M${80 + dx} 20V104`} />
          ))}
          {[40, 52, 64, 76, 88].map((y) => (
            <path key={y} d={`M40 ${y}H120`} />
          ))}
        </g>
        <path d="M62 98 70 118H90L98 98" fill={PAPER} />
        <rect x="64" y="118" width="32" height="78" rx="14" fill={PAPER} />
        <rect x="64" y="128" width="32" height="12" fill={OXBLOOD} stroke={OXBLOOD} />
        <path d="M80 196V212C80 230 40 222 30 236" />
      </Line>
    ),
  },
];
