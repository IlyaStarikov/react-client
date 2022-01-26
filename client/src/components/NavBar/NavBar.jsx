import React from 'react';

function NavBar() {
  return (
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
}

export default NavBar;
