import React, { useContext } from "src/components/node_modules/react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "src/components/Transaction";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </div>
  );
};
