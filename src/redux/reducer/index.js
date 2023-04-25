import {combineReducers} from 'redux';

import aboutReducer from '../reducer/about-reducer';
export default combineReducers({
  aboutReducer: aboutReducer,
});
