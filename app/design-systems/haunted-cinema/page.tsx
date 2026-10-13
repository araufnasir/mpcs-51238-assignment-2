import { Link, type as t } from "../../components/haunted-cinema";
import { Components } from "./Components";
import { ColorRoles } from "./ColorRoles";
import { ControlStates } from "./ControlStates";
import { SpacingShape } from "./SpacingShape";
import { TypeRoles } from "./TypeRoles";
import { UiStatesSection } from "./UiStatesSection";

export const metadata = { title: "Haunted Cinema: design system" };

const contents = ["Color roles", "Type roles", "Spacing and shape", "Components", "Control states", "UI states"];

export default function HauntedCinemaSystem() {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-24 md:px-10">
      <header className="border-b-4 border-hc-text py-12 md:py-20">
        <Link href="/">← All directions</Link>
        <p className={`${t.label} mt-10 tracking-[0.3em] text-hc-muted`}>Design system</p>
        <h1 className="font-hc-display text-6xl leading-[0.9] md:text-9xl">Haunted Cinema</h1>
        <nav aria-label="Sections" className="mt-10">
          <ol className="flex flex-wrap gap-x-8 gap-y-3">
            {contents.map((title, i) => (
              <li key={title} className="flex gap-2">
                <span className={`${t.label} text-hc-muted`}>{i + 1}</span>
                <Link href={`#section-${i + 1}`} className={t.label}>{title}</Link>
              </li>
            ))}
          </ol>
        </nav>
      </header>
      <ColorRoles />
      <TypeRoles />
      <SpacingShape />
      <Components />
      <ControlStates />
      <UiStatesSection />
    </main>
  );
}
