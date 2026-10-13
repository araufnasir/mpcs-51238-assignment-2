import * as library from "../../components/liner-notes";
import type { DocsTheme, SectionProps, SpecimenProps } from "../shared/types";
import { ChipsDemo, PanelDemo, RowsDemo, SearchDemo } from "./demos";

const t = library.type;

function Section({ number, title, intro, children }: SectionProps) {
  return (
    <section id={`section-${number}`} className="mt-24 scroll-mt-8">
      <header className="flex items-baseline gap-5 border-t-[3px] border-double border-ln-text pt-4">
        <span className="text-6xl font-extralight leading-none tabular-nums">{number}</span>
        <h2 className="text-4xl font-light italic leading-none md:text-5xl">{title}</h2>
      </header>
      <p className={`${t.body} mt-6 max-w-[60ch]`}>{intro}</p>
      <div className="mt-8">{children}</div>
    </section>
  );
}

/** A named piece on the page: what it is and when to use it in the margin, the live piece beside it. */
function Specimen({ title, usage, children }: SpecimenProps) {
  return (
    <div className="grid gap-4 border-t border-ln-text py-6 md:grid-cols-12 md:gap-6">
      <div className="md:col-span-3">
        <h3 className={t.label}>{title}</h3>
        {usage && <p className={`${t.bodySmall} mt-2 italic text-ln-muted`}>{usage}</p>}
      </div>
      <div className="md:col-span-9">{children}</div>
    </div>
  );
}

export const theme: DocsTheme = {
  slug: "liner-notes",
  kit: library,
  type: t,
  demos: { ChipsDemo, PanelDemo, RowsDemo, SearchDemo },
  Section,
  Specimen,
  cls: { muted: "text-ln-muted", hairline: "border-t border-ln-text", frame: "border border-ln-text", fill: "bg-ln-text" },
};
