import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import RouterComponent from "./Router";
import "./App.css";
import NotFound from "./containers/404/404";
import HomeComponent from "./containers/Home/Home";

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route path="/" component={HomeComponent} exact />
        <Route path="/*" component={NotFound} />
      </Switch>
    </Router>
  </div>
);

export default hot(module)(App);
