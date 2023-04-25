import {all, fork} from 'redux-saga/effects';
import {popularMovieSaga} from './popularMovieSaga';
import {searchMovieSaga} from './searchMovieSaga';

export default function* rootSaga() {
  yield all([fork(popularMovieSaga)]);
  yield all([fork(searchMovieSaga)]);
}
