import { useEffect } from "react";
import { moments } from "../data.js";
import { useInView } from "../hooks.js";

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
// Optional: src/assets/moments/cover.jpg -> big photo in the header.
const coverImage = imageById.cover;

function MomentRow({ moment, index }) {
  const [ref, inView] = useInView({ threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
  const side = index % 2 === 0 ? "left" : "right";
  const img = imageById[moment.id];

  return (
    <li ref={ref} className={`mt-row mt-${side}${inView ? " in" : ""}`}>
      <span className="mt-dot" />
      <div className="mt-card">
        {img ? (
          <img className="mt-photo" src={img} alt={moment.title} loading="lazy" />
        ) : (
          <div className="mt-photo mt-photo-empty">{moment.emoji}</div>
        )}
        <div className="mt-body">
          <div className="mt-date">{moment.date}</div>
          <h2 className="mt-title">
            <span className="mt-emoji">{moment.emoji}</span> {moment.title}
          </h2>
          {moment.lines.map((line, i) => (
            <p key={i} className="mt-line">
              {line}
            </p>
          ))}
        </div>
      </div>
    </li>
  );
}

export default function MomentsTimeline() {
  useEffect(() => {
    document.body.className = "mood-romantic timeline-mode";
    return () => {
      document.body.className = "";
    };
  }, []);

  return (
    <div className="mt-page">
      <header className="mt-header">
        <div className="eyebrow">our story</div>
        <h1>Us.</h1>
        <p className="body-text small">Every moment that got us here. ❤️</p>
        {coverImage && <img className="mt-cover" src={coverImage} alt="Us" />}
      </header>

      <ol className="mt-timeline">
        {moments.map((m, i) => (
          <MomentRow key={m.id} moment={m} index={i} />
        ))}
      </ol>

      <footer className="mt-footer">
        <p className="body-text small emphasis">…and this is only the beginning. 🩷</p>
      </footer>
    </div>
  );
}
