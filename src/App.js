import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Navbar from "./components/Navbar";
import NewsFeed from "./components/NewsFeed";


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Navbar />
          <NewsFeed />
        </Route>
      </Switch>
    </Router >
  );
}