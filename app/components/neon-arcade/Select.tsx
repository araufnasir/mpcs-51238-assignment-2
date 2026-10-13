import type { SelectHTMLAttributes } from "react";
import { chevronRects, fieldClasses, PixelIcon } from "./fields";

/** A native select, so the menu, keyboard and screen readers all behave. */
export function Select({ className = "", children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative">
      <select className={`${fieldClasses} cursor-pointer appearance-none pr-12 ${className}`} {...props}>
        {children}
      </select>
      <PixelIcon rects={chevronRects} size={9} className="pointer-events-none absolute right-3 top-1/2 h-4 w-5 -translate-y-1/2" />
    </div>
  );
}
