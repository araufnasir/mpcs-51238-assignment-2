import type { Artifact } from "../../../lib/artifact";

const headingScale = [
  { cls: "text-3xl", spec: "32" },
  { cls: "text-xl", spec: "20" },
  { cls: "text-sm", spec: "14" },
];

const labels = [
  { cls: "text-xs", text: "Now playing" },
  { cls: "text-sm", text: "Track 04" },
  { cls: "text-base", text: "Single" },
];

const Spec = ({ children }: { children: string }) => (
  <p className="mt-4 text-xs font-bold uppercase tracking-[0.1em]">{children}</p>
);

export const typeArtifacts: Artifact[] = [
  {
    title: "Display specimen",
    span: "md:col-span-8",
    node: (
      <>
        <p className="font-na-display text-3xl leading-tight [text-shadow:6px_6px_0_var(--na-accent)] md:text-6xl">
          THRILLER
        </p>
        <Spec>Press Start 2P · 64 · short headings only</Spec>
      </>
    ),
  },
  {
    title: "Score readout",
    span: "md:col-span-4",
    node: (
      <>
        <p className="font-na-display text-2xl leading-relaxed">HI 009430</p>
        <Spec>Numerals, display face</Spec>
      </>
    ),
  },
  {
    title: "Heading scale",
    span: "md:col-span-5",
    node: (
      <div className="space-y-4">
        {headingScale.map(({ cls, spec }) => (
          <p key={cls} className={`font-na-display ${cls} leading-tight`}>
            LEVEL <span className="font-na-body text-xs font-bold tracking-[0.1em]">{spec}</span>
          </p>
        ))}
      </div>
    ),
  },
  {
    title: "Body text",
    span: "md:col-span-7",
    node: (
      <>
        <p className="max-w-[60ch] text-base leading-7">
          A tribute to one album, one track at a time. Read the credits, find the singles and see
          how the record is put together. Body copy is always monospace, never pixel type.
        </p>
        <Spec>Space Mono · 16 / 28 · regular</Spec>
      </>
    ),
  },
  {
    title: "Labels",
    span: "md:col-span-4",
    node: (
      <>
        <div className="space-y-2 font-bold uppercase tracking-[0.1em]">
          {labels.map(({ cls, text }) => (
            <p key={text} className={cls}>{text}</p>
          ))}
        </div>
        <Spec>Space Mono · 700 · caps · +10%</Spec>
      </>
    ),
  },
  {
    title: "When to use pixel type",
    span: "md:col-span-8",
    node: (
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <p className="font-na-display text-lg">TRACK 04</p>
          <Spec>Yes: two or three words</Spec>
        </div>
        <div>
          <p className="font-na-display text-[10px] leading-5">
            THE TITLE SONG OF THE ALBUM, WRITTEN BY ROD TEMPERTON.
          </p>
          <Spec>No: sentences are hard to read</Spec>
        </div>
      </div>
    ),
  },
];
