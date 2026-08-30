import { useEffect, useState } from "react";
import Scene from "../components/Scene.jsx";
import { values, wantLinesAfter } from "../data.js";

export default function WhatIWant({ active, goTo, index }) {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (active) setPlay(true);
  }, [active]);

  return (
    <Scene active={active}>
      <p className="body-text">I don't know exactly what the future will look like.</p>
      <p className="body-text">But I know who I'd like beside me while we figure it out.</p>

      <ul className={`values-list${play ? " play" : ""}`}>
        {values.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>

      {wantLinesAfter.map((line, i) => (
        <p key={i} className="body-text small">
          {line}
        </p>
      ))}

      <button className="btn btn-primary btn-continue" onClick={() => goTo(index + 1)}>
        Continue →
      </button>
    </Scene>
  );
}
