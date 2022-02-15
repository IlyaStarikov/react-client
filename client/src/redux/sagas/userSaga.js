import {
  takeEvery,
  put,
} from 'redux-saga/effects';

import * as actionTypes from '../constants';

import api from '../../api/api';

function* getUserSaga({ userId = 'profile' }) {
  try {
    const { data: response } = yield api.get(`/users/${userId}`);
    yield put({ type: actionTypes.USER_RECEIVED, response });
  } catch (error) {
    yield put({ type: actionTypes.USER_REJECTED, error: error.message });
  }
}

export default function* watcherSaga() {
  yield takeEvery(actionTypes.USER_REQUESTED, getUserSaga);
}
