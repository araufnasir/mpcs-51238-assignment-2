import type { ComponentProps } from "react";
import { LineIcon } from "./fields";
import { TextInput } from "./TextInput";
import { focusRing } from "./type";

type Props = Omit<ComponentProps<"input">, "type"> & { onClear?: () => void };

/** The track browser's search: a magnifier, the input, and a clear button once there is text. */
export function SearchField({ onClear, value, ...props }: Props) {
  return (
    <div className="relative">
      <LineIcon className="pointer-events-none absolute left-1 top-1/2 size-6 -translate-y-1/2 text-ln-muted">
        <circle cx="10" cy="10" r="6.5" />
        <path d="m15 15 6 6" />
      </LineIcon>
      <TextInput type="search" value={value} className="pl-9 pr-11 [&::-webkit-search-cancel-button]:hidden" {...props} />
      {value && onClear ? (
        <button
          type="button"
          aria-label="Clear search"
          onClick={onClear}
          className={`absolute right-0 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center state-hover:bg-ln-pressed state-pressed:bg-ln-text state-pressed:text-ln-background ${focusRing}`}
        >
          <LineIcon className="size-4">
            <path d="m5 5 14 14M19 5 5 19" />
          </LineIcon>
        </button>
      ) : null}
    </div>
  );
}
