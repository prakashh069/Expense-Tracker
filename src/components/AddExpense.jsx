import React, { useState } from 'react';

const AddExpense = ({ onAddExpense }) => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleAddExpense = () => {
    onAddExpense({ category, amount: Number(amount), date });
    setCategory('');
    setAmount('');
    setDate('');
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="add-expense">
      <h2>Add Expense</h2>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        max={today}
      />
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
};

export default AddExpense;
