import type { ReactNode } from "react";
import type { Artifact } from "../../../lib/artifact";

type State = { label: string; cls: string; disabled?: boolean; on?: boolean };

/** States frozen with is-* classes so every one is visible at once. */
const states: State[] = [
  { label: "Rest", cls: "" },
  { label: "Hover", cls: "is-hover" },
  { label: "Pressed", cls: "is-pressed" },
  { label: "Focus", cls: "is-focus" },
  { label: "Disabled", cls: "", disabled: true },
];

const tracks = [
  { n: "01", title: "Wanna Be Startin' Somethin'", single: true, state: "" },
  { n: "02", title: "Baby Be Mine", single: false, state: "is-hover" },
  { n: "03", title: "The Girl Is Mine", single: true, state: "is-pressed" },
  { n: "04", title: "Thriller", single: true, state: "is-selected" },
  { n: "05", title: "Beat It", single: true, state: "" },
];

const tabs = ["All", "Singles", "Album tracks"];

const Labeled = ({ label, children }: { label: string; children: ReactNode }) => (
  <div className="flex flex-col items-start gap-2">
    {children}
    <p className="ln-smallcaps text-sm text-ln-muted">{label}</p>
  </div>
);

const Group = ({ title, children }: { title: string; children: ReactNode }) => (
  <div>
    <p className="ln-smallcaps mb-3 text-base">{title}</p>
    <div className="flex flex-wrap items-end gap-x-6 gap-y-5">{children}</div>
  </div>
);

const Badge = ({ children }: { children: string }) => (
  <span className="ln-smallcaps border border-ln-text px-2 text-base">{children}</span>
);

