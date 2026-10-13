import type { ButtonHTMLAttributes } from "react";
import type { Track } from "../../data/tracks";
import { Badge } from "./Badge";
import { PixelIcon } from "./fields";
import { type as t } from "./type";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { track: Track; selected?: boolean };

const arrow: [number, number, number][] = [[0, 0, 1], [0, 1, 2], [0, 2, 3], [0, 3, 4], [0, 4, 3], [0, 5, 2], [0, 6, 1]];

/** One track in a list. Put these inside a <ul>. The selected row is marked in cyan, with an arrow. */
export function ListRow({ track, selected = false, className = "", ...props }: Props) {
  return (
    <li className="border-b-4 border-na-surface">
      <button
        type="button"
        aria-current={selected || undefined}
        className={`flex w-full items-center gap-4 border-l-4 border-transparent px-3 py-3 text-left
          not-aria-[current=true]:enabled:state-hover:border-na-text not-aria-[current=true]:enabled:state-hover:bg-na-surface
          not-aria-[current=true]:enabled:state-pressed:bg-na-pressed
          aria-[current=true]:border-na-secondary aria-[current=true]:bg-na-surface
          state-focus:outline-4 state-focus:-outline-offset-4 state-focus:outline-na-secondary
          disabled:cursor-not-allowed disabled:text-na-muted ${className}`}
        {...props}
      >
        <span className="flex w-4 justify-center text-na-secondary">
          {selected && <PixelIcon rects={arrow} size={7} className="size-3.5" />}
        </span>
        <span className="w-8 font-na-display text-xs">{track.number}</span>
        <span className={`${t.body} flex-1 font-bold`}>{track.title}</span>
        {track.single && <Badge>Single</Badge>}
      </button>
    </li>
  );
}
