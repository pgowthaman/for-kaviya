import { useState } from "react";
import { moments } from "../data.js";

// Floating menu to jump straight to any milestone moment page.
// startIndex is the scene index of the first moment.
export default function MomentsNav({ current, goTo, startIndex }) {
  const [open, setOpen] = useState(false);
  const activeMoment = current >= startIndex ? current - startIndex : -1;

  function jump(i) {
    goTo(startIndex + i);
    setOpen(false);
  }

  return (
    <>
      <button className="moments-toggle" onClick={() => setOpen((o) => !o)} aria-label="Our moments">
        {open ? "✕" : "✦ moments"}
      </button>

      {open && (
        <div className="moments-panel" onClick={() => setOpen(false)}>
          <ul className="moments-list" onClick={(e) => e.stopPropagation()}>
            <li className="moments-list-head">Our moments</li>
            {moments.map((m, i) => (
              <li key={m.id}>
                <button className={`moments-item${i === activeMoment ? " current" : ""}`} onClick={() => jump(i)}>
                  <span className="moments-item-emoji">{m.emoji}</span>
                  <span className="moments-item-text">
                    <span className="moments-item-title">{m.title}</span>
                    <span className="moments-item-date">{m.date}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
