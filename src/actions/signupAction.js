import { toast } from "react-toastify";

import actionTypes from "./actionTypes";

export const signupFail = data => ({
  type: actionTypes.SIGNUPFAIL,
  payload: data
});

export const signupSuccess = response => ({
  type: actionTypes.SIGNUPSUCCESS,
  payload: response
});

export const signUpAction = data => dispatch => {
  fetch("https://fast-food-fast-bibangamba.herokuapp.com/api/v2/auth/signup", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    CORS: "no-cors",
    body: JSON.stringify({ user: data })
  })
    .then(res => res.json())
    .then(response => {
      if (response.jwt) {
        dispatch(signupSuccess(response.user.message));
        toast.success(response.user.message);
      } else if (response.error) {
        dispatch(signupFail(response.error));
      }
    });
};

export default signUpAction;
