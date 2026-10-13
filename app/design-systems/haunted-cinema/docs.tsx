import * as library from "../../components/haunted-cinema";
import type { DocsTheme, SectionProps, SpecimenProps } from "../shared/types";
import { ChipsDemo, PanelDemo, RowsDemo, SearchDemo } from "./demos";

const t = library.type;

function Section({ number, title, intro, children }: SectionProps) {
  return (
    <section id={`section-${number}`} className="mt-20 scroll-mt-8">
      <header className="flex items-baseline gap-5 border-b-4 border-hc-text pb-3">
        <span className="font-hc-display text-6xl leading-none">{number}</span>
        <h2 className="font-hc-display text-4xl leading-none md:text-5xl">{title}</h2>
      </header>
      <p className={`${t.body} mt-5 max-w-[60ch]`}>{intro}</p>
      <div className="mt-8">{children}</div>
    </section>
  );
}

/** A named piece on the page: what it is and when to use it on the left, the live piece on the right. */
function Specimen({ title, usage, children }: SpecimenProps) {
  return (
    <div className="grid gap-4 border-t border-hc-border py-6 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-3">
        <h3 className={t.label}>{title}</h3>
        {usage && <p className={`${t.bodySmall} mt-2 text-hc-muted`}>{usage}</p>}
      </div>
      <div className="md:col-span-9">{children}</div>
    </div>
  );
}

export const theme: DocsTheme = {
  slug: "haunted-cinema",
  kit: library,
  type: t,
  demos: { ChipsDemo, PanelDemo, RowsDemo, SearchDemo },
  Section,
  Specimen,
  cls: { muted: "text-hc-muted", hairline: "border-t border-hc-border", frame: "border-2 border-hc-border", fill: "bg-hc-text" },
};
