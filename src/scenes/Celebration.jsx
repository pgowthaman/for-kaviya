import { useEffect, useRef } from "react";
import Scene from "../components/Scene.jsx";
import { useRevealSequence } from "../hooks.js";
import { celebrateLines, celebrateFinalLine } from "../data.js";
import { fireConfetti } from "../confetti.js";

const allLines = [...celebrateLines, celebrateFinalLine];

export default function Celebration({ active, goTo, index }) {
  const revealed = useRevealSequence(active, allLines.length, 700);
  const done = revealed >= allLines.length;
  const firedRef = useRef(false);

  useEffect(() => {
    if (active && !firedRef.current) {
      firedRef.current = true;
      fireConfetti(140);
    }
  }, [active]);

  return (
    <Scene active={active}>
      {allLines.slice(0, revealed).map((line, i) => (
        <p key={i} className={`celebrate-line shown${i === allLines.length - 1 ? " emphasis" : ""}`}>
          {line}
        </p>
      ))}
      {done && (
        <button className="btn btn-primary" onClick={() => goTo(index + 1)}>
          Continue →
        </button>
      )}
    </Scene>
  );
}
