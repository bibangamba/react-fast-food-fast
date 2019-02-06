import actionTypes from "../actions/actionTypes";

const initialState = {
  loggedIn: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUPFAIL:
      return { ...state, error: action.payload };
    case actionTypes.SIGNUPSUCCESS:
      return { ...state, success: action.payload };
    default:
      return state;
  }
};
