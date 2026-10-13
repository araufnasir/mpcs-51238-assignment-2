import { NeonTheme } from "../../components/neon-arcade";

export default function NeonArcadeSystemLayout({ children }: LayoutProps<"/design-systems/neon-arcade">) {
  return <NeonTheme>{children}</NeonTheme>;
}
