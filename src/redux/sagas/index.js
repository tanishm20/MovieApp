import {all, fork} from 'redux-saga/effects';
import {aboutWatcherSaga} from './aboutSaga';

export default function* rootSaga() {
  yield all([fork(aboutWatcherSaga)]);
}
