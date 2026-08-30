export const SONG_NAME = "Ivan Yaaro — Minnale";
export const SONG_URL = "https://www.youtube.com/embed/AStAgQLeBeo";

export const PLAYLIST_LINK = "https://music.youtube.com/playlist?list=PLJA-McS7vYgg";

export const wrongAnswerMessages = [
  "Hmm... suspicious. 🤨",
  "That doesn't sound like Kaviya.",
  "Try again, madam. 😂",
  "Nice attempt. 😏",
  "Identity verification failed... temporarily. 😂",
];

export const verifyQuestions = [
  {
    id: "number",
    variant: "numbers",
    progress: 25,
    prompt: "There's a number that seems to have chosen us... 👀",
    question: "What is our special number?",
    options: [
      { label: "7 😏", value: "7" },
      { label: "16", value: "16" },
      { label: "24", value: "24" },
      { label: "29 😂", value: "29" },
    ],
    correct: "24",
    reveal: [
      "Correct.",
      "You — 24 April.",
      "Me — 24 May.",
      "Same date.",
      "Just one month apart. 😌",
      "Maybe 24 was trying to tell us something. 👀",
    ],
  },
  {
    id: "special-person",
    variant: "people",
    progress: 50,
    prompt: 'Apparently, talking to a "special person" can improve Kaviya\'s mood... 😏',
    question: "Who was that special person?",
    options: [
      { label: "Tea ☕", value: "tea" },
      { label: "Her best friend", value: "friend" },
      { label: "Gowthaman 😌", value: "gowthaman" },
      { label: "Nobody knows 👀", value: "nobody" },
    ],
    correct: "gowthaman",
    reveal: ["Correct. 😏", "Interesting...", "You're getting suspiciously good at this."],
  },
  {
    id: "ps5-law",
    variant: "gaming",
    progress: 75,
    prompt: "One very important rule before you enter...",
    question: "What is Kaviya's official position on PS5? 🎮",
    options: [
      { label: "Buy it immediately", value: "buy" },
      { label: "Only on weekends", value: "weekends" },
      { label: "STRICT NO ❌", value: "no" },
      { label: "She secretly wants one", value: "secret" },
    ],
    correct: "no",
    reveal: [
      "Correct. 😂",
      "PS5 status: BANNED ❌🎮",
      "Your position has been permanently recorded.",
      "Some rules are apparently non-negotiable.",
    ],
  },
  {
    id: "first-impression",
    variant: "memory",
    progress: 100,
    prompt: "When Kaviya first met Gowthaman, what made her think...",
    question: '"Okay... let\'s actually talk to this guy?" 👀',
    options: [
      { label: "His badminton skills 🏸", value: "badminton" },
      { label: "His salary 💰😂", value: "salary" },
      { label: "His calm, humble, respectful, no-attitude vibe", value: "vibe" },
      { label: "His amazing flirting skills 😏", value: "flirting" },
    ],
    correct: "vibe",
    reveal: ["Correct.", "You remembered the important part.", "Maybe I did make a good first impression after all. 😌"],
  },
];

export const verifyCompleteLines = [
  "4 / 4 — VERIFIED ✅",
  "Identity confirmed.",
  "Kaviya detected.",
  "Access granted. 🔓",
  "There's just one small problem...",
  "You have no idea what you're about to unlock. 👀",
];

export const timelineRemember = [
  { label: "29.07.2026", msg: "The day this started." },
  { label: "First calls", msg: "When conversations somehow became calls." },
  { label: "Late-night chats", msg: "When good night stopped meaning good night. 😂" },
  { label: "Teasing", msg: "When you started giving me impossible tasks." },
  { label: "16.08.2026", msg: 'When "no chance" became "okay".' },
];

export const exhibitA = [
  "You care.",
  "You ask questions.",
  "You remember small things.",
  "You give opinions even when I don't ask. 😏",
  'You say "no" with impressive confidence.',
  "And somehow…",
  "I like all of it.",
];

export const timelineUs = [
  { label: "29 Jul", msg: "Just two people talking." },
  { label: "First calls", msg: "Okay… this is getting interesting." },
  { label: "PS5 war 🎮", msg: "Strict NO ❌" },
  { label: "No flirting", msg: "Rule established." },
  { label: "Special person 😏", msg: "Gowthaman? Maybe." },
  { label: "Trust", msg: "Something changed here." },
  { label: "16 Aug", msg: "Okay." },
];

