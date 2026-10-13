"use client";

import { useState, type ButtonHTMLAttributes, type KeyboardEvent, type ReactNode } from "react";
import { focusRing, type as t } from "./type";

export function Tab({ className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      role="tab"
      className={`${t.label} -mb-px border-b-[3px] border-transparent px-4 py-2.5 text-ln-muted
        aria-[selected=false]:enabled:state-hover:bg-ln-surface aria-[selected=false]:enabled:state-hover:text-ln-text
        aria-[selected=false]:enabled:state-pressed:bg-ln-pressed
        aria-selected:border-ln-text aria-selected:text-ln-text ${focusRing}
        disabled:cursor-not-allowed disabled:text-ln-muted/60 disabled:[text-decoration:line-through] ${className}`}
      {...props}
    />
  );
}

type Item = { id: string; label: string; content: ReactNode };

/** Tabs with a roving tabindex: arrow keys move between tabs, Tab leaves the list. */
export function Tabs({ items, label }: { items: Item[]; label: string }) {
  const [active, setActive] = useState(items[0].id);

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    const index = items.findIndex((item) => item.id === active);
    const next = items[(index + step + items.length) % items.length];
    setActive(next.id);
    document.getElementById(`tab-${next.id}`)?.focus();
  }

  return (
    <div>
      <div role="tablist" aria-label={label} onKeyDown={onKeyDown} className="flex flex-wrap border-b border-ln-muted">
        {items.map((item) => (
          <Tab
            key={item.id}
            id={`tab-${item.id}`}
            aria-selected={item.id === active}
            aria-controls={`panel-${item.id}`}
            tabIndex={item.id === active ? 0 : -1}
            onClick={() => setActive(item.id)}
          >
            {item.label}
          </Tab>
        ))}
      </div>
      {items.map((item) => (
        <div key={item.id} role="tabpanel" id={`panel-${item.id}`} aria-labelledby={`tab-${item.id}`} hidden={item.id !== active} className="pt-5">
          {item.content}
        </div>
      ))}
    </div>
  );
}
