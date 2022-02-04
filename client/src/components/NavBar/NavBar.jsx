import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { logoutAction } from '../../redux/actions/actions';

function NavBar() {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.login);
  const token = localStorage.getItem('token');
  const userIsLogin = isLogin || token;

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
          <li><Link to="/user">Users</Link></li>
          {userIsLogin ? <li><button onClick={logout} type="button">Logout</button></li>
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
