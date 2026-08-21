import { useRef, useState } from "react";
import Scene from "../components/Scene.jsx";
import { dodgeMessages } from "../data.js";

export default function Proposal({ active, goTo }) {
  const [step, setStep] = useState("ask"); // ask | final-choice | no-landing
  const [dodgeAttempts, setDodgeAttempts] = useState(0);
  const [dodgeMsg, setDodgeMsg] = useState("");
  const [rejectPos, setRejectPos] = useState(null); // {left, top} in px, relative to arena

  const arenaRef = useRef(null);
  const rejectBtnRef = useRef(null);

  function repositionReject() {
    const arena = arenaRef.current;
    const btn = rejectBtnRef.current;
    if (!arena || !btn) return;
    const bounds = arena.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    const maxLeft = Math.max(0, bounds.width - btnRect.width);
    const maxTop = Math.max(0, bounds.height - btnRect.height);
    const newLeft = Math.random() * maxLeft + btnRect.width / 2;
    const newTop = Math.random() * maxTop;
    setRejectPos({ left: newLeft, top: newTop });
  }

  function handleRejectClick() {
    const attempt = dodgeAttempts + 1;
    setDodgeAttempts(attempt);
    if (attempt <= 3) {
      setDodgeMsg(dodgeMessages[attempt - 1]);
      repositionReject();
    }
    if (attempt === 3) {
      setTimeout(() => {
        setDodgeMsg("Okay okay... one last chance.");
        setTimeout(() => setStep("final-choice"), 900);
      }, 500);
    }
  }

  return (
    <Scene active={active}>
      {step === "ask" && (
        <>
          <h1 className="proposal-name">Kaviya</h1>
          <p className="body-text">I think you already know what I'm about to ask...</p>
          <p className="proposal-question">Will you be my partner? ❤️</p>
          <p className="body-text">Will you choose us?</p>

          <div className="proposal-arena" ref={arenaRef}>
            <button className="btn btn-yes" onClick={() => goTo(14)}>
              YES ❤️
            </button>
            <button
              className="btn btn-reject"
              ref={rejectBtnRef}
              style={
                rejectPos
                  ? { left: `${rejectPos.left}px`, top: `${rejectPos.top}px`, transform: "translateX(-50%)" }
                  : undefined
              }
              onClick={handleRejectClick}
            >
              REJECT 😏
            </button>
          </div>
          <p className="dodge-msg">{dodgeMsg}</p>
        </>
      )}

      {step === "final-choice" && (
        <>
          <p className="body-text">Okay. No more cheating.</p>
          <p className="body-text">Your choice. ❤️</p>
          <div className="final-choice-buttons">
            <button className="btn btn-yes" onClick={() => goTo(14)}>
              YES ❤️
            </button>
            <button className="btn btn-outline" onClick={() => setStep("no-landing")}>
              NO
            </button>
          </div>
        </>
      )}

      {step === "no-landing" && (
        <>
          <p className="body-text">That's okay. ❤️</p>
          <p className="body-text">Thank you for playing along.</p>
          <p className="body-text">And whatever happens, I'm glad we had these conversations.</p>
          <button className="btn btn-link" onClick={() => goTo(15)}>
            there's a bit more, if you'd like →
          </button>
        </>
      )}
    </Scene>
  );
}
