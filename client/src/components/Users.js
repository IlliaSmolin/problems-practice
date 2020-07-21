import React, { Component } from 'react';

class Users extends Component {
  state = { users: [] };

  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="users">
        <h1>Users</h1>
        <p>This page is the basic test of communication with Back-End.</p>
        <p>Back-End has the "<b>/users</b>" endpoint, which we can <b>GET</b> to receive a simple <b>JSON</b> with users.</p>
        <p>The "/users" page will render the JSON as a dotted list.</p>
        <p>If you can't see a list below, ensure your back-end is working:</p>
        <ul>
          {this.state.users.map(user => 
            <li key = {user.id}>{user.username}</li>)}
        </ul>
      </div>
    );
  }
};

export default Users;
