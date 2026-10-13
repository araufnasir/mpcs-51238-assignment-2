import type { ComponentProps } from "react";
import { TextInput } from "./TextInput";
import { focusRing } from "./type";

type Props = Omit<ComponentProps<"input">, "type"> & { onClear?: () => void };

/** The track browser's search: a magnifier, the input, and a clear button once there is text. */
export function SearchField({ onClear, value, ...props }: Props) {
  return (
    <div className="relative">
      <svg aria-hidden viewBox="0 0 24 24" className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-hc-muted" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="10" cy="10" r="6.5" />
        <path d="m15 15 6 6" />
      </svg>
      <TextInput type="search" value={value} className="pl-11 pr-12 [&::-webkit-search-cancel-button]:hidden" {...props} />
      {value && onClear ? (
        <button
          type="button"
          aria-label="Clear search"
          onClick={onClear}
          className={`absolute right-1.5 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center state-hover:bg-hc-surface state-pressed:bg-hc-text state-pressed:text-hc-background ${focusRing}`}
        >
          <svg aria-hidden viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="m5 5 14 14M19 5 5 19" />
          </svg>
        </button>
      ) : null}
    </div>
  );
}
