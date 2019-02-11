import { shallow } from "enzyme";
import React from "react";
import AppView from "./App";

const props = {
  onChange: jest.fn(),
  onSubmit: jest.fn(),
  error: ""
};
describe("App test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AppView {...props} />);
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("test handle changeLoginState function call", () => {
    wrapper.instance().changeLoginState(true);
    expect(wrapper.state("loggedIn")).toEqual(true);
  });
});
