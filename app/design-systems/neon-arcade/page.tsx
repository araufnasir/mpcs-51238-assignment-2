import { Link, type as t } from "../../components/neon-arcade";
import { DesignSystemSections, sectionTitles } from "../shared/Sections";
import { colorIntro, colorNote, colorRoles, controlNotes, tokens, typeIntro, typeRoles } from "./content";
import { theme } from "./docs";

export const metadata = { title: "Neon Arcade: design system" };

export default function NeonArcadeSystem() {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-24 md:px-10">
      <header className="relative isolate overflow-hidden pb-40 pt-8 md:pb-52">
        <Link href="/">◀ All directions</Link>
        <p className={`${t.label} mt-12`}>Design system</p>
        <h1 className="mt-4 font-na-display text-3xl leading-tight md:text-6xl">Neon Arcade</h1>
        <nav aria-label="Sections" className="mt-8">
          <ol className="flex flex-wrap gap-x-8 gap-y-3">
            {sectionTitles.map((title, i) => (
              <li key={title} className="flex gap-2">
                <span className={`${t.label} text-na-muted`}>{i + 1}</span>
                <Link href={`#section-${i + 1}`} className={t.label}>{title}</Link>
              </li>
            ))}
          </ol>
        </nav>
        <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-40 md:h-52">
          <div className="nau-grid absolute -inset-x-1/2 inset-y-0" />
        </div>
      </header>
      <DesignSystemSections theme={theme} colorRoles={colorRoles} colorIntro={colorIntro} colorNote={colorNote} typeRoles={typeRoles} typeIntro={typeIntro} tokens={tokens} controlNotes={controlNotes} />
    </main>
  );
}
