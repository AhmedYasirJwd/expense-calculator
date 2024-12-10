import React from 'react';
import DetectionForm from '../components/Transaction Handlers/DetectionForm'; // Check the path
import TransactionTable from '../components/Transaction Handlers/TransactionTable';
import useTransactions from '../components/Transaction Handlers/useTransactions'; // Add this import

const RemoveMoney = () => {
  // Use the custom hook to get the detected transactions
  const { detectedTransactions } = useTransactions();

  return (
    <div className='container-form'>
      <div>
        <h1>helo</h1>
      <h1>Remove Money</h1>
      <DetectionForm />
      <h2>Detected Transactions</h2>
      </div>
      {/* Pass detectedTransactions to the TransactionTable */}
      <TransactionTable transactions={detectedTransactions} />
    </div>
  );
};

export default RemoveMoney;
