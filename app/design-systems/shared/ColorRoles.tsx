import type { ReactNode } from "react";
import { colorOf, swatchOf, type Role } from "../../directions";
import { contrast, verdict } from "../../lib/contrast";
import type { ColorRoleDef, DocsTheme } from "./types";

type Props = { theme: DocsTheme; roles: ColorRoleDef[]; intro: string; note?: ReactNode };

export function ColorRoles({ theme, roles, intro, note }: Props) {
  const { Section, type: t, slug } = theme;
  const nameOf = (role: Role) => swatchOf(slug, role).name;

  function ratioLine([fg, bg]: [Role, Role], ui?: boolean) {
    const ratio = contrast(colorOf(slug, fg), colorOf(slug, bg));
    const result = ui ? (ratio >= 3 ? "Passes 3:1 for UI" : "Below 3:1") : verdict(ratio);
    return (
      <li key={`${fg}-${bg}`} className={`${t.bodySmall} flex items-baseline justify-between gap-4`}>
        <span>{nameOf(fg)} on {nameOf(bg)}</span>
        <span className="tabular-nums">{ratio.toFixed(2)}:1 · {result}</span>
      </li>
    );
  }

  return (
    <Section number={1} title="Color roles" intro={intro}>
      {note && <p className={`${t.bodySmall} mb-6 max-w-[70ch]`}>{note}</p>}
      <ul>
        {roles.map((role) => (
          <li key={role.name} className={`grid items-start gap-4 border-t py-6 md:grid-cols-12 md:gap-8 ${theme.cls.hairline}`}>
            <div className={`h-20 md:col-span-2 ${theme.cls.frame}`} style={{ backgroundColor: colorOf(slug, role.swatch) }} />
            <div className="md:col-span-5">
              <h3 className={t.heading}>{role.name}</h3>
              <p className={`${t.labelSmall} mt-2 ${theme.cls.muted}`}>{nameOf(role.swatch)} · {colorOf(slug, role.swatch)} · {role.token}</p>
              <p className={`${t.bodySmall} mt-3`}>{role.use}</p>
            </div>
            <ul className="space-y-2 md:col-span-5">{role.pairs.map((p) => ratioLine(p, role.ui))}</ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
