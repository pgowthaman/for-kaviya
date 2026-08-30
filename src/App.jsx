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
import MomentScene from "./scenes/MomentScene.jsx";
import MomentsNav from "./components/MomentsNav.jsx";
import { SCENE_META, verifyQuestions, timelineRemember, timelineUs, moments } from "./data.js";

const MAIN_DOT_COUNT = SCENE_META.filter((s) => s.section === "main").length;
const MOMENTS_START = SCENE_META.findIndex((s) => s.section === "moments");

export default function App() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    document.body.className = "mood-" + SCENE_META[current].mood;
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
        <Final active={current === 16} goTo={setCurrent} momentsIndex={MOMENTS_START} />

        {moments.map((m, i) => (
          <MomentScene
            key={m.id}
            active={current === MOMENTS_START + i}
            goTo={setCurrent}
            index={MOMENTS_START + i}
            moment={m}
            position={i + 1}
            total={moments.length}
            isFirst={i === 0}
            isLast={i === moments.length - 1}
          />
        ))}
      </div>

      <MomentsNav current={current} goTo={setCurrent} startIndex={MOMENTS_START} />
      <ConfettiCanvas />
    </>
  );
}
