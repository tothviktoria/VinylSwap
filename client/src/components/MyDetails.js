import React, { Component } from "react";

export default class MyDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch(`/users/2`)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({
          users: json
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.users.map((user, index) => {
            return (
              <li key={index}>
                {user.first_name +
                  " / " +
                  user.last_name +
                  " / " +
                  user.location}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
