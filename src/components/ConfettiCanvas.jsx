import { useEffect, useRef } from "react";

const COLORS = ["#ff9fb5", "#ff6f94", "#d9b06a", "#ffb26b", "#f6eef2"];

export default function ConfettiCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let pieces = [];
    let raf = null;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach((p) => {
        p.vy += 0.22;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        p.life++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, 1 - p.life / 140);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      });
      pieces = pieces.filter((p) => p.life < 140 && p.y < canvas.height + 40);
      if (pieces.length > 0) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = null;
      }
    }

    function onFire(e) {
      if (reducedMotion) return;
      const count = e.detail?.count ?? 100;
      const originX = canvas.width / 2;
      const originY = canvas.height * 0.35;
      for (let i = 0; i < count; i++) {
        pieces.push({
          x: originX,
          y: originY,
          vx: (Math.random() - 0.5) * 9,
          vy: -Math.random() * 9 - 3,
          size: 4 + Math.random() * 4,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          rot: Math.random() * Math.PI,
          vr: (Math.random() - 0.5) * 0.3,
          life: 0,
        });
      }
      if (!raf) raf = requestAnimationFrame(tick);
    }

    window.addEventListener("kaviya-confetti", onFire);
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("kaviya-confetti", onFire);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas id="confetti-canvas" ref={canvasRef} />;
}
