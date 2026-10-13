import Link from "next/link";
import { findDirection } from "../../directions";
import { colorArtifacts } from "./artifacts/color";
import { illustrationArtifacts } from "./artifacts/illustration";
import { interfaceArtifacts } from "./artifacts/interface";
import { textureArtifacts } from "./artifacts/texture";
import { typeArtifacts } from "./artifacts/type";
import { Plate } from "./Plate";

const { name, feel } = findDirection("haunted-cinema");

const sections = [
  { title: "Type", artifacts: typeArtifacts },
  { title: "Color", artifacts: colorArtifacts },
  { title: "Texture", artifacts: textureArtifacts },
  { title: "Illustration", artifacts: illustrationArtifacts },
  { title: "Interface", artifacts: interfaceArtifacts },
];

export const metadata = { title: `${name}: mood board` };

export default function HauntedCinemaBoard() {
  let count = 0;
  return (
    <main className="mx-auto max-w-7xl px-5 pb-24 md:px-10">
      <header className="relative border-b-4 border-hc-text py-12 md:py-20">
        <Link
          href="/"
          className="font-hc-label text-sm font-semibold uppercase tracking-[0.14em] underline underline-offset-4 hover:text-hc-muted focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-hc-text"
        >
          ← All directions
        </Link>
        <p className="mt-10 font-hc-label text-lg font-semibold uppercase tracking-[0.3em] text-hc-muted">Mood board</p>
        <h1 className="font-hc-display text-6xl leading-[0.9] md:text-9xl">{name}</h1>
        <p className="mt-6 font-hc-label text-2xl font-semibold uppercase tracking-[0.14em]">
          {feel.join(" · ")}
        </p>
      </header>

      {sections.map(({ title, artifacts }) => (
        <section key={title} className="mt-14">
          <h2 className="mb-6 font-hc-display text-4xl md:text-5xl">{title}</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            {artifacts.map((a) => (
              <Plate key={a.title} number={++count} title={a.title} span={a.span}>
                {a.node}
              </Plate>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
