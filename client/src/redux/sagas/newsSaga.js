import {
  takeEvery,
  call,
  put,
} from 'redux-saga/effects';

import * as axios from 'axios';
import * as actionTypes from '../constants';

function* getNewsSaga() {
  try {
    const { data: response } = yield call(
      axios,
      {
        method: 'GET',
        url: 'http://localhost:3000/news',
      },
    );
    yield put({ type: actionTypes.NEWS_RECEIVED, response });
  } catch (error) {
    yield put({ type: actionTypes.NEWS_REJECTED, error });
  }
}

export default function* watcherSaga() {
  yield takeEvery(actionTypes.NEWS_REQUESTED, getNewsSaga);
}
