export function fireConfetti(count) {
  window.dispatchEvent(new CustomEvent("kaviya-confetti", { detail: { count } }));
}
