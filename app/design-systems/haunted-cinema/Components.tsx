import { Badge, Button, Checkbox, Link, Radio, Select, Tabs, TextField, Toggle, TrackCard, type as t } from "../../components/haunted-cinema";
import { tracks } from "../../data/tracks";
import { ChipsDemo, PanelDemo, RowsDemo, SearchDemo } from "./demos";
import { Section, Specimen } from "./Section";

export function Components() {
  return (
    <Section number={4} title="Components" intro="Real components from app/components/haunted-cinema. Hover, tab to and press them: nothing here is a picture.">
      <Specimen title="Buttons" usage="Primary is the one action on a screen, and the only place the accent appears. Secondary is everything else.">
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Next track</Button>
          <Button>Details</Button>
        </div>
      </Specimen>

      <Specimen title="Link" usage="Underlined Bone text. Hover inverts it.">
        <p className={t.body}>
          Read the <Link href="#section-4">credits</Link>, or go back to <Link href="/">all directions</Link>.
        </p>
      </Specimen>

      <Specimen title="Text input" usage="The label is always visible. Errors say 'Error' in words and thicken the border.">
        <div className="grid gap-6 sm:grid-cols-2">
          <TextField label="Your name" placeholder="Name" hint="Used nowhere. Nothing is saved." />
          <TextField label="Track number" defaultValue="14" error="The album has nine tracks." />
        </div>
      </Specimen>

      <Specimen title="Select" usage="A native select, styled to match the input.">
        <div className="max-w-sm">
          <label htmlFor="ds-sort" className={`${t.label} mb-2 block`}>Sort by</label>
          <Select id="ds-sort" defaultValue="order">
            <option value="order">Album order</option>
            <option value="title">Title</option>
          </Select>
        </div>
      </Specimen>

      <Specimen title="Checkboxes and radios" usage="Checkboxes pick any number; radios pick one.">
        <div className="grid gap-8 sm:grid-cols-2">
          <fieldset className="flex flex-col items-start gap-3">
            <legend className={`${t.label} mb-3`}>Show</legend>
            <Checkbox label="Singles" defaultChecked />
            <Checkbox label="Album tracks" />
          </fieldset>
          <fieldset className="flex flex-col items-start gap-3">
            <legend className={`${t.label} mb-3`}>Order</legend>
            <Radio name="ds-order" label="Album order" defaultChecked />
            <Radio name="ds-order" label="A to Z" />
          </fieldset>
        </div>
      </Specimen>

      <Specimen title="Toggle" usage="For a setting that takes effect immediately.">
        <Toggle label="Show credits" defaultChecked />
      </Specimen>

      <Specimen title="Tabs" usage="Switch between views of the same thing. Arrow keys move between tabs.">
        <Tabs
          label="Track view"
          items={[
            { id: "all", label: "All tracks", content: <p className={t.body}>All nine tracks, in album order.</p> },
            { id: "singles", label: "Singles", content: <p className={t.body}>Seven of the nine were released as singles.</p> },
            { id: "credits", label: "Credits", content: <p className={t.body}>Produced by Quincy Jones.</p> },
          ]}
        />
      </Specimen>

      <Specimen title="Filter chips" usage="Narrow a list. One chip is selected at a time here, and it inverts to Bone.">
        <ChipsDemo />
      </Specimen>

      <Specimen title="Search field" usage="For the track browser. A clear button appears once there is text; search for 'xyz' to see the empty state.">
        <SearchDemo />
      </Specimen>

      <Specimen title="Track card" usage="A track as a poster: number, title, credit, and one way in.">
        <div className="max-w-sm">
          <TrackCard track={tracks[3]} />
        </div>
      </Specimen>

      <Specimen title="List rows" usage="A whole row is the button. Selected inverts to Bone.">
        <RowsDemo />
      </Specimen>

      <Specimen title="Badge" usage="A short tag. It borrows the color around it.">
        <div className="flex items-center gap-4">
          <Badge>Single</Badge>
          <Badge>New</Badge>
        </div>
      </Specimen>

      <Specimen title="Detail panel" usage="The notes for one track. 'Next track' is the primary action.">
        <PanelDemo />
      </Specimen>
    </Section>
  );
}
