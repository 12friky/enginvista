import React from "react";
import "./vision.css";

export default function MissionVisionValues() {
  return (
    <section className="mvv-section">

      {/* TOP ROW — MISSION & VISION */}
      <div className="mvv-top">

        <div className="mvv-item">
          <div className="mvv-icon">🔧</div>
          <h3 className="mvv-title">Mission</h3>
          <p className="mvv-text">
            To create value and improve lives through Geo-Spatial Technologies.
          </p>
        </div>

        <div className="mvv-item">
          <div className="mvv-icon">👁️</div>
          <h3 className="mvv-title">Vision</h3>
          <p className="mvv-text">
            To be recognized and respected as the leading Geo-Spatial
            Company in Ghana and beyond.
          </p>
        </div>
      </div>

      {/* VALUES TITLE */}
      <div className="values-header">
        <h2>Our Values</h2>
        <hr />
      </div>

      {/* VALUES ROW */}
      <div className="values-row">

        <div className="value-card">
          <div className="mvv-icon">⚖️</div>
          <h3 className="value-title">Integrity</h3>
          <p className="value-text">
            Respect for all persons, customs, cultures, and laws wherever we
            operate and behave ethically at all times.
          </p>
        </div>

        <div className="value-card">
          <div className="mvv-icon">🏅</div>
          <h3 className="value-title">Excellence</h3>
          <p className="value-text">
            We reward Excellence, Innovation, and Smart Solutions.
          </p>
        </div>

        <div className="value-card">
          <div className="mvv-icon">📊</div>
          <h3 className="value-title">Professionalism</h3>
          <p className="value-text">
            We deliver professionalism by challenging the status quo.
          </p>
        </div>

      </div>

    </section>
  );
}
