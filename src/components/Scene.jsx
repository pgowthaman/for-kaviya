export default function Scene({ active, children, className = "" }) {
  return (
    <section className={`scene${active ? " active" : ""}${className ? " " + className : ""}`}>
      <div className="scene-inner">{children}</div>
    </section>
  );
}
