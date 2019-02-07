import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import actionTypes from "../actionTypes";
import { signupSuccess, signUpAction, signupFail } from "../signupAction";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const userToRegister = {
  name: "andrew twijukye",
  email: "andrew@g.com",
  password: "yurizahard",
  confirm_password: "yurizahard"
};
describe("unit tests for all 3 actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it("should mock fetch api call to signup endpoint", () => {
    const store = mockStore();
    fetchMock.postOnce(
      "https://fast-food-fast-bibangamba.herokuapp.com/api/v2/auth/signup",
      {
        headers: {
          "content-type": "application/json"
        },
        body: userToRegister
      }
    );
    store.dispatch(signUpAction(userToRegister));
    expect(store.getActions()).toEqual([]);
  });

  it("should dispatch signupSuccess action", () => {
    const response = "mocked successful register";
    const expectedActions = [
      {
        type: actionTypes.SIGNUPSUCCESS,
        payload: response
      }
    ];
    const store = mockStore();
    store.dispatch(signupSuccess(response));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should dispatch signupFail action", () => {
    const data = "mocked fail response";
    const ts = "123253454353";

    const failAction = [
      {
        type: actionTypes.SIGNUPFAIL,
        payload: { data, ts }
      }
    ];
    const store = mockStore();
    store.dispatch(signupFail(data, ts));
    expect(store.getActions()).toEqual(failAction);
  });
});
