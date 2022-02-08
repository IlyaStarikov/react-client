import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { logoutAction } from '../../redux/actions/actions';

import './NavBar.css';

function NavBar() {
  const dispatch = useDispatch();
  const userIsLogin = useSelector((state) => state.login.isLogin);

  const logout = () => {
    dispatch(logoutAction());
    localStorage.removeItem('token');
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          <i className="material-icons">cloud</i>
          Logo
        </a>
        <ul className="right hide-on-med-and-down">
          <li><Link to="/">News</Link></li>
          {userIsLogin
            ? (
              <>
                <li><Link to="/profile"><i className="material-icons">person</i></Link></li>
                <li><Link to="/" onClick={logout} type="button">Logout</Link></li>

              </>
            )
            : (
              <>
                <li><Link to="/auth">Log in</Link></li>
                <li><Link to="/registration">Sign in</Link></li>
              </>
            )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
