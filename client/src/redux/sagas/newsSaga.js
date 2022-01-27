import {
  takeEvery,
  put,
} from 'redux-saga/effects';

import * as actionTypes from '../constants';

import api from '../../api/api';

function* getNewsSaga() {
  try {
    const { data: response } = yield api.get('/news');
    yield put({ type: actionTypes.NEWS_RECEIVED, response });
  } catch (error) {
    yield put({ type: actionTypes.NEWS_REJECTED, error });
  }
}

export default function* watcherSaga() {
  yield takeEvery(actionTypes.NEWS_REQUESTED, getNewsSaga);
}
