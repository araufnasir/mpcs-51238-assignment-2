import Link from "next/link";

const moods = [
  { slug: "haunted-cinema", name: "Haunted Cinema" },
  { slug: "neon-arcade", name: "Neon Arcade" },
  { slug: "liner-notes", name: "Liner Notes" },
];

const sections = [
  { title: "Mood boards", base: "/mood-boards" },
  { title: "Design systems", base: "/design-systems" },
];

export default function Hub() {
  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="text-2xl font-bold">Thriller: a tribute</h1>
      <p className="mt-2">Placeholder hub. Pages are not built yet.</p>
      {sections.map(({ title, base }) => (
        <section key={title} className="mt-8">
          <h2 className="text-lg font-bold">{title}</h2>
          <ul className="mt-2 list-disc pl-6">
            {moods.map(({ slug, name }) => (
              <li key={slug}>
                <Link href={`${base}/${slug}`} className="underline">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
      <Link href="/thriller" className="mt-8 inline-block underline">
        The site: /thriller
      </Link>
    </main>
  );
}
