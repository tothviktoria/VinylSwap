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
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Add title/genre/image</span>
          </div>
          <input
            onChange={e => this.updateTitle(e)}
            value={this.state.title}
            placeholder="add title"
            type="text"
            aria-label="add title"
            class="form-control"
          ></input>
          <input
            onChange={e => this.updateGenre(e)}
            value={this.state.genre}
            placeholder="add genre"
            type="text"
            aria-label="add genre"
            class="form-control"
          ></input>
          <input
            onChange={e => this.updateUrl(e)}
            value={this.state.url}
            placeholder="add image"
            type="text"
            aria-label="add image"
            class="form-control"
          ></input>
        </div>
        <button
          type="button"
          class="btn btn-dark"
          onClick={e => this.addVinyl()}
        >
          Submit
        </button>
      </div>
    );
  }
}
