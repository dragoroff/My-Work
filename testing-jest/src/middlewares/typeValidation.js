import { schema } from "./scheme";
import tv4 from "tv4";

export default ({ dispatch, getState }) => next => action => {
  next(action);

  if (!tv4.validate(getState(), schema)) {
    console.warn("You have an error in validation");
  }
};
