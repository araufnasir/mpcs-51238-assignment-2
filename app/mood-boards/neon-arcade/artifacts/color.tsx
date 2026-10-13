import { colorOf, findDirection } from "../../../directions";
import { contrast, readableOn, verdict } from "../../../lib/contrast";
import type { Role } from "../../../directions";
import type { Artifact } from "../../../lib/artifact";

const SLUG = "neon-arcade";
const { palette } = findDirection(SLUG);
const nameOf = (role: Role) => palette.find((s) => s.role === role)!.name;

const pairs: [Role, Role][] = [
  ["text", "background"],
  ["text", "surface"],
  ["background", "accent"],
  ["accent", "background"],
  ["accent", "surface"],
  ["secondary", "background"],
  ["secondary", "surface"],
];

const roleNote: Record<string, string> = {
  background: "The screen",
  surface: "Panels and cards",
  text: "All words and borders",
  accent: "Primary action and the title glow",
  secondary: "Focus rings, one highlight",
};

/** Suggested share of any screen, in percent. */
const budget: { role: Role; percent: number }[] = [
  { role: "background", percent: 56 },
  { role: "surface", percent: 28 },
  { role: "text", percent: 11 },
  { role: "accent", percent: 4 },
  { role: "secondary", percent: 1 },
];

const rampSteps = [0, 20, 40, 60, 80, 100];

export const colorArtifacts: Artifact[] = [
  {
    title: "Palette",
    span: "md:col-span-12",
    node: (
      <div className="grid grid-cols-5 gap-3">
        {palette.map((s) => (
          <div
            key={s.hex}
            className="flex h-48 flex-col justify-end border-4 border-na-text p-2 md:p-3"
            style={{ backgroundColor: s.hex, color: readableOn(s.hex, colorOf(SLUG, "text"), colorOf(SLUG, "background")) }}
          >
            <p className="text-xs font-bold uppercase md:text-sm">{s.name}</p>
            <p className="text-[10px] md:text-xs">{s.hex}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Roles",
    span: "md:col-span-5",
    node: (
      <dl className="space-y-3">
        {palette.map((s) => (
          <div key={s.hex} className="flex items-center gap-3">
            <span className="h-6 w-6 shrink-0 border-4 border-na-text" style={{ backgroundColor: s.hex }} />
            <dt className="w-24 shrink-0 text-xs font-bold uppercase tracking-[0.1em]">{s.role}</dt>
            <dd className="text-sm">{roleNote[s.role]}</dd>
          </div>
        ))}
      </dl>
    ),
  },
  {
    title: "Contrast pairs",
    span: "md:col-span-7",
    node: (
      <ul className="grid gap-3 sm:grid-cols-2">
        {pairs.map(([fg, bg]) => {
          const ratio = contrast(colorOf(SLUG, fg), colorOf(SLUG, bg));
          return (
            <li key={`${fg}-${bg}`} className="flex items-center gap-3">
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center border-4 border-na-line font-na-display text-sm"
                style={{ color: colorOf(SLUG, fg), backgroundColor: colorOf(SLUG, bg) }}
              >
                Aa
              </span>
              <span className="text-xs leading-snug">
                <span className="font-bold uppercase tracking-[0.05em]">{nameOf(fg)} on {nameOf(bg)}</span>
                <br />
                {ratio.toFixed(2)}:1 · {verdict(ratio)}
              </span>
            </li>
          );
        })}
      </ul>
    ),
  },
  {
    title: "Color budget",
    span: "md:col-span-7",
    node: (
      <>
        <div className="flex h-12 border-4 border-na-text">
          {budget.map(({ role, percent }) => (
            <div key={role} style={{ flexGrow: percent, backgroundColor: colorOf(SLUG, role) }} />
          ))}
        </div>
        <p className="mt-3 text-sm">
          Magenta is the one primary glow. Cyan is a pinch: focus rings and a single highlight.
        </p>
      </>
    ),
  },
  {
    title: "Stepped ramp",
    span: "md:col-span-5",
    node: (
      <div className="flex h-12 border-4 border-na-text">
        {rampSteps.map((step) => (
          <div
            key={step}
            className="flex-1"
            style={{ backgroundColor: `color-mix(in srgb, var(--na-accent) ${step}%, var(--na-background))` }}
          />
        ))}
      </div>
    ),
  },
];
