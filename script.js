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
const eggBtn = document.getElementById("easter-egg");
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
  eggBtn.style.display = chromeVisible ? "block" : "none";

  document.body.classList.toggle("mood-serious", current === 5);

  if (current === 5) runTrustReveal();
  if (current === 4) {
    // handled by button, nothing on enter
  }
  if (current === 8) setTimeout(() => fireConfetti(160), 400);
}

// ---------------------------------------------------------------------------
// Scene 0 — mysterious landing / identity check
// ---------------------------------------------------------------------------
document.querySelectorAll("[data-next-step]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetStep = btn.getAttribute("data-next-step");
    document.querySelectorAll('.scene[data-scene="0"] .step').forEach((s) => {
      s.classList.toggle("active", s.getAttribute("data-step") === targetStep);
    });
  });
});
document.getElementById("enter-btn").addEventListener("click", () => goTo(1));

// ---------------------------------------------------------------------------
// Scene 1 — timeline
// ---------------------------------------------------------------------------
document.querySelectorAll(".tl-node").forEach((node) => {
  const msgEl = node.querySelector(".tl-msg");
  msgEl.textContent = node.getAttribute("data-msg");
  node.addEventListener("click", () => {
    node.classList.toggle("opened");
  });
});

// ---------------------------------------------------------------------------
// Scene 2 — rules
// ---------------------------------------------------------------------------
const agreeBtn = document.getElementById("agree-btn");
const rulesResult = document.getElementById("rules-result");
agreeBtn.addEventListener("click", () => {
  rulesResult.classList.add("show");
  agreeBtn.style.display = "none";
});

// ---------------------------------------------------------------------------
// Scene 3 — memory quiz
// ---------------------------------------------------------------------------
const quizQuestions = Array.from(document.querySelectorAll(".quiz-q"));
const qNumEl = document.getElementById("q-num");
const quizContinueBtn = document.getElementById("quiz-continue");
let quizIndex = 0;

const feedbackByQuestion = [
  'Correct. I remember that one too. 😌<br><span style="opacity:.7;font-size:13px">"Peru Gowthaman ah kooda irukalam 😜"</span>',
  "Correct. Some rules are just non-negotiable. 😌",
  "Correct. Certification pending. 😏",
];

quizQuestions.forEach((q, qi) => {
  const opts = Array.from(q.querySelectorAll(".quiz-opt"));
  const feedback = q.querySelector(".quiz-feedback");

  opts.forEach((opt) => {
    opt.addEventListener("click", () => {
      const isCorrect = opt.getAttribute("data-correct") === "true";
      if (isCorrect) {
        opts.forEach((o) => (o.disabled = true));
        opt.classList.add("correct");
        feedback.innerHTML = feedbackByQuestion[qi];
        setTimeout(() => advanceQuiz(qi), 1100);
      } else {
        opt.classList.add("wrong");
        feedback.textContent = "Not quite 😏 try again.";
        setTimeout(() => opt.classList.remove("wrong"), 400);
      }
    });
  });
});

function advanceQuiz(finishedIndex) {
  quizQuestions[finishedIndex].hidden = true;
  const nextIndex = finishedIndex + 1;
  if (nextIndex < quizQuestions.length) {
    quizQuestions[nextIndex].hidden = false;
    qNumEl.textContent = String(nextIndex + 1);
  } else {
    quizContinueBtn.hidden = false;
  }
}

// ---------------------------------------------------------------------------
// Scene 4 — no chance archive
// ---------------------------------------------------------------------------
const revealResultBtn = document.getElementById("reveal-result-btn");
const finalCardWrap = document.getElementById("final-card-wrap");
revealResultBtn.addEventListener("click", () => {
  finalCardWrap.classList.add("show");
  revealResultBtn.style.display = "none";
  fireConfetti(90);
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
      await typeWriter(quoteEl, quoteText, 45);
      await new Promise((r) => setTimeout(r, 400));
    } else {
      line.classList.add("shown");
      await new Promise((r) => setTimeout(r, 900));
    }
  }
  document.getElementById("trust-continue").classList.add("shown");
}

document.getElementById("trust-continue").addEventListener("click", () => goTo(6));

// ---------------------------------------------------------------------------
// Generic ".btn-continue" wiring for simple scenes
// ---------------------------------------------------------------------------
document.querySelectorAll(".btn-continue").forEach((btn) => {
  if (btn.id === "trust-continue") return; // wired separately
  btn.addEventListener("click", () => {
    const scene = btn.closest(".scene");
    const idx = Number(scene.getAttribute("data-scene"));
    goTo(idx + 1);
  });
});

// ---------------------------------------------------------------------------
// Scene 7 — song reveal
// ---------------------------------------------------------------------------
document.getElementById("song-name").textContent = SONG_NAME;

document.getElementById("open-envelope-btn").addEventListener("click", () => {
  document.getElementById("envelope-wrap").style.display = "none";
  document.getElementById("song-reveal").classList.add("show");
});

document.getElementById("play-song-btn").addEventListener("click", (e) => {
  const player = document.getElementById("song-player");
  player.innerHTML = `<iframe src="${SONG_URL}" title="${SONG_NAME}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
  player.classList.add("show");
  e.target.disabled = true;
  e.target.textContent = "Playing…";
});

// ---------------------------------------------------------------------------
// Easter egg
// ---------------------------------------------------------------------------
const eggModal = document.getElementById("egg-modal");
eggBtn.addEventListener("click", () => {
  eggModal.hidden = false;
});
document.getElementById("egg-close").addEventListener("click", () => {
  eggModal.hidden = true;
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

const confettiColors = ["#ff8fab", "#ff6f94", "#d9b06a", "#f6eef2"];

function fireConfetti(count) {
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
    p.vy += 0.22; // gravity
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
// Keyboard support (Enter/Space activates focused control; no free-roam skip)
// ---------------------------------------------------------------------------
goTo(0);
