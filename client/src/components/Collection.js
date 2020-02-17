import React, { Component } from "react";

export default class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vinyls: []
    };
  }

  componentDidMount() {
    fetch("/vinyls")
      .then(res => res.json())
      //   console.log(res)
      .then(json => {
        console.log(json);
        this.setState({
          vinyls: json
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Collection</h1>
        <ul>
          {this.state.vinyls.map((vinyl, index) => {
            return <li key={index}>{vinyl.vinyl_title + " " + vinyl.genre}</li>;
          })}
        </ul>
      </div>
    );
  }
}
