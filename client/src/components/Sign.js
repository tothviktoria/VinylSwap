import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Sign.css";

export default class Sign extends Component {
  render() {
    return (
      <Router>
        <div
          class="modal fade"
          id="staticBackdrop"
          data-backdrop="static"
          tabindex="-1"
          role="dialog"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  SIGN IN FORM
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div class="modal-body">
                <div class="container">
                  <div class="row">
                    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                      <div class="card card-signin my-5">
                        <div class="card-body">
                          <h5 class="card-title text-center">Sign In</h5>
                          <form class="form-signin">
                            <div class="form-label-group">
                              <input
                                type="email"
                                id="inputEmail"
                                class="form-control"
                                placeholder="Email address"
                                required
                                autofocus
                              ></input>
                              <label for="inputEmail">Email address</label>
                            </div>

                            <div class="form-label-group">
                              <input
                                type="password"
                                id="inputPassword"
                                class="form-control"
                                placeholder="Password"
                                required
                              ></input>
                              <label for="inputPassword">Password</label>
                            </div>

                            <div class="custom-control custom-checkbox mb-3">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="customCheck1"
                              ></input>
                              <label
                                class="custom-control-label"
                                for="customCheck1"
                              >
                                Remember password
                              </label>
                            </div>
                            <button
                              class="btn btn-lg btn-primary btn-block text-uppercase"
                              type="submit"
                            >
                              Sign in
                            </button>
                            <hr class="my-4">
                              <button
                                class="btn btn-lg btn-google btn-block text-uppercase"
                                type="submit"
                              >
                                <i class="fab fa-google mr-2"></i> Sign in with
                                Google
                              </button>
                              <button
                                class="btn btn-lg btn-facebook btn-block text-uppercase"
                                type="submit"
                              >
                                <i class="fab fa-facebook-f mr-2"></i> Sign in
                                with Facebook
                              </button>
                            </hr>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Switch>
            <Route path="/sign">
              <Sign />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
