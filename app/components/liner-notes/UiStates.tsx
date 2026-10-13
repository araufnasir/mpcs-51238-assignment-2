import type { ReactNode } from "react";
import { LineIcon } from "./fields";
import { type as t } from "./type";

type Props = { title: string; children?: ReactNode; action?: ReactNode };

/** Nothing to show: a dotted frame, so it reads as a gap and not as content. */
export function EmptyState({ title, children, action }: Props) {
  return (
    <div className="flex flex-col items-center gap-3 border border-dotted border-ln-muted p-8 text-center">
      <LineIcon className="size-10 text-ln-muted">
        <path d="M4 7h16v12H4zM4 7l8 7 8-7" />
      </LineIcon>
      <h3 className={t.heading}>{title}</h3>
      {children && <p className={`${t.body} max-w-[40ch] italic text-ln-muted`}>{children}</p>}
      {action}
    </div>
  );
}

/** Content on its way: ruled placeholders that fade, unless the visitor prefers reduced motion. */
export function LoadingState({ label }: { label: string }) {
  return (
    <div role="status" aria-live="polite" className="border border-ln-muted p-6">
      <p className={`${t.label} mb-4`}>{label}</p>
      <div className="space-y-3" aria-hidden>
        {[100, 83, 91].map((width) => (
          <div key={width} className="h-8 border-b border-ln-muted bg-ln-surface motion-safe:animate-[lnu-fade_1.6s_ease-in-out_infinite]" style={{ width: `${width}%` }} />
        ))}
      </div>
    </div>
  );
}

/** Something failed: a double rule above and below, and the word "Error", so it never depends on color. */
export function ErrorState({ title, children, action }: Props) {
  return (
    <div role="alert" className="flex flex-col items-start gap-3 border-y-[3px] border-double border-ln-text bg-ln-surface p-6">
      <p className={`${t.label} flex items-center gap-2`}>
        <LineIcon className="size-5">
          <path d="M12 3 22 21H2zM12 10v5M12 18v.5" />
        </LineIcon>
        Error
      </p>
      <h3 className={t.heading}>{title}</h3>
      {children && <p className={t.body}>{children}</p>}
      {action}
    </div>
  );
}

/** It worked: a single ruled frame with a check mark. */
export function SuccessState({ title, children, action }: Props) {
  return (
    <div role="status" className="flex items-start gap-4 border border-ln-text p-6">
      <LineIcon className="size-10 shrink-0">
        <rect x="3" y="3" width="18" height="18" />
        <path d="m7 12.5 3.5 3.5L17 8.5" />
      </LineIcon>
      <div className="flex flex-col items-start gap-3">
        <h3 className={t.heading}>{title}</h3>
        {children && <p className={t.body}>{children}</p>}
        {action}
      </div>
    </div>
  );
}
