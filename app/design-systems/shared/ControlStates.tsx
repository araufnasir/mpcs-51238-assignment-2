import type { ReactNode } from "react";
import { tracks } from "../../data/tracks";
import { ForceState } from "./ForceState";
import type { ControlNotes, DocsTheme } from "./types";

type Force = "hover" | "focus" | "pressed";
type Cell = { label: string; force?: Force; selected?: boolean; disabled?: boolean };
type Flags = { selected: boolean; disabled: boolean };

const rest: Cell = { label: "Rest" };
const hover: Cell = { label: "Hover", force: "hover" };
const focus: Cell = { label: "Focus", force: "focus" };
const pressed: Cell = { label: "Pressed", force: "pressed" };
const selected: Cell = { label: "Selected", selected: true };
const disabled: Cell = { label: "Disabled", disabled: true };

export function ControlStates({ theme, notes }: { theme: DocsTheme; notes: ControlNotes }) {
  const { Section, kit, type: t, cls } = theme;
  const { Button, Checkbox, FilterChip, Link, ListRow, Radio, Select, Tab, TextInput, Toggle } = kit;

  const controls: { name: string; cells: Cell[]; render: (flags: Flags) => ReactNode }[] = [
    { name: "Primary button", cells: [rest, hover, focus, pressed, disabled], render: ({ disabled }) => <Button variant="primary" disabled={disabled}>Next track</Button> },
    { name: "Secondary button", cells: [rest, hover, focus, pressed, disabled], render: ({ disabled }) => <Button disabled={disabled}>Details</Button> },
    { name: "Link", cells: [rest, hover, focus, pressed, disabled], render: ({ disabled }) => <Link href="#section-5" disabled={disabled}>Read the credits</Link> },
    { name: "Text input", cells: [rest, hover, focus, disabled], render: ({ disabled }) => <TextInput aria-label="Search" placeholder="Search" disabled={disabled} className="w-48" /> },
    {
      name: "Select",
      cells: [rest, hover, focus, disabled],
      render: ({ disabled }) => (
        <div className="w-48">
          <Select aria-label="Sort by" disabled={disabled}>
            <option>Album order</option>
          </Select>
        </div>
      ),
    },
    { name: "Checkbox", cells: [rest, hover, focus, pressed, selected, disabled], render: ({ selected, disabled }) => <Checkbox label="Singles" defaultChecked={selected} disabled={disabled} /> },
    { name: "Radio", cells: [rest, hover, focus, pressed, selected, disabled], render: ({ selected, disabled }) => <Radio name="cs-radio" label="A to Z" defaultChecked={selected} disabled={disabled} /> },
    { name: "Toggle", cells: [rest, hover, focus, pressed, selected, disabled], render: ({ selected, disabled }) => <Toggle label="Credits" defaultChecked={selected} disabled={disabled} /> },
    { name: "Tab", cells: [rest, hover, focus, pressed, selected, disabled], render: ({ selected, disabled }) => <Tab aria-selected={selected} disabled={disabled}>Singles</Tab> },
    { name: "Filter chip", cells: [rest, hover, focus, pressed, selected, disabled], render: ({ selected, disabled }) => <FilterChip selected={selected} disabled={disabled}>Singles</FilterChip> },
    {
      name: "List row",
      cells: [rest, hover, focus, pressed, selected, disabled],
      render: ({ selected, disabled }) => (
        <ul className="w-80">
          <ListRow track={tracks[4]} selected={selected} disabled={disabled} />
        </ul>
      ),
    },
  ];

  return (
    <Section
      number={5}
      title="Control states"
      intro="Every state a control can be in. These are the same components as above, held in each state so you can compare them side by side; try the real thing by hovering and tabbing through them."
    >
      <ul>
        {controls.map(({ name, cells, render }) => (
          <li key={name} className={`grid gap-4 py-6 md:grid-cols-12 md:gap-8 ${cls.hairline}`}>
            <div className="md:col-span-3">
              <h3 className={t.label}>{name}</h3>
              <p className={`${t.bodySmall} mt-2 ${cls.muted}`}>{notes[name]}</p>
            </div>
            <div className="flex flex-wrap items-end gap-x-8 gap-y-6 md:col-span-9">
              {cells.map(({ label, force, selected = false, disabled = false }) => (
                <div key={label} className="flex flex-col items-start gap-3">
                  <ForceState state={force}>{render({ selected, disabled })}</ForceState>
                  <p className={`${t.labelSmall} ${cls.muted}`}>{label}</p>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
