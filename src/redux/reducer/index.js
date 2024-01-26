import { combineReducers } from 'redux';

import stockDataReducer from './stockData-reducer';
export default combineReducers({
  stockDataReducer: stockDataReducer,
});
