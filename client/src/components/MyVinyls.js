import React, { Component } from "react";
import AddVinyl from "./AddVinyl";
import Collection from "./Collection";

export default class MyVinyls extends React.Component {
  render() {
    return (
      <div>
        <AddVinyl />
        <Collection />
      </div>
    );
  }
}
