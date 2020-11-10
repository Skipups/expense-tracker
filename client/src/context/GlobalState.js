import React, { createContext, useReducer } from "src/context/node_modules/react";
import AppReducer from "src/context/AppReducer";

//Initial state
const initialState = {
  transactions: [],
};

//Create context
export const GlobalContext = createContext(initialState);

//Provider component
//dispatch function calls reducer with current state and an action
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions that make calls to reducer through dispatch
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE-_TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(newTransaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: newTransaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
