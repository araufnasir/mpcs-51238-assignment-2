import type { DocsTheme, TypeRoleDef } from "./types";

type Props = { theme: DocsTheme; roles: TypeRoleDef[]; intro: string };

export function TypeRoles({ theme, roles, intro }: Props) {
  const { Section, type: t, cls } = theme;
  return (
    <Section number={2} title="Type roles" intro={intro}>
      <ul>
        {roles.map((role) => (
          <li key={role.name} className={`grid gap-4 border-t py-6 md:grid-cols-12 md:gap-8 ${cls.hairline}`}>
            <div className="md:col-span-4">
              <h3 className={t.label}>{role.name}</h3>
              <dl className={`${t.bodySmall} mt-3 space-y-1`}>
                {role.spec.map(([term, value]) => (
                  <div key={term} className="flex justify-between gap-4">
                    <dt className={cls.muted}>{term}</dt>
                    <dd className="text-right">{value}</dd>
                  </div>
                ))}
              </dl>
              <p className={`${t.bodySmall} mt-3 ${cls.muted}`}>{role.use}</p>
            </div>
            <p className={`${t[role.role]} md:col-span-8`}>{role.sample}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
