import { all, fork } from 'redux-saga/effects';
import { stockDataSaga } from './stockDataSaga';

export default function* rootSaga() {
  yield all([fork(stockDataSaga)]);
}
