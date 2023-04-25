export const ACTION_SEARCH_MOVIE_REQUEST = 'ACTION_SEARCH_MOVIE_REQUEST';
export const ACTION_SEARCH_MOVIE_RESPONSE = 'ACTION_SEARCH_MOVIE_RESPONSE';
export const ACTION_SEARCH_MOVIE_ERROR = 'ACTION_SEARCH_MOVIE_ERROR';

export function searchMovieData(data) {
  return {
    type: ACTION_SEARCH_MOVIE_REQUEST,
    payload: data,
  };
}
