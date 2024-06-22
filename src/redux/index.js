import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import rootReducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(middlewares),
});

export const persistor = persistStore(store);

export const getState = () => {
  return store.getState();
};

export const dispatchAction = action => {
  store.dispatch(action);
};

sagaMiddleware.run(rootSaga);

export default store;
