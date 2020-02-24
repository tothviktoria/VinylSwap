import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
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
                  <div class="col">
                    <div class="col-12 shadow-lg p-3 mb-5 rounded">
                      <div class="d-flex justify-content-xl-end">
                        <button class="btn btn-primary" type="submit">
                          <Link
                            class="text-decoration-none text-white"
                            to="/sign"
                          >
                            SIGN IN
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div class="col-11 shadow-lg p-3 mb-5 rounded">
                <div class="d-flex justify-content-xl-end">
                  <img src="https://i.imgur.com/Z7sXZei.png" alt="backg"></img>
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
                  <Link class="text-decoration-none text-white" to="/about">
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
      </div>
    );
  }
}
