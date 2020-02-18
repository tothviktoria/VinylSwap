import React, { Component } from "react";
import Sent from "./Sent";
import Received from "./Received";

export default class Inbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sent: true
    };
  }
  changeView(isSent) {
    this.setState({ sent: isSent });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.changeView(false)}>Received</button>
        <button onClick={() => this.changeView(true)}>Sent</button>
        {this.state.sent ? <Sent /> : <Received />}
      </div>
    );
  }
}
