import type { ButtonHTMLAttributes } from "react";
import type { Track } from "../../data/tracks";
import { Badge } from "./Badge";
import { numeral } from "./type";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { track: Track; selected?: boolean };

/** One track in a list. Put these inside a <ul>. Hover underlines the title; selected sets it in italic. */
export function ListRow({ track, selected = false, className = "", ...props }: Props) {
  return (
    <li className="border-b border-ln-muted/50">
      <button
        type="button"
        aria-current={selected || undefined}
        className={`group flex w-full items-baseline gap-5 border-l-[3px] border-transparent px-3 py-3 text-left
          not-aria-[current=true]:enabled:state-hover:bg-ln-surface not-aria-[current=true]:enabled:state-pressed:bg-ln-pressed
          aria-[current=true]:border-ln-text aria-[current=true]:bg-ln-surface
          state-focus:outline-2 state-focus:-outline-offset-2 state-focus:outline-ln-text
          disabled:cursor-not-allowed disabled:text-ln-muted ${className}`}
        {...props}
      >
        <span className={`${numeral} w-10 text-3xl`}>{track.number}</span>
        <span className={`flex-1 text-xl decoration-1 underline-offset-[5px] group-enabled:group-state-hover:underline ${selected ? "italic" : ""}`}>{track.title}</span>
        {track.single && <Badge>Single</Badge>}
      </button>
    </li>
  );
}
