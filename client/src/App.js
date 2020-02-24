import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Vinyls from "./components/Vinyls";
import Profile from "./components/Profile";
import About from "./components/About";
import Home from "./components/Home";
import Sign from "./components/Sign";
import Collection from "./components/Collection";

export default function App() {
  return (
    <Router>
      <Link to="/home">HOME |</Link>
      <Link to="/sign">SIGN IN |</Link>
      <Link to="/about">OUR STORY|</Link>
      <Link to="/vinyls">VINYLS</Link>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/vinyls" component={Vinyls} />
        <Route path="/collection">
          <Collection />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/profile" component={Profile} />
        <Route path="/sign">
          <Sign />
        </Route>
      </Switch>
    </Router>
  );
}
