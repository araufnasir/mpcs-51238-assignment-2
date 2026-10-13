"use client";

import { useEffect, useRef, useState } from "react";
import { Button, DetailPanel, EmptyState, FilterChip, SearchField, TrackCard, type as t } from "../components/haunted-cinema";
import { tracks, type Track } from "../data/tracks";

const filters = [
  { id: "all", label: "All", test: () => true },
  { id: "singles", label: "Singles", test: (track: Track) => track.single },
  { id: "album", label: "Album tracks", test: (track: Track) => !track.single },
] as const;

type FilterId = (typeof filters)[number]["id"];

function matchesQuery(track: Track, query: string) {
  const needle = query.trim().toLowerCase();
  return !needle || `${track.title} ${track.writtenBy ?? ""}`.toLowerCase().includes(needle);
}

/** Search, filter and open a track. All state lives here and nothing is saved. */
export function TrackBrowser() {
  const [query, setQuery] = useState("");
  const [filterId, setFilterId] = useState<FilterId>("all");
  const [openNumber, setOpenNumber] = useState<string | null>(null);

  const searchRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  const filter = filters.find((f) => f.id === filterId)!;
  const searched = tracks.filter((track) => matchesQuery(track, query));
  const shown = searched.filter(filter.test);
  const openTrack = tracks.find((track) => track.number === openNumber);
  const isOpen = Boolean(openTrack);

  function open(track: Track, opener: HTMLElement) {
    openerRef.current = opener;
    setOpenNumber(track.number);
    // Move focus into the panel, whether it was closed or already showing another track.
    requestAnimationFrame(() => panelRef.current?.focus());
  }

  function close() {
    const number = openNumber;
    setOpenNumber(null);
    // Return focus to the open track's card, or to whatever opened the panel, or to the search.
    requestAnimationFrame(() => {
      const card = document.querySelector<HTMLElement>(`[data-track="${number}"] button`);
      const opener = openerRef.current?.isConnected ? openerRef.current : null;
      (card ?? opener ?? searchRef.current)?.focus();
    });
  }

  // Esc closes the panel from anywhere on the page.
  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  });

  function nextTrack() {
    const index = tracks.findIndex((track) => track.number === openNumber);
    setOpenNumber(tracks[(index + 1) % tracks.length].number);
  }

  function clearAll() {
    setQuery("");
    setFilterId("all");
    searchRef.current?.focus();
  }

  return (
    <div className="mt-6 space-y-6">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="md:w-full md:max-w-md">
          <SearchField
            ref={searchRef}
            aria-label="Search tracks or writers"
            placeholder="Search tracks or writers"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onClear={() => {
              setQuery("");
              searchRef.current?.focus();
            }}
          />
        </div>
        <div role="group" aria-label="Filter tracks" className="flex flex-wrap gap-3">
          {filters.map((f) => {
            const count = searched.filter(f.test).length;
            return (
              <FilterChip key={f.id} selected={filterId === f.id} disabled={count === 0} onClick={() => setFilterId(f.id)}>
                {f.label} · {count}
              </FilterChip>
            );
          })}
        </div>
      </div>

      <p role="status" className={`${t.bodySmall} text-hc-muted`}>
        Showing {shown.length} of {tracks.length} tracks.
      </p>

      {openTrack && (
        <div ref={panelRef} tabIndex={-1} className="scroll-mt-6 outline-none">
          <p role="status" className="sr-only">Showing track {openTrack.number}, {openTrack.title}</p>
          <DetailPanel track={openTrack} onNext={nextTrack} onClose={close} />
        </div>
      )}

      {shown.length ? (
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {shown.map((track) => (
            <li key={track.number} data-track={track.number} className="flex">
              <div className="w-full [&>article]:h-full">
                <TrackCard track={track} selected={track.number === openNumber} onOpen={() => open(track, document.activeElement as HTMLElement)} />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <EmptyState title="No tracks found" action={<Button onClick={clearAll}>Clear search and filter</Button>}>
          {query.trim() ? <>Nothing matches &ldquo;{query.trim()}&rdquo;{filterId === "all" ? "" : ` in ${filter.label.toLowerCase()}`}.</> : "Nothing in this filter."}
        </EmptyState>
      )}
    </div>
  );
}
