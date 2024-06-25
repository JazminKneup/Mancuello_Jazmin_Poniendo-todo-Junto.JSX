/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Home;