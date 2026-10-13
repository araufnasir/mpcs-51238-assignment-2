import { type as t } from "../../components/haunted-cinema";
import { Section, Specimen } from "./Section";
import { borders, shadows, spacing } from "./tokens";

export function SpacingShape() {
  return (
    <Section number={3} title="Spacing and shape" intro="Everything sits on a 4px step. Corners are square, borders are flat, and the only shadow is a hard offset.">
      <Specimen title="Spacing scale" usage="Pick the nearest step. Never a value in between.">
        <ul className="space-y-3">
          {spacing.map(({ token, px, use }) => (
            <li key={token} className="grid grid-cols-[3.5rem_1fr] items-center gap-4 sm:grid-cols-[3.5rem_1fr_16rem]">
              <span className={`${t.label} tabular-nums`}>{px}px</span>
              <span className="h-4 bg-hc-text" style={{ width: px * 3 }} />
              <span className={`${t.bodySmall} col-span-2 text-hc-muted sm:col-span-1`}>{use}</span>
            </li>
          ))}
        </ul>
      </Specimen>

      <Specimen title="Corners" usage="Square. Radios are the one round shape, so they read as radios.">
        <div className="flex gap-8">
          <div className="flex flex-col gap-2">
            <div className="size-16 border-2 border-hc-text" />
            <p className={t.labelSmall}>0 · everything</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="size-16 rounded-full border-2 border-hc-text" />
            <p className={t.labelSmall}>Round · radio only</p>
          </div>
        </div>
      </Specimen>

      <Specimen title="Borders" usage="Flat lines in Bone or Ash. Width tells you what the line is for.">
        <ul className="space-y-4">
          {borders.map(({ name, px, use }) => (
            <li key={name} className="grid items-center gap-2 sm:grid-cols-[10rem_1fr_1fr] sm:gap-4">
              <div className="h-0 w-40 border-hc-text" style={{ borderTopWidth: px }} />
              <span className={t.label}>{name} · {px}px</span>
              <span className={`${t.bodySmall} text-hc-muted`}>{use}</span>
            </li>
          ))}
        </ul>
      </Specimen>

      <Specimen title="Shadow" usage="A hard offset, never a blur. It means 'this lifts when you reach for it'.">
        <ul className="flex flex-wrap gap-10">
          {shadows.map(({ name, value, css, use }) => (
            <li key={name} className="flex w-56 flex-col gap-3">
              <div className="h-16 border-2 border-hc-text bg-hc-surface" style={{ boxShadow: css }} />
              <p className={t.label}>{value ? `${name} · ${value}` : name}</p>
              <p className={`${t.bodySmall} text-hc-muted`}>{use}</p>
            </li>
          ))}
        </ul>
      </Specimen>
    </Section>
  );
}
