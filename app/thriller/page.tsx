import { type as t } from "../components/haunted-cinema";
import { TrackBrowser } from "./TrackBrowser";

export const metadata = {
  title: "Thriller: a track-by-track tribute",
  description: "Browse the nine tracks of Thriller, one at a time.",
};

export default function ThrillerPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-24 md:px-10">
      <header className="border-b-4 border-hc-text py-8 md:py-10">
        <p className={`${t.label} tracking-[0.3em] text-hc-muted`}>The 1982 album, track by track</p>
        <h1 className="mt-2 font-hc-display text-5xl leading-[0.9] md:text-[6.75rem]">Thriller</h1>
        <p className={`${t.body} mt-4`}>Nine tracks, in album order. Produced by Quincy Jones.</p>
      </header>
      <TrackBrowser />
    </main>
  );
}
