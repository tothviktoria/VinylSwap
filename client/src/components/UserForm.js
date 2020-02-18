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

  updateUser() {
    fetch(`/users/2`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        location: this.state.location
      })
    })
      .then(res => res.json())
      .then(json => {
        this.setState({
          users: json
        });
      });
  }

  updateFirst(e) {
    this.setState({
      firstname: e.target.value
    });
  }
  updateLast(e) {
    this.setState({
      lastname: e.target.value
    });
  }
  updateLoc(e) {
    this.setState({
      location: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Update my details</h1>
        <input
          onChange={e => this.updateFirst(e)}
          value={this.state.firstname}
          type="text"
          placeholder="firstname"
        ></input>
        <input
          onChange={e => this.updateLast(e)}
          value={this.state.lastname}
          type="text"
          placeholder="lastname"
        ></input>
        <input
          onChange={e => this.updateLoc(e)}
          value={this.state.location}
          type="text"
          placeholder="location"
        ></input>
        <button onClick={e => this.updateUser()}>Submit</button>
      </div>
    );
  }
}
