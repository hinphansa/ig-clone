import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Navbar from "./components/Navbar";
import NewsFeed from "./components/NewsFeed";


export default function App() {
  console.log('eiei', document.documentElement.clientWidth);
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Navbar />
          <NewsFeed />
          {/* <div style={{ height: 8000 }}></div> */}
        </Route>
      </Switch>
    </Router >
  );
}