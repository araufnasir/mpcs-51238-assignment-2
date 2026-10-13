import Link from "next/link";
import { findDirection } from "../../directions";
import { colorArtifacts } from "./artifacts/color";
import { illustrationArtifacts } from "./artifacts/illustration";
import { interfaceArtifacts } from "./artifacts/interface";
import { textureArtifacts } from "./artifacts/texture";
import { typeArtifacts } from "./artifacts/type";
import { Plate } from "./Plate";

const { name, feel } = findDirection("neon-arcade");

const sections = [
  { title: "Type", artifacts: typeArtifacts },
  { title: "Color", artifacts: colorArtifacts },
  { title: "Texture", artifacts: textureArtifacts },
  { title: "Art", artifacts: illustrationArtifacts },
  { title: "Interface", artifacts: interfaceArtifacts },
];

export const metadata = { title: `${name}: mood board` };

export default function NeonArcadeBoard() {
  let count = 0;
  return (
    <main className="mx-auto max-w-7xl px-5 pb-24 md:px-10">
      <header className="relative isolate overflow-hidden pb-40 pt-8 md:pb-52">
        <Link
          href="/"
          className="text-sm font-bold uppercase tracking-[0.1em] underline underline-offset-4 hover:bg-na-text hover:text-na-background focus-visible:outline-4 focus-visible:outline-na-secondary"
        >
          ◀ All directions
        </Link>
        <p className="mt-12 text-sm font-bold uppercase tracking-[0.1em]">Mood board</p>
        <h1 className="mt-4 font-na-display text-3xl leading-tight text-na-accent [text-shadow:0_0_14px_color-mix(in_srgb,var(--na-accent)_70%,transparent)] md:text-6xl">
          {name}
        </h1>
        <p className="mt-6 text-lg font-bold uppercase tracking-[0.1em]">{feel.join(" · ")}</p>
        <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-40 md:h-52">
          <div className="na-grid absolute -inset-x-1/2 inset-y-0" />
        </div>
      </header>

      {sections.map(({ title, artifacts }) => (
        <section key={title} className="mt-16">
          <h2 className="mb-8 font-na-display text-xl md:text-3xl">{title}</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
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
