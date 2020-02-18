import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MyDetails from "./MyDetails";
import UserForm from "./UserForm";

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myDetails: true
    };
  }
  changeView(isMyDetails) {
    this.setState({ myDetails: isMyDetails });
  }
  render() {
    return (
      <div>
        <button onClick={() => this.changeView(false)}>Form</button>
        <button onClick={() => this.changeView(true)}>My details</button>
        {this.state.myDetails ? (
          <MyDetails />
        ) : (
          // this is how the parent gives the prop to the child
          <UserForm projects={this.state.user} />
        )}
      </div>
    );
  }
}
