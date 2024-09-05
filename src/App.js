import React from 'react';
import {Provider} from 'react-redux';
import AppNavigator from './navigation/AppNavigator';
import store from '../store/store';
import Settings from './screens/Settings';

const App = () => {
  return (
    <Provider store={store}>
      {/* <Settings /> */}
      <AppNavigator />
    </Provider>
  );
};

export default App;
