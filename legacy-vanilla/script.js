// ---------------------------------------------------------------------------
// Placeholders — replace before sending the final link.
// ---------------------------------------------------------------------------
const SONG_NAME = "[ADD SONG NAME HERE]";
const SONG_URL = "https://www.youtube.com/embed/VIDEO_ID_PLACEHOLDER"; // YouTube embed URL

// ---------------------------------------------------------------------------
// Scene navigation
// ---------------------------------------------------------------------------
const scenes = Array.from(document.querySelectorAll(".scene"));
const total = scenes.length;
const progressEl = document.getElementById("progress");
let current = 0;

for (let i = 0; i < total; i++) {
  const dot = document.createElement("span");
  progressEl.appendChild(dot);
}
const dots = Array.from(progressEl.children);

function goTo(index) {
  if (index < 0 || index >= total) return;
  current = index;
  scenes.forEach((s, i) => s.classList.toggle("active", i === current));
  dots.forEach((d, i) => d.classList.toggle("done", i <= current));

  const chromeVisible = current > 0;
  progressEl.style.display = chromeVisible ? "flex" : "none";

  const mood = scenes[current].getAttribute("data-mood");
  document.body.className = "mood-" + mood;

  onEnterScene(current);
}

function onEnterScene(index) {
  if (index === 1) document.getElementById("timeline-1").classList.add("play");
  if (index === 2) document.getElementById("exhibit-a").classList.add("play");
  if (index === 3) document.getElementById("timeline-2").classList.add("play");
  if (index === 5) runTrustReveal();
  if (index === 6) document.querySelector('.scene[data-scene="6"] .values-list').classList.add("play");
  if (index === 8) runCelebration();
}

// ---------------------------------------------------------------------------
// Generic ".btn-continue" wiring for simple forward-only scenes
// ---------------------------------------------------------------------------
document.querySelectorAll(".btn-continue").forEach((btn) => {
  if (btn.id === "trust-continue" || btn.id === "celebrate-continue") return; // wired separately
  btn.addEventListener("click", () => {
    const scene = btn.closest(".scene");
    const idx = Number(scene.getAttribute("data-scene"));
    goTo(idx + 1);
  });
});

// ---------------------------------------------------------------------------
// Timeline expand/collapse (used by both timelines)
// ---------------------------------------------------------------------------
document.querySelectorAll(".tl-node").forEach((node) => {
  node.addEventListener("click", () => node.classList.toggle("opened"));
});

// ---------------------------------------------------------------------------
// Scene 4 — PS5 test
// ---------------------------------------------------------------------------
const ps5Ask = document.querySelector('.ps5-step[data-step="ask"]');
const ps5Result = document.querySelector('.ps5-step[data-step="result"]');
const ps5Reaction = document.getElementById("ps5-reaction");
const ps5Followup = document.getElementById("ps5-followup");

document.getElementById("ps5-no").addEventListener("click", () => {
  ps5Reaction.textContent = "Expected answer. 😂";
  ps5Followup.textContent = "Fine. I can live with it.";
  ps5Ask.hidden = true;
  ps5Result.hidden = false;
});
document.getElementById("ps5-yes").addEventListener("click", () => {
  ps5Reaction.textContent = "Wait, really? 😲";
  ps5Followup.textContent = "I'll believe it when I see it. 😏";
  ps5Ask.hidden = true;
  ps5Result.hidden = false;
});

// ---------------------------------------------------------------------------
// Scene 5 — trust (typewriter reveal)
// ---------------------------------------------------------------------------
let trustPlayed = false;
function typeWriter(el, text, speed) {
  el.textContent = "";
  el.classList.add("shown");
  let i = 0;
  return new Promise((resolve) => {
    const tick = () => {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(tick, speed);
      } else {
        resolve();
      }
    };
    tick();
  });
}

async function runTrustReveal() {
  if (trustPlayed) return;
  trustPlayed = true;
  const lines = Array.from(document.querySelectorAll(".trust-line, .trust-quote"));
  const quoteEl = document.querySelector(".trust-quote");
  const quoteText = quoteEl.textContent;

  for (const line of lines) {
    if (line === quoteEl) {
      await typeWriter(quoteEl, quoteText, 40);
      await new Promise((r) => setTimeout(r, 350));
    } else {
      line.classList.add("shown");
      await new Promise((r) => setTimeout(r, 550));
    }
  }
  document.getElementById("trust-continue").classList.add("shown");
}

document.getElementById("trust-continue").addEventListener("click", () => goTo(6));

// ---------------------------------------------------------------------------
// Scene 7 — the proposal (reject-dodge mechanic)
// ---------------------------------------------------------------------------
const arena = document.getElementById("proposal-arena");
const rejectBtn = document.getElementById("reject-btn");
const dodgeMsg = document.getElementById("dodge-msg");
const askStep = document.querySelector('.proposal-step[data-step="ask"]');
const finalChoiceStep = document.querySelector('.proposal-step[data-step="final-choice"]');
const noLandingStep = document.querySelector('.proposal-step[data-step="no-landing"]');

