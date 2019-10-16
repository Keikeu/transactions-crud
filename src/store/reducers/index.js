import { combineReducers } from 'redux';
import transactions from './transactions';
import conversion from './conversion';

export default combineReducers({
  transactions,
  conversion
})
