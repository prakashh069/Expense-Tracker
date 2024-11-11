
import React from 'react';

const BubbleProgress = ({ remainingBudget, budget }) => {
  const fillPercentage = Math.max((remainingBudget / budget) * 100, 0);

  return (
    <div className="bubble-progress">
      <div
        className="bubble"
        style={{
          background: `conic-gradient(
            #4caf50 ${fillPercentage * 3.6}deg,
            #d9d9d9 ${fillPercentage * 3.6}deg
          )`,
        }}
      >
        <div className="bubble-content">
          <p>{`$${remainingBudget.toFixed(2)}`}</p>
          <p>Remaining</p>
        </div>
      </div>
    </div>
  );
};

export default BubbleProgress;
