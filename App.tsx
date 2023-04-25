import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import App1 from './App1';
import store from './src/redux';


function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <App1 />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
