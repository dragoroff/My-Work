import { ADD_WALLET } from "../actions/types";
import { isEmpty } from "../validation/isEmpty";

const initialState = {
  wallet: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_WALLET:
      return {
        ...state,
        auth: !isEmpty(action.payload.token),
        wallet: [action.payload.data, ...state.wallet]
      };
    default:
      return state;
  }
}
