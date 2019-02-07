import { shallow } from "enzyme";
import React from "react";
import SignupContainer from "./SignupContainer";

describe("SignupContainer test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SignupContainer />);
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
