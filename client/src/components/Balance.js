import React, { useContext } from "src/components/node_modules/react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
  const { transactions } = useContext(GlobalContext);
  const total = transactions
    .map((transaction) => transaction.amount)
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0)
    .toFixed(2);

  return (
    <div>
      <h4>Your balance</h4>
      <h1 id="balance">${total}</h1>
    </div>
  );
}

export default Balance;
