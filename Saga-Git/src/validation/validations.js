import { isEmpty } from "./isEmpty";

export const validateData = data => {
  let errors = {};

  if (data.number.length < 40) {
    errors.key = "The address is too short";
  }
  if (data.number.length > 40) {
    errors.key = "The address is too long";
  }
  if (isEmpty(data.number)) {
    errors.key = "No address has been inserted";
  }
  if (data.nickname.length > 30) {
    errors.name = "Your name is too long";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
