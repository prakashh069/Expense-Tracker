import React from 'react';

const Leaderboard = ({ points }) => {
  const leaderboard = [
    { userId: 'User1', points: 300 },
    { userId: 'User2', points: 250 },
    { userId: 'You', points },
  ];

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <ul>
        {leaderboard.sort((a, b) => b.points - a.points).map((user, index) => (
          <li key={index}>{user.userId}: {user.points} points</li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
