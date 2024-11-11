
import React, { useState } from 'react';
import SetBudget from './components/SetBudget';
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';
import ProgressTracker from './components/ProgressTracker';
import Challenges from './components/Challenges';
import BadgeSystem from './components/BadgeSystem';
import './styles/App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);
  const [points, setPoints] = useState(0);

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
    updatePoints(expense.amount);
  };

  const updatePoints = (amount) => {
    const newPoints = points + amount; // Customize point calculation logic as needed
    setPoints(newPoints);
  };

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <SetBudget setBudget={setBudget} />
      <AddExpense onAddExpense={handleAddExpense} />
      <ProgressTracker expenses={expenses} budget={budget} points={points} />
      <Challenges />
      <BadgeSystem points={points} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;
