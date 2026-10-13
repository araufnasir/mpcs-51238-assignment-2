import Link from "next/link";
import { directions } from "./directions";

function Destination({ label, href, ready }: { label: string; href: string; ready: boolean }) {
  if (!ready) return <span className="text-neutral-600">{label}: not built yet</span>;
  return (
    <Link
      href={href}
      className="font-medium underline underline-offset-4 hover:bg-neutral-900 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-neutral-700 active:text-white"
    >
      {label} →
    </Link>
  );
}

export default function Hub() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 text-neutral-900 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Thriller: a tribute</h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed">
        A small static site for the 1982 album, explored in three visual directions. Each has a mood
        board and a design system. The site itself comes after one is chosen.
      </p>

      <ul className="mt-12 border-t-2 border-neutral-900">
        {directions.map((d) => (
          <li
            key={d.slug}
            className="grid gap-4 border-b border-neutral-300 py-6 md:grid-cols-[10rem_1fr_auto] md:items-center md:gap-8"
          >
            <div className="flex h-10 overflow-hidden rounded-sm border border-neutral-300" role="img" aria-label={`${d.name} palette`}>
              {d.palette.map((s) => (
                <span key={s.hex} className="flex-1" style={{ backgroundColor: s.hex }} />
              ))}
            </div>
            <div>
              <h2 className="text-xl font-bold">{d.name}</h2>
              <p className="text-neutral-600">{d.feel.join(" · ")}</p>
            </div>
            <div className="flex flex-col gap-1 md:items-end">
              <Destination label="Mood board" href={`/mood-boards/${d.slug}`} ready={d.moodBoardReady} />
              <Destination label="Design system" href={`/design-systems/${d.slug}`} ready={d.designSystemReady} />
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-neutral-600">
        The site at /thriller: not built yet. Its style is chosen after the design systems.
      </p>
    </main>
  );
}
