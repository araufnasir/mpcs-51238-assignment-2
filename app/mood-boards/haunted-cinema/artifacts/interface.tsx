import type { Artifact } from "../../../lib/artifact";

const buttonStates = [
  { label: "Rest", cls: "" },
  { label: "Hover", cls: "is-hover" },
  { label: "Pressed", cls: "is-pressed" },
  { label: "Focus", cls: "is-focus" },
  { label: "Disabled", cls: "", disabled: true },
];

const tracks = [
  { n: "01", title: "Wanna Be Startin' Somethin'", single: true },
  { n: "02", title: "Baby Be Mine", single: false },
  { n: "03", title: "The Girl Is Mine", single: true },
  { n: "04", title: "Thriller", single: true },
  { n: "05", title: "Beat It", single: true },
];

const rowState = ["", "is-hover", "", "is-selected", ""];

const chips = [
  { label: "All", selected: true },
  { label: "Singles", selected: false },
  { label: "Album tracks", selected: false },
];

const Badge = ({ children }: { children: string }) => (
  <span className="bg-hc-accent px-2 py-0.5 font-hc-label text-hc-text text-sm font-semibold uppercase tracking-[0.14em]">
    {children}
  </span>
);

export const interfaceArtifacts: Artifact[] = [
  {
    title: "Buttons, every state",
    span: "md:col-span-12",
    node: (
      <div className="space-y-6">
        {(["primary", "secondary"] as const).map((kind) => (
          <div key={kind} className="flex flex-wrap items-end gap-x-6 gap-y-5">
            {buttonStates.map(({ label, cls, disabled }) => (
              <div key={label}>
                <button type="button" disabled={disabled} className={`hc-btn hc-btn--${kind} ${cls}`}>
                  {kind === "primary" ? "Play" : "Details"}
                </button>
                <p className="mt-2 font-hc-label text-xs uppercase tracking-[0.14em] text-hc-muted">
                  {kind} · {label}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Track card",
    span: "md:col-span-4",
    node: (
      <article className="hc-frame m-2 bg-hc-surface p-5">
        <p className="font-hc-label text-sm font-semibold uppercase tracking-[0.14em] text-hc-muted">Track</p>
        <p className="font-hc-display text-7xl leading-none">04</p>
        <h3 className="mt-3 font-hc-display text-3xl leading-tight">Thriller</h3>
        <div className="mt-4 flex items-center justify-between">
          <Badge>Single</Badge>
          <a href="#track-card" className="font-hc-label font-semibold uppercase tracking-[0.14em] underline underline-offset-4 hover:text-hc-muted">
            Read more
          </a>
        </div>
      </article>
    ),
  },
  {
    title: "Track list rows",
    span: "md:col-span-8",
    node: (
      <ul className="divide-y divide-hc-muted/40 border-y border-hc-muted/40">
        {tracks.map((t, i) => (
          <li key={t.n} className={`hc-row flex items-center gap-4 px-3 py-3 ${rowState[i]}`}>
            <span className="w-8 font-hc-display text-xl">{t.n}</span>
            <span className="flex-1 font-hc-display text-xl">{t.title}</span>
            {t.single && <Badge>Single</Badge>}
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "Filter chips",
    span: "md:col-span-5",
    node: (
      <div className="flex flex-wrap gap-3">
        {chips.map(({ label, selected }) => (
          <button
            key={label}
            type="button"
            aria-pressed={selected}
            className={`border-2 border-hc-text px-4 py-1 font-hc-label font-semibold uppercase tracking-[0.14em] hover:bg-hc-surface focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-hc-text ${
              selected ? "bg-hc-text text-hc-background hover:bg-hc-text" : ""
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    ),
  },
  {
    title: "Detail panel",
    span: "md:col-span-7",
    node: (
      <section className="hc-frame m-2 bg-hc-surface p-6" aria-label="Track details">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-hc-label text-sm font-semibold uppercase tracking-[0.3em] text-hc-muted">Now showing</p>
            <h3 className="font-hc-display text-4xl leading-tight">Thriller</h3>
          </div>
          <button type="button" className="hc-btn hc-btn--secondary">Close</button>
        </div>
        <p className="mt-3 text-lg leading-relaxed">
          Track four and the title song, written by Rod Temperton. The album came out in 1982.
        </p>
      </section>
    ),
  },
];
