import { HauntedTheme } from "../../components/haunted-cinema/theme";
import "./haunted-cinema.css";

export default function HauntedCinemaLayout({ children }: LayoutProps<"/mood-boards/haunted-cinema">) {
  return <HauntedTheme>{children}</HauntedTheme>;
}
