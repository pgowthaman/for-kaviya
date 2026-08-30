import { useEffect, useState } from "react";
import Particles from "./components/Particles.jsx";
import ProgressDots from "./components/ProgressDots.jsx";
import ConfettiCanvas from "./components/ConfettiCanvas.jsx";
import VerifyOpening from "./scenes/VerifyOpening.jsx";
import VerifyQuestion from "./scenes/VerifyQuestion.jsx";
import VerifyComplete from "./scenes/VerifyComplete.jsx";
import MysteryScene from "./scenes/MysteryScene.jsx";
import TimelineScene from "./scenes/TimelineScene.jsx";
import ExhibitA from "./scenes/ExhibitA.jsx";
import PS5Test from "./scenes/PS5Test.jsx";
import TrustReveal from "./scenes/TrustReveal.jsx";
import WhatIWant from "./scenes/WhatIWant.jsx";
import Proposal from "./scenes/Proposal.jsx";
import Celebration from "./scenes/Celebration.jsx";
import Song from "./scenes/Song.jsx";
import Final from "./scenes/Final.jsx";
import Chapter from "./scenes/Chapter.jsx";
import ChapterNav from "./components/ChapterNav.jsx";
import { SCENE_META, verifyQuestions, timelineRemember, timelineUs, chapters } from "./data.js";

const MAIN_DOT_COUNT = SCENE_META.filter((s) => s.section === "main").length;
const CH_START = SCENE_META.findIndex((s) => s.section === "chapters");
const CH_END = CH_START + chapters.length - 1;

export default function App() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    document.body.className = "mood-" + SCENE_META[current].mood;
  }, [current]);

  // Chapters: let scrolling / arrow keys move between chapters, but only once the
  // active scene's own content is scrolled to its edge.
  useEffect(() => {
    if (current < CH_START || current > CH_END) return;
    let lock = false;

    const advance = (dir) => {
      if (lock) return;
      const next = current + dir;
      if (next < CH_START || next > CH_END) return;
      lock = true;
      setCurrent(next);
      setTimeout(() => {
        lock = false;
      }, 750);
    };

    const atEdge = (dir) => {
      const el = document.querySelector(".scene.active");
      if (!el) return true;
      if (dir > 0) return el.scrollTop + el.clientHeight >= el.scrollHeight - 2;
      return el.scrollTop <= 2;
    };

    const onWheel = (e) => {
      if (Math.abs(e.deltaY) < 24) return;
      const dir = e.deltaY > 0 ? 1 : -1;
      if (atEdge(dir)) advance(dir);
    };

    let touchY = null;
    const onTouchStart = (e) => {
      touchY = e.touches[0].clientY;
    };
    const onTouchEnd = (e) => {
      if (touchY == null) return;
      const dy = touchY - e.changedTouches[0].clientY;
      touchY = null;
      if (Math.abs(dy) < 60) return;
      const dir = dy > 0 ? 1 : -1;
      if (atEdge(dir)) advance(dir);
    };

    const onKey = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") advance(1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") advance(-1);
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKey);
    };
  }, [current]);

  const meta = SCENE_META[current];
  const mainIndex = meta.section === "main" ? current - 6 : null;

  return (
    <>
      <div id="mood-bg" />
      <Particles />
      <div id="stage">
        <ProgressDots mainIndex={mainIndex} total={MAIN_DOT_COUNT} />

        <VerifyOpening active={current === 0} goTo={setCurrent} />
        {verifyQuestions.map((config, i) => (
          <VerifyQuestion
            key={config.id}
            active={current === i + 1}
            goTo={setCurrent}
            index={i + 1}
            config={config}
            questionNumber={i + 1}
          />
        ))}
        <VerifyComplete active={current === 5} goTo={setCurrent} />

        <MysteryScene active={current === 6} goTo={setCurrent} />
        <TimelineScene
          active={current === 7}
          goTo={setCurrent}
          index={7}
          intro={["Before I ask you something...", "There are a few things I want you to remember."]}
          items={timelineRemember}
        />
        <ExhibitA active={current === 8} goTo={setCurrent} index={8} />
        <TimelineScene
          active={current === 9}
          goTo={setCurrent}
          index={9}
          eyebrow="exhibit b"
          title="Us."
          intro={[]}
          items={timelineUs}
        />
        <PS5Test active={current === 10} goTo={setCurrent} index={10} />
        <TrustReveal active={current === 11} goTo={setCurrent} index={11} />
        <WhatIWant active={current === 12} goTo={setCurrent} index={12} />
        <Proposal active={current === 13} goTo={setCurrent} />
        <Celebration active={current === 14} goTo={setCurrent} index={14} />
        <Song active={current === 15} goTo={setCurrent} index={15} />
        <Final active={current === 16} goTo={setCurrent} storyIndex={CH_START} />

        {chapters.map((c, i) => (
          <Chapter
            key={c.id}
            active={current === CH_START + i}
            goTo={setCurrent}
            index={CH_START + i}
            chapter={c}
            position={i + 1}
            total={chapters.length}
            homeIndex={CH_START}
          />
        ))}
      </div>

      {current < CH_START && (
        <button className="story-jump" onClick={() => setCurrent(CH_START)}>
          ✦ our story
        </button>
      )}

      <ChapterNav current={current} goTo={setCurrent} startIndex={CH_START} visible={current >= CH_START} />
      <ConfettiCanvas />
    </>
  );
}
