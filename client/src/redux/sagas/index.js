import { all, call } from 'redux-saga/effects';

import getNewsSaga from './newsSaga';
import loginSaga from './authSaga';
import getUserSaga from './userSaga';

export default function* rootSaga() {
  yield all([
    call(getNewsSaga),
    call(loginSaga),
    call(getUserSaga),
  ]);
}
