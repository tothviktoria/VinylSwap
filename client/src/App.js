// import React from "react";
// import "./App.css";

// function App() {
//   return <div className="App">---Vinyl Swap--- </div>;
// }

// export default App;
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
      <div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">Our story</Link>
          </li>
          <li>
            <Link to="/vinyls">Vinyls</Link>
          </li>
          <li>
            <Link to="/profile">My profile</Link>
          </li>
        </ul>

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
      </div>
    </Router>
  );
}
