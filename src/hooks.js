import { useEffect, useRef, useState } from "react";

// Adds `visible: true` once the element scrolls into view (once, then unobserves).
export function useInView(options = { threshold: 0.35 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(entry.target);
        }
      });
    }, options);
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, inView];
}

// Reveals `count` items one at a time (delayMs apart) once `active` becomes true.
// Returns how many items are currently revealed.
export function useRevealSequence(active, count, delayMs = 600) {
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    if (!active || revealed >= count) return;
    const t = setTimeout(() => setRevealed((r) => r + 1), delayMs);
    return () => clearTimeout(t);
  }, [active, revealed, count, delayMs]);

  return revealed;
}
