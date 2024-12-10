// src/components/TransactionHandlers/TransactionForm.js
import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [amount, setAmount] = useState('');
  const [source, setSource] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && source) {
      addTransaction(parseFloat(amount), source); // Add transaction with the amount and source
      setAmount(''); // Reset the form
      setSource('');
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Amount: </label>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Source: </label>
        <input 
          type="text" 
          value={source} 
          onChange={(e) => setSource(e.target.value)} 
          required 
        />
      </div>
      <button type="submit" className='add-trans'>Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
