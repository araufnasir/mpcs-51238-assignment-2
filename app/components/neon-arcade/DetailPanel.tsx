import type { Track } from "../../data/tracks";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { PixelBox } from "./PixelBox";
import { type as t } from "./type";

type Props = { track: Track; onClose?: () => void; onNext?: () => void };

/** The notes for one track. "Next track" is the panel's primary action. */
export function DetailPanel({ track, onClose, onNext }: Props) {
  return (
    <PixelBox className="border-na-text bg-na-surface p-6 md:p-8" offset="8px">
      <section aria-label={`Notes for ${track.title}`}>
        <div className="flex items-start justify-between gap-4">
          <p className={`${t.heading} text-na-muted`}>Track {track.number}</p>
          {track.single && <Badge>Single</Badge>}
        </div>
        <h3 className="mt-4 font-na-body text-3xl font-bold leading-tight">{track.title}</h3>
        <p className={`${t.body} mt-3 max-w-[52ch]`}>{track.writtenBy ? `Written by ${track.writtenBy}. ` : ""}From the album Thriller, 1982.</p>
        <div className="mt-6 flex flex-wrap gap-6 pb-2">
          <Button variant="primary" onClick={onNext}>Next track</Button>
          <Button onClick={onClose}>Close</Button>
        </div>
      </section>
    </PixelBox>
  );
}
