import { useState } from "react";
import Scene from "../components/Scene.jsx";
import { useRevealSequence } from "../hooks.js";

// Photos: src/assets/moments/<chapter-id>.<ext> is picked up automatically.
const imageModules = import.meta.glob("../assets/moments/*.{jpg,jpeg,png,webp,gif,avif}", {
  eager: true,
  query: "?url",
  import: "default",
});
const imageById = {};
for (const path in imageModules) {
  imageById[path.split("/").pop().replace(/\.[^.]+$/, "")] = imageModules[path];
}

function Chat({ msgs, active }) {
  const shown = useRevealSequence(active, msgs.length, 550);
  return (
    <div className="chat">
      {msgs.map((m, i) => (
        <div key={i} className={`chat-msg chat-${m.from}${i < shown ? " in" : ""}`}>
          {m.text}
        </div>
      ))}
    </div>
  );
}

function Montage({ items, big, active }) {
  const shown = useRevealSequence(active, items.length, 240);
  return (
    <div className={`chapter-montage${big ? " big" : ""}`}>
      {items.map((t, i) => (
        <span key={i} className={i < shown ? "in" : ""}>
          {t}
        </span>
      ))}
    </div>
  );
}

function Cards({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="chapter-cards">
      {items.map((c, i) => (
        <button
          key={i}
          className={`chapter-card${open === i ? " open" : ""}`}
          onClick={() => setOpen(open === i ? null : i)}
        >
          <span className="chapter-card-emoji">{c.emoji}</span>
          <span className="chapter-card-label">{c.label}</span>
          <span className="chapter-card-text">{c.text}</span>
        </button>
      ))}
    </div>
  );
}

function Block({ block, active }) {
  switch (block.type) {
    case "p":
      return <p className="body-text small">{block.text}</p>;
    case "note":
      return <p className="chapter-note">{block.text}</p>;
    case "quote":
      return <p className="chapter-quote">{block.text}</p>;
    case "big":
      return <p className="chapter-big">{block.text}</p>;
    case "lines":
      return (
        <div className="chapter-lines">
          {block.items.map((t, i) => (
            <p key={i}>{t}</p>
          ))}
        </div>
      );
    case "checklist":
      return (
        <ul className="chapter-checklist">
          {block.items.map((t, i) => (
            <li key={i}>
              <span>{t}</span>
              <span className="chapter-check">✔️</span>
            </li>
          ))}
        </ul>
      );
    case "beats":
      return (
        <div className="chapter-beats">
          {block.items.map((b, i) => (
            <div key={i} className="chapter-beat">
              <span className="chapter-beat-label">{b.label}</span>
              <span className="chapter-beat-text">{b.text}</span>
            </div>
          ))}
        </div>
      );
    case "clock":
      return (
        <div className={`chapter-clock${block.highlight ? " hot" : ""}`}>
          <span className="chapter-time">{block.time}</span>
          <span className="chapter-clock-line">{block.text}</span>
        </div>
      );
    case "chat":
      return <Chat msgs={block.msgs} active={active} />;
    case "montage":
      return <Montage items={block.items} big={block.big} active={active} />;
    case "cards":
      return <Cards items={block.items} />;
    default:
      return null;
  }
}

export default function Chapter({ active, goTo, index, chapter, position, total, homeIndex }) {
  const img = imageById[chapter.id];
  const isLast = position === total;

  return (
    <Scene active={active} className="scene-scroll">
      <div className="chapter-body">
        {(chapter.date || chapter.eyebrow) && <div className="eyebrow">{chapter.date || chapter.eyebrow}</div>}
        <h1>{chapter.title}</h1>
        {chapter.perspective && <p className="chapter-perspective">{chapter.perspective}</p>}
        {chapter.hero && chapter.hero.map((t, i) => (
          <p key={i} className="body-text emphasis">
            {t}
          </p>
        ))}
        {img && <img className="chapter-photo" src={img} alt={chapter.title} />}

        {chapter.blocks?.map((b, i) => (
          <Block key={i} block={b} active={active} />
        ))}

        {chapter.ending && (
          <div className="chapter-ending">
            {chapter.ending.map((t, i) => (
              <p key={i}>{t}</p>
            ))}
          </div>
        )}

        <div className="chapter-nav">
          {chapter.cta ? (
            <button className="btn btn-primary" onClick={() => goTo(index + 1)}>
              {chapter.cta}
            </button>
          ) : (
            <>
              <button className="btn btn-outline" onClick={() => goTo(index - 1)}>
                ← Prev
              </button>
              {!isLast ? (
                <button className="btn btn-primary" onClick={() => goTo(index + 1)}>
                  Next →
                </button>
              ) : (
                <button className="btn btn-primary" onClick={() => goTo(homeIndex)}>
                  ↺ From the top
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </Scene>
  );
}
