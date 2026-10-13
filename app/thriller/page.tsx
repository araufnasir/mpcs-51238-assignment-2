import { type as t } from "../components/haunted-cinema";
import { TrackBrowser } from "./TrackBrowser";

export const metadata = {
  title: "Thriller: a track-by-track tribute",
  description: "Browse the nine tracks of Thriller, one at a time.",
};

export default function ThrillerPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-24 md:px-10">
      <header className="border-b-4 border-hc-text py-12 md:py-20">
        <p className={`${t.label} tracking-[0.3em] text-hc-muted`}>The 1982 album, track by track</p>
        <h1 className="font-hc-display text-7xl leading-[0.85] md:text-[10rem]">Thriller</h1>
        <p className={`${t.body} mt-6 max-w-[40ch]`}>Nine tracks, in album order. Produced by Quincy Jones.</p>
      </header>
      <TrackBrowser />
    </main>
  );
}
