import React, { Component } from "react";

class BruteForce extends Component {
  state = {};

  componentDidMount() {
    fetch("/bruteforce")
      .then((res) => res.json())
      .then((res) => this.setState(res));
  }
  
  render() {
    return (
      <div>
        <p>
          This page's gonna help you to realize how quick your password can be cracked
        </p>
      </div>
    )
  }
}

export default BruteForce;
