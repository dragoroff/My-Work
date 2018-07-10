import { combineReducers } from "redux";
import walletReducer from "./walletReducer";
import errorReducer from "./errorsReducer";

export default combineReducers({
  wallet: walletReducer,
  errors: errorReducer
});
