import { LinerTheme } from "../../components/liner-notes";

export default function LinerNotesSystemLayout({ children }: LayoutProps<"/design-systems/liner-notes">) {
  return <LinerTheme>{children}</LinerTheme>;
}
