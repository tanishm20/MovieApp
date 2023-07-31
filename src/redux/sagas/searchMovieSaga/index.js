import formate from '../../../utils/string-utils';
import {httpClient} from '../../../utils/rest-client';
import {takeLatest, call, put} from 'redux-saga/effects';
import {api_key, searchMovieApi} from '../../../utils/api-constants';
import {
  ACTION_SEARCH_MOVIE_ERROR,
  ACTION_SEARCH_MOVIE_REQUEST,
  ACTION_SEARCH_MOVIE_RESPONSE,
} from '../../action/searchMovie-action';

export function* searchMovieData(action) {
  try {
    const response = yield call(searchMovie, action.payload);
    yield put({type: ACTION_SEARCH_MOVIE_RESPONSE, payload: response});
  } catch (error) {
    yield put({type: ACTION_SEARCH_MOVIE_ERROR, payload: error});
  }
}

export async function searchMovie(searchkey) {
  const url = formate(
    searchMovieApi,
    api_key,
    searchkey?.inputText,
    searchkey?.page,
  );
  try {
    const response = await httpClient.get(url);
    return response;
  } catch (err) {
    if (err.code === 'ECONNABORTED') {
      throw new Error('timeout');
    } else {
      throw err;
    }
  }
}

export function* searchMovieSaga() {
  yield takeLatest(ACTION_SEARCH_MOVIE_REQUEST, searchMovieData);
}
