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
import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <div class="row">
          <div class="col-sm p-5 bg-warning">
            <div class="d-flex justify-content-center text-white text-left">
              VinylSwap
            </div>
            <div>
              <div class="col-sm p-4 bg-dark">
                <div class="d-flex justify-content-center text-white text-left">
                  <Link to="/home">HOME</Link>
                </div>
              </div>
            </div>

            <div class="col-sm p-4 bg-light">
              <div class="d-flex justify-content-center text-muted text-left">
                <Link to="/about">OUR STORY</Link>
              </div>
            </div>

            <div class="col-sm p-4 bg-dark">
              <div class="d-flex justify-content-center text-white text-left">
                <Link to="/profile">My profile</Link>
              </div>
            </div>
          </div>
        </div>

        <section class="mainimage">
          <div class="container">
            <div class="row">
              <div class="col-sm-1 pg-5"></div>
              <div class="d-flex justify-content-right text-dark text-right">
                <Link to="/vinyls">Vinyls</Link>
              </div>
            </div>
          </div>
        </section>

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
