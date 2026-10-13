import type { Track } from "../../data/tracks";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { PixelBox } from "./PixelBox";
import { trackTitle, type as t } from "./type";

type Props = { track: Track; onOpen?: () => void };

/** A track on a card: number, title, credit, and one way in. */
export function TrackCard({ track, onOpen }: Props) {
  return (
    <PixelBox className="flex flex-col gap-4 border-na-border bg-na-surface p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={`${t.labelSmall} text-na-muted`}>Track</p>
          <p className="mt-2 font-na-display text-4xl leading-none">{track.number}</p>
        </div>
        {track.single && <Badge>Single</Badge>}
      </div>
      <div>
        <h3 className={trackTitle}>{track.title}</h3>
        <p className={`${t.bodySmall} mt-2 text-na-muted`}>Written by {track.writtenBy}</p>
      </div>
      <Button onClick={onOpen} className="mb-1 self-start">Details</Button>
    </PixelBox>
  );
}
