import Scene from "../components/Scene.jsx";
import { useRevealSequence } from "../hooks.js";

// Auto-collect any images dropped in src/assets/moments/ (named <moment-id>.jpg/png/webp/…).
const imageModules = import.meta.glob("../assets/moments/*.{jpg,jpeg,png,webp,gif,avif}", {
  eager: true,
  query: "?url",
  import: "default",
});
const imageById = {};
for (const path in imageModules) {
  const stem = path.split("/").pop().replace(/\.[^.]+$/, "");
  imageById[stem] = imageModules[path];
}

export default function MomentScene({ active, goTo, index, moment, position, total, isFirst, isLast }) {
  const revealed = useRevealSequence(active, moment.lines.length, 650);
  const img = imageById[moment.id];

  return (
    <Scene active={active}>
      <div className="eyebrow">{moment.date}</div>

      {img ? (
        <img className="moment-photo" src={img} alt={moment.title} />
      ) : (
        <div className="moment-photo moment-photo-empty">{moment.emoji}</div>
      )}

      <h1>
        <span className="moment-emoji">{moment.emoji}</span> {moment.title}
      </h1>

      <div className="moment-lines">
        {moment.lines.map((line, i) => (
          <p key={i} className="body-text small" style={{ opacity: i < revealed ? 1 : 0, transition: "opacity 0.5s ease" }}>
            {line}
          </p>
        ))}
      </div>

      <div className="moment-count">
        {position} / {total}
      </div>

      <div className="moment-nav">
        <button className="btn btn-outline" onClick={() => goTo(isFirst ? 16 : index - 1)}>
          ← {isFirst ? "Back to story" : "Prev"}
        </button>
        {!isLast && (
          <button className="btn btn-primary" onClick={() => goTo(index + 1)}>
            Next →
          </button>
        )}
      </div>
    </Scene>
  );
}
