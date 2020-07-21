import React, { Component } from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';

const App = () => (
  <div className="app">
    <h1>Navigation Bar by React Router</h1>
    <Navigation />
    <Main />
  </div>
);

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/users'>Users</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/something'>Something</NavLink></li>
    </ul>
  </nav>
);

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/users' component={Users}></Route>
    <Route exact path='/something' component={Something}></Route>
  </Switch>
);

const Home = () => (
  <div className='home'>
    <h1>Welcome to "Problems Practice" website</h1>
    <p>Here I will implement back-front communication to interactively solve interesting problems</p>
  </div>
);

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
        <ul>
          {this.state.users.map(user => 
            <li key = {user.id}>{user.username}</li>)}
        </ul>
      </div>
    );
  }
};

const Something = () => (
  <div className='something'>
    <h1>Contact Me</h1>
    <p>You can reach me via email: <strong>hello@example.com</strong></p>
  </div>
);

export default App;
