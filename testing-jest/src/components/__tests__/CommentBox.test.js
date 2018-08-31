import React from "react";
import { mount } from "enzyme";
import CommentBox from "../CommentBox";
import Root from '../../root';

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it("has a textarea and a two buttons", () => {
  expect(wrapper.find("textarea").length).toEqual(1);
  expect(wrapper.find("button").length).toEqual(2);
});

describe("text area", () => {
  beforeEach(() => {
    wrapper.find("textarea").simulate("change", {
      target: { value: "new comment" }
    });

    wrapper.update();
  });

  it("has a textarea and that user can type in", () => {
    expect(wrapper.find("textarea").prop("value")).toEqual("new comment");
  });

  it("when form was submitted the textarea is empty", () => {
    wrapper.find("form").simulate("submit");

    wrapper.update();

    expect(wrapper.find("textarea").prop("value")).toEqual("");
  });
});
