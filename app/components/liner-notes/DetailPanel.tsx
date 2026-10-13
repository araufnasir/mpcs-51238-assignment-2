import type { Track } from "../../data/tracks";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { numeral, type as t } from "./type";

type Props = { track: Track; onClose?: () => void; onNext?: () => void };

/** The notes for one track, as an insert: big number on the left, text on the right. "Next track" is primary. */
export function DetailPanel({ track, onClose, onNext }: Props) {
  return (
    <section
      aria-label={`Notes for ${track.title}`}
      className="grid grid-cols-1 gap-6 border-y-[3px] border-double border-ln-text bg-ln-surface p-6 md:grid-cols-9 md:p-8"
    >
      <p className={`${numeral} text-8xl md:col-span-2`}>{track.number}</p>
      <div className="md:col-span-7">
        <div className="flex items-start justify-between gap-4">
          <p className={`${t.label} text-ln-muted`}>Track {track.number}</p>
          {track.single && <Badge>Single</Badge>}
        </div>
        <h3 className="mt-1 text-5xl font-light leading-tight">{track.title}</h3>
        <p className="mt-3 max-w-[52ch] text-xl italic leading-snug">{track.writtenBy ? `Written by ${track.writtenBy}. ` : ""}From the album Thriller, 1982.</p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Button variant="primary" onClick={onNext}>Next track</Button>
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </section>
  );
}
