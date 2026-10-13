import { HauntedTheme } from "../components/haunted-cinema";

export default function ThrillerLayout({ children }: LayoutProps<"/thriller">) {
  return <HauntedTheme>{children}</HauntedTheme>;
}
