import { useState } from "react";
import Scene from "../components/Scene.jsx";

export default function PS5Test({ active, goTo, index }) {
  const [result, setResult] = useState(null); // null | { reaction, followup }

  return (
    <Scene active={active}>
      {!result && (
        <>
          <p className="body-text">Important question before we continue...</p>
          <p className="quiz-question">Has the PS5 ban been officially lifted?</p>
          <div className="ps5-buttons">
            <button
              className="btn btn-outline"
              onClick={() => setResult({ reaction: "Wait, really? 😲", followup: "I'll believe it when I see it. 😏" })}
            >
              YES
            </button>
            <button
              className="btn btn-outline"
              onClick={() => setResult({ reaction: "Expected answer. 😂", followup: "Fine. I can live with it." })}
            >
              NO ❌
            </button>
          </div>
        </>
      )}

      {result && (
        <>
          <p className="body-text">{result.reaction}</p>
          <p className="body-text">{result.followup}</p>
          <p className="body-text">But I have one final question...</p>
          <button className="btn btn-primary btn-continue" onClick={() => goTo(index + 1)}>
            Continue →
          </button>
        </>
      )}
    </Scene>
  );
}
