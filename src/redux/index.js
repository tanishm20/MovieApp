import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';

import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import rootReducer from './reducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export const persistor = persistStore(store);

export const getState = () => {
  return store.getState();
};

export const dispatchAction = action => {
  store.dispatch(action);
};

sagaMiddleware.run(rootSaga);

export default store;
