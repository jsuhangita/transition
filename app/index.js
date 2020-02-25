import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './app.container';
import { name as appName } from '../app.json';
import { initStore } from './state/store';

// ===========================================
// CONFIG FOR MAKING NETWORK REQUEST SHOW UP
// ON DEBUGGER
// ===========================================
// GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
// GLOBAL.FormData = GLOBAL.originalFormData || GLOBAL.FormData;
// ===========================================

const store = initStore();

const baseReactNative = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default baseReactNative;

AppRegistry.registerComponent(appName, () => baseReactNative);
