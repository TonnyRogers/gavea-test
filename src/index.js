import React from 'react';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import './config/ReactotronConfig';
import { store, persistor } from './store';
import App from './App';

const Index = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
          <App />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default Index;
