export function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
