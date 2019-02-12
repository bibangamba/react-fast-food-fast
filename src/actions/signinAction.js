import actionTypes from "./actionTypes";

export const signinFail = (data, ts) => ({
  type: actionTypes.SIGNINFAIL,
  payload: { data, ts }
});

export const signinSuccess = data => ({
  type: actionTypes.SIGNINSUCCESS,
  payload: data
});

export const signinAction = data => dispatch =>
  fetch("https://fast-food-fast-bibangamba.herokuapp.com/api/v2/auth/login", {
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
        dispatch(signinSuccess(response.success));
        sessionStorage.setItem("jwt_token", response.jwt_token);
      } else if (response.error) {
        dispatch(signinFail(response.error, new Date().getTime()));
      }
    })
    .catch(error => dispatch(signinFail(error)));

export default signinAction;
