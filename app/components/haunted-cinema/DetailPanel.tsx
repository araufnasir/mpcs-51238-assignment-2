import type { Track } from "../../data/tracks";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { type as t } from "./type";

type Props = { track: Track; onClose?: () => void; onNext?: () => void };

/** The notes for one track. "Next track" is the panel's primary action. */
export function DetailPanel({ track, onClose, onNext }: Props) {
  return (
    <section aria-label={`Notes for ${track.title}`} className="border-[3px] border-hc-text bg-hc-surface p-6 outline outline-1 outline-offset-4 outline-hc-text md:p-8">
      <div className="flex items-start justify-between gap-4">
        <p className={`${t.label} tracking-[0.3em] text-hc-muted`}>Track {track.number}</p>
        {track.single && <Badge>Single</Badge>}
      </div>
      <h3 className={`${t.display} mt-3 md:!text-6xl`}>{track.title}</h3>
      <p className={`${t.body} mt-4 max-w-[52ch]`}>Written by {track.writtenBy}.</p>
      <div className="mt-6 flex flex-wrap gap-4">
        <Button variant="primary" onClick={onNext}>Next track</Button>
        <Button onClick={onClose}>Close</Button>
      </div>
    </section>
  );
}
