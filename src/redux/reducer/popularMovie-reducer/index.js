import {
  ACTION_POPULAR_MOVIE_ERROR,
  ACTION_POPULAR_MOVIE_REQUEST,
  ACTION_POPULAR_MOVIE_RESPONSE,
} from '../../../redux/action/popularMovie-action';

const initialState = {
  isFetching: false,
  popularMovieResponse: null,
  error: null,
};

const popularMovieReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ACTION_POPULAR_MOVIE_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };

    case ACTION_POPULAR_MOVIE_RESPONSE:
      return {
        ...state,
        isFetching: false,
        popularMovieResponse: actions.payload,
      };

    case ACTION_POPULAR_MOVIE_ERROR:
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

export default popularMovieReducer;
