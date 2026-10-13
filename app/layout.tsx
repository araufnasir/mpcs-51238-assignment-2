import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thriller: a tribute",
  description: "A track-by-track tribute to Michael Jackson's Thriller.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
