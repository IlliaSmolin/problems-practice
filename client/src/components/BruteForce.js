import React, { Component } from "react";

class BruteForce extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      response: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  sendPOST = () => {
    const request = {
      method: 'POST',
      headers: {'Content-Type': 'Application/json'},
      body: JSON.stringify({a: this.state.value})
    };
    
    fetch("/bruteforce", request)
      .then((res) => res.json())
      .then((response) => this.setState({ response }));
  }
  
  render() {
    return (
      <div>
        <p>
          This page's gonna help you to realize how quick your password can be cracked
        </p>
        <h1>Here's the input</h1>
        <input id="toSend" type="text" value={this.state.value} onChange={this.handleChange}></input>
        <button onClick={this.sendPOST}>Calculate</button>
        <h2>Result:</h2>
        <input id="toReceive" disabled type="text" value={this.state.response}></input>
      </div>
    )
  }
}

export default BruteForce;
