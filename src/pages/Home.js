// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import TransactionTable from '../components/Transaction Handlers/TransactionTable';
import useTransactions from '../components/Transaction Handlers/useTransactions';
import './index.css'

const Home = () => {
  const { addedTransactions, detectedTransactions, totalAmount } = useTransactions();

  return (
    <div className='container'>
<div>
      <h2>Total Balance: <br></br>{totalAmount.toFixed(2)}</h2>

      <div>
        <button className='add'>
          <Link to="/AddMoney" >Add Money</Link>
        </button>
        <button  className='deduct'>
          <Link to="/DetectMoney">Detect Money</Link>
        </button>
      </div>
      </div>
      <div>

      <h2>Recent Transactions</h2>
      <TransactionTable transactions={[...addedTransactions, ...detectedTransactions]} />
    </div>
    </div>

  );
};

export default Home;
