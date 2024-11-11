
import React from 'react';
import BubbleProgress from './BubbleProgress';

const ProgressTracker = ({ expenses, budget, points }) => {
  const totalExpense = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const remainingBudget = budget - totalExpense;

  return (
    <div className="progress-tracker">
      <h2>Progress Tracker</h2>
      <BubbleProgress remainingBudget={remainingBudget} budget={budget} />
      <p>Total Expenses: ${totalExpense.toFixed(2)}</p>
      <p>Remaining Budget: ${remainingBudget.toFixed(2)}</p>
      <p>Points: {points}</p>
    </div>
  );
};

export default ProgressTracker;
