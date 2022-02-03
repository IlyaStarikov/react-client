import React, { memo } from 'react';
import { string } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { authTypes } from '../../redux/constants';
import { authLogin } from '../../redux/actions/actions';

import './Auth.css';

function Auth({ type }) {
  const dispatch = useDispatch();
  const isAuth = type === authTypes.REGISTRATION;

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

  return (
    <div className="form">
      {fetching ? <h3>Wait a minute...</h3> : ''}
      {error ? <h4>Incorrect login or password!</h4> : ''}
      {isLogin ? <h4>{isLogin}</h4> : ''}
      <h1>{isAuth ? 'Sign in' : 'Login'}</h1>
      {isAuth && <input id="text" type="text" className="validate" placeholder="Nickname" />}
      <input id="email" type="email" className="validate" placeholder="Email" />
      <input id="password" type="password" className="validate" placeholder="Password" />
      <button onClick={submitLogin} className="btn waves-effect waves-light" type="submit" name="action">
        {isAuth ? 'Register' : 'Login'}
      </button>
    </div>
  );
}

Auth.propTypes = {
  type: string.isRequired,
};

export default memo(Auth);
