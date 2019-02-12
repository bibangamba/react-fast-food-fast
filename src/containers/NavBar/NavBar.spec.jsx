import { shallow } from "enzyme";
import React from "react";
import NavBar from "./NavBar";

const initialState = {
  collapse: false,
  isWideEnough: false
};

describe("NavBar test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavBar />);
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should invoke the onClick function", () => {
    wrapper.instance().onClick();
    expect(wrapper.instance().state.collapse).toEqual(!initialState.collapse);
  });

  it("should invoke the logOut function", () => {
    wrapper.instance().logOut();
    expect(window.sessionStorage.getItem('jwt_token')).toEqual(null);
  });
});
