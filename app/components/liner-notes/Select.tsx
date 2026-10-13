import type { SelectHTMLAttributes } from "react";
import { fieldClasses, LineIcon } from "./fields";

/** A native select, so the menu, keyboard and screen readers all behave. */
export function Select({ className = "", children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative">
      <select className={`${fieldClasses} cursor-pointer appearance-none pr-9 ${className}`} {...props}>
        {children}
      </select>
      <LineIcon className="pointer-events-none absolute right-1 top-1/2 size-5 -translate-y-1/2">
        <path d="m5 9 7 7 7-7" />
      </LineIcon>
    </div>
  );
}
