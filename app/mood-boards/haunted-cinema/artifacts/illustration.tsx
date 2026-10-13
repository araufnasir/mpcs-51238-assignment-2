import type { ReactNode } from "react";
import type { Artifact } from "./types";

type Props = { viewBox: string; label: string; children: ReactNode };

/** Shared SVG frame: every illustration is original, flat-filled and uses palette variables only. */
const Art = ({ viewBox, label, children }: Props) => (
  <svg viewBox={viewBox} role="img" aria-label={label} className="block h-auto w-full">
    {children}
  </svg>
);

const Sky = ({ id, height }: { id: string; height: number }) => (
  <>
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="var(--hc-background)" />
        <stop offset="1" stopColor="var(--hc-accent)" />
      </linearGradient>
    </defs>
    <rect width="300" height={height} fill={`url(#${id})`} />
  </>
);

const bats = [
  { x: 70, y: 60, s: 1.3, r: -12 },
  { x: 150, y: 40, s: 0.8, r: 8 },
  { x: 215, y: 85, s: 1.1, r: 14 },
  { x: 110, y: 105, s: 0.7, r: -6 },
  { x: 245, y: 35, s: 0.6, r: -10 },
  { x: 40, y: 120, s: 0.55, r: 6 },
];

const frames = [
  <circle key="moon" cx="30" cy="30" r="14" fill="var(--hc-text)" />,
  <path key="cross" d="M26 12h8v12h10v8H34v18h-8V32H16v-8h10z" fill="var(--hc-text)" />,
  <rect key="red" x="8" y="8" width="44" height="44" fill="var(--hc-accent)" />,
  <path key="door" d="M16 54V22a14 14 0 0 1 28 0v32z" fill="var(--hc-text)" />,
  <path key="rays" d="M30 4 40 56H20z" fill="var(--hc-muted)" />,
];

export const illustrationArtifacts: Artifact[] = [
  {
    title: "Moon and bare tree",
    span: "md:col-span-6",
    node: (
      <Art viewBox="0 0 300 200" label="A full moon behind a bare tree">
        <Sky id="sky-tree" height={200} />
        <circle cx="205" cy="85" r="54" fill="var(--hc-text)" />
        <circle cx="190" cy="70" r="9" fill="var(--hc-muted)" opacity=".5" />
        <circle cx="222" cy="102" r="12" fill="var(--hc-muted)" opacity=".5" />
        <g fill="none" stroke="var(--hc-background)" strokeLinecap="round">
          <path d="M62 200C64 160 58 130 66 98" strokeWidth="10" />
          <path d="M66 98C50 80 40 70 22 52M66 98C82 76 96 66 128 46M61 128C45 118 34 114 14 108M64 114C88 100 104 98 132 90" strokeWidth="5" />
          <path d="M44 72 36 48M100 62 112 36M116 55 140 58M28 56 10 50M118 94 136 112" strokeWidth="2.5" />
        </g>
        <rect y="180" width="300" height="20" fill="var(--hc-background)" />
      </Art>
    ),
  },
  {
    title: "Graveyard",
    span: "md:col-span-6",
    node: (
      <Art viewBox="0 0 300 200" label="Crooked headstones and an iron gate at dusk">
        <Sky id="sky-yard" height={200} />
        <g fill="var(--hc-background)">
          <path d="M0 200V150Q80 125 150 150T300 140V200z" />
          <path d="M30 160v-30a14 14 0 0 1 28 0v30zM90 168v-22a12 12 0 0 1 24 0v22zM190 160v-34a15 15 0 0 1 30 0v34z" />
          <path d="M250 165v-48h8v14h14v8h-14v26zM142 135v-36h7v10h12v7h-12v19z" />
        </g>
        <g stroke="var(--hc-background)" strokeWidth="3">
          <path d="M0 140h300M0 128v34M16 128v34M32 128v34M48 128v34" transform="translate(0 20)" />
          <path d="M255 110V60a22 22 0 0 1 44 0v50" fill="none" strokeWidth="5" transform="translate(-20 20)" />
        </g>
      </Art>
    ),
  },
  {
    title: "Reaching hand",
    span: "md:col-span-4",
    node: (
      <Art viewBox="0 0 200 240" label="A hand reaching out of the ground in front of a red sun">
        <circle cx="100" cy="100" r="85" fill="var(--hc-accent)" />
        <g fill="none" stroke="var(--hc-background)" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round">
          <path d="M82 178 60 152 55 130M88 162 80 112 84 80M100 160V102l4-34M112 162l8-52 6-26M122 170l18-38 10-18" />
        </g>
        <g fill="var(--hc-background)">
          <ellipse cx="100" cy="178" rx="29" ry="30" />
          <path d="M76 190 70 240h60l-6-50z" />
          <path d="M0 240v-20Q50 205 100 222T200 215v25z" />
        </g>
      </Art>
    ),
  },
  {
    title: "Eye",
    span: "md:col-span-8",
    node: (
      <Art viewBox="0 0 300 160" label="A wide-open eye with a red iris">
        <defs>
          <clipPath id="eye-lid">
            <path d="M10 80Q150-10 290 80Q150 170 10 80z" />
          </clipPath>
        </defs>
        <g clipPath="url(#eye-lid)">
          <rect width="300" height="160" fill="var(--hc-text)" />
          <g stroke="var(--hc-accent)" strokeWidth="1.5" fill="none" opacity=".6">
            <path d="M10 80Q60 76 100 82M290 80Q240 76 200 82M30 62 90 76M270 98l-60-14M40 100l55-14" />
          </g>
          <circle cx="150" cy="80" r="46" fill="var(--hc-accent)" />
          <circle cx="150" cy="80" r="20" fill="var(--hc-background)" />
          <circle cx="161" cy="68" r="6" fill="var(--hc-text)" />
        </g>
        <path d="M10 80Q150-10 290 80Q150 170 10 80z" fill="none" stroke="var(--hc-background)" strokeWidth="4" />
      </Art>
    ),
  },
  {
    title: "Bats",
    span: "md:col-span-6",
    node: (
      <Art viewBox="0 0 300 160" label="A swarm of bats crossing the moon">
        <rect width="300" height="160" fill="var(--hc-surface)" />
        <circle cx="150" cy="80" r="62" fill="var(--hc-muted)" />
        {bats.map(({ x, y, s, r }) => (
          <path
            key={`${x}-${y}`}
            transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}
            d="M0 0C-8-10-20-12-34-4-27-4-22 0-20 7-14 2-8 4-4 11L0 6 4 11C8 4 14 2 20 7 22 0 27-4 34-4 20-12 8-10 0 0z"
            fill="var(--hc-background)"
          />
        ))}
      </Art>
    ),
  },
  {
    title: "Film strip",
    span: "md:col-span-6",
    node: (
      <Art viewBox="0 0 320 120" label="A strip of film with five small frames">
        <rect width="320" height="120" fill="var(--hc-background)" stroke="var(--hc-muted)" />
        {frames.map((frame, i) => (
          <g key={i} transform={`translate(${12 + i * 61} 0)`}>
            {[0, 1, 2, 3].map((hole) => (
              <g key={hole}>
                <rect x={hole * 14} y="6" width="8" height="8" fill="var(--hc-muted)" />
                <rect x={hole * 14} y="106" width="8" height="8" fill="var(--hc-muted)" />
              </g>
            ))}
            <rect y="20" width="56" height="80" fill="var(--hc-surface)" />
            <g transform="translate(0 30)">{frame}</g>
          </g>
        ))}
      </Art>
    ),
  },
];
