export default function ProgressDots({ mainIndex, total }) {
  const visible = mainIndex !== null && mainIndex > 0;
  return (
    <div className="progress" style={{ display: visible ? "flex" : "none" }}>
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className={i <= mainIndex ? "done" : ""} />
      ))}
    </div>
  );
}
