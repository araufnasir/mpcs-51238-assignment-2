import Link from "next/link";
import { findDirection } from "../../directions";
import { colorArtifacts } from "./artifacts/color";
import { illustrationArtifacts } from "./artifacts/illustration";
import { interfaceArtifacts } from "./artifacts/interface";
import { textureArtifacts } from "./artifacts/texture";
import { typeArtifacts } from "./artifacts/type";
import { Plate } from "./Plate";

const { name, feel } = findDirection("liner-notes");

const sections = [
  { title: "Type", artifacts: typeArtifacts },
  { title: "Color", artifacts: colorArtifacts },
  { title: "Texture", artifacts: textureArtifacts },
  { title: "Illustration", artifacts: illustrationArtifacts },
  { title: "Interface", artifacts: interfaceArtifacts },
];

export const metadata = { title: `${name}: mood board` };

export default function LinerNotesBoard() {
  let count = 0;
  return (
    <main className="mx-auto max-w-7xl px-5 pb-24 md:px-10">
      <header className="pt-8">
        <div className="ln-smallcaps flex justify-between border-b-[3px] border-double border-ln-text pb-3 text-base">
          <Link href="/" className="ln-link focus-visible:outline-2 focus-visible:outline-offset-4">← All directions</Link>
          <span>Mood board</span>
        </div>
        <h1 className="mt-10 text-7xl font-light leading-[0.85] tracking-tight md:text-[11rem]">{name}</h1>
        <p className="ln-smallcaps mt-8 text-xl">{feel.join(" · ")}</p>
      </header>

      {sections.map(({ title, artifacts }) => (
        <section key={title} className="mt-20 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-12">
          <h2 className="text-4xl font-light italic md:col-span-3 md:text-5xl">{title}</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:col-span-9 md:grid-cols-9">
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
