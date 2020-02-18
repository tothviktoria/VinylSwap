import React, { Component } from "react";
import AddVinyl from "./AddVinyl";
import MyBox from "./MyBox";

export default class MyVinyls extends React.Component {
  render() {
    return (
      <div>
        <AddVinyl />
        <MyBox />
      </div>
    );
  }
}
