import formate from '../../../utils/string-utils';
import {httpClient} from '../../../utils/rest-client';
import {takeLatest, call, put} from 'redux-saga/effects';
import {api_key, popularMovieApi} from '../../../utils/api-constants';

export function* popularMovieData() {
  try {
    const response = yield call(popularMovie);
    yield put({type: 'ACTION_POPULAR_MOVIE_RESPONSE', payload: response});
  } catch (error) {
    yield put({type: 'ACTION_POPULAR_MOVIE_ERROR', payload: error});
  }
}

export async function popularMovie() {
  const url = formate(popularMovieApi, api_key);
  try {
    const response = await httpClient.get(url);
    return response.data;
  } catch (err) {
    if (err.code === 'ECONNABORTED') {
      throw new Error('timeout');
    } else {
      throw err;
    }
  }
}

export function* popularMovieSaga() {
  yield takeLatest('ACTION_POPULAR_MOVIE_REQUEST', popularMovieData);
}
