import { shallow } from "enzyme";
import React from "react";
import Signin from "./Signin";

const props = {
  onChange: jest.fn(),
  onSubmit: jest.fn(),
  error: ""
};
describe("Signin test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Signin {...props} />);
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
