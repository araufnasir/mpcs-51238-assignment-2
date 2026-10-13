import Link from "next/link";
import { directions } from "./directions";

type Destination = { label: string; href: string; ready: boolean; palette?: string[] };

const mark = "block py-3 text-xl font-medium";

function Entry({ label, href, ready, palette }: Destination) {
  return (
    <li className="border-b border-neutral-300">
      {ready ? (
        <Link
          href={href}
          className={`${mark} flex items-center gap-4 underline-offset-4 hover:bg-neutral-900 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-neutral-700 active:text-white`}
        >
          <Strip palette={palette} />
          {label}
        </Link>
      ) : (
        <span aria-disabled="true" className={`${mark} flex items-center gap-4 text-neutral-400`}>
          <Strip palette={palette} />
          {label}
        </span>
      )}
    </li>
  );
}

function Strip({ palette }: { palette?: string[] }) {
  if (!palette) return null;
  return (
    <span aria-hidden className="flex h-6 w-24 shrink-0 overflow-hidden border border-neutral-300">
      {palette.map((hex) => (
        <span key={hex} className="flex-1" style={{ backgroundColor: hex }} />
      ))}
    </span>
  );
}

function Section({ number, title, entries }: { number: number; title: string; entries: Destination[] }) {
  return (
    <section className="mt-12">
      <h2 className="flex items-baseline gap-3 border-b-2 border-neutral-900 pb-2 text-2xl font-bold">
        <span className="text-neutral-600">{number}</span>
        {title}
      </h2>
      <ul>
        {entries.map((e) => (
          <Entry key={e.href} {...e} />
        ))}
      </ul>
    </section>
  );
}

const withPalette = (d: (typeof directions)[number]) => d.palette.map((s) => s.hex);

export default function Hub() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-neutral-900 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Thriller: a tribute</h1>

      <Section
        number={1}
        title="Mood Boards"
        entries={directions.map((d) => ({
          label: d.name,
          href: `/mood-boards/${d.slug}`,
          ready: d.moodBoardReady,
          palette: withPalette(d),
        }))}
      />
      <Section
        number={2}
        title="Design Systems"
        entries={directions.map((d) => ({
          label: d.name,
          href: `/design-systems/${d.slug}`,
          ready: d.designSystemReady,
          palette: withPalette(d),
        }))}
      />
      <Section number={3} title="Your Site" entries={[{ label: "Thriller", href: "/thriller", ready: false }]} />
    </main>
  );
}
