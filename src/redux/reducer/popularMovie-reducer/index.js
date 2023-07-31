import {
  ACTION_POPULAR_MOVIE_ERROR,
  ACTION_POPULAR_MOVIE_REQUEST,
  ACTION_POPULAR_MOVIE_RESPONSE,
} from '../../../redux/action/popularMovie-action';

const initialState = {
  isFetching: false,
  moreLoading: false,
  popularMovieResponse: [],
  error: null,
  totalPages: null,
};

const popularMovieReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ACTION_POPULAR_MOVIE_REQUEST:
      if (actions.payload === 1) {
        return {
          ...state,
          isFetching: true,
          moreLoading: false,
          error: null,
        };
      } else {
        return {
          ...state,
          isFetching: false,
          moreLoading: true,
          error: null,
        };
      }

    case ACTION_POPULAR_MOVIE_RESPONSE:
      return {
        ...state,
        isFetching: false,
        moreLoading: false,
        popularMovieResponse: [
          ...state.popularMovieResponse,
          ...actions.payload?.data?.results,
        ],
        totalPages: actions.payload?.data?.total_pages,
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
