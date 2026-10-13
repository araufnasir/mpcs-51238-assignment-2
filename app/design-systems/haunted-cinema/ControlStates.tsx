import type { ReactNode } from "react";
import { Button, Checkbox, FilterChip, Link, ListRow, Radio, Select, Tab, TextInput, Toggle, type as t } from "../../components/haunted-cinema";
import { tracks } from "../../data/tracks";
import { ForceState } from "./ForceState";
import { Section } from "./Section";

type Force = "hover" | "focus" | "pressed";
type Cell = { label: string; force?: Force; selected?: boolean; disabled?: boolean };

const rest: Cell = { label: "Rest" };
const hover: Cell = { label: "Hover", force: "hover" };
const focus: Cell = { label: "Focus", force: "focus" };
const pressed: Cell = { label: "Pressed", force: "pressed" };
const selected: Cell = { label: "Selected", selected: true };
const disabled: Cell = { label: "Disabled", disabled: true };

type Flags = { selected: boolean; disabled: boolean };

const controls: { name: string; note: string; cells: Cell[]; render: (flags: Flags) => ReactNode }[] = [
  {
    name: "Primary button",
    note: "Lifts with a hard Bone shadow, sinks and darkens when pressed.",
    cells: [rest, hover, focus, pressed, disabled],
    render: ({ disabled }) => <Button variant="primary" disabled={disabled}>Next track</Button>,
  },
  {
    name: "Secondary button",
    note: "Same lift. The fill moves from clear to Soot.",
    cells: [rest, hover, focus, pressed, disabled],
    render: ({ disabled }) => <Button disabled={disabled}>Details</Button>,
  },
  {
    name: "Link",
    note: "Hover inverts it. A disabled link is plain, dotted text.",
    cells: [rest, hover, focus, pressed, disabled],
    render: ({ disabled }) => <Link href="#section-5" disabled={disabled}>Read the credits</Link>,
  },
  {
    name: "Text input",
    note: "The border goes from Ash to Bone, then gains a ring.",
    cells: [rest, hover, focus, disabled],
    render: ({ disabled }) => <TextInput aria-label="Search" placeholder="Search" disabled={disabled} className="w-48" />,
  },
  {
    name: "Select",
    note: "Follows the text input.",
    cells: [rest, hover, focus, disabled],
    render: ({ disabled }) => (
      <div className="w-48">
        <Select aria-label="Sort by" disabled={disabled}>
          <option>Album order</option>
        </Select>
      </div>
    ),
  },
  {
    name: "Checkbox",
    note: "Selected fills with Bone and draws a check.",
    cells: [rest, hover, focus, pressed, selected, disabled],
    render: ({ selected, disabled }) => <Checkbox label="Singles" defaultChecked={selected} disabled={disabled} />,
  },
  {
    name: "Radio",
    note: "Selected fills with Bone and a dot.",
    cells: [rest, hover, focus, pressed, selected, disabled],
    render: ({ selected, disabled }) => <Radio name="cs-radio" label="A to Z" defaultChecked={selected} disabled={disabled} />,
  },
  {
    name: "Toggle",
    note: "On fills the track with Bone and moves the knob.",
    cells: [rest, hover, focus, pressed, selected, disabled],
    render: ({ selected, disabled }) => <Toggle label="Credits" defaultChecked={selected} disabled={disabled} />,
  },
  {
    name: "Tab",
    note: "Selected gets a heavy Bone underline and full-strength text.",
    cells: [rest, hover, focus, pressed, selected, disabled],
    render: ({ selected, disabled }) => <Tab aria-selected={selected} disabled={disabled}>Singles</Tab>,
  },
  {
    name: "Filter chip",
    note: "Selected inverts to Bone.",
    cells: [rest, hover, focus, pressed, selected, disabled],
    render: ({ selected, disabled }) => <FilterChip selected={selected} disabled={disabled}>Singles</FilterChip>,
  },
  {
    name: "List row",
    note: "Hover adds a bar and Soot. Selected inverts to Bone.",
    cells: [rest, hover, focus, pressed, selected, disabled],
    render: ({ selected, disabled }) => (
      <ul className="w-64">
        <ListRow track={tracks[4]} selected={selected} disabled={disabled} />
      </ul>
    ),
  },
];

export function ControlStates() {
  return (
    <Section
      number={5}
      title="Control states"
      intro="Every state a control can be in. These are the same components as above, held in each state so you can compare them side by side; try the real thing by hovering and tabbing through them."
    >
      <ul>
        {controls.map(({ name, note, cells, render }) => (
          <li key={name} className="grid gap-4 border-t border-hc-border py-6 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-3">
              <h3 className={t.label}>{name}</h3>
              <p className={`${t.bodySmall} mt-2 text-hc-muted`}>{note}</p>
            </div>
            <div className="flex flex-wrap items-end gap-x-8 gap-y-6 md:col-span-9">
              {cells.map(({ label, force, selected = false, disabled = false }) => (
                <div key={label} className="flex flex-col items-start gap-3">
                  <ForceState state={force}>{render({ selected, disabled })}</ForceState>
                  <p className={`${t.labelSmall} text-hc-muted`}>{label}</p>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
