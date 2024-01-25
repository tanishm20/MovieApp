import { all, fork } from 'redux-saga/effects';
import { popularMovieSaga } from './popularMovieSaga';
import { searchMovieSaga } from './searchMovieSaga';
import { stockDataSaga } from './stockDataSaga';

export default function* rootSaga() {
  yield all([fork(popularMovieSaga)]);
  yield all([fork(searchMovieSaga)]);
  yield all([fork(stockDataSaga)]);
}
