import React, { useState } from 'react';

const SetBudget = ({ setBudget }) => {
  const [inputBudget, setInputBudget] = useState('');

  const handleSetBudget = () => {
    setBudget(Number(inputBudget));
    setInputBudget('');
  };

  return (
    <div className="set-budget">
      <h2>Set Monthly Budget</h2>
      <input
        type="number"
        value={inputBudget}
        onChange={(e) => setInputBudget(e.target.value)}
        placeholder="Enter budget"
      />
      <button onClick={handleSetBudget}>Set Budget</button>
    </div>
  );
};

export default SetBudget;
