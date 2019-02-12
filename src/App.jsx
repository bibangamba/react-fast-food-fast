import React from "react";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MDBContainer } from "mdbreact";
import { ToastContainer } from "react-toastify";
import store from "./store";
import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";
import NotFound from "./containers/404/404";
import Nav from "./containers/NavBar/NavBar";
import SignupView from "./containers/SignupContainer/SignupContainer";
import SigninView from "./containers/SigninContainer/SigninContainer";
import OrdersView from "./containers/OrdersContainer/OrdersContainer";

export const getJwtToken = () => sessionStorage.getItem("jwt_token");
export const isAuthenticated = () => !!getJwtToken();

export const App = () => (
  <MDBContainer>
    <div className="App">
      <Router>
        <Provider store={store}>
          <ToastContainer position="top-center" autoClose={false} />
          <Nav />
          <Switch>
            <Route path="/" component={SignupView} exact />
            <Route path="/register" component={SignupView} exact />
            <Route
              path="/orders"
              render={props => {
                if (!isAuthenticated()) {
                  window.setInterval(() => {
                    window.location.href = "/signin";
                  }, 2000);
                  return (
                    <SigninView
                      error="Cannot access orders without logging in"
                      {...props}
                    />
                  );
                }
                return <OrdersView {...props} />;
              }}
              exact
            />
            <Route
              path="/signin"
              render={props => <SigninView {...props} />}
              exact
            />
            <Route
              path="/login"
              render={props => <SigninView {...props} />}
              exact
            />
            <Route path="/*" component={NotFound} />
          </Switch>
        </Provider>
      </Router>
    </div>
  </MDBContainer>
);

export default hot(module)(App);
