import { useState } from "react";

function makeParticles(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: 4 + Math.random() * 8,
    left: `${Math.random() * 100}%`,
    dur: `${14 + Math.random() * 14}s`,
    delay: `${Math.random() * 14}s`,
  }));
}

export default function Particles() {
  const [particles] = useState(() => makeParticles(16));
  return (
    <div id="particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            "--size": `${p.size}px`,
            "--left": p.left,
            "--dur": p.dur,
            "--delay": p.delay,
          }}
        />
      ))}
    </div>
  );
}
