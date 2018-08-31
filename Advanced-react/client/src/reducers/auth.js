import { AUTH_USER, AUTH_ERROR } from "../actions/type";
const initialState = {
  authentication: "",
  errorMessage: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authentication: action.payload };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
