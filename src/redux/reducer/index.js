import { combineReducers } from 'redux';

import popularMovieReducer from './popularMovie-reducer';
import searchMovieReducer from './searchMovie-reducer';
import stockDataReducer from './stockData-reducer';
export default combineReducers({
  popularMovieReducer: popularMovieReducer,
  searchMovieReducer: searchMovieReducer,
  stockDataReducer: stockDataReducer,
});
