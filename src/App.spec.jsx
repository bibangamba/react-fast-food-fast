import { shallow } from "enzyme";
import React from "react";
import { App } from "./App";

const props = {
  onChange: jest.fn(),
  onSubmit: jest.fn(),
  error: ""
};
describe("App test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App {...props} />);
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
