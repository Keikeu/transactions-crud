let nextTransactionId = 0

export const addTransaction = (name, amount) => ({
  type: 'ADD_TRANSACTION',
  id: nextTransactionId++,
  name,
  amount
})

export const deleteTransaction = id => ({
  type: 'DELETE_TRANSACTION',
  id
})

export const setConversion = value => ({
  type: 'SET_CONVERSION',
  value
})
