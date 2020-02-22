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
        <section class="mainmenu">
          <div class="row">
            <div class="col">
              <div class="col-6 shadow-lg p-3 mb-5 rounded">
                <div class="d-flex justify-content-xl-end">
                  <blockquote class="blockquote text-right">
                    <p class="mb-0">
                      Reality is only a term, based on values and well worn
                      principles, whereas the dream goes on forever.
                    </p>
                    <footer class="blockquote-footer">
                      Ian Curtis <cite title="Source Title">Joy Division</cite>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div class="col-11 shadow-lg p-3 mb-5 rounded">
                <div class="d-flex justify-content-xl-end">
                  <img src="https://i.imgur.com/Z7sXZei.png"></img>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="background">
          <div class="row">
            <div class="col-6">
              <img
                src="https://i.imgur.com/gn77yWf.png"
                height="400px"
                alt="vinylicon"
              ></img>
            </div>
            <div class="col">
              <div class="col-3 shadow-lg p-3 mb-5 rounded">
                <div class="d-flex justify-content-center">
                  <Link class="text-decoration-none text-white" to="/home">
                    HOME
                  </Link>
                </div>
              </div>
              <div class="col-3 shadow-lg p-3 mb-5 rounded">
                <div class="d-flex justify-content-center">
                  <Link
                    class="text-decoration-none text-white"
                    data-toggle="modal"
                    data-target="#staticBackdrop"
                    to="/about"
                  >
                    OUR STORY
                  </Link>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <div class="col-3 shadow-lg p-3 mb-5 rounded">
                    <div href="#" class="d-flex justify-content-center">
                      <Link
                        class="text-decoration-none text-white"
                        to="/profile"
                      >
                        MY PROFILE
                      </Link>
                    </div>
                  </div>
                  <div class="col-3 shadow-lg p-3 mb-5 rounded">
                    <div href="#" class="d-flex justify-content-center">
                      <Link
                        class="text-decoration-none text-white"
                        to="/vinyls"
                      >
                        VINYLS
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="mainimage">
          <div class="row">
            <div class="col-sm-1"></div>
            <div class="d-flex justify-content-center">
              <Link to="/vinyls"></Link>
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
