import React, { Component } from "react";

export default class MyBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vinyls: []
    };
  }

  componentDidMount() {
    fetch(`/vinyls/users/2`)
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
  deleteVinyl(id) {
    fetch(`/vinyls/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(json => {
        // upon success, update tasks
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
        <h1>My box</h1>
        <ul>
          {this.state.vinyls.map((vinyl, index) => {
            return (
              <li key={index}>
                {vinyl.vinyl_title + " / " + vinyl.genre}
                <button onClick={e => this.deleteVinyl(vinyl.id)}>X</button>
                <img src={vinyl.url} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
