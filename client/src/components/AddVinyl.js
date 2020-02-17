import React, { Component } from "react";

export default class AddVinyl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      genre: "",
      vinyls: []
    };
  }

  updateTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  updateGenre(e) {
    this.setState({
      genre: e.target.value
    });
  }

  //   componentDidMount() {
  //     fetch("/vinyls")
  //       .then(res => res.json())
  //       .then(json => {
  //         this.setState({
  //           vinyls: json
  //         });
  //         console.log(json);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }

  addVinyl() {
    fetch("/vinyls", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: this.state.title, genre: this.state.genre })
    });
  }

  render() {
    return (
      <div>
        <textarea
          onChange={e => this.updateTitle(e)}
          value={this.state.title}
          type="text"
          placeholder="add title"
        ></textarea>
        <input
          onChange={e => this.updateGenre(e)}
          value={this.state.genre}
          type="text"
          placeholder="add genre"
        ></input>
        <button onClick={e => this.addVinyl()}>Submit</button>
      </div>
    );
  }
}
