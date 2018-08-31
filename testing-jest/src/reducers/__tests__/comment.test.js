import commentReducer from "../comment";
import { SAVE_COMMENT } from "../../actions/types";

it("handles actions of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New Comment"
  };

  const state = commentReducer([], action);

  expect(state).toEqual(["New Comment"]);
});

it("handles actions of unknown type", () => {
  const state = commentReducer([], {});

  expect(state).toEqual([]);
});
