import {
  takeEvery,
  put,
} from 'redux-saga/effects';

import * as actionTypes from '../constants';

import api from '../../api/api';

function* userSaga(action) {
  try {
    if (action.pageType === actionTypes.pageType.PROFILE) {
      const token = localStorage.getItem('token');
      const { data: response } = yield api.get(`/users/${action.pageType}`, { headers: { Authorization: token } });
      yield put({ type: actionTypes.USER_RECEIVED, response });
    } else {
      const { data: response } = yield api.get(`/users/${action.pageType}`);
      yield put({ type: actionTypes.USER_RECEIVED, response });
    }
  } catch (error) {
    yield put({ type: actionTypes.USER_REJECTED, error: error.message });
  }
}

export default function* watcherSaga() {
  yield takeEvery(actionTypes.USER_REQUESTED, userSaga);
}
