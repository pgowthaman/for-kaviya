import { useEffect, useRef, useState } from "react";
import { chapters } from "../data.js";

// Scales to any number of chapters: a compact bar (prev · current date · next)
// that opens a month-grouped list of every date. startIndex is the scene index
// of the first chapter.
const MONTH_RE = /^\d+\s+([A-Z]{3})/;
const yearOf = (c) => c.date?.match(/\b(20\d\d)\b/)?.[1] ?? null;
const items = chapters.map((c, i) => ({ c, i, year: yearOf(c) })).filter(({ c }) => c.rail);

function groupByMonth() {
  const groups = [];
  for (const it of items) {
    const m = it.c.rail.match(MONTH_RE)?.[1];
    const month = m ? `${m} ${it.year ?? ""}`.trim() : "TOGETHER";
    const last = groups[groups.length - 1];
    if (last && last.month === month) last.items.push(it);
    else groups.push({ month, items: [it] });
  }
  return groups;
}
const groups = groupByMonth();
const years = [...new Set(items.map((it) => it.year).filter(Boolean))].sort();

export default function ChapterNav({ current, goTo, startIndex, visible }) {
  const [open, setOpen] = useState(false);
  const [yearFilter, setYearFilter] = useState("all");
  const curRef = useRef(null);

  useEffect(() => {
    if (open) curRef.current?.scrollIntoView({ block: "center" });
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!visible) return null;

  const pos = items.findIndex(({ i }) => startIndex + i === current);
  const here = pos >= 0 ? items[pos] : null;
  const prev = pos > 0 ? items[pos - 1] : null;
  const next = pos >= 0 && pos < items.length - 1 ? items[pos + 1] : null;
  const pct = items.length > 1 && pos >= 0 ? (pos / (items.length - 1)) * 100 : 0;

  return (
    <>
      <nav className="chapter-bar" aria-label="Story timeline">
        <button className="chapter-bar-step" disabled={!prev} onClick={() => prev && goTo(startIndex + prev.i)} aria-label="Previous date">‹</button>
        <button className="chapter-bar-main" onClick={() => setOpen(true)} aria-label="Pick a date">
          <span className="chapter-bar-date">{here ? here.c.rail : "OUR STORY"}{here?.year && <b className="chapter-bar-year">{here.year}</b>}</span>
          <span className="chapter-bar-count">{here ? `${pos + 1} of ${items.length} · all dates ▾` : "all dates ▾"}</span>
          <span className="chapter-bar-progress"><i style={{ width: `${pct}%` }} /></span>
        </button>
        <button className="chapter-bar-step" disabled={!next} onClick={() => next && goTo(startIndex + next.i)} aria-label="Next date">›</button>
      </nav>

      {open && (
        <div className="timeline-sheet-backdrop" onClick={() => setOpen(false)}>
          <div className="timeline-sheet" role="dialog" aria-label="All dates" onClick={(e) => e.stopPropagation()}>
            <div className="timeline-sheet-head">
              <span>Our timeline</span>
              <button onClick={() => setOpen(false)} aria-label="Close">✕</button>
            </div>
            {years.length > 0 && (
              <div className="timeline-years">
                {["all", ...years].map((y) => (
                  <button key={y} className={yearFilter === y ? "on" : ""} onClick={() => setYearFilter(y)}>{y === "all" ? "All" : y}</button>
                ))}
              </div>
            )}
            <div className="timeline-sheet-list">
              {groups.filter((g) => yearFilter === "all" || g.items[0].year === null || g.items[0].year === yearFilter).map((g) => (
                <section key={g.month}>
                  <h3>{g.month.split(" ")[0]}{g.month.includes(" ") && <b>{g.month.split(" ")[1]}</b>}</h3>
                  {g.items.map(({ c, i }) => {
                    const isCur = startIndex + i === current;
                    return (
                      <button
                        key={c.id}
                        ref={isCur ? curRef : null}
                        className={"timeline-sheet-item" + (isCur ? " current" : startIndex + i < current ? " done" : "")}
                        onClick={() => { goTo(startIndex + i); setOpen(false); }}
                      >
                        <span className="tsi-date">{c.rail}</span>
                        <span className="tsi-title">{c.title}</span>
                      </button>
                    );
                  })}
                </section>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
