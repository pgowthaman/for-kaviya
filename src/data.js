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

// Our story, told as chapters. Each renders as its own page in the "chapters" section
// after the main experience. A photo named src/assets/moments/<id>.jpg (png/webp/…)
// is picked up automatically for that chapter.
export const chapters = [
  {
    id: "home",
    mood: "mystery",
    eyebrow: "our story",
    title: "How did we get here?",
    hero: ['It started with a "Hi."', "And somehow, that “Hi” became us. ❤️"],
    blocks: [
      { type: "p", text: "Two people who didn't really know what to talk about." },
      { type: "p", text: "Two introverts trying to survive conversations that felt suspiciously like interviews. 😬" },
      { type: "p", text: "And somewhere between:" },
      { type: "montage", items: ['"Saptingala?"', '"Ena panringa?"', '"Hmm…"', "😅", "😬", "😏"] },
      { type: "p", text: "we slowly became something neither of us expected." },
    ],
    cta: "Start from the beginning →",
  },
  {
    id: "first-saw",
    rail: "05 JUL",
    date: "5 July 2026",
    mood: "dawn",
    title: "The First Time I Saw Her",
    perspective: "From Gowthaman's point of view.",
    blocks: [
      { type: "p", text: "I didn't know it that day." },
      { type: "p", text: "I didn't know that the girl I was seeing for the first time would eventually become the person I'd be talking to every day." },
      { type: "p", text: "At that point, she was just someone I had met." },
      { type: "lines", items: ["No “good morning” messages.", "No late-night conversations.", "No teasing.", "No “Love you.”"] },
      { type: "p", text: "Just one first look." },
      { type: "p", text: "And somehow, that was the beginning." },
    ],
    ending: ["I saw her first.", "I just didn't know how much I'd end up seeing her in my future. ❤️"],
  },
  {
    id: "first-message",
    rail: "29 JUL",
    date: "29 July 2026",
    mood: "chat",
    title: '"Hi, This is Gowthaman"',
    blocks: [
      {
        type: "chat",
        msgs: [
          { from: "g", text: "Hi, This is Gowthaman" },
          { from: "g", text: "Is this Kaviya?" },
          { from: "k", text: "Yeah Hi 😄" },
        ],
      },
      { type: "p", text: "That was it." },
      { type: "p", text: "The most ordinary “Hi” ever." },
      { type: "p", text: "Except it wasn't ordinary." },
      { type: "p", text: "I had your number. You didn't even expect my message. 😜" },
      { type: "p", text: "And suddenly, two people who barely knew what to say had to figure out how to keep a conversation going." },
      { type: "quote", text: "“Thidirunu number kuduthu pesunga nu sonnathum ena pesane theriyala yennaku 😂”" },
      { type: "p", text: "Honestly... Same. 😅" },
      { type: "p", text: "You said you didn't expect a text at all. And that at first you thought I was very silent." },
      { type: "p", text: "Fair. I just talk a lot more once I get comfortable. 😬" },
    ],
    ending: ["And just like that... we started talking."],
  },
  {
    id: "first-call",
    rail: "06 AUG",
    date: "6 August 2026",
    mood: "nightcall",
    title: "The First Call",
    blocks: [
      {
        type: "beats",
        items: [
          { label: "Before the first call:", text: "“What are we even going to talk about?” 😬" },
          { label: "During the call:", text: "“Why am I this nervous?” 😬" },
          { label: "After the call:", text: "“Okay... that wasn't so bad.” 😄" },
        ],
      },
      { type: "p", text: "Texting gave us time to think." },
      { type: "p", text: "A call didn't." },
      { type: "p", text: "Suddenly there was no typing, no deleting, no “Hmm…” while secretly thinking about the next question." },
      { type: "p", text: "Just your voice." },
      { type: "p", text: "And somehow, hearing each other made the whole thing feel a little more real." },
      { type: "quote", text: "“Call laye sollalam nu thonuchu…” 😬" },
      { type: "note", text: "(remember this one for later)" },
    ],
    ending: ["We didn't know it then, but every call was bringing us a little closer."],
  },
  {
    id: "the-yes",
    rail: "16 AUG",
    date: "16 August 2026",
    mood: "emerald",
    title: 'The "Yes"',
    blocks: [
      { type: "p", text: "We had been waiting. Thinking. Wondering what the families would say." },
      { type: "p", text: "And then came the message we'd both been waiting for." },
      { type: "quote", text: "“Mm😊 naanu happy than.”" },
      { type: "p", text: "You had told your mother. I had been waiting." },
      { type: "p", text: "And suddenly all those days of wondering became a little less uncertain." },
      {
        type: "chat",
        msgs: [
          { from: "g", text: "Paavam romba naal wait panna vachitomey 😄" },
          { from: "k", text: "Nala romba happy 😍" },
        ],
      },
      { type: "big", text: "Aug 16 🙂" },
    ],
    ending: ["Maybe it looked like just a date.", "But for us, it became the day everything started feeling a little more real. ❤️"],
  },
  {
    id: "first-date",
    rail: "23 AUG",
    date: "23 August 2026",
    mood: "sunset",
    photoStyle: "arch",
    title: "Our First Date",
    blocks: [
      { type: "p", text: "The day “us” became real." },
      {
        type: "checklist",
        items: [
          "Nervousness",
          "Shyness",
          "Not knowing what to talk about",
          "Coffee with a special one",
          "A surprise",
          "Making her feel special",
        ],
      },
      {
        type: "montage",
        items: [
          '"Oru maari pudhu feel."',
          '"Nervesness konjam shyness konjam."',
          '"Coffee with spl one 🥰"',
          '"Your surprise"',
          '"That was unexpected"',
          '"You made me feel special 🥰"',
        ],
      },
      { type: "p", text: "I don't think either of us knew exactly what this day was going to feel like." },
      { type: "p", text: "But somewhere between the awkwardness, the coffee, the teasing and that little surprise..." },
      { type: "p", text: "we stopped feeling like two people who were getting to know each other. We started feeling like us." },
    ],
    ending: ["First date.", "First proper memories.", "Definitely not the last. ❤️"],
  },
  {
    id: "night-changed",
    rail: "25 AUG · 2AM",
    date: "25 · 08 · 2026",
    mood: "midnight",
    title: "The Night Everything Changed",
    blocks: [
      { type: "clock", time: "2:09 AM", text: "“First tym kekren la ☺️”" },
      { type: "clock", time: "2:10 AM", text: "“Love you a lot 🥰❤️”", highlight: true },
      {
        type: "chat",
        msgs: [
          { from: "k", text: "😍🥰❣️" },
          { from: "k", text: "Butterflies la feel panren" },
          { from: "k", text: "Lyf la first time 😬" },
        ],
      },
      { type: "p", text: "I had thought about saying it on the call. I couldn't." },
      { type: "p", text: "So eventually, at 2:10 in the morning, after slowly getting closer and closer..." },
      { type: "p", text: "I finally said it." },
      { type: "big", text: "Love you." },
      { type: "p", text: "And just like that, the conversation changed." },
    ],
    ending: ["We weren't just talking anymore.", "We were in love. ❤️"],
  },
  {
    id: "proposal",
    rail: "25 AUG · ASK",
    date: "25 August 2026",
    mood: "proposal",
    title: "Proposal Day",
    blocks: [
      { type: "p", text: "We had already crossed the line from:" },
      { type: "montage", items: ["strangers", "conversations", "calls", "first date", "feelings"] },
      { type: "p", text: "But there are some moments where you stop wondering:" },
      { type: "quote", text: "“Where is this going?”" },
      { type: "p", text: "and start saying:" },
      { type: "quote", text: "“This is where I want it to go.”" },
      { type: "p", text: "That was our proposal day." },
    ],
    ending: ["Not the beginning of our story.", "The moment we chose where the story should go next. ❤️"],
  },
  {
    id: "said-it-back",
    rail: "27 AUG",
    date: "27 August 2026",
    mood: "rose",
    title: "When She Said It Back",
    perspective: "Kaviya's chapter.",
    blocks: [
      { type: "p", text: "I said it first." },
      { type: "p", text: "But then came the moment I had secretly been waiting for." },
      { type: "quote", text: "“I love you Gowtham ❤️”" },
      { type: "p", text: "And suddenly..." },
      {
        type: "lines",
        items: [
          "the guy who spent days wondering what to talk about,",
          "who couldn't say what he wanted to say on a call,",
          "who kept hiding behind 😬😏...",
        ],
      },
      { type: "p", text: "got to hear the words he wanted most." },
      { type: "big", text: "I love you. From you. ❤️" },
    ],
    ending: ["This time, there was no wondering.", "It was us."],
  },
  {
    id: "first-photoshoot",
    rail: "05 SEP",
    date: "05 September 2026",
    mood: "film",
    photoStyle: "strip",
    title: "Our First Photo Shoot",
    caption: "Snapshot Photobooth · 05 · 09 · 2026",
    blocks: [
      { type: "p", text: "Four frames. Just the two of us." },
      { type: "p", text: "A tiny photobooth, hearts on the wall, and a bunch of red roses." },
      { type: "p", text: "And somewhere between the second frame and the third, my hand found your shoulder." },
      { type: "p", text: "First time standing this close. It felt like the most natural thing in the world." },
      { type: "p", text: "Afterwards, we shared our first cup of hot chocolate, and a milkshake too." },
      { type: "p", text: "Our first photo shoot, our first time this close, our first shared sips. So many firsts in one day." },
    ],
    ending: ["Four frames. One hot chocolate. One milkshake.", "A whole lot of firsts, shared. ❤️"],
  },
  {
    id: "family-shopping",
    rail: "14 SEP",
    date: "14 September 2026",
    mood: "saffron",
    photoStyle: "film",
    title: "Our First Family Day",
    caption: "14 · 09 · 2026",
    blocks: [
      { type: "p", text: "Until now, it was always just the two of us." },
      { type: "p", text: "This day, it was all of us. Kaviya's mom and dad, Kaviya, me, and my mom. Our first full family shopping day." },
      { type: "p", text: "Hours spent together, walking around, choosing things, talking, laughing. It didn't feel like two families meeting. It felt like one." },
      { type: "p", text: "And that day, we bought gold. My first buy for you. Your first buy for me." },
      { type: "p", text: "The first things we chose for each other, from each other." },
      { type: "p", text: "And on the way, our first car drive together as a family." },
      { type: "quote", text: "“Some days don't look like a big event. But they quietly change everything.”" },
    ],
    ending: ["Not just you and me anymore.", "Our families, together. ❤️"],
  },
  {
    id: "uruthi",
    rail: "17 SEP",
    date: "17 September 2026",
    mood: "temple",
    photoStyle: "gold",
    title: "The Uruthi Day",
    caption: "17 · 09 · 2026",
    blocks: [
      { type: "p", text: "And then the day came." },
      { type: "p", text: "Halfway to making our relationship official." },
      { type: "p", text: "Uruthi. A promise, from both sides." },
      { type: "p", text: "Both our families came together, and we got the Uruthi function completed." },
      { type: "quote", text: "“Two families, one promise.”" },
      { type: "p", text: "A day I'll remember for the rest of my life. Thank you for making it so special." },
    ],
    ending: ["Not the end of the story.", "A promise that the best part is still coming. ❤️"],
  },
  {
    id: "holding-hands",
    rail: "19 SEP",
    date: "19 September 2026",
    mood: "blush",
    photoStyle: "circle",
    title: "Holding Hands",
    caption: "Our favourite picture · 19 · 09 · 2026",
    blocks: [
      { type: "p", text: "This is our favourite picture together." },
      { type: "p", text: "We held hands the whole time. Walking, sitting, talking. Completely, and without letting go." },
      { type: "p", text: "And I felt it: I never want to leave her hand. Not for a single moment." },
      { type: "quote", text: "“The closer we get, the more I know.”" },
    ],
    ending: ["Her hand in mine.", "That's all I need. ❤️"],
  },
  {
    id: "mettur",
    rail: "02 OCT",
    date: "02 October 2026",
    mood: "forest",
    photoStyle: "stack",
    title: "Our First Long Trip",
    caption: "Mettur · 02 · 10 · 2026",
    blocks: [
      { type: "p", text: "Our first long trip. Just the two of us, a whole day together, at Mettur Park." },
      { type: "p", text: "We were supposed to meet at the bus stand. We both reached at the exact same time. No planning, just a little coincidence." },
      { type: "p", text: "Then a 50 km drive to the park, with songs playing and endless talks. Honestly, the drive itself was my favourite part." },
      { type: "p", text: "And in the park, we got closer. For the first time, she rested her head on my shoulder." },
      { type: "quote", text: "“Even this close, it still felt like we weren't close enough.”" },
    ],
    ending: ["One day. One drive. One shoulder.", "And I wanted more. ❤️"],
  },
  {
    id: "video-call",
    rail: "09 OCT",
    date: "09 October 2026",
    mood: "bluenight",
    photoStyle: "phone",
    title: "Our First Video Call",
    caption: "12:14 AM · 09 · 10 · 2026",
    blocks: [
      { type: "p", text: "Until now, it was always voice calls." },
      { type: "p", text: "This night was our first video call. And we put each other to sleep, comforting each other over the call." },
      { type: "p", text: "Obviously, I fell asleep first. As usual. 😴" },
      { type: "p", text: "But it felt different. Seeing her face, instead of only hearing her voice." },
      { type: "quote", text: "“Voice makes you feel close. Video makes you feel together.”" },
    ],
    ending: ["Same goodnight.", "A different kind of close. ❤️"],
  },
  {
    id: "zoo",
    rail: "10 OCT",
    date: "10 October 2026",
    mood: "leaf",
    photoStyle: "tape",
    title: "Lunch in the Car, Walks in the Zoo",
    caption: "Kurumbapatti Zoological Park · 10 · 10 · 2026",
    blocks: [
      { type: "p", text: "Our trip started with home lunch. My mom's cooking, eaten right there in our car." },
      { type: "p", text: "And while we were eating, she fed me. For the first time." },
      { type: "big", text: "ஊட்டி விடுதல்" },
      { type: "note", text: "(ootti viduthal: feeding someone with your own hand, with love)" },
      { type: "p", text: "Then we went to the zoological park and spent a lovely time walking together." },
      { type: "p", text: "The more time we spent, the closer we got." },
      { type: "p", text: "I put my hand on her shoulder and pulled her a little closer. And played with her more and more." },
    ],
    ending: ["A home-cooked lunch.", "A walk. A little closer. ❤️"],
  },
  {
    id: "us",
    rail: "US",
    mood: "romantic",
    eyebrow: "us",
    title: 'From "Saptacha?" to "Love you."',
    blocks: [
      {
        type: "montage",
        big: true,
        items: [
          '"Saptacha?"',
          '"Ena panringa?"',
          '"Tea kudikren." ☕',
          '"Hmm."',
          '"Ok ok."',
          "😬",
          "😏",
          '"Povom 😁"',
          '"Already started to miss you."',
          '"Love you a lot." ❤️',
        ],
      },
      { type: "p", text: "We didn't fall in love in one dramatic moment." },
      { type: "p", text: "It happened in tiny conversations." },
      {
        type: "lines",
        items: [
          "In asking if the other person had eaten.",
          "In waiting for a reply.",
          "In noticing when the other person started a conversation first.",
          "In teasing.",
          "In being nervous.",
          "In slowly becoming comfortable.",
        ],
      },
      { type: "p", text: "And eventually... in choosing each other." },
      { type: "counter", from: "2026-07-05", label: "days since the day I first saw you" },
      { type: "p", text: "Since then, so many firsts:" },
      {
        type: "montage",
        items: [
          "our first message",
          "our first call",
          "our first date",
          "our first \"Love you\" ❤️",
          "our first photo shoot",
          "our first family day",
          "our Uruthi",
          "our first video call",
          "our first long trip",
          "the first time she fed me",
        ],
      },
      { type: "p", text: "From shy replies to holding hands and never wanting to let go." },
      { type: "p", text: "From two people figuring out what to say, to two families sitting together." },
      { type: "quote", text: "“The more time we spend together, the closer we get. And somehow, still not close enough.”" },
      { type: "big", text: "This is our story." },
    ],
    ending: ["And we're only at the beginning.", "Many more firsts to come. ❤️"],
  },
  {
    id: "things",
    mood: "warm",
    eyebrow: "us, in the little things",
    title: 'The Things That Became "Us"',
    blocks: [
      { type: "p", text: "Little recurring things from our conversations." },
      {
        type: "cards",
        items: [
          { emoji: "☕", label: "Tea", text: "Something simple that became part of our everyday conversations." },
          { emoji: "😬", label: "Shyness", text: "Two introverts trying to figure out how to talk to each other." },
          { emoji: "🏸", label: "Shuttle / Badminton", text: "One of the early casual conversations that helped us get comfortable." },
          { emoji: "😏", label: "Teasing", text: 'Something that slowly became a very important part of "us".' },
          { emoji: "❤️", label: "Love You", text: "The words that changed everything." },
          { emoji: "✈️", label: "Travel", text: "The conversations about places we'd like to go and the idea of travelling together." },
          { emoji: "🏡", label: "Future", text: "The conversations about building a stable, happy life and family together." },
        ],
      },
    ],
    ending: ["This is literally our story."],
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
  ...chapters.map((c) => ({ mood: c.mood, section: "chapters" })), // 17+ story chapters
];
