import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sign from "./Sign";
export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to VinylSwap!</h1>
        <h2> Still basic, but quite fantastic! </h2>
        <div>
          <Sign />
        </div>
      </div>
    );
  }
}
