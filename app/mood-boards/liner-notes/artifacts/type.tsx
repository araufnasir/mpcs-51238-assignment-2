import type { Artifact } from "../../../lib/artifact";

const numbers = ["01", "02", "03", "04", "05", "06", "07", "08", "09"];

const headingScale = [
  { cls: "text-5xl font-light", name: "Heading one", spec: "48 · light" },
  { cls: "text-3xl font-normal", name: "Heading two", spec: "32 · regular" },
  { cls: "text-2xl font-normal", name: "Heading three", spec: "24 · regular" },
];

const credits = [
  ["Produced by", "Quincy Jones"],
  ["Title song written by", "Rod Temperton"],
  ["Released", "1982"],
  ["Tracks", "Nine"],
];

const Spec = ({ children }: { children: string }) => (
  <p className="ln-smallcaps mt-4 text-base text-ln-muted">{children}</p>
);

export const typeArtifacts: Artifact[] = [
  {
    title: "Display specimen",
    span: "md:col-span-9",
    node: (
      <>
        <p className="text-7xl font-light leading-[0.85] tracking-tight md:text-[10rem]">Thriller</p>
        <Spec>Newsreader · light 300 · 160 / 0.85 · one per page</Spec>
      </>
    ),
  },
  {
    title: "Track numbers",
    span: "md:col-span-9",
    node: (
      <>
        <ol className="grid grid-cols-3 gap-y-2 md:grid-cols-9 md:gap-x-6">
          {numbers.map((n) => (
            <li key={n} className="text-6xl font-extralight tabular-nums leading-none">{n}</li>
          ))}
        </ol>
        <Spec>Extra light 200 · 64 · one per grid column</Spec>
      </>
    ),
  },
  {
    title: "Heading scale",
    span: "md:col-span-5",
    node: (
      <div className="space-y-4">
        {headingScale.map(({ cls, name, spec }) => (
          <p key={name} className={`${cls} leading-tight`}>
            {name} <span className="ln-smallcaps ml-2 text-base text-ln-muted">{spec}</span>
          </p>
        ))}
      </div>
    ),
  },
  {
    title: "Credits",
    span: "md:col-span-4",
    node: (
      <dl>
        {credits.map(([role, name]) => (
          <div key={role} className="flex items-baseline justify-between gap-4 border-b border-ln-muted/50 py-2 first:pt-0">
            <dt className="ln-smallcaps text-base">{role}</dt>
            <dd>{name}</dd>
          </div>
        ))}
      </dl>
    ),
  },
  {
    title: "Body text",
    span: "md:col-span-9",
    node: (
      <>
        <div className="gap-6 leading-[1.65] md:columns-2">
          <p>
            <span className="ln-smallcaps">A tribute to one album,</span> one track at a time. Read
            the credits, find the singles and see how the record is put together.
          </p>
          <p className="mt-4 md:mt-0">
            Nothing here is meant to be hurried. Each track gets its own page of notes, set in a
            single calm typeface with room around it.
          </p>
        </div>
        <Spec>Newsreader · regular 400 · 18 / 1.65 · two columns</Spec>
      </>
    ),
  },
  {
    title: "Pull quote in the margin",
    span: "md:col-span-9",
    node: (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-9">
        <blockquote className="md:col-span-4">
          <span className="mb-4 block h-0.5 w-10 bg-ln-accent" aria-hidden />
          <p className="text-3xl font-light italic leading-snug md:text-4xl">
            Listen in order, and the record tells you where it is going.
          </p>
        </blockquote>
        <p className="leading-[1.65] md:col-span-5 md:col-start-6">
          The wide margin holds the voice of the page. The text column stays narrow so lines are
          comfortable to read, and the quote gets space to be set large and in italic.
        </p>
      </div>
    ),
  },
];
