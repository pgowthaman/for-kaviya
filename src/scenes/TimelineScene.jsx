import { useEffect, useState } from "react";
import Scene from "../components/Scene.jsx";

export default function TimelineScene({ active, goTo, index, intro, title, items, eyebrow }) {
  const [play, setPlay] = useState(false);
  const [opened, setOpened] = useState(() => new Set());

  useEffect(() => {
    if (active) setPlay(true);
  }, [active]);

  function toggle(i) {
    setOpened((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }

  return (
    <Scene active={active}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      {title && <h1>{title}</h1>}
      {intro.map((line, i) => (
        <p key={i} className="body-text small">
          {line}
        </p>
      ))}

      <ol className={`timeline${play ? " play" : ""}`}>
        {items.map((item, i) => (
          <li key={i} className={`tl-node${opened.has(i) ? " opened" : ""}`} onClick={() => toggle(i)}>
            <span className="tl-dot" />
            <span className="tl-label">{item.label}</span>
            <p className="tl-msg">{item.msg}</p>
          </li>
        ))}
      </ol>

      <button className="btn btn-primary btn-continue" onClick={() => goTo(index + 1)}>
        Continue →
      </button>
    </Scene>
  );
}
