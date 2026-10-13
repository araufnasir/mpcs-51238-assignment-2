"use client";

import { useState } from "react";
import { Button, DetailPanel, EmptyState, FilterChip, ListRow, SearchField, type as t } from "../../components/haunted-cinema";
import { tracks } from "../../data/tracks";

const filters = ["All", "Singles", "Album tracks"] as const;

export function ChipsDemo() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const shown = tracks.filter((track) => filter === "All" || (filter === "Singles") === track.single);
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        {filters.map((f) => (
          <FilterChip key={f} selected={filter === f} onClick={() => setFilter(f)}>{f}</FilterChip>
        ))}
      </div>
      <p className={`${t.bodySmall} text-hc-muted`}>Showing {shown.length} of {tracks.length} tracks.</p>
    </div>
  );
}

export function RowsDemo() {
  const [selected, setSelected] = useState("04");
  return (
    <ul className="border-t border-hc-border">
      {tracks.slice(0, 5).map((track) => (
        <ListRow key={track.number} track={track} selected={selected === track.number} onClick={() => setSelected(track.number)} />
      ))}
    </ul>
  );
}

export function SearchDemo() {
  const [query, setQuery] = useState("");
  const matches = tracks.filter((track) => track.title.toLowerCase().includes(query.trim().toLowerCase()));
  return (
    <div className="space-y-4">
      <SearchField aria-label="Search tracks" placeholder="Search tracks" value={query} onChange={(e) => setQuery(e.target.value)} onClear={() => setQuery("")} />
      {matches.length ? (
        <ul className="border-t border-hc-border">
          {matches.slice(0, 4).map((track) => (
            <ListRow key={track.number} track={track} />
          ))}
        </ul>
      ) : (
        <EmptyState title="No tracks found" action={<Button onClick={() => setQuery("")}>Clear search</Button>}>
          Nothing on the album matches &ldquo;{query}&rdquo;.
        </EmptyState>
      )}
    </div>
  );
}

export function PanelDemo() {
  const [index, setIndex] = useState(3);
  const [open, setOpen] = useState(true);
  if (!open) return <Button onClick={() => setOpen(true)}>Reopen the panel</Button>;
  return <DetailPanel track={tracks[index]} onNext={() => setIndex((index + 1) % tracks.length)} onClose={() => setOpen(false)} />;
}
