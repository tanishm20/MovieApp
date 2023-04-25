import {combineReducers} from 'redux';

import popularMovieReducer from './popularMovie-reducer';
import searchMovieReducer from './searchMovie-reducer';
export default combineReducers({
  popularMovieReducer: popularMovieReducer,
  searchMovieReducer: searchMovieReducer,
});
