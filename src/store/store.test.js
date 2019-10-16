import * as actions from './actions'
import transactionsReducer from './reducers/transactions'
import conversionReducer from './reducers/conversion'

describe('actions', () => {
   it('should create an action to add a transaction', () => {
      const name = 'Example 1';
      const amount = 4.20;
      const id = 0;
      const expectedAction = {
         type: 'ADD_TRANSACTION',
         id,
         name,
         amount
      }
      expect(actions.addTransaction(name, amount)).toEqual(expectedAction)
   });

   it('should create an action to delete a transaction', () => {
      const id = 0;
      const expectedAction = {
         type: 'DELETE_TRANSACTION',
         id,
      }
      expect(actions.deleteTransaction(id)).toEqual(expectedAction)
   });

   it('should create an action to set the conversion rate', () => {
      const value = 4.29;
      const expectedAction = {
         type: 'SET_CONVERSION',
         value
      }
      expect(actions.setConversion(value)).toEqual(expectedAction)
   });
})




describe('transactions reducer', () => {
   it('should handle ADD_TRANSACTION', () => {
         expect(
            transactionsReducer([], {
               type: 'ADD_TRANSACTION',
               name: 'Example 1',
               amount: 1.10,
               id: 0
            })
         ).toEqual([{
            name: 'Example 1',
            amount: 1.10,
            id: 0
         }])

         expect(
            transactionsReducer(
               [{
                  name: 'Example 1',
                  amount: 1.10,
                  id: 0
               }], {
                  type: 'ADD_TRANSACTION',
                  name: 'Example 2',
                  amount: 2.20,
                  id: 1
               }
            )
         ).toEqual([{
               name: 'Example 2',
               amount: 2.20,
               id: 1
            },
            {
               name: 'Example 1',
               amount: 1.10,
               id: 0
            }
         ])
      }),


      it('should handle DELETE_TRANSACTION', () => {
         expect(
            transactionsReducer(
               [{
                  name: 'Example 1',
                  amount: 1.10,
                  id: 0
               }], {
                  type: 'DELETE_TRANSACTION',
                  id: 0
               })
         ).toEqual([])

         expect(
            transactionsReducer(
               [{
                     name: 'Example 1',
                     amount: 1.10,
                     id: 0
                  },
                  {
                     name: 'Example 2',
                     amount: 2.20,
                     id: 1
                  }
               ], {
                  type: 'DELETE_TRANSACTION',
                  id: 1
               }
            )
         ).toEqual(
            [{
               name: 'Example 1',
               amount: 1.10,
               id: 0
            }])
      })
})




describe('conversion reducer', () => {
   it('should handle SET_CONVERSION', () => {
      expect(
         conversionReducer(null, {
            type: 'SET_CONVERSION',
            value: 4.21
         })
      ).toEqual(
         4.21
      )

      expect(
         conversionReducer(4.21, {
            type: 'SET_CONVERSION',
            value: 5.00
         })
      ).toEqual(5.00)
   })
})
