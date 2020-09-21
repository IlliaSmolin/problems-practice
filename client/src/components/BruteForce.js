import React, { Component } from "react";

class BruteForce extends Component {
  state = { users: [] };

  sendPOST = () => {
    const request = {
      method: 'POST',
      headers: {'Content-Type': 'Application/json'},
      body: JSON.stringify({a: "test"})
    };
    
    fetch("/bruteforce", request)
      .then((res) => res.json())
      .then((users) => this.setState({ users }));
  }
  
  render() {
    return (
      <div>
        <p>
          This page's gonna help you to realize how quick your password can be cracked
        </p>
        <h1>Here's the input</h1>
        <input className="toSend" type="text"></input>
        <button onClick={this.sendPOST}>Calculate</button>
        <h2>Result:</h2>
        <input className="toReceive" disabled type="text"></input>
      </div>
    )
  }
}

export default BruteForce;
