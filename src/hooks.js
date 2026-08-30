import { useEffect, useState } from "react";

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
