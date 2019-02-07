import actionTypes from "./actionTypes";

export const signupFail = (data, ts) => ({
  type: actionTypes.SIGNUPFAIL,
  payload: { data, ts }
});

export const signupSuccess = data => ({
  type: actionTypes.SIGNUPSUCCESS,
  payload: data
});

export const signUpAction = data => dispatch =>
  fetch("https://fast-food-fast-bibangamba.herokuapp.com/api/v2/auth/signup", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    CORS: "no-cors",
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(response => {
      if (response.success) {
        dispatch(signupSuccess(response.success));
      } else if (response.error) {
        dispatch(signupFail(response.error, new Date().getTime()));
      }
    })
    .catch(error => dispatch(signupFail(error)));

export default signUpAction;
