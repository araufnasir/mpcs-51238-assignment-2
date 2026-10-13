import Link from "next/link";
import { directions } from "./directions";
import type { Direction } from "./directions";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-2";

function Strip({ palette }: Pick<Direction, "palette">) {
  return (
    <span aria-hidden className="flex h-8 overflow-hidden border border-neutral-300">
      {palette.map((s) => (
        <span key={s.hex} className="flex-1" style={{ backgroundColor: s.hex }} />
      ))}
    </span>
  );
}

function Column({ direction, href, label, ready }: { direction: Direction; href: string; label: string; ready: boolean }) {
  const text = `${label} →`;
  return (
    <li className="flex flex-col gap-3">
      <Strip palette={direction.palette} />
      <div className={ready ? "" : "text-neutral-400"}>
        <h3 className="text-xl font-bold">{direction.name}</h3>
        <p>{direction.feel.join(" · ")}</p>
      </div>
      {ready ? (
        <Link
          href={href}
          className={`self-start font-medium underline underline-offset-4 hover:bg-neutral-900 hover:text-white active:bg-neutral-700 active:text-white ${focusRing}`}
        >
          {text}
        </Link>
      ) : (
        <span aria-disabled="true" className="self-start text-neutral-400">{text}</span>
      )}
    </li>
  );
}

function Section({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="flex items-baseline gap-3 border-b-2 border-neutral-900 pb-2 text-2xl font-bold">
        <span className="text-neutral-600">{number}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

const Row = ({ children }: { children: React.ReactNode }) => (
  <ul className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">{children}</ul>
);

export default function Hub() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 text-neutral-900 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Thriller: a tribute</h1>

      <Section number={1} title="Mood Boards">
        <Row>
          {directions.map((d) => (
            <Column key={d.slug} direction={d} href={`/mood-boards/${d.slug}`} label="Mood board" ready={d.moodBoardReady} />
          ))}
        </Row>
      </Section>
      <Section number={2} title="Design Systems">
        <Row>
          {directions.map((d) => (
            <Column key={d.slug} direction={d} href={`/design-systems/${d.slug}`} label="Design system" ready={d.designSystemReady} />
          ))}
        </Row>
      </Section>
      <Section number={3} title="Your Site">
        <Link
          href="/thriller"
          className="mt-6 inline-block bg-neutral-900 px-6 py-3 text-lg font-medium text-white hover:bg-neutral-700 active:bg-black focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          Open Thriller →
        </Link>
      </Section>
    </main>
  );
}
