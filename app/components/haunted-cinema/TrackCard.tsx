import type { Track } from "../../data/tracks";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { type as t } from "./type";

type Props = { track: Track; onOpen?: () => void; selected?: boolean };

/** A track as a poster-style card: number, title, credit, and one way in. The open track gets a heavier frame. */
export function TrackCard({ track, onOpen, selected = false }: Props) {
  return (
    <article
      aria-current={selected || undefined}
      className="flex flex-col gap-4 border-2 border-hc-border bg-hc-surface p-6 aria-[current=true]:border-hc-text aria-[current=true]:shadow-[inset_0_0_0_2px_var(--hc-text)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={`${t.labelSmall} text-hc-muted`}>Track</p>
          <p className="font-hc-display text-6xl leading-none">{track.number}</p>
        </div>
        {track.single && <Badge>Single</Badge>}
      </div>
      <div>
        <h3 className={t.heading}>{track.title}</h3>
        {track.writtenBy && <p className={`${t.bodySmall} mt-2 text-hc-muted`}>Written by {track.writtenBy}</p>}
      </div>
      <Button onClick={onOpen} className="self-start">Details</Button>
    </article>
  );
}
