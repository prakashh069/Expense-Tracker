import React from 'react';

const Challenges = () => {
  const challenges = [
    { description: 'Spend 10% less on entertainment this week', rewardPoints: 20 },
    { description: 'Log every expense for the next 7 days', rewardPoints: 30 },
  ];

  return (
    <div className="challenges">
      <h2>Challenges</h2>
      <ul>
        {challenges.map((challenge, index) => (
          <li key={index}>{challenge.description} - {challenge.rewardPoints} points</li>
        ))}
      </ul>
    </div>
  );
};

export default Challenges;
