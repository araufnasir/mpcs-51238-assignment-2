import { Link, type as t } from "../../components/liner-notes";
import { DesignSystemSections, sectionTitles } from "../shared/Sections";
import { colorIntro, colorNote, colorRoles, controlNotes, tokens, typeIntro, typeRoles } from "./content";
import { theme } from "./docs";

export const metadata = { title: "Liner Notes: design system" };

export default function LinerNotesSystem() {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-24 md:px-10">
      <header className="pt-8">
        <div className={`${t.label} flex justify-between border-b-[3px] border-double border-ln-text pb-3`}>
          <Link href="/">← All directions</Link>
          <span>Design system</span>
        </div>
        <h1 className="mt-10 text-7xl font-light leading-[0.85] tracking-tight md:text-[11rem]">Liner Notes</h1>
        <nav aria-label="Sections" className="mt-10">
          <ol className="flex flex-wrap gap-x-8 gap-y-2">
            {sectionTitles.map((title, i) => (
              <li key={title} className="flex gap-2">
                <span className={`${t.label} text-ln-muted`}>{i + 1}</span>
                <Link href={`#section-${i + 1}`} className={t.label}>{title}</Link>
              </li>
            ))}
          </ol>
        </nav>
      </header>
      <DesignSystemSections theme={theme} colorRoles={colorRoles} colorIntro={colorIntro} colorNote={colorNote} typeRoles={typeRoles} typeIntro={typeIntro} tokens={tokens} controlNotes={controlNotes} />
    </main>
  );
}
