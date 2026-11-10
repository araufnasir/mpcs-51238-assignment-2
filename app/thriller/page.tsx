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
        {/* The scene sits on the right, drawn in Ash at low contrast. It grows with the room:
            nothing on phones, the moon and tree from 640px, and the bats and hand from 1024px. */}
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 hidden w-48 text-hc-muted opacity-30 sm:block lg:w-[26rem]">
          <MoonAndTree tone="quiet" decorative className="absolute right-0 top-1/2 h-28 w-auto -translate-y-1/2 lg:right-28 lg:h-40" />
          <Bats tone="quiet" decorative moon={false} count={4} className="absolute right-12 top-2 hidden w-44 lg:block" />
          <Hand tone="quiet" decorative className="absolute bottom-2 right-0 hidden h-36 w-auto [mask-image:linear-gradient(to_bottom,black_55%,transparent)] lg:block" />
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
