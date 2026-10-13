import type { SelectHTMLAttributes } from "react";
import { fieldClasses } from "./fields";

/** A native select, so the menu, keyboard and screen readers all behave. */
export function Select({ className = "", children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative">
      <select className={`${fieldClasses} cursor-pointer appearance-none pr-11 ${className}`} {...props}>
        {children}
      </select>
      <svg aria-hidden viewBox="0 0 24 24" className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="m5 9 7 7 7-7" />
      </svg>
    </div>
  );
}
