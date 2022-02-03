import React, { memo } from 'react';
import { string } from 'prop-types';

import { authTypes } from '../../redux/constants';

import './Auth.css';

function Auth({ type }) {
  const isAuth = type === authTypes.REGISTRATION;
  return (
    <div className="form">
      <h1>{isAuth ? 'Sign in' : 'Login'}</h1>
      {isAuth && <input id="text" type="text" className="validate" placeholder="Nickname" />}
      <input id="email" type="email" className="validate" placeholder="Email" />
      <input id="password" type="password" className="validate" placeholder="Password" />
      <button className="btn waves-effect waves-light" type="submit" name="action">
        {isAuth ? 'Register' : 'Login'}
      </button>
    </div>
  );
}

Auth.propTypes = {
  type: string.isRequired,
};

export default memo(Auth);
