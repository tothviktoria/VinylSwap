import React, { Component } from "react";

export default class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      location: "",
      users: []
    };
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="firstname"></input>
        <input type="text" placeholder="lastname"></input>
        <input type="text" placeholder="location"></input>
        <button>Submit</button>
      </div>
    );
  }
}
