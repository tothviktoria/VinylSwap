import React, { Component } from "react";
import "./Sign.css";

export default class Sign extends Component {
  render() {
    return (
      <div class="backg">
        <div class="row">
          <div class="col-9 mx-auto">
            <div class="card-body">
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
                  <label for="inputEmail"></label>
                </div>

                <div class="form-label-group">
                  <input
                    type="password"
                    id="inputPassword"
                    class="form-control"
                    placeholder="Password"
                    required
                  ></input>
                  <label for="inputPassword"></label>
                </div>

                <div>
                  <label></label>
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
                    <i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
