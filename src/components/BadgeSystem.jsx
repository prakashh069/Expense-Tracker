import React from 'react';

const BadgeSystem = ({ points }) => {
  const badges = [
    { name: 'Budget Beginner', pointsRequired: 50 },
    { name: 'Finance Guru', pointsRequired: 200 },
  ];

  const earnedBadges = badges.filter(badge => points >= badge.pointsRequired);

  return (
    <div className="badge-system">
      <h2>Badges</h2>
      <ul>
        {earnedBadges.map((badge, index) => (
          <li key={index}>{badge.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BadgeSystem;
