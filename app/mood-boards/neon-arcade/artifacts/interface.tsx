import type { ReactNode } from "react";
import { PixelBox } from "../PixelBox";
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

const Labeled = ({ label, children }: { label: string; children: ReactNode }) => (
  <div className="flex flex-col items-start gap-3">
    {children}
    <p className="text-[11px] font-bold uppercase tracking-[0.1em]">{label}</p>
  </div>
);

const Badge = ({ children }: { children: string }) => (
  <span className="bg-na-text px-2 py-0.5 text-xs font-bold uppercase tracking-[0.1em] text-na-background">{children}</span>
);

const Group = ({ title, children }: { title: string; children: ReactNode }) => (
  <div>
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.1em]">{title}</p>
    <div className="flex flex-wrap items-end gap-x-6 gap-y-6">{children}</div>
  </div>
);

export const interfaceArtifacts: Artifact[] = [
  {
    title: "Buttons, every state",
    span: "md:col-span-12",
    node: (
      <div className="space-y-8 pb-2">
        {(["primary", "secondary"] as const).map((kind) => (
          <Group key={kind} title={kind === "primary" ? "Primary: the one glow" : "Secondary"}>
            {states.map(({ label, cls, disabled }) => (
              <Labeled key={label} label={label}>
                <button type="button" disabled={disabled} className={`na-btn na-btn--${kind} ${cls}`}>
                  <span className="na-face">{kind === "primary" ? "Play" : "Details"}</span>
                </button>
              </Labeled>
            ))}
          </Group>
        ))}
      </div>
    ),
  },
  {
    title: "Filter chips",
    span: "md:col-span-6",
    node: (
      <div className="space-y-6">
        <Group title="Selected and not">
          <button type="button" aria-pressed="true" className="na-chip">All</button>
          <button type="button" aria-pressed="false" className="na-chip">Singles</button>
          <button type="button" aria-pressed="false" className="na-chip">Album tracks</button>
        </Group>
        <Group title="Unselected chip, every state">
          {states.map(({ label, cls, disabled }) => (
            <Labeled key={label} label={label}>
              <button type="button" aria-pressed="false" disabled={disabled} className={`na-chip ${cls}`}>Singles</button>
            </Labeled>
          ))}
        </Group>
      </div>
    ),
  },
  {
    title: "Form controls",
    span: "md:col-span-6",
    node: (
      <div className="space-y-6">
        <Group title="Text input">
          {states.filter((s) => s.label !== "Pressed").map(({ label, cls, disabled }) => (
            <Labeled key={label} label={label}>
              <input aria-label={`Search, ${label}`} placeholder="Search" disabled={disabled} className={`na-input w-28 ${cls}`} />
            </Labeled>
          ))}
        </Group>
        <Group title="Checkbox">
          {[...states, { label: "Checked", cls: "", on: true }].map(({ label, cls, disabled, on }) => (
            <Labeled key={label} label={label}>
              <label className="na-check">
                <input type="checkbox" className="sr-only" disabled={disabled} defaultChecked={on} aria-label={label} />
                <span className={`na-check-box ${cls}`} />
              </label>
            </Labeled>
          ))}
        </Group>
        <Group title="Toggle">
          {[...states, { label: "On", cls: "", on: true }].map(({ label, cls, disabled, on }) => (
            <Labeled key={label} label={label}>
              <button type="button" role="switch" aria-checked={Boolean(on)} aria-label={label} disabled={disabled} className={`na-toggle ${cls}`} />
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
      <PixelBox className="border-na-text bg-na-background p-5" offset="6px">
        <p className="text-xs font-bold uppercase tracking-[0.1em]">Track</p>
        <p className="mt-2 font-na-display text-5xl leading-none">04</p>
        <h3 className="mt-4 text-xl font-bold">Thriller</h3>
        <div className="mt-5 flex items-center justify-between">
          <Badge>Single</Badge>
          <a href="#track-card" className="text-sm font-bold uppercase tracking-[0.1em] underline underline-offset-4 hover:bg-na-text hover:text-na-background focus-visible:outline-4 focus-visible:outline-na-secondary active:bg-na-line active:text-na-text">
            Read more
          </a>
        </div>
      </PixelBox>
    ),
  },
  {
    title: "Track list rows",
    span: "md:col-span-8",
    node: (
      <>
        <ul className="divide-y-4 divide-na-line border-y-4 border-na-line">
          {tracks.map((t) => (
            <li key={t.n} className={`na-row flex items-center gap-4 px-3 py-3 ${t.state}`}>
              <span className="w-8 font-na-display text-xs">{t.n}</span>
              <span className="flex-1 font-bold">{t.title}</span>
              {t.single && <Badge>Single</Badge>}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs">Row 2 hover · row 3 pressed · row 4 selected</p>
      </>
    ),
  },
  {
    title: "Detail panel",
    span: "md:col-span-12",
    node: (
      <PixelBox className="border-na-text bg-na-background p-6" offset="8px">
        <section aria-label="Track details">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.1em]">Now playing</p>
              <h3 className="mt-3 font-na-display text-xl leading-snug md:text-3xl">THRILLER</h3>
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.1em]">Track 04</span>
          </div>
          <p className="mt-4 max-w-[60ch] leading-7">
            The title song, written by Rod Temperton. The album came out in 1982.
          </p>
          <div className="mt-6 flex flex-wrap gap-6 pb-2">
            <button type="button" className="na-btn na-btn--primary"><span className="na-face">Play</span></button>
            <button type="button" className="na-btn na-btn--secondary"><span className="na-face">Close</span></button>
          </div>
        </section>
      </PixelBox>
    ),
  },
];
