const initialState = {
  isFetching: false,
  aboutResponse: null,
  error: null,
};

const aboutReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case 'ACTION_ABOUT_REQUEST':
      return {
        ...state,
        isFetching: true,
        error: null,
      };

    case 'ACTION_ABOUT_RESPONSE':
      return {
        ...state,
        isFetching: false,
        aboutResponse: actions.payload,
      };

    case 'ACTION_ABOUT_ERROR':
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

export default aboutReducer;
