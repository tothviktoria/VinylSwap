import React, { Component } from "react";

export default class AddVinyl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      genre: "",
      url: "",
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
  updateUrl(e) {
    this.setState({
      url: e.target.value
    });
  }
  addProject(newProject) {
    this.setState({
      projects: [...this.state.projects, newProject]
    });
  }

  addVinyl() {
    fetch("/vinyls", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: this.state.title,
        genre: this.state.genre,
        url: this.state.url
      })
    })
      .then(res => res.json())
      .then(json => {
        // upon success, update tasks
        this.setState({
          vinyls: json
        });
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

        <input
          onChange={e => this.updateUrl(e)}
          value={this.state.url}
          type="url"
          placeholder="add image"
        ></input>

        <button onClick={e => this.addVinyl()}>Submit</button>
      </div>
    );
  }
}
