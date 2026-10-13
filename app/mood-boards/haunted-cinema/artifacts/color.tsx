import { colorOf, findDirection } from "../../../directions";
import { contrast, readableOn, verdict } from "../../../lib/contrast";
import type { Role } from "../../../directions";
import type { Artifact } from "../../../lib/artifact";

const SLUG = "haunted-cinema";
const { palette } = findDirection(SLUG);

const pairs: [Role, Role][] = [
  ["text", "background"],
  ["text", "surface"],
  ["muted", "background"],
  ["muted", "surface"],
  ["text", "accent"],
  ["accent", "background"],
];

const roleNote: Record<string, string> = {
  background: "The room",
  surface: "Cards and panels",
  text: "Everything read",
  muted: "Captions, labels",
  accent: "Primary action only",
};

const washes = [
  "bg-[linear-gradient(to_top,var(--hc-accent),var(--hc-background)_80%)]",
  "bg-[linear-gradient(to_bottom,var(--hc-surface),var(--hc-background))]",
  "bg-[radial-gradient(circle_at_50%_120%,var(--hc-accent),var(--hc-background)_70%)]",
];

export const colorArtifacts: Artifact[] = [
  {
    title: "Palette",
    span: "md:col-span-12",
    node: (
      <div className="grid grid-cols-5 border border-hc-muted">
        {palette.map((s) => (
          <div
            key={s.hex}
            className="flex h-56 flex-col justify-end p-3"
            style={{ backgroundColor: s.hex, color: readableOn(s.hex, colorOf(SLUG, "text"), colorOf(SLUG, "background")) }}
          >
            <p className="font-hc-display text-xl">{s.name}</p>
            <p className="font-hc-label text-xs uppercase tracking-widest">{s.hex}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Roles",
    span: "md:col-span-5",
    node: (
      <dl className="divide-y divide-hc-muted/40">
        {palette.map((s) => (
          <div key={s.hex} className="flex items-baseline justify-between gap-4 py-2">
            <dt className="font-hc-label font-semibold uppercase tracking-[0.14em]">{s.role}</dt>
            <dd className="text-hc-muted">{roleNote[s.role]}</dd>
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
                className="flex h-12 w-12 shrink-0 items-center justify-center border border-hc-muted font-hc-display text-2xl"
                style={{ color: colorOf(SLUG, fg), backgroundColor: colorOf(SLUG, bg) }}
              >
                Aa
              </span>
              <span className="font-hc-label text-sm uppercase leading-tight tracking-[0.1em]">
                {fg} on {bg}
                <br />
                <span className="text-hc-muted">{ratio.toFixed(2)}:1 · {verdict(ratio)}</span>
              </span>
            </li>
          );
        })}
      </ul>
    ),
  },
  {
    title: "Red washes",
    span: "md:col-span-12",
    node: (
      <div className="grid grid-cols-3 gap-3">
        {washes.map((cls) => (
          <div key={cls} className={`h-32 ${cls}`} />
        ))}
      </div>
    ),
  },
];
