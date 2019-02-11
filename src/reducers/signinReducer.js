import actionTypes from "../actions/actionTypes";

const initialState = {
  loggedIn: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNINFAIL:
      return {
        ...state,
        error: action.payload.data,
        diff_in_state: action.payload.ts
      };
    case actionTypes.SIGNINSUCCESS:
      return { ...state, success: action.payload, loggedIn: true };
    default:
      return state;
  }
};
