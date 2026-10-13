import type { ComponentProps } from "react";
import { crossRects, PixelIcon, searchRects } from "./fields";
import { TextInput } from "./TextInput";
import { focusRing } from "./type";

type Props = Omit<ComponentProps<"input">, "type"> & { onClear?: () => void };

/** The track browser's search: a magnifier, the input, and a clear button once there is text. */
export function SearchField({ onClear, value, ...props }: Props) {
  return (
    <div className="relative">
      <PixelIcon rects={searchRects} size={11} className="pointer-events-none absolute left-3 top-1/2 z-10 size-5 -translate-y-1/2 text-na-muted" />
      <TextInput type="search" value={value} className="pl-11 pr-12 [&::-webkit-search-cancel-button]:hidden" {...props} />
      {value && onClear ? (
        <button
          type="button"
          aria-label="Clear search"
          onClick={onClear}
          className={`absolute right-2 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center state-hover:bg-na-surface state-pressed:bg-na-text state-pressed:text-na-background ${focusRing}`}
        >
          <PixelIcon rects={crossRects} size={7} className="size-4" />
        </button>
      ) : null}
    </div>
  );
}
