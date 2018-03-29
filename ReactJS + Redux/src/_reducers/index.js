import { combineReducers } from 'redux';

import storeArrReducer from './storeArr.reducer';
import storeReducer from './store.reducer';
import products from './products.reducer';
import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { editReducer } from './edit.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  storeArrReducer, 
  storeReducer,
  products,
  editReducer
});

export default rootReducer;