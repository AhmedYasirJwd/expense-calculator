// src/components/TransactionHandlers/DetectionForm.js
import React, { useState } from 'react';

const DetectionForm = ({ detectTransaction }) => {
  const [amount, setAmount] = useState('');
  const [source, setSource] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && source) {
      detectTransaction(parseFloat(amount), source); // Detect money with the amount and source
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
      <button type="submit"className='detuct-trans'>Detect Transaction</button>
    </form>
  );
};

export default DetectionForm;
