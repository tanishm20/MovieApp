import {
  ACTION_SEARCH_MOVIE_ERROR,
  ACTION_SEARCH_MOVIE_REQUEST,
  ACTION_SEARCH_MOVIE_RESPONSE,
} from '../../action/searchMovie-action';

const initialState = {
  isFetching: false,
  searchMovieResponse: null,
  error: null,
};

const searchMovieReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ACTION_SEARCH_MOVIE_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };

    case ACTION_SEARCH_MOVIE_RESPONSE:
      return {
        ...state,
        isFetching: false,
        searchMovieResponse: actions.payload,
      };

    case ACTION_SEARCH_MOVIE_ERROR:
      return {
        ...state,
        isFetching: false,
        error: actions.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default searchMovieReducer;
