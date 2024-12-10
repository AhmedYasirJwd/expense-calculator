// AddMoney.js
import React from 'react';
import TransactionForm from '../components/Transaction Handlers/TransactionForm'; // Check the path
import TransactionTable from '../components/Transaction Handlers/TransactionTable';
import useTransactions from '../components/Transaction Handlers/useTransactions'; // Add this import
import { Link } from 'react-router-dom';


const AddMoney = () => {

  const { addedTransactions } = useTransactions();


  return (
    <div  className='container-form'>
      <div>
      <Link to="../" className='back'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14 19l-7-7 7-7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
Home</Link>

      <h1>Add Money</h1>
      <TransactionForm />
      </div>

      <TransactionTable transactions={addedTransactions} />

    </div>
  );
};

export default AddMoney;
