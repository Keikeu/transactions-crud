const transactions = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          amount: action.amount
        }
      ]
    case 'DELETE_TRANSACTION':
      return state.filter((transaction) => {
         return transaction.id !== action.id
      })
    default:
      return state
  }
}

export default transactions;
