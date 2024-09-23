
import React from 'react';
import './StatsSection.css';

function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stat-item">
        <h3>5000+</h3>
        <p>Active Users</p>
      </div>
      <div className="stat-item">
        <h3>300+</h3>
        <p>Companies Trusting MutaEngine</p>
      </div>
      <div className="stat-item">
        <h3>$500M+</h3>
        <p>Transactions Secured</p>
      </div>
    </section>
  );
}

export default StatsSection;
