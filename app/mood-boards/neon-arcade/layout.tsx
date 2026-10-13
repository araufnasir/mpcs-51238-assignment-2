import { NeonTheme } from "../../components/neon-arcade";
import "./neon-arcade.css";

export default function NeonArcadeLayout({ children }: LayoutProps<"/mood-boards/neon-arcade">) {
  return <NeonTheme>{children}</NeonTheme>;
}
