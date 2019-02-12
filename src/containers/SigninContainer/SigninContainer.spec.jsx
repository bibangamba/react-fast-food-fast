import React from "react";
import { shallow } from "enzyme";
import { SigninContainer, mapStateToProps } from "./SigninContainer";

const signinAction = jest.fn();
const changeLoginState = jest.fn();
const props = { signinAction, history: { push: jest.fn() }, changeLoginState, error: "mock error message" };
const initialState = {
  email: "",
  password: "",
  name: "",
  phone: "",
  confirm_password: "",
  signinFailed: undefined,
  signinSuccess: undefined,
  signinReducer: {
    success: "mock success value",
    error: "mock error value"
  },
  signinButtonText: "Signin",
  signinButtonDisabled: false
};

let wrapper;

describe("test signup view", () => {
  beforeEach(() => {
    wrapper = shallow(<SigninContainer {...props} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("test handle onsubmit event", () => {
    wrapper.instance().onSubmit({ preventDefault() { } });
    expect(wrapper.state("signinButtonText")).toEqual("Signing in...");
  });

  it("should handle onchange function", () => {
    wrapper
      .instance()
      .onChange({ target: { name: "email", value: "andrew@g.com" } });
    expect(wrapper.state("email")).toEqual("andrew@g.com");
  });

  it("should receive new fail props", () => {
    wrapper.setProps({
      signinFailed: "mock fail"
    });
    expect(wrapper.state("signinFailed")).toEqual("mock fail");
  });

  it("should receive new success props", () => {
    wrapper.setProps({
      signinSuccess: "mock success",
      signinFailed: undefined
    });
    expect(wrapper.state("signinSuccess")).toEqual(undefined);
  });
  it("should receive new success props", () => {
    wrapper.setProps({
      signinSuccess: undefined,
      signupFail: undefined
    });
    expect(wrapper.state("signinSuccess")).toEqual(undefined);
  });
  it("should map state to props", () => {
    expect(mapStateToProps(initialState).signinSuccess).toEqual(
      "mock success value"
    );
  });
});
