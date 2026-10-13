import type { ReactNode } from "react";
import { type as t } from "./type";

type Props = { title: string; children?: ReactNode; action?: ReactNode };

const icon = "size-10 shrink-0";

/** Nothing to show: a dashed frame, so it reads as a gap and not as content. */
export function EmptyState({ title, children, action }: Props) {
  return (
    <div className="flex flex-col items-center gap-3 border-2 border-dashed border-hc-border p-8 text-center">
      <svg aria-hidden viewBox="0 0 40 40" className={`${icon} text-hc-muted`} fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="9" width="30" height="22" strokeDasharray="4 3" />
        <path d="M5 9 20 22 35 9" />
      </svg>
      <h3 className={t.heading}>{title}</h3>
      {children && <p className={`${t.body} max-w-[40ch] text-hc-muted`}>{children}</p>}
      {action}
    </div>
  );
}

/** Content on its way: placeholder bars that pulse, unless the visitor prefers reduced motion. */
export function LoadingState({ label }: { label: string }) {
  return (
    <div role="status" aria-live="polite" className="border-2 border-hc-border p-6">
      <p className={`${t.label} mb-4`}>{label}</p>
      <div className="space-y-3" aria-hidden>
        {[100, 83, 91].map((width) => (
          <div key={width} className="h-9 bg-hc-surface motion-safe:animate-pulse" style={{ width: `${width}%` }} />
        ))}
      </div>
    </div>
  );
}

/** Something failed: hazard stripes and the word "Error", so it never depends on color. */
export function ErrorState({ title, children, action }: Props) {
  return (
    <div role="alert" className="flex border-[3px] border-hc-text bg-hc-surface">
      <div aria-hidden className="w-4 shrink-0 bg-[repeating-linear-gradient(135deg,var(--hc-text)_0_5px,transparent_5px_10px)]" />
      <div className="flex flex-1 flex-col items-start gap-3 p-6">
        <p className={`${t.label} flex items-center gap-2`}>
          <svg aria-hidden viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 3 22 21H2z" />
            <path d="M12 10v5M12 18v.5" />
          </svg>
          Error
        </p>
        <h3 className={t.heading}>{title}</h3>
        {children && <p className={t.body}>{children}</p>}
        {action}
      </div>
    </div>
  );
}

/** It worked: a solid frame with a check mark. */
export function SuccessState({ title, children, action }: Props) {
  return (
    <div role="status" className="flex items-start gap-4 border-2 border-hc-text p-6">
      <svg aria-hidden viewBox="0 0 40 40" className={icon} fill="none" stroke="currentColor" strokeWidth="3">
        <rect x="3" y="3" width="34" height="34" />
        <path d="m11 21 6 6 12-14" />
      </svg>
      <div className="flex flex-col items-start gap-3">
        <h3 className={t.heading}>{title}</h3>
        {children && <p className={t.body}>{children}</p>}
        {action}
      </div>
    </div>
  );
}
