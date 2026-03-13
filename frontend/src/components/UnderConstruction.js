import "./UnderConstruction.css";

function UnderConstruction({ title }) {
  return (
    <div className="under-construction">
      <div className="uc-icon">&#128296;</div>
      <h2>Under Construction</h2>
      <p>The <strong>{title}</strong> section is coming soon.</p>
    </div>
  );
}

export default UnderConstruction;