export const interfaceArtifacts: Artifact[] = [
  {
    title: "Buttons and links, every state",
    span: "md:col-span-9",
    node: (
      <div className="space-y-8">
        {(["primary", "secondary"] as const).map((kind) => (
          <Group key={kind} title={kind === "primary" ? "Primary: the only oxblood control" : "Secondary"}>
            {states.map(({ label, cls, disabled }) => (
              <Labeled key={label} label={label}>
                <button type="button" disabled={disabled} className={`ln-btn ln-btn--${kind} ${cls}`}>
                  {kind === "primary" ? "Play" : "Details"}
                </button>
              </Labeled>
            ))}
          </Group>
        ))}
        <Group title="Link">
          {states.map(({ label, cls, disabled }) => (
            <Labeled key={label} label={label}>
              <a href="#links" aria-disabled={disabled} className={`ln-link ${cls} ${disabled ? "is-disabled" : ""}`}>Read the notes</a>
            </Labeled>
          ))}
        </Group>
      </div>
    ),
  },
  {
    title: "Form controls",
    span: "md:col-span-5",
    node: (
      <div className="space-y-8">
        <Group title="Text input">
          {states.filter((s) => s.label !== "Pressed").map(({ label, cls, disabled }) => (
            <Labeled key={label} label={label}>
              <input aria-label={`Search, ${label}`} placeholder="Search tracks" disabled={disabled} className={`ln-input w-36 ${cls}`} />
            </Labeled>
          ))}
        </Group>
        <Group title="Checkbox">
          {[...states, { label: "Checked", cls: "", on: true }].map(({ label, cls, disabled, on }) => (
            <Labeled key={label} label={label}>
              <label className="ln-check">
                <input type="checkbox" className="sr-only" disabled={disabled} defaultChecked={on} aria-label={label} />
                <span className={`ln-box ln-box--check ${cls}`} />
              </label>
            </Labeled>
          ))}
        </Group>
        <Group title="Radio">
          {[...states, { label: "Selected", cls: "", on: true }].map(({ label, cls, disabled, on }) => (
            <Labeled key={label} label={label}>
              <label className="ln-check">
                <input type="radio" name={`radio-${label}`} className="sr-only" disabled={disabled} defaultChecked={on} aria-label={label} />
                <span className={`ln-box ln-box--radio ${cls}`} />
              </label>
            </Labeled>
          ))}
        </Group>
        <Group title="Toggle">
          {[...states, { label: "On", cls: "", on: true }].map(({ label, cls, disabled, on }) => (
            <Labeled key={label} label={label}>
              <button type="button" role="switch" aria-checked={Boolean(on)} aria-label={label} disabled={disabled} className={`ln-toggle ${cls}`} />
            </Labeled>
          ))}
        </Group>
      </div>
    ),
  },
  {
    title: "Filter chips and tabs",
    span: "md:col-span-4",
    node: (
      <div className="space-y-8">
        <Group title="Chips">
          {tabs.map((t, i) => (
            <button key={t} type="button" aria-pressed={i === 0} className="ln-chip">{t}</button>
          ))}
        </Group>
        <Group title="Chip, every state">
          {states.map(({ label, cls, disabled }) => (
            <Labeled key={label} label={label}>
              <button type="button" aria-pressed="false" disabled={disabled} className={`ln-chip ${cls}`}>Singles</button>
            </Labeled>
          ))}
        </Group>
        <Group title="Tabs">
          <div role="tablist" className="flex flex-wrap">
            {tabs.map((t, i) => (
              <button key={t} type="button" role="tab" aria-selected={i === 0} className="ln-tab">{t}</button>
            ))}
          </div>
        </Group>
        <Group title="Tab, every state">
          {states.map(({ label, cls, disabled }) => (
            <Labeled key={label} label={label}>
              <button type="button" role="tab" aria-selected="false" disabled={disabled} className={`ln-tab ${cls}`}>Singles</button>
            </Labeled>
          ))}
        </Group>
      </div>
    ),
  },
  {
    title: "Track card",
    span: "md:col-span-4",
    node: (
      <article className="border border-ln-text bg-ln-surface p-6">
        <p className="ln-smallcaps text-base text-ln-muted">Track</p>
        <p className="text-8xl font-extralight leading-none tabular-nums">04</p>
        <h3 className="mt-4 text-3xl font-normal leading-tight">Thriller</h3>
        <p className="mt-2 italic">The title song.</p>
        <div className="mt-6 flex items-center justify-between border-t border-ln-text pt-4">
          <Badge>Single</Badge>
          <a href="#track-card" className="ln-link">Read more</a>
        </div>
      </article>
    ),
  },
  {
    title: "Track list rows",
    span: "md:col-span-5",
    node: (
      <>
        <ul className="border-y border-ln-text">
          {tracks.map((t) => (
            <li key={t.n} className={`ln-row flex items-baseline gap-5 border-b border-ln-muted/50 px-3 py-3 last:border-b-0 ${t.state}`}>
              <span className="w-10 text-3xl font-extralight tabular-nums leading-none">{t.n}</span>
              <span className="ln-row-title flex-1 text-xl">{t.title}</span>
              {t.single && <Badge>Single</Badge>}
            </li>
          ))}
        </ul>
        <p className="ln-smallcaps mt-3 text-sm text-ln-muted">Row 2 hover · row 3 pressed · row 4 selected</p>
      </>
    ),
  },
  {
    title: "Detail panel",
    span: "md:col-span-9",
    node: (
      <section aria-label="Track details" className="grid grid-cols-1 gap-6 border-y-[3px] border-double border-ln-text bg-ln-surface p-6 md:grid-cols-9">
        <p className="text-8xl font-extralight leading-none tabular-nums md:col-span-2">04</p>
        <div className="md:col-span-7">
          <p className="ln-smallcaps text-base text-ln-muted">Track four · Single</p>
          <h3 className="mt-1 text-5xl font-light leading-tight">Thriller</h3>
          <p className="mt-3 max-w-[56ch] text-xl italic leading-snug">
            The title song, written by Rod Temperton. The album came out in 1982.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <button type="button" className="ln-btn ln-btn--primary">Play</button>
            <button type="button" className="ln-btn ln-btn--secondary">Close</button>
          </div>
        </div>
      </section>
    ),
  },
];
