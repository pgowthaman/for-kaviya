import Scene from "../components/Scene.jsx";

export default function MysteryScene({ active, goTo }) {
  return (
    <Scene active={active}>
      <div className="eyebrow">psst.</div>
      <h1>
        Hey Kaviya <span className="wave">👀</span>
      </h1>
      <p className="body-text">You probably scanned this without knowing what you're getting into.</p>
      <p className="body-text">Good.</p>
      <p className="body-text">That's exactly how I wanted it. 😏</p>
      <button className="btn btn-primary" onClick={() => goTo(7)}>
        START →
      </button>
    </Scene>
  );
}
