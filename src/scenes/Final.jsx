import Scene from "../components/Scene.jsx";

export default function Final({ active, goTo, storyIndex }) {
  return (
    <Scene active={active}>
      <p className="final-dates">29.07 → 16.08 → ❤️</p>
      <p className="body-text small">One conversation.</p>
      <p className="body-text small">A lot of teasing.</p>
      <p className="body-text small">A little bit of chaos.</p>
      <p className="body-text small">And one very important YES.</p>
      <p className="body-text small emphasis">Let's see where this takes us. ❤️</p>
      <div className="ps-block">
        <p className="body-text small">P.S.</p>
        <p className="body-text small">PS5 still negotiable. 😏</p>
      </div>
      {goTo && (
        <button className="btn btn-primary" onClick={() => goTo(storyIndex)}>
          Read our story →
        </button>
      )}
    </Scene>
  );
}
