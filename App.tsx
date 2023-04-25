import React from 'react';
import {Provider} from 'react-redux';
import App1 from './App1';
import store from './src/redux';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <App1 />
    </Provider>
  );
}

export default App;
