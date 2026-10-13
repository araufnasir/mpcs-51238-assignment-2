import { colorOf, findDirection, type Role } from "../../directions";
import { contrast, verdict } from "../../lib/contrast";
import { type as t } from "../../components/haunted-cinema";
import { Section } from "./Section";

const SLUG = "haunted-cinema";
const { palette } = findDirection(SLUG);
const nameOf = (role: Role) => palette.find((s) => s.role === role)!.name;

type Pair = [fg: Role, bg: Role];

const roles: { name: string; swatch: Role; token: string; use: string; pairs: Pair[]; ui?: boolean }[] = [
  { name: "Background", swatch: "background", token: "hc-background", use: "The page behind everything.", pairs: [["text", "background"]] },
  { name: "Surface", swatch: "surface", token: "hc-surface", use: "Cards, panels, and a row under the pointer.", pairs: [["text", "surface"]] },
  { name: "Text", swatch: "text", token: "hc-text", use: "All reading text, strong borders and the focus ring.", pairs: [["text", "background"], ["text", "surface"]] },
  { name: "Muted text", swatch: "muted", token: "hc-muted", use: "Captions, hints, placeholders and disabled text.", pairs: [["muted", "background"], ["muted", "surface"]] },
  { name: "Border", swatch: "muted", token: "hc-border", use: "Dividers and the resting outline of a control. Needs 3:1.", pairs: [["muted", "background"]], ui: true },
  {
    name: "Accent",
    swatch: "accent",
    token: "hc-accent",
    use: "The primary action, and nothing else. A fill with Bone text on it; never text, never the only edge.",
    pairs: [["text", "accent"], ["accent", "background"]],
  },
];

function ratioLine([fg, bg]: Pair, ui?: boolean) {
  const ratio = contrast(colorOf(SLUG, fg), colorOf(SLUG, bg));
  const result = ui ? (ratio >= 3 ? "Passes 3:1 for UI" : "Below 3:1") : verdict(ratio);
  return (
    <li key={`${fg}-${bg}`} className={`${t.bodySmall} flex items-baseline justify-between gap-4`}>
      <span>{nameOf(fg)} on {nameOf(bg)}</span>
      <span className="tabular-nums">{ratio.toFixed(2)}:1 · {result}</span>
    </li>
  );
}

export function ColorRoles() {
  return (
    <Section number={1} title="Color roles" intro="Five colors, six jobs. Each role has one use. Ratios are computed from the palette, so they stay true if a color changes.">
      <ul>
        {roles.map((role) => (
          <li key={role.name} className="grid items-start gap-4 border-t border-hc-border py-6 md:grid-cols-12 md:gap-8">
            <div className="h-20 border-2 border-hc-border md:col-span-2" style={{ backgroundColor: colorOf(SLUG, role.swatch) }} />
            <div className="md:col-span-5">
              <h3 className={t.heading}>{role.name}</h3>
              <p className={`${t.labelSmall} mt-2 text-hc-muted`}>{nameOf(role.swatch)} · {colorOf(SLUG, role.swatch)} · {role.token}</p>
              <p className={`${t.bodySmall} mt-3`}>{role.use}</p>
            </div>
            <ul className="space-y-2 md:col-span-5">{role.pairs.map((p) => ratioLine(p, role.ui))}</ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
