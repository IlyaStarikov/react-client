import { all, call } from 'redux-saga/effects';

import getNewsSaga from './newsSaga';

export default function* rootSaga() {
  yield all([
    call(getNewsSaga),
  ]);
}
