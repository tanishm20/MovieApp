import {
  ACTION_SEARCH_MOVIE_ERROR,
  ACTION_SEARCH_MOVIE_REQUEST,
  ACTION_SEARCH_MOVIE_RESPONSE,
} from '../../action/searchMovie-action';

const initialState = {
  isLoading: false,
  isMoreLoading: false,
  searchMovieResponse: [],
  searchMovieError: null,
  searchPages: null,
};

const searchMovieReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ACTION_SEARCH_MOVIE_REQUEST:
      if (actions.payload?.page === 1) {
        return {
          ...state,
          isLoading: true,
          isMoreLoading: false,
          searchMovieErrorerror: null,
        };
      } else {
        return {
          ...state,
          isLoading: false,
          isMoreLoading: true,
          searchMovieErrorerror: null,
        };
      }

    case ACTION_SEARCH_MOVIE_RESPONSE:
      return {
        ...state,
        isLoading: false,
        isMoreLoading: false,
        searchMovieResponse: [
          ...state.searchMovieResponse,
          ...actions.payload?.data?.results,
        ],
        searchPages: actions.payload?.data?.total_pages,
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
