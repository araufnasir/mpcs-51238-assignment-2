import type { ReactNode } from "react";
import { ColorRoles } from "./ColorRoles";
import { Components } from "./Components";
import { ControlStates } from "./ControlStates";
import { SpacingShape } from "./SpacingShape";
import { TypeRoles } from "./TypeRoles";
import { UiStates } from "./UiStates";
import type { ColorRoleDef, ControlNotes, DocsTheme, Tokens, TypeRoleDef } from "./types";

export const sectionTitles = ["Color roles", "Type roles", "Spacing and shape", "Components", "Control states", "UI states"];

type Props = {
  theme: DocsTheme;
  colorRoles: ColorRoleDef[];
  colorIntro: string;
  colorNote?: ReactNode;
  typeRoles: TypeRoleDef[];
  typeIntro: string;
  tokens: Tokens;
  controlNotes: ControlNotes;
};

/** The six sections, in order. Each design system supplies its theme and its own content. */
export function DesignSystemSections({ theme, colorRoles, colorIntro, colorNote, typeRoles, typeIntro, tokens, controlNotes }: Props) {
  return (
    <>
      <ColorRoles theme={theme} roles={colorRoles} intro={colorIntro} note={colorNote} />
      <TypeRoles theme={theme} roles={typeRoles} intro={typeIntro} />
      <SpacingShape theme={theme} tokens={tokens} />
      <Components theme={theme} />
      <ControlStates theme={theme} notes={controlNotes} />
      <UiStates theme={theme} />
    </>
  );
}
