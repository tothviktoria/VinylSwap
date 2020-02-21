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
          <div class="col-sm-12 px-5 py-2 p bg-warning">
            <div class="d-flex justify-content-right text-white"></div>
            <div>
              <div class="col-sm-2 px-3 py-2 shadow-lg p-3 mb-5 bg-white rounded">
                <div class="d-flex justify-content-center">
                  <Link class="text-decoration-none text-warning" to="/home">
                    HOME
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-sm-2 px-3 py-2 shadow-lg p-3 mb-5 bg-white rounded">
              <div class="d-flex justify-content-center">
                <Link class="text-decoration-none text-warning" to="/about">
                  OUR STORY
                </Link>
              </div>
            </div>

            <div class="col-sm-2 px-3 py-2  shadow-lg p-3 mb-5 bg-white rounded">
              <div href="#" class="d-flex justify-content-center">
                <Link class="text-decoration-none text-warning" to="/profile">
                  MY PROFILE
                </Link>
              </div>
            </div>
          </div>
        </div>

        <section class="mainimage">
          <div class="row">
            <div class="col-sm-1"></div>
            <div class="d-flex justify-content-center">
              <Link
                class="btn btn-white shadow-lg px-3 py-2 bg-white rounded text-decoration-none text-warning"
                to="/vinyls"
              >
                VINYLS
              </Link>
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
