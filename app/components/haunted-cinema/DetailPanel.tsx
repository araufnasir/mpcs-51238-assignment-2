import { tracks, type Track } from "../../data/tracks";
import { Button } from "./Button";
import { type as t } from "./type";

type Props = { track: Track; onClose?: () => void; onNext?: () => void };

/**
 * The notes for one track. It adds what the card doesn't show: the place in the album,
 * whether it was a single, and the writer when that is verified. "Next track" is the primary action.
 */
export function DetailPanel({ track, onClose, onNext }: Props) {
  return (
    <section aria-label={`Notes for ${track.title}`} className="border-[3px] border-hc-text bg-hc-surface p-5 outline outline-1 outline-offset-4 outline-hc-text md:p-6">
      <p className={`${t.label} text-hc-muted`}>
        Track {Number(track.number)} of {tracks.length} · {track.single ? "Single" : "Album track"}
      </p>
      <h3 className="mt-2 font-hc-display text-4xl leading-[1.1]">{track.title}</h3>
      {track.writtenBy && <p className={`${t.body} mt-2`}>Written by {track.writtenBy}.</p>}
      <div className="mt-4 flex flex-wrap gap-4">
        <Button variant="primary" onClick={onNext}>Next track</Button>
        <Button onClick={onClose}>Close</Button>
      </div>
    </section>
  );
}
