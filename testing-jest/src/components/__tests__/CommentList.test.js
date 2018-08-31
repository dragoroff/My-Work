import React from 'react';
import { mount } from "enzyme";
import CommentList from "../CommentList";
import Root from "../../root";

let wrapper;

beforeEach(() => {
  const initialState = { comments: ["New Comment 1", "New Comment 2"] };

  wrapper = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("checks if <li> is one for each comment", () => {
  expect(wrapper.find("li").length).toEqual(2);
});

it("shows the text for each comment", () => {
    expect(wrapper.render().text()).toContain("New Comment 1");
    expect(wrapper.render().text()).toContain("New Comment 2");
})