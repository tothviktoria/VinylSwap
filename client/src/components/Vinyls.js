import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Collection from "./Collection";

export default class Vinyls extends Component {
  render() {
    return (
      <div>
        <div>
          <ul>
            <li>
              <Link to={`${this.props.match.url}/collection`}> Collection</Link>
            </li>
          </ul>
          <Switch>
            <Route path={`${this.props.match.path}/collection`}>
              <Collection />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
