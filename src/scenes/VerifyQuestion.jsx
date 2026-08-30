import { useState } from "react";
import Scene from "../components/Scene.jsx";
import { useRevealSequence } from "../hooks.js";
import { wrongAnswerMessages } from "../data.js";
import { pickRandom } from "../utils.js";

export default function VerifyQuestion({ active, goTo, index, config, questionNumber }) {
  const [step, setStep] = useState("ask");
  const [wrongMsg, setWrongMsg] = useState("");
  const [shakeValue, setShakeValue] = useState(null);

  const revealed = useRevealSequence(active && step === "reveal", config.reveal.length, 550);
  const done = revealed >= config.reveal.length;

  function handleOption(value) {
    if (value === config.correct) {
      setWrongMsg("");
      setStep("reveal");
    } else {
      setWrongMsg(pickRandom(wrongAnswerMessages));
      setShakeValue(value);
      setTimeout(() => setShakeValue(null), 400);
    }
  }

  return (
    <Scene active={active}>
      <div className="eyebrow">question {questionNumber} of 4</div>

      {step === "ask" && (
        <>
          <p className="body-text small">{config.prompt}</p>
          <p className="quiz-question">{config.question}</p>
          <div className={`verify-options verify-${config.variant}`}>
            {config.options.map((opt) => (
              <button
                key={opt.value}
                className={`verify-opt verify-opt-${config.variant}${shakeValue === opt.value ? " wrong" : ""}`}
                onClick={() => handleOption(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <p className="quiz-feedback">{wrongMsg}</p>
        </>
      )}

      {step === "reveal" && (
        <>
          {config.reveal.slice(0, revealed).map((line, i) => (
            <p key={i} className="body-text small reveal-shown">
              {line}
            </p>
          ))}
          {done && (
            <>
              <p className="verify-progress">Identity verification: {config.progress}% 🔐</p>
              <button className="btn btn-primary" onClick={() => goTo(index + 1)}>
                Continue →
              </button>
            </>
          )}
        </>
      )}
    </Scene>
  );
}
