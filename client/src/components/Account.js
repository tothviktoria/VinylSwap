import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MyDetails from "./MyDetails";
import UserForm from "./UserForm";

export default class Account extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to={`/userForm`}> Form </Link>
          </li>
          <li>
            <Link to={`/myDetails`}> My details </Link>
          </li>
        </ul>

        {/* <Switch>

          <Route path={`${this.props.match.path}/userForm`}>
            <UserForm />
          </Route>

          <Route path={`${this.props.match.path}/myDetails`}>
            <MyDetails />
          </Route>
        </Switch> */}
      </div>
    );
  }
}
