import {
  takeEvery,
  call,
  put,
} from 'redux-saga/effects';

import request from '../actions';
import * as actionTypes from '../actions';

function* getProjectsSaga() {
  try {
    const { data: response } = yield call(
      request,
      { pathname: '/projects' },
    );
    yield put({ type: actionTypes.PROJECTS_LOADED, response });
  } catch (error) {
    yield put({ type: actionTypes.ERROR_OCCURRED, error });
  }
}
export default function* watcherSaga() {
  yield takeEvery(actionTypes.PROJECTS_REQUESTED, getProjectsSaga);
}
