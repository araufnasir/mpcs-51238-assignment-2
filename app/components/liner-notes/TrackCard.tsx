import type { Track } from "../../data/tracks";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { numeral, type as t } from "./type";

type Props = { track: Track; onOpen?: () => void };

/** A track as an index card: a large light number, the title, the credit, and one way in. */
export function TrackCard({ track, onOpen }: Props) {
  return (
    <article className="border border-ln-text bg-ln-surface p-6">
      <p className={`${t.label} text-ln-muted`}>Track</p>
      <p className={`${numeral} text-8xl`}>{track.number}</p>
      <h3 className={`${t.heading} mt-4`}>{track.title}</h3>
      {track.writtenBy && <p className={`${t.bodySmall} mt-2 italic text-ln-muted`}>Written by {track.writtenBy}</p>}
      <div className="mt-6 flex items-center justify-between gap-4 border-t border-ln-text pt-4">
        {track.single ? <Badge>Single</Badge> : <span />}
        <Button onClick={onOpen}>Details</Button>
      </div>
    </article>
  );
}
