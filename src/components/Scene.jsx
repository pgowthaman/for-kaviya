export default function Scene({ active, children }) {
  return (
    <section className={`scene${active ? " active" : ""}`}>
      <div className="scene-inner">{children}</div>
    </section>
  );
}
