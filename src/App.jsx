import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MDBContainer } from "mdbreact";
import "./App.css";
import NotFound from "./containers/404/404";
import Nav from "./containers/NavBar/NavBar";
import SignupContainer from "./containers/SignupContainer/SignupContainer";

const App = () => (
  <MDBContainer fluid>
    <div className="App">
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/" component={SignupContainer} exact />
            <Route path="/register" component={SignupContainer} exact />
            <Route path="/*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  </MDBContainer>
);

export default hot(module)(App);
