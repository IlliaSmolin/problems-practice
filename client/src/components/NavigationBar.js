import React from 'react';
import { NavLink } from "react-router-dom";

const NavigationBar = () => (
  <nav>
    <ul>
      <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/users'>Users</NavLink></li>
    </ul>
  </nav>
);

export default NavigationBar;