export const trustLinesBefore = [
  "Okay…",
  "Enough games.",
  "I've been thinking about something for a while.",
  "We started with conversations.",
  "Then calls.",
  "Then teasing.",
  "Somewhere along the way…",
  "I started looking forward to talking to you every day.",
  "And when you told me you trusted me…",
  "That meant more to me than you probably realize.",
];
export const trustQuote = '"Enaku unga mela oru trust iruku."';
export const trustLinesAfter = ["I don't take that trust lightly.", "I'll always try to be worthy of it."];

export const values = ["Understanding.", "Acceptance.", "Mutual respect.", "Support.", "Friendship.", "Partnership."];
export const wantLinesAfter = [
  "Not just for the big moments.",
  "For the random conversations.",
  "The stupid arguments.",
  "The late-night calls.",
  "The teasing.",
  "The caring.",
  "The boring days.",
  "And everything in between.",
];

export const dodgeMessages = ["Dare to click reject? 😏", "Nice try 😂", "Are you really sure? 👀"];

export const celebrateLines = ["I KNEW IT. 😏❤️", "Okay…", "Technically I didn't know.", "But I was hoping. 😂"];
export const celebrateFinalLine = "Welcome to the next chapter, Kaviya.";

// Milestone "moments" — a browsable section of standalone pages after the story.
// Drop a photo for any moment into src/assets/moments/<id>.jpg (png/webp/gif/avif also work)
// and it is picked up automatically.
export const moments = [
  {
    id: "first-saw",
    date: "5 July 2026",
    emoji: "👀",
    title: "First Time I Saw Her",
    mood: "mystery",
    lines: ["One glance.", "That was enough to make me pay attention.", "I didn't know it yet — but that was the beginning."],
  },
  {
    id: "first-message",
    date: "29 July 2026",
    emoji: "💬",
    title: "First Message",
    mood: "playful",
    lines: ["One text. Nothing fancy.", "Somehow it turned into everything."],
  },
  {
    id: "first-call",
    date: "6 August 2026",
    emoji: "📞",
    title: "First Call",
    mood: "playful",
    lines: ["Typing wasn't enough anymore.", "The first call was supposed to be short.", "It wasn't. 😌"],
  },
  {
    id: "she-said-yes",
    date: "16 August 2026",
    emoji: "💍",
    title: "She Said Yes / Families' Approval",
    mood: "warm",
    lines: ['"No chance" quietly became "okay".', "Both families said yes.", "Suddenly this was real."],
  },
  {
    id: "first-date",
    date: "23 August 2026",
    emoji: "🥰",
    title: "First Date",
    mood: "romantic",
    lines: ["First time it was just us, in person.", "No screens. No typing.", "Just you and me — and it felt easy."],
  },
  {
    id: "proposal-day",
    date: "25 August 2026",
    emoji: "💍",
    title: "Proposal Day",
    mood: "proposal",
    lines: ["I asked the question I'd been holding onto.", "You already knew the answer.", "So did I. 😏"],
  },
  {
    id: "first-love-you",
    date: "25 August 2026",
    emoji: "❤️",
    title: 'First "Love You"',
    mood: "celebrate",
    lines: ["Same day. Later.", "I said it first.", "No taking it back now."],
  },
  {
    id: "her-first-ily",
    date: "27 August 2026",
    emoji: "🩷",
    title: 'First "I Love You" From Kaviya',
    mood: "romantic",
    lines: ["Two days later, you said it back.", "Properly. In full.", '"I love you." — from you.', "Best message I've ever received. 🩷"],
  },
];

// Scene registry: mood + section drive body background and progress-dot visibility.
export const SCENE_META = [
  { mood: "mystery", section: "verify" }, // 0 verify: opening
  { mood: "mystery", section: "verify" }, // 1 verify: q1
  { mood: "mystery", section: "verify" }, // 2 verify: q2
  { mood: "mystery", section: "verify" }, // 3 verify: q3
  { mood: "mystery", section: "verify" }, // 4 verify: q4
  { mood: "mystery", section: "verify" }, // 5 verify: complete
  { mood: "mystery", section: "main" }, // 6 mystery landing
  { mood: "playful", section: "main" }, // 7 remember timeline
  { mood: "playful", section: "main" }, // 8 exhibit A
  { mood: "playful", section: "main" }, // 9 exhibit B / us timeline
  { mood: "playful", section: "main" }, // 10 ps5 test
  { mood: "serious", section: "main" }, // 11 trust
  { mood: "warm", section: "main" }, // 12 what I want
  { mood: "proposal", section: "main" }, // 13 the proposal
  { mood: "celebrate", section: "main" }, // 14 yes celebration
  { mood: "romantic", section: "main" }, // 15 song
  { mood: "romantic", section: "main" }, // 16 final
  ...moments.map((m) => ({ mood: m.mood, section: "moments" })), // 17..24 milestone moment pages
];
