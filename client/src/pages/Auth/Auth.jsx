import React, { memo } from 'react';
import { string } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router';

import { authTypes } from '../../redux/constants';
import { authLogin, authRegistration } from '../../redux/actions/actions';

import './Auth.css';

function Auth({ type }) {
  const dispatch = useDispatch();
  const isAuth = type === authTypes.REGISTRATION;
  // const navigate = useNavigate();

  const {
    fetching,
    isLogin,
    error,
  } = useSelector((state) => state.login);

  const submitLogin = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    dispatch(authLogin({ email: email.value, password: password.value }));
  };

  const submitRegistration = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const name = document.getElementById('name');
    const login = document.getElementById('nickname');
    dispatch(authRegistration({
      email: email.value,
      password: password.value,
      login: login.value,
      name: name.value,
    }));
  };

  if (isLogin) {
    return (
      <>
        <h3>{isLogin}</h3>
        <h4>Go to news page</h4>
      </>
    );
  }

  return (
    <div className="form">
      {fetching ? <h3>Wait a minute...</h3> : ''}
      {error ? <h4>{error}</h4> : ''}
      <h1>{isAuth ? 'Sign in' : 'Login'}</h1>
      {isAuth && <input id="name" type="text" className="validate" placeholder="Name" />}
      {isAuth && <input id="nickname" type="text" className="validate" placeholder="Nickname" />}
      <input id="email" type="email" className="validate" placeholder="Email" />
      <input id="password" type="password" className="validate" placeholder="Password" />
      <button onClick={isAuth ? submitRegistration : submitLogin} className="btn waves-effect waves-light" type="submit" name="action">
        {isAuth ? 'Register' : 'Login'}
      </button>
    </div>
  );
}

Auth.propTypes = {
  type: string.isRequired,
};

export default memo(Auth);
