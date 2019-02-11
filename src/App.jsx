import React, { Component } from "react";
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

export class App extends Component {
  state = { loggedIn: false };

  changeLoginState = newState => {
    this.setState({ loggedIn: newState });
  };

  render() {
    const { loggedIn } = this.state;
    return (
      <MDBContainer>
        <div className="App">
          <Router>
            <Provider store={store}>
              <ToastContainer position="top-center" autoClose={false} />
              <Nav loginState={loggedIn} />
              <Switch>
                <Route path="/" component={SignupView} exact />
                <Route path="/register" component={SignupView} exact />
                {/* <Route path="/signin" component={SigninView} exact /> */}
                <Route
                  path="/signin"
                  render={props => (
                    <SigninView
                      changeLoginState={this.changeLoginState}
                      {...props}
                    />
                  )}
                  exact
                />
                <Route
                  path="/login"
                  render={props => (
                    <SigninView
                      changeLoginState={this.changeLoginState}
                      {...props}
                    />
                  )}
                  exact
                />
                <Route path="/*" component={NotFound} />
              </Switch>
            </Provider>
          </Router>
        </div>
      </MDBContainer>
    );
  }
}

export default hot(module)(App);
