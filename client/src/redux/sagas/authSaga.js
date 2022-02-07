import {
  takeEvery,
  put,
} from 'redux-saga/effects';

import * as actionTypes from '../constants';

import api from '../../api/api';

function* loginSaga(action) {
  try {
    const { data: response } = yield api.post(`/auth/${action.authType}`, action.values);
    yield put({ type: actionTypes.LOGIN_RECEIVED, response });
    localStorage.setItem('token', response.token);
  } catch (error) {
    yield put({ type: actionTypes.LOGIN_REJECTED, error: error.message });
  }
}

export default function* watcherSaga() {
  yield takeEvery(actionTypes.LOGIN_REQUESTED, loginSaga);
}
