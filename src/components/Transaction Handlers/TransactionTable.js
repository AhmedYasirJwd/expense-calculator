import React from 'react';

const TransactionTable = ({ transactions }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Amount</th>
          <th>Source</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.Amount}</td>
            <td>{transaction.Source}</td>
            <td>{transaction.Date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
