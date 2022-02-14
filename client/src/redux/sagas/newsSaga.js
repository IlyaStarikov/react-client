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

function* addNewsSaga({ payload }) {
  try {
    const {
      header,
      content,
      tag,
      picture,
    } = payload;
    const formData = new FormData();
    formData.append('header', header);
    formData.append('content', content);
    formData.append('tag', tag);
    formData.append('picture', picture);
    yield api.post('/news', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
    yield put({ type: actionTypes.USER_REQUESTED });
  } catch (error) {
    yield put({ type: actionTypes.NEWS_ADD_REJECTED, error });
  }
}

export default function* watcherSaga() {
  yield takeEvery(actionTypes.NEWS_REQUESTED, getNewsSaga);
  yield takeEvery(actionTypes.NEWS_ADD_REQUESTED, addNewsSaga);
}
