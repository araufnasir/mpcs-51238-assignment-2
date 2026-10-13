import { tracks, type Track } from "../../data/tracks";
import { Button } from "./Button";
import { type as t } from "./type";

type Props = { track: Track; onClose?: () => void; onNext?: () => void };

/**
 * The notes for one track. It adds what the card doesn't show: the place in the album,
 * whether it was a single, a short summary and the writer, where those are known.
 * "Next track" is the primary action.
 */
export function DetailPanel({ track, onClose, onNext }: Props) {
  return (
    <section aria-label={`Notes for ${track.title}`} className="border-[3px] border-hc-text bg-hc-surface p-4 outline outline-1 outline-offset-4 outline-hc-text md:p-5">
      <p className={`${t.label} text-hc-muted`}>
        Track {Number(track.number)} of {tracks.length} · {track.single ? "Single" : "Album track"}
      </p>
      <h3 className="mt-1 font-hc-display text-4xl leading-[1.1]">{track.title}</h3>
      {track.summary && (
        <div className="mt-3">
          <p className={`${t.labelSmall} text-hc-muted`}>About this track</p>
          <p className={`${t.body} mt-1 max-w-[60ch]`}>{track.summary}</p>
        </div>
      )}
      {track.writtenBy && <p className={`${t.bodySmall} mt-2 text-hc-muted`}>Written by {track.writtenBy}.</p>}
      <div className="mt-4 flex flex-wrap gap-4">
        <Button variant="primary" onClick={onNext}>Next track</Button>
        <Button onClick={onClose}>Close</Button>
      </div>
    </section>
  );
}
