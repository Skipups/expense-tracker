import React from "src/node_modules/react";
import { Header } from "src/components/Header";
import Balance from "src/components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import "src/App.css";
import { GlobalProvider } from "./context/GlobalState";

export default function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}