const dodgeMessages = ["Dare to click reject? 😏", "Nice try 😂", "Are you really sure? 👀"];
let dodgeAttempts = 0;

function goToCelebration() {
  goTo(8);
}

function repositionReject() {
  const bounds = arena.getBoundingClientRect();
  const btnRect = rejectBtn.getBoundingClientRect();
  const maxLeft = Math.max(0, bounds.width - btnRect.width);
  const maxTop = Math.max(0, bounds.height - btnRect.height);
  const newLeft = Math.random() * maxLeft;
  const newTop = Math.random() * maxTop;
  rejectBtn.style.left = `${newLeft + btnRect.width / 2}px`;
  rejectBtn.style.top = `${newTop}px`;
  rejectBtn.style.transform = "translateX(-50%)";
}

rejectBtn.addEventListener("click", () => {
  dodgeAttempts++;
  if (dodgeAttempts <= 3) {
    dodgeMsg.textContent = dodgeMessages[dodgeAttempts - 1];
    repositionReject();
  }
  if (dodgeAttempts === 3) {
    setTimeout(() => {
      dodgeMsg.textContent = "Okay okay... one last chance.";
      setTimeout(() => {
        askStep.hidden = true;
        finalChoiceStep.hidden = false;
      }, 900);
    }, 500);
  }
});

document.getElementById("yes-btn-1").addEventListener("click", goToCelebration);
document.getElementById("yes-btn-2").addEventListener("click", goToCelebration);

document.getElementById("no-btn").addEventListener("click", () => {
  finalChoiceStep.hidden = true;
  noLandingStep.hidden = false;
});

document.getElementById("continue-anyway").addEventListener("click", () => goTo(9));

// ---------------------------------------------------------------------------
// Scene 8 — celebration
// ---------------------------------------------------------------------------
let celebrationPlayed = false;
async function runCelebration() {
  if (celebrationPlayed) return;
  celebrationPlayed = true;
  fireConfetti(140);
  const lines = Array.from(document.querySelectorAll(".celebrate-line"));
  for (const line of lines) {
    line.classList.add("shown");
    await new Promise((r) => setTimeout(r, 700));
  }
  document.getElementById("celebrate-continue").classList.add("shown");
}
document.getElementById("celebrate-continue").addEventListener("click", () => goTo(9));

// ---------------------------------------------------------------------------
// Scene 9 — song
// ---------------------------------------------------------------------------
document.getElementById("song-name").textContent = SONG_NAME;
document.getElementById("play-song-btn").addEventListener("click", (e) => {
  const player = document.getElementById("song-player");
  player.innerHTML = `<iframe src="${SONG_URL}" title="${SONG_NAME}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
  player.classList.add("show");
  e.target.disabled = true;
  e.target.textContent = "Playing…";
});

// ---------------------------------------------------------------------------
// Particles
// ---------------------------------------------------------------------------
function initParticles() {
  const container = document.getElementById("particles");
  const count = 16;
  for (let i = 0; i < count; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    const size = 4 + Math.random() * 8;
    p.style.setProperty("--size", `${size}px`);
    p.style.setProperty("--left", `${Math.random() * 100}%`);
    p.style.setProperty("--dur", `${14 + Math.random() * 14}s`);
    p.style.setProperty("--delay", `${Math.random() * 14}s`);
    container.appendChild(p);
  }
}
initParticles();

// ---------------------------------------------------------------------------
// Confetti (lightweight canvas burst)
// ---------------------------------------------------------------------------
const confettiCanvas = document.getElementById("confetti-canvas");
const ctx = confettiCanvas.getContext("2d");
let confettiPieces = [];
let confettiRAF = null;

function resizeCanvas() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const confettiColors = ["#ff9fb5", "#ff6f94", "#d9b06a", "#ffb26b", "#f6eef2"];
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function fireConfetti(count) {
  if (reducedMotion) return;
  const originX = confettiCanvas.width / 2;
  const originY = confettiCanvas.height * 0.35;
  for (let i = 0; i < count; i++) {
    confettiPieces.push({
      x: originX,
      y: originY,
      vx: (Math.random() - 0.5) * 9,
      vy: -Math.random() * 9 - 3,
      size: 4 + Math.random() * 4,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.3,
      life: 0,
    });
  }
  if (!confettiRAF) confettiRAF = requestAnimationFrame(tickConfetti);
}

function tickConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiPieces.forEach((p) => {
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
  confettiPieces = confettiPieces.filter((p) => p.life < 140 && p.y < confettiCanvas.height + 40);
  if (confettiPieces.length > 0) {
    confettiRAF = requestAnimationFrame(tickConfetti);
  } else {
    confettiRAF = null;
  }
}

// ---------------------------------------------------------------------------
// Init
// ---------------------------------------------------------------------------
goTo(0);
