// src/components/TransactionHandlers/useTransactions.js
import { useState, useEffect } from 'react';

const useTransactions = () => {
  const [addedTransactions, setAddedTransactions] = useState([]);
  const [detectedTransactions, setDetectedTransactions] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const savedAddedTransactions = JSON.parse(localStorage.getItem('addedTransactions')) || [];
    const savedDetectedTransactions = JSON.parse(localStorage.getItem('detectedTransactions')) || [];
    const savedTotalAmount = parseFloat(localStorage.getItem('totalAmount')) || 0;

    setAddedTransactions(savedAddedTransactions);
    setDetectedTransactions(savedDetectedTransactions);
    setTotalAmount(savedTotalAmount);
  }, []);

  const addTransaction = (amount, source) => {
    const newTransaction = { amount, source, date: new Date() };
    const updatedTransactions = [...addedTransactions, newTransaction];
    setAddedTransactions(updatedTransactions);
    setTotalAmount(prevAmount => prevAmount + amount);

    localStorage.setItem('addedTransactions', JSON.stringify(updatedTransactions));
    localStorage.setItem('totalAmount', totalAmount + amount);
  };

  const detectTransaction = (amount, source) => {
    const newTransaction = { amount, source, date: new Date() };
    const updatedTransactions = [...detectedTransactions, newTransaction];
    setDetectedTransactions(updatedTransactions);
    setTotalAmount(prevAmount => prevAmount - amount);

    localStorage.setItem('detectedTransactions', JSON.stringify(updatedTransactions));
    localStorage.setItem('totalAmount', totalAmount - amount);
  };

  return { addedTransactions, detectedTransactions, totalAmount, addTransaction, detectTransaction };
};

export default useTransactions;
