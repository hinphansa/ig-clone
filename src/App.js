import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

// import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Navbar />
          <div style={{ height: '1000px' }}></div>
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
