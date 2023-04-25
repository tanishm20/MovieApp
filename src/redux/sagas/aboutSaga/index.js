import {takeLatest, call, put} from 'redux-saga/effects';
// import {VOTE} from '@/src/app/network/api-constants';
// import {API_RESPONSE_SUCCESS} from '@/src/app/shared/utils/constants';

// import {httpClient} from '@/src/app/utils/http-client';
// import {API_CONSTANTS} from '@/src/app/network/api-constants';

export function* aboutData() {
  try {
    const response = yield call(about);
    yield put({type: 'ACTION_ABOUT_RESPONSE', payload: response});
  } catch (error) {
    yield put({type: 'ACTION_ABOUT_ERROR', payload: error});
  }
}

export async function about() {
  return {data: 'hoi'};
}

export function* aboutWatcherSaga() {
  yield takeLatest('ACTION_ABOUT_REQUEST', aboutData);
}
