import { validateData } from "../validation/validations";
import { ADD_WALLET, ERRORS, CLEAR_ERRORS } from "./types";
import { jwt } from "../token/token";

export const registerAction = (data, token) => dispatch => {
  localStorage.setItem("jwtToken", token);

  if (validateData(data).isValid && token === jwt) {
    dispatch({
      type: ADD_WALLET,
      payload: { data, token }
    });
  } else {
    dispatch({
      type: ERRORS,
      payload: validateData(data).errors
    });
  }
};

export const clearErrorsAction = () => {
  return {
    type: CLEAR_ERRORS
  };
};
