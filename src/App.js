import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import LoginForm from "./components/LoginForm";



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <LoginForm />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
