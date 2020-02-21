import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MyVinyls from "./MyVinyls";
import Account from "./Account";
import Inbox from "./Inbox";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <ul>
          <button type="button" class="btn btn-dark">
            <Link to={`${this.props.match.url}/myVinyls`}>My box</Link>
          </button>
          <button type="button" class="btn btn-dark">
            <Link to={`${this.props.match.url}/account`}> My account</Link>
          </button>
          <button type="button" class="btn btn-dark">
            <Link to={`${this.props.match.url}/inbox`}> Inbox</Link>
          </button>
        </ul>
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
    );
  }
}
