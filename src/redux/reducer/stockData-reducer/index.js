import {
  ACTION_STOCK_DATA_REQUEST,
  ACTION_STOCK_DATA_RESPONSE,
  ACTION_STOCK_DATA_ERROR,
} from '../../../redux/action/stockData-action';

const initialState = {
  isFetching: false,
  stockData: [],
  error: null,
};

const stockDataReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ACTION_STOCK_DATA_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };

    case ACTION_STOCK_DATA_RESPONSE:
      return {
        ...state,
        isFetching: false,
        stockData: actions?.payload?.data,
      };

    case ACTION_STOCK_DATA_ERROR:
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

export default stockDataReducer;
