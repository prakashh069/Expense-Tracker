import React, { useState } from 'react';

function ExpenseList({ expenses }) {
  const [sortOption, setSortOption] = useState('Date');

  const sortedExpenses = [...expenses].sort((a, b) => {
    if (sortOption === 'Amount') {
      return b.amount - a.amount; 
    } else if (sortOption === 'Category') {
      return a.category.localeCompare(b.category); 
    } else {
      return new Date(b.date) - new Date(a.date); 
    }
  });

  return (
    <div>
      <h3>Expense List</h3>
      <div>
        <label>Sort by:</label>
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="Date">Date</option>
          <option value="Amount">Amount</option>
          <option value="Category">Category</option>
        </select>
      </div>
      <ul>
        {sortedExpenses.map((expense, index) => (
          <li key={index}>
            <div>Category: {expense.category}</div>
            <div>Amount: ${expense.amount.toFixed(2)}</div>
            <div>Date: {new Date(expense.date).toLocaleDateString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
