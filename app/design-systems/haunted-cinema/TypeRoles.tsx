import { type as t } from "../../components/haunted-cinema";
import { Section } from "./Section";

const roles = [
  {
    name: "Display",
    cls: t.display,
    spec: [["Font", "Abril Fatface"], ["Size", "72 (48 on mobile)"], ["Line height", "0.95"], ["Weight", "400"]],
    use: "One per screen: the page title, or a track name in the detail panel.",
    sample: "Thriller",
  },
  {
    name: "Heading",
    cls: t.heading,
    spec: [["Font", "Abril Fatface"], ["Size", "32"], ["Line height", "1.1"], ["Weight", "400"]],
    use: "Card titles and section titles.",
    sample: "Billie Jean",
  },
  {
    name: "Body",
    cls: t.body,
    spec: [["Font", "Source Serif 4"], ["Size", "18 (16 for hints and errors)"], ["Line height", "1.6"], ["Weight", "400"]],
    use: "Everything read at length. Keep lines under 60 characters.",
    sample: "Track four and the title song, written by Rod Temperton. The album came out in 1982.",
  },
  {
    name: "Label",
    cls: t.label,
    spec: [["Font", "Barlow Condensed"], ["Size", "16 (14 for badges and captions)"], ["Weight", "600"], ["Tracking", "+14%, all caps"]],
    use: "Buttons, tabs, chips, field labels and badges.",
    sample: "Track 04 · Single",
  },
];

export function TypeRoles() {
  return (
    <Section number={2} title="Type roles" intro="Four roles in three typefaces. A role is always set the same way; nothing is sized ad hoc.">
      <ul>
        {roles.map((role) => (
          <li key={role.name} className="grid gap-4 border-t border-hc-border py-6 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <h3 className={t.label}>{role.name}</h3>
              <dl className={`${t.bodySmall} mt-3 space-y-1`}>
                {role.spec.map(([term, value]) => (
                  <div key={term} className="flex justify-between gap-4">
                    <dt className="text-hc-muted">{term}</dt>
                    <dd className="text-right">{value}</dd>
                  </div>
                ))}
              </dl>
              <p className={`${t.bodySmall} mt-3 text-hc-muted`}>{role.use}</p>
            </div>
            <p className={`${role.cls} md:col-span-8`}>{role.sample}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
