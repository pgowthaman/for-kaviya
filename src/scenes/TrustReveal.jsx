import { useEffect, useRef, useState } from "react";
import Scene from "../components/Scene.jsx";
import { trustLinesBefore, trustQuote, trustLinesAfter } from "../data.js";
import { wait } from "../utils.js";

export default function TrustReveal({ active, goTo, index }) {
  const [before, setBefore] = useState(0);
  const [quoteTyped, setQuoteTyped] = useState("");
  const [after, setAfter] = useState(0);
  const [showContinue, setShowContinue] = useState(false);
  const playedRef = useRef(false);

  useEffect(() => {
    if (!active || playedRef.current) return;
    playedRef.current = true;
    let cancelled = false;

    async function run() {
      for (let i = 0; i < trustLinesBefore.length; i++) {
        if (cancelled) return;
        setBefore(i + 1);
        await wait(550);
      }
      for (let i = 0; i <= trustQuote.length; i++) {
        if (cancelled) return;
        setQuoteTyped(trustQuote.slice(0, i));
        await wait(40);
      }
      await wait(350);
      for (let i = 0; i < trustLinesAfter.length; i++) {
        if (cancelled) return;
        setAfter(i + 1);
        await wait(550);
      }
      if (!cancelled) setShowContinue(true);
    }
    run();
    return () => {
      cancelled = true;
    };
  }, [active]);

  return (
    <Scene active={active}>
      {trustLinesBefore.slice(0, before).map((line, i) => (
        <p key={i} className="trust-line shown">
          {line}
        </p>
      ))}
      {quoteTyped && <p className="trust-quote shown">{quoteTyped}</p>}
      {trustLinesAfter.slice(0, after).map((line, i) => (
        <p key={i} className="trust-line shown">
          {line}
        </p>
      ))}
      {showContinue && (
        <button className="btn btn-outline" onClick={() => goTo(index + 1)}>
          Continue →
        </button>
      )}
    </Scene>
  );
}
