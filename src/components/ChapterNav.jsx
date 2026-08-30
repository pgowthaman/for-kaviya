import { chapters } from "../data.js";

// Subtle timeline indicator: 05 JUL → 29 JUL → … → US
// startIndex is the scene index of the first chapter.
export default function ChapterNav({ current, goTo, startIndex, visible }) {
  if (!visible) return null;

  return (
    <nav className="chapter-rail" aria-label="Story chapters">
      {chapters.map((c, i) =>
        c.rail ? (
          <button
            key={c.id}
            className={
              "chapter-rail-node" +
              (current === startIndex + i ? " current" : "") +
              (current > startIndex + i ? " done" : "")
            }
            onClick={() => goTo(startIndex + i)}
          >
            {c.rail}
          </button>
        ) : null
      )}
    </nav>
  );
}
