import { colorOf, findDirection } from "../../../directions";
import { contrast, verdict } from "../../../lib/contrast";
import type { Role } from "../../../directions";
import type { Artifact } from "../../../lib/artifact";

const SLUG = "liner-notes";
const { palette } = findDirection(SLUG);
const nameOf = (role: Role) => palette.find((s) => s.role === role)!.name;

const pairs: [Role, Role][] = [
  ["text", "background"],
  ["text", "surface"],
  ["muted", "background"],
  ["muted", "surface"],
  ["accent", "background"],
  ["accent", "surface"],
  ["background", "accent"],
];

const roleNote: Record<string, string> = {
  background: "The page",
  surface: "Cards and panels",
  text: "Words, rules, controls",
  muted: "Captions, quiet rules",
  accent: "Primary action, one mark",
};

/** Suggested share of any page, in percent. */
const budget: { role: Role; percent: number }[] = [
  { role: "background", percent: 66 },
  { role: "surface", percent: 20 },
  { role: "text", percent: 10 },
  { role: "muted", percent: 3 },
  { role: "accent", percent: 1 },
];

export const colorArtifacts: Artifact[] = [
  {
    title: "Palette",
    span: "md:col-span-9",
    node: (
      <div className="grid grid-cols-5 gap-3 md:gap-6">
        {palette.map((s) => (
          <div key={s.hex}>
            <div className="h-40 border border-ln-text" style={{ backgroundColor: s.hex }} />
            <p className="ln-smallcaps mt-3 text-base">{s.name}</p>
            <p className="text-sm tabular-nums text-ln-muted">{s.hex}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Roles",
    span: "md:col-span-4",
    node: (
      <dl>
        {palette.map((s) => (
          <div key={s.hex} className="flex items-baseline justify-between gap-4 border-b border-ln-muted/50 py-2 first:pt-0">
            <dt className="ln-smallcaps text-base">{s.role}</dt>
            <dd className="text-right">{roleNote[s.role]}</dd>
          </div>
        ))}
      </dl>
    ),
  },
  {
    title: "Contrast pairs",
    span: "md:col-span-5",
    node: (
      <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
        {pairs.map(([fg, bg]) => {
          const ratio = contrast(colorOf(SLUG, fg), colorOf(SLUG, bg));
          return (
            <li key={`${fg}-${bg}`} className="flex items-center gap-3">
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center border border-ln-text text-2xl"
                style={{ color: colorOf(SLUG, fg), backgroundColor: colorOf(SLUG, bg) }}
              >
                Aa
              </span>
              <span className="text-base leading-tight">
                <span className="ln-smallcaps">{nameOf(fg)} on {nameOf(bg)}</span>
                <br />
                <span className="tabular-nums text-ln-muted">{ratio.toFixed(2)}:1 · {verdict(ratio)}</span>
              </span>
            </li>
          );
        })}
      </ul>
    ),
  },
  {
    title: "Oxblood budget",
    span: "md:col-span-9",
    node: (
      <>
        <div className="flex h-10 border border-ln-text">
          {budget.map(({ role, percent }) => (
            <div key={role} style={{ flexGrow: percent, backgroundColor: colorOf(SLUG, role) }} />
          ))}
        </div>
        <p className="mt-4 max-w-[60ch]">
          Oxblood is a printer&rsquo;s spot color: the primary button and one small mark per page. Never a
          background, never body text.
        </p>
      </>
    ),
  },
];
