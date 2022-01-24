/* eslint-disable react/function-component-definition */
import React from 'react';

const NavBar = () => (
  <nav>
    <div className="nav-wrapper">
      <a href="#!" className="brand-logo">
        <i className="material-icons">cloud</i>
        Logo
      </a>
      <ul className="right hide-on-med-and-down">
        <li><a href="/">News</a></li>
        <li><a href="/user">Users</a></li>
        <li><a href="user/123">Log in</a></li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
