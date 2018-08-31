import { saveComment } from "../index";
import { SAVE_COMMENT } from "../types";

describe("saveComment action creator", () => {
  it("has a proper type", () => {
    const action = saveComment();

    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it("has a proper payload", () => {
    const action = saveComment("New Comment");

    expect(action.payload).toEqual("New Comment");
  });
});
