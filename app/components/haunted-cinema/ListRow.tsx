import type { ButtonHTMLAttributes } from "react";
import type { Track } from "../../data/tracks";
import { Badge } from "./Badge";
import { type as t } from "./type";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { track: Track; selected?: boolean };

/** One track in a list. Put these inside a <ul>. */
export function ListRow({ track, selected = false, className = "", ...props }: Props) {
  return (
    <li className="border-b border-hc-border/50">
      <button
        type="button"
        aria-current={selected || undefined}
        className={`flex w-full items-center gap-4 border-l-4 border-transparent px-4 py-3 text-left
          not-aria-[current=true]:enabled:state-hover:border-hc-muted not-aria-[current=true]:enabled:state-hover:bg-hc-surface
          not-aria-[current=true]:enabled:state-pressed:bg-hc-pressed
          aria-[current=true]:border-hc-text aria-[current=true]:bg-hc-text aria-[current=true]:text-hc-background aria-[current=true]:enabled:state-pressed:bg-hc-muted
          state-focus:outline-[3px] state-focus:-outline-offset-[3px] state-focus:outline-hc-text aria-[current=true]:state-focus:outline-hc-background
          disabled:cursor-not-allowed disabled:text-hc-muted ${className}`}
        {...props}
      >
        <span className="w-8 font-hc-display text-xl">{track.number}</span>
        <span className={`${t.heading} flex-1 !text-xl`}>{track.title}</span>
        {track.single && <Badge>Single</Badge>}
      </button>
    </li>
  );
}
