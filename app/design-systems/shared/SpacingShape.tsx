import type { DocsTheme, Tokens } from "./types";

export function SpacingShape({ theme, tokens }: { theme: DocsTheme; tokens: Tokens }) {
  const { Section, Specimen, type: t, cls } = theme;
  return (
    <Section number={3} title="Spacing and shape" intro={tokens.intro}>
      <Specimen title="Spacing scale" usage={tokens.spacingUsage}>
        <ul className="space-y-3">
          {tokens.spacing.map(({ px, use }) => (
            <li key={px} className="grid grid-cols-[3.5rem_1fr] items-center gap-4 sm:grid-cols-[3.5rem_1fr_16rem]">
              <span className={`${t.label} tabular-nums`}>{px}px</span>
              <span className={`h-4 ${cls.fill}`} style={{ width: px * 3 }} />
              <span className={`${t.bodySmall} col-span-2 sm:col-span-1 ${cls.muted}`}>{use}</span>
            </li>
          ))}
        </ul>
      </Specimen>

      <Specimen title="Corners" usage={tokens.cornersUsage}>
        <div className="flex flex-wrap gap-8">
          {tokens.corners.map(({ label, sample }) => (
            <div key={label} className="flex flex-col gap-3">
              {sample}
              <p className={t.labelSmall}>{label}</p>
            </div>
          ))}
        </div>
      </Specimen>

      <Specimen title="Borders" usage={tokens.bordersUsage}>
        <ul className="space-y-4">
          {tokens.borders.map(({ name, px, use, sample }) => (
            <li key={name} className="grid items-center gap-2 sm:grid-cols-[10rem_1fr_1fr] sm:gap-4">
              {sample}
              <span className={t.label}>{name} · {px}px</span>
              <span className={`${t.bodySmall} ${cls.muted}`}>{use}</span>
            </li>
          ))}
        </ul>
      </Specimen>

      <Specimen title="Shadow" usage={tokens.shadowUsage}>
        <ul className="flex flex-wrap gap-10">
          {tokens.shadows.map(({ name, value, use, sample }) => (
            <li key={name} className="flex w-56 flex-col gap-3">
              {sample}
              <p className={t.label}>{value ? `${name} · ${value}` : name}</p>
              <p className={`${t.bodySmall} ${cls.muted}`}>{use}</p>
            </li>
          ))}
        </ul>
      </Specimen>
    </Section>
  );
}
