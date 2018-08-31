import React from "react";
import { mount } from "enzyme";
import App from "../components/App";
import Root from "../root";
import moxios from "moxios";

beforeEach(() => {
  moxios.install();

  //simulating of real api request

  moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Comment 1" }, { name: "Comment 2" }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("fetches data from API and outputs list of comments", done => {
  const wrapper = mount(
    <Root>
      <App />
    </Root>
  );

  wrapper.find(".fetch-comments").simulate("click");

  moxios.wait(() => {
    wrapper.update();

    expect(wrapper.find("li").length).toEqual(2);

    done();

    wrapper.unmount();
  });
});
