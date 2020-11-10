const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE-_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
};

export default AppReducer;

//how we specify certain state changes in response to actions to our store or context
