import {
  ACTION_SEARCH_MOVIE_ERROR,
  ACTION_SEARCH_MOVIE_REQUEST,
  ACTION_SEARCH_MOVIE_RESPONSE,
} from '../../action/searchMovie-action';

const initialState = {
  isLoading: false,
  searchMovieResponse: null,
  searchMovieError: null,
};

const searchMovieReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ACTION_SEARCH_MOVIE_REQUEST:
      return {
        ...state,
        isLoading: true,
        searchMovieErrorerror: null,
      };

    case ACTION_SEARCH_MOVIE_RESPONSE:
      return {
        ...state,
        isLoading: false,
        searchMovieResponse: actions.payload,
      };

    case ACTION_SEARCH_MOVIE_ERROR:
      return {
        ...state,
        isLoading: false,
        searchMovieError: actions.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default searchMovieReducer;
