import React from 'react';
import '../styles/SessionDurationGauge.scss';

const SessionDurationGauge = ({ avgSessionDuration }) => {
  const percentage = (avgSessionDuration / 10) * 100; // Assuming a max reasonable session of 10 minutes
  const clampedPercentage = Math.min(100, Math.max(0, percentage));

  return (
    <div className="session-duration-gauge">
      <h3>Avg. Session Duration</h3>
      <div className="gauge-container">
        <div
          className="gauge-bar"
          style={{ width: `${clampedPercentage}%` }}
        >
          {avgSessionDuration}s
        </div>
      </div>
    </div>
  );
};

export default SessionDurationGauge;