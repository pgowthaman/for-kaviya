import { useEffect, useState } from "react";
import Scene from "../components/Scene.jsx";
import { exhibitA } from "../data.js";

export default function ExhibitA({ active, goTo, index }) {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (active) setPlay(true);
  }, [active]);

  return (
    <Scene active={active}>
      <div className="eyebrow">exhibit a</div>
      <h1>You.</h1>
      <ul className={`reveal-list${play ? " play" : ""}`}>
        {exhibitA.map((line, i) => (
          <li key={i} className={i === exhibitA.length - 1 ? "emphasis" : ""}>
            {line}
          </li>
        ))}
      </ul>
      <button className="btn btn-primary btn-continue" onClick={() => goTo(index + 1)}>
        Continue →
      </button>
    </Scene>
  );
}
