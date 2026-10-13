import { Bats, FilmDivider, Hand, MoonAndTree, type as t } from "../components/haunted-cinema";
import { TrackBrowser } from "./TrackBrowser";

export const metadata = {
  title: "Thriller: a track-by-track tribute",
  description: "Browse the nine tracks of Thriller, one at a time.",
};

export default function ThrillerPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-24 md:px-10">
      <header className="relative py-8 md:py-10">
        {/* The scene sits on the right, drawn in Ash at low contrast, and only where there is room. */}
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 hidden w-[26rem] text-hc-muted opacity-30 lg:block">
          <MoonAndTree tone="quiet" decorative className="absolute right-28 top-1/2 h-40 w-auto -translate-y-1/2" />
          <Bats tone="quiet" decorative moon={false} count={4} className="absolute right-12 top-2 w-44" />
          <Hand tone="quiet" decorative className="absolute bottom-2 right-0 h-36 w-auto [mask-image:linear-gradient(to_bottom,black_55%,transparent)]" />
        </div>
        <p className={`${t.label} tracking-[0.3em] text-hc-muted`}>The 1982 album, track by track</p>
        <h1 className="mt-2 font-hc-display text-5xl leading-[0.9] md:text-[6.75rem]">Thriller</h1>
        <p className={`${t.body} mt-4`}>Nine tracks, in album order. Produced by Quincy Jones.</p>
      </header>
      <FilmDivider className="opacity-60" />
      <TrackBrowser />
    </main>
  );
}
