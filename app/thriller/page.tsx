import { FilmDivider, MoonAndTree, type as t } from "../components/haunted-cinema";
import { TrackBrowser } from "./TrackBrowser";

export const metadata = {
  title: "Thriller: a track-by-track tribute",
  description: "Browse the nine tracks of Thriller, one at a time.",
};

export default function ThrillerPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-24 md:px-10">
      <header className="relative py-8 md:py-10">
        <MoonAndTree tone="quiet" decorative className="pointer-events-none absolute right-0 top-1/2 hidden h-44 w-auto -translate-y-1/2 opacity-30 lg:block" />
        <p className={`${t.label} tracking-[0.3em] text-hc-muted`}>The 1982 album, track by track</p>
        <h1 className="mt-2 font-hc-display text-5xl leading-[0.9] md:text-[6.75rem]">Thriller</h1>
        <p className={`${t.body} mt-4`}>Nine tracks, in album order. Produced by Quincy Jones.</p>
      </header>
      <FilmDivider className="opacity-60" />
      <TrackBrowser />
    </main>
  );
}
