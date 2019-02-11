import signinReducer from "../signinReducer";
import actionTypes from "../../actions/actionTypes";

const initialState = {
  loggedIn: false
};

const mockFailedData = {
  error: "mock error message",
  ts: "mock timestamp to update state"
};

const data = {
  success: "mock success message"
};

describe("Unit tests for the signinReducer", () => {
  it("it should return the error and ts data if the received action is a FAIL", () => {
    const response = signinReducer(initialState, {
      type: actionTypes.SIGNINFAIL,
      payload: mockFailedData
    });
    expect(response.diff_in_state).toEqual("mock timestamp to update state");
  });
  it("it should return success data if the received action is SUCCESS", () => {
    const response = signinReducer(initialState, {
      type: actionTypes.SIGNINSUCCESS,
      payload: data
    });
    expect(response.success).toEqual(data);
  });
});
