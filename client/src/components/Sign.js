import React, { Component } from "react";
import "./Sign.css";

export default class Sign extends Component {
  render() {
    return (
      <div class="body">
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
                      <label class="custom-control-label" for="customCheck1">
                        Remember password
                      </label>
                    </div>
                    <button
                      class="btn btn-lg btn-primary btn-block text-uppercase"
                      type="submit"
                    >
                      Sign in
                    </button>
                    <div class="my-4">
                      <button
                        class="btn btn-lg btn-google btn-block text-uppercase"
                        type="submit"
                      >
                        <i class="fab fa-google mr-2"></i> Sign in with Google
                      </button>
                      <button
                        class="btn btn-lg btn-facebook btn-block text-uppercase rounded"
                        type="submit"
                      >
                        <i class="fab fa-facebook-f mr-2"></i> Sign in with
                        Facebook
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
