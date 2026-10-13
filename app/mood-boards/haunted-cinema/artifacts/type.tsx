import type { Artifact } from "./types";

const tracks = [
  "Wanna Be Startin' Somethin'",
  "Baby Be Mine",
  "The Girl Is Mine",
  "Thriller",
  "Beat It",
  "Billie Jean",
  "Human Nature",
  "P.Y.T. (Pretty Young Thing)",
  "The Lady in My Life",
];

const headingScale = [
  { cls: "text-5xl", spec: "48 / 1.0" },
  { cls: "text-3xl", spec: "30 / 1.1" },
  { cls: "text-2xl", spec: "24 / 1.2" },
];

const labelSizes = [
  { cls: "text-sm", text: "Now showing" },
  { cls: "text-base", text: "Track 04" },
  { cls: "text-lg", text: "Single" },
];

const Spec = ({ children }: { children: string }) => (
  <p className="mt-4 font-hc-label text-sm uppercase tracking-[0.14em] text-hc-muted">{children}</p>
);

export const typeArtifacts: Artifact[] = [
  {
    title: "Display specimen",
    span: "md:col-span-8",
    node: (
      <>
        <p className="font-hc-display text-7xl leading-[0.9] md:text-9xl">Thriller</p>
        <Spec>Abril Fatface · 128 / 0.9 · one per screen</Spec>
      </>
    ),
  },
  {
    title: "Numerals",
    span: "md:col-span-4",
    node: (
      <>
        <p className="font-hc-display text-5xl leading-tight tracking-wide">01 02 03 04 05 06 07 08 09</p>
        <Spec>Track numbers, display face</Spec>
      </>
    ),
  },
  {
    title: "Heading scale",
    span: "md:col-span-6",
    node: (
      <div className="space-y-3">
        {headingScale.map(({ cls, spec }) => (
          <p key={cls} className={`font-hc-display ${cls} leading-tight`}>
            Heading <span className="font-hc-label text-sm uppercase tracking-[0.14em] text-hc-muted">{spec}</span>
          </p>
        ))}
      </div>
    ),
  },
  {
    title: "Body text",
    span: "md:col-span-6",
    node: (
      <>
        <p className="text-lg leading-relaxed">
          <span className="float-left mr-3 font-hc-display text-6xl leading-[0.8]">A</span>
          tribute to one album, one track at a time. Read the credits, find the singles and see how
          the record is put together.
        </p>
        <Spec>Source Serif 4 · 18 / 1.6 · regular</Spec>
      </>
    ),
  },
  {
    title: "Labels",
    span: "md:col-span-4",
    node: (
      <>
        <div className="space-y-2 font-hc-label font-semibold uppercase tracking-[0.14em]">
          {labelSizes.map(({ cls, text }) => (
            <p key={text} className={cls}>{text}</p>
          ))}
        </div>
        <Spec>Barlow Condensed · 600 · caps · +14%</Spec>
      </>
    ),
  },
  {
    title: "Billing block",
    span: "md:col-span-8",
    node: (
      <div className="text-center font-hc-label uppercase leading-snug tracking-[0.12em]">
        <p className="text-sm text-hc-muted">A tribute presents</p>
        <ul className="my-3 columns-1 gap-8 text-xl font-medium sm:columns-2">
          {tracks.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <p className="text-sm text-hc-muted">Original art. No lyrics.</p>
      </div>
    ),
  },
];
