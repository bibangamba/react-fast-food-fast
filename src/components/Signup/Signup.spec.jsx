import { shallow } from "enzyme";
import React from "react";
import Signup from "./Signup";

const props = {
  onChange: jest.fn(),
  onSubmit: jest.fn(),
  error: ""
};
describe("Signup test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Signup {...props} />);
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
