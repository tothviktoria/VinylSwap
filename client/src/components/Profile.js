import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MyVinyls from "./MyVinyls";
import Account from "./Account";
import Inbox from "./Inbox";
import "./Profile.css";

export default class Profile extends Component {
  render() {
    return (
      <Router>
        <div>
          <section class="thirdpart">
            <div class="container">
              <div class="row">
                <div class="col-sm-12 p-5"></div>
                <div>
                  <div class="d-flex justify-content-center">
                    <div class="col-sm-12 px-3 py-2"></div>
                    <button
                      type="button"
                      class="btn btn-white shadow-lg px-5 py-2 bg-white rounded btn-space"
                    >
                      <Link
                        class="text-decoration-none text-muted"
                        to={`${this.props.match.url}/myVinyls`}
                      >
                        My box
                      </Link>
                    </button>
                    <button
                      type="button"
                      class="btn btn-white shadow-lg px-5 py-2 bg-white rounded btn-space"
                    >
                      <Link
                        class="text-decoration-none text-muted"
                        to={`${this.props.match.url}/account`}
                      >
                        {" "}
                        My account
                      </Link>
                    </button>
                    <button
                      type="button"
                      class="btn btn-white shadow-lg px-5 py-2 bg-white rounded btn-space"
                    >
                      <Link
                        class="text-decoration-none text-muted"
                        to={`${this.props.match.url}/inbox`}
                      >
                        {" "}
                        Inbox
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Switch>
            <Route path={`${this.props.match.path}/myVinyls`}>
              <MyVinyls />
            </Route>
            <Route path={`${this.props.match.path}/account`}>
              <Account />
            </Route>
            <Route path={`${this.props.match.path}/inbox`}>
              <Inbox />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
