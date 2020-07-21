import React from 'react';
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

const Users = () => (
  <div className='users'>
    <h1>Users</h1>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
  </div>
);

const Something = () => (
  <div className='something'>
    <h1>Contact Me</h1>
    <p>You can reach me via email: <strong>hello@example.com</strong></p>
  </div>
);

export default App;
