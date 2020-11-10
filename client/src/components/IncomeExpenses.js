import React, { useContext } from "src/components/node_modules/react";
import { GlobalContext } from "../context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const totalIncome = amounts
    .filter((item) => item > 0)
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0)
    .toFixed(2);
  const totalExpenses = amounts
    .filter((item) => item < 0)
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0)
    .toFixed(2);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${totalIncome}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className="money minus">-${totalExpenses}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
