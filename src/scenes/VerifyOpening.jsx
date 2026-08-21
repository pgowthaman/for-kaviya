import Scene from "../components/Scene.jsx";

export default function VerifyOpening({ active, goTo }) {
  return (
    <Scene active={active}>
      <div className="eyebrow">🔐 private space</div>
      <p className="body-text">Only one person is allowed in here.</p>
      <p className="body-text">Before you enter, I need to verify something...</p>
      <p className="body-text">Are you actually Kaviya? 👀</p>
      <p className="body-text">Let's find out. 😏</p>
      <button className="btn btn-primary" onClick={() => goTo(1)}>
        START VERIFICATION →
      </button>
    </Scene>
  );
}
