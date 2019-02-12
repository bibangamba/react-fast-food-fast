import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import actionTypes from "../actionTypes";
import { signinSuccess, signinAction, signinFail } from "../signinAction";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const userToSignin = {
  email: "andrew@g.com",
  password: "yurizahard"
};
describe("unit tests for all 3 actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it("should mock fetch api call to signin endpoint", () => {
    const store = mockStore();
    fetchMock.postOnce(
      "https://fast-food-fast-bibangamba.herokuapp.com/api/v2/auth/login",
      {
        headers: {
          "content-type": "application/json"
        },
        body: userToSignin
      }
    );
    store.dispatch(signinAction(userToSignin));
    expect(store.getActions()).toEqual([]);
  });

  it("should dispatch signinSuccess action", () => {
    const response = "mocked successful register";
    const expectedActions = [
      {
        type: actionTypes.SIGNINSUCCESS,
        payload: response
      }
    ];
    const store = mockStore();
    store.dispatch(signinSuccess(response));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should dispatch signinFail action", () => {
    const data = { error: "Email/Password authentication failed" };
    const ts = "123253454353";

    const failAction = [
      {
        type: actionTypes.SIGNINFAIL,
        payload: { data, ts }
      }
    ];
    const store = mockStore();
    store.dispatch(signinFail(data, ts));
    expect(store.getActions()).toEqual(failAction);
  });
});
