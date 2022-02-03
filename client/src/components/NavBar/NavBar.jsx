import React from 'react';
import { useSelector } from 'react-redux';

function NavBar() {
  const { isLogin } = useSelector((state) => state.login);

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          <i className="material-icons">cloud</i>
          Logo
        </a>
        <ul className="right hide-on-med-and-down">
          <li><a href="/">News</a></li>
          <li><a href="/user">Users</a></li>
          {isLogin ? <li>Logout</li>
            : (
              <>
                <li><a href="/auth">Log in</a></li>
                <li><a href="/registration">Sign in</a></li>
              </>
            )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
