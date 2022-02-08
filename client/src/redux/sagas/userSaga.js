import {
  takeEvery,
  put,
} from 'redux-saga/effects';

import * as actionTypes from '../constants';

import api from '../../api/api';

function* userSaga(action) {
  try {
    if (action.pageType === actionTypes.pageType.PROFILE) {
      const { data: response } = yield api.post(`/users/${action.pageType}`, { token: action.userId });
      yield put({ type: actionTypes.USER_RECEIVED, response });
    } else {
      const { data: response } = yield api.get(`/users/${action.userId}`);
      yield put({ type: actionTypes.USER_RECEIVED, response });
    }
  } catch (error) {
    yield put({ type: actionTypes.USER_REJECTED, error: error.message });
  }
}

export default function* watcherSaga() {
  yield takeEvery(actionTypes.USER_REQUESTED, userSaga);
}
