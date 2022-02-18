import React, { memo, useState } from 'react';
import { string } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { Formik, Field, Form } from 'formik';

import { authTypes } from '../../redux/constants';
import { authAction } from '../../redux/actions/actions';

import './Auth.css';

function Auth({ type }) {
  const dispatch = useDispatch();
  const isAuth = type === authTypes.REGISTRATION;

  const [errorValidation, setErrorValidation] = useState(false);

  const {
    fetching,
    isLogin,
    error,
  } = useSelector((state) => state.login);

  const validateForm = ({
    email,
    password,
    name,
    login,
  }) => {
    const loginFields = [email, password];
    const registrationFields = [name, login, password, email];
    const currentFields = isAuth ? registrationFields : loginFields;
    return currentFields.every((elem) => Boolean(elem));
  };

  const submitLogin = (values) => {
    if (validateForm(values)) {
      setErrorValidation(false);
      dispatch(authAction(values, type));
    } else {
      setErrorValidation(true);
    }
  };

  return (
    <div className="form">
      {fetching && <h3>Wait a minute...</h3>}
      {errorValidation && <h3>Some fields are empty</h3>}
      {!!error && <h4>{error}</h4>}
      <h1>{isAuth ? 'Sign in' : 'Login'}</h1>
      <Formik
        initialValues={{
          name: '', email: '', login: '', password: '',
        }}
        onSubmit={submitLogin}
      >
        <Form>
          {isAuth && <Field name="name" type="text" className="validate" placeholder="Name" />}
          {isAuth && <Field name="login" type="text" className="validate" placeholder="Nickname" />}
          <Field name="email" type="email" className="validate" placeholder="Email" />
          <Field name="password" type="password" className="validate" placeholder="Password" />
          <button className="btn waves-effect waves-light" type="submit">{isAuth ? 'Register' : 'Login'}</button>
        </Form>
      </Formik>
      {isLogin && <Navigate to="/profile" />}
    </div>
  );
}

Auth.propTypes = {
  type: string.isRequired,
};

export default memo(Auth);
