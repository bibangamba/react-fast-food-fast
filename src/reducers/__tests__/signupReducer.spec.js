import signupReducer from "../signupReducer";
import actionTypes from "../../actions/actionTypes";

const initialState = {
  loggedIn: false
};

const mockFailedData = {
  error: "mock error message",
  ts: "mock success message"
};

const data = {
  success: "mock success message"
};

describe("Unit tests for the signupReducer", () => {
  it("it should return the error and ts data if the received action is a FAIL", () => {
    const response = signupReducer(initialState, {
      type: actionTypes.SIGNUPFAIL,
      payload: mockFailedData
    });
    expect(response.diff_in_state).toEqual("mock success message");
  });
  it("it should return success data if the received action is SUCCESS", () => {
    const response = signupReducer(initialState, {
      type: actionTypes.SIGNUPSUCCESS,
      payload: data
    });
    expect(response.success).toEqual(data);
  });
});
