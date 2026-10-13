import { LinerTheme } from "../../components/liner-notes";
import "./liner-notes.css";

export default function LinerNotesLayout({ children }: LayoutProps<"/mood-boards/liner-notes">) {
  return <LinerTheme>{children}</LinerTheme>;
}
