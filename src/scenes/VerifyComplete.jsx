import Scene from "../components/Scene.jsx";
import { useRevealSequence } from "../hooks.js";
import { verifyCompleteLines } from "../data.js";

export default function VerifyComplete({ active, goTo }) {
  const revealed = useRevealSequence(active, verifyCompleteLines.length, 700);
  const done = revealed >= verifyCompleteLines.length;

  return (
    <Scene active={active}>
      <div className="lock-icon">{done ? "🔓" : "🔒"}</div>
      {verifyCompleteLines.slice(0, revealed).map((line, i) => (
        <p key={i} className="body-text emphasis reveal-shown">
          {line}
        </p>
      ))}
      {done && (
        <button className="btn btn-primary" onClick={() => goTo(6)}>
          ENTER →
        </button>
      )}
    </Scene>
  );
}
