import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Collection from "./Collection";
import "./Vinyls.css";

export default class Vinyls extends Component {
  render() {
    return (
      <div>
        <Collection />
      </div>
    );
  }
}
