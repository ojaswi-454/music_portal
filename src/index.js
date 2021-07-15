import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
// import Login from "./components/loginpage";
import Signup from "./components/containers/Signup/index";
import Signin from "./components/containers/Signin/index";
import store from "./store";
import { Provider } from "react-redux";
function Appp() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact="true" path="/" component={Main} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </Provider>
  );
}
ReactDOM.render(
  <Appp />,

  document.getElementById("root")
);
