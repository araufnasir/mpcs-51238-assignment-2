import type {
  ButtonHTMLAttributes,
  ComponentProps,
  ComponentType,
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
} from "react";
import type NextLink from "next/link";
import type { Track } from "../../data/tracks";

type Choice = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & { label: string };
type Notice = { title: string; children?: ReactNode; action?: ReactNode };

/** What every design system's component library exports. The site can use any of them. */
export type Kit = {
  Button: ComponentType<ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" }>;
  Link: ComponentType<ComponentProps<typeof NextLink> & { disabled?: boolean }>;
  TextInput: ComponentType<InputHTMLAttributes<HTMLInputElement>>;
  TextField: ComponentType<InputHTMLAttributes<HTMLInputElement> & { label: string; hint?: string; error?: string }>;
  SearchField: ComponentType<Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & { onClear?: () => void }>;
  Select: ComponentType<SelectHTMLAttributes<HTMLSelectElement>>;
  Checkbox: ComponentType<Choice>;
  Radio: ComponentType<Choice>;
  Toggle: ComponentType<Choice>;
  Tabs: ComponentType<{ items: { id: string; label: string; content: ReactNode }[]; label: string }>;
  Tab: ComponentType<ButtonHTMLAttributes<HTMLButtonElement>>;
  FilterChip: ComponentType<Omit<ButtonHTMLAttributes<HTMLButtonElement>, "aria-pressed"> & { selected?: boolean }>;
  Badge: ComponentType<{ children: ReactNode }>;
  TrackCard: ComponentType<{ track: Track; onOpen?: () => void }>;
  ListRow: ComponentType<ButtonHTMLAttributes<HTMLButtonElement> & { track: Track; selected?: boolean }>;
  DetailPanel: ComponentType<{ track: Track; onClose?: () => void; onNext?: () => void }>;
  EmptyState: ComponentType<Notice>;
  LoadingState: ComponentType<{ label: string }>;
  ErrorState: ComponentType<Notice>;
  SuccessState: ComponentType<Notice>;
};

export type TypeClasses = Record<"display" | "heading" | "body" | "bodySmall" | "label" | "labelSmall", string>;

export type Demos = {
  ChipsDemo: ComponentType;
  RowsDemo: ComponentType;
  SearchDemo: ComponentType;
  PanelDemo: ComponentType;
};

export type SectionProps = { number: number; title: string; intro: string; children: ReactNode };
export type SpecimenProps = { title: string; usage?: string; children: ReactNode };

/** Everything a design-system page needs to render itself in one direction's style. */
export type DocsTheme = {
  slug: string;
  kit: Kit;
  type: TypeClasses;
  demos: Demos;
  Section: ComponentType<SectionProps>;
  Specimen: ComponentType<SpecimenProps>;
  cls: {
    /** Muted text color. */
    muted: string;
    /** Top border (width and color) that divides one row from the next. */
    hairline: string;
    /** Border for a swatch. */
    frame: string;
    /** Background for bars. */
    fill: string;
  };
};

export type ColorRoleDef = {
  name: string;
  swatch: import("../../directions").Role;
  token: string;
  use: string;
  pairs: [import("../../directions").Role, import("../../directions").Role][];
  /** Non-text pairs are checked against 3:1 instead of the text thresholds. */
  ui?: boolean;
};

export type TypeRoleDef = {
  name: string;
  role: keyof TypeClasses;
  spec: [string, string][];
  use: string;
  sample: string;
};

export type Tokens = {
  intro: string;
  spacing: { px: number; use: string }[];
  spacingUsage: string;
  corners: { label: string; sample: ReactNode }[];
  cornersUsage: string;
  borders: { name: string; px: number; use: string; sample: ReactNode }[];
  bordersUsage: string;
  shadows: { name: string; value?: string; use: string; sample: ReactNode }[];
  shadowUsage: string;
};

/** Short note on how each control changes between states, keyed by control name. */
export type ControlNotes = Record<string, string>;
