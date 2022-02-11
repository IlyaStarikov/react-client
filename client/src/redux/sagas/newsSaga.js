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

function* addNewsSaga(action) {
  try {
    const token = localStorage.getItem('token');
    const { data: response } = yield api.post('/news', { body: action.payload, headers: { Authorization: token } });
    yield put({ type: actionTypes.NEWS_ADD_RECEIVED, response });
  } catch (error) {
    yield put({ type: actionTypes.NEWS_ADD_REJECTED, error });
  }
}

export default function* watcherSaga() {
  yield takeEvery(actionTypes.NEWS_REQUESTED, getNewsSaga);
  yield takeEvery(actionTypes.NEWS_ADD_REQUESTED, addNewsSaga);
}
