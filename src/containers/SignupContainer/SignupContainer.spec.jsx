import React from "react";
import { shallow } from "enzyme";
import { SignupContainer, mapStateToProps } from "./SignupContainer";

const signUpAction = jest.fn();
const props = { signUpAction, history: { push: jest.fn() } };
const initialState = {
  email: "",
  password: "",
  name: "",
  phone: "",
  confirm_password: "",
  signupFailed: undefined,
  signupSuccess: undefined,
  signupReducer: {
    success: "mock success value",
    error: "mock error value"
  },
  registerButtonText: "Register",
  registerButtonDisabled: false
};

let wrapper;

describe("test signup view", () => {
  beforeEach(() => {
    wrapper = shallow(<SignupContainer {...props} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("test handle onsubmit event", () => {
    wrapper.instance().onSubmit({ preventDefault() {} });
    expect(wrapper.state("registerButtonText")).toEqual("Saving...");
  });

  it("should handle onchange function", () => {
    wrapper
      .instance()
      .onChange({ target: { name: "email", value: "andrew@g.com" } });
    expect(wrapper.state("email")).toEqual("andrew@g.com");
  });
  it("should receive new fail props", () => {
    wrapper.setProps({
      signupFailed: "mock fail"
    });
    expect(wrapper.state("signupFailed")).toEqual("mock fail");
  });

  it("should receive new success props", () => {
    wrapper.setProps({
      signupSuccess: "mock success",
      signupFailed: undefined
    });
    expect(wrapper.state("signupSuccess")).toEqual(undefined);
  });
  it("should receive new success props", () => {
    wrapper.setProps({
      signupSuccess: undefined,
      signupFail: undefined
    });
    expect(wrapper.state("signupSuccess")).toEqual(undefined);
  });
  it("should map state to props", () => {
    expect(mapStateToProps(initialState).signupSuccess).toEqual(
      "mock success value"
    );
  });
});
