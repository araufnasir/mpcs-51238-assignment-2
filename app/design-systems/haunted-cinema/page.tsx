import { Link, type as t } from "../../components/haunted-cinema";
import { DesignSystemSections, sectionTitles } from "../shared/Sections";
import { colorIntro, colorRoles, controlNotes, tokens, typeIntro, typeRoles } from "./content";
import { theme } from "./docs";

export const metadata = { title: "Haunted Cinema: design system" };

export default function HauntedCinemaSystem() {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-24 md:px-10">
      <header className="border-b-4 border-hc-text py-12 md:py-20">
        <Link href="/">← All directions</Link>
        <p className={`${t.label} mt-10 tracking-[0.3em] text-hc-muted`}>Design system</p>
        <h1 className="font-hc-display text-6xl leading-[0.9] md:text-9xl">Haunted Cinema</h1>
        <nav aria-label="Sections" className="mt-10">
          <ol className="flex flex-wrap gap-x-8 gap-y-3">
            {sectionTitles.map((title, i) => (
              <li key={title} className="flex gap-2">
                <span className={`${t.label} text-hc-muted`}>{i + 1}</span>
                <Link href={`#section-${i + 1}`} className={t.label}>{title}</Link>
              </li>
            ))}
          </ol>
        </nav>
      </header>
      <DesignSystemSections theme={theme} colorRoles={colorRoles} colorIntro={colorIntro} typeRoles={typeRoles} typeIntro={typeIntro} tokens={tokens} controlNotes={controlNotes} />
    </main>
  );
}
