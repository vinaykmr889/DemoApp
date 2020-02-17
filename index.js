/**
 * @format
 */

import React from 'react'
import {
  AppRegistry
} from 'react-native'

import { Provider } from 'react-redux'
import configureStore from './configureStore'
import App from './src/App'
import axios from 'axios';
import {name as appName} from './app.json';


const store = configureStore()

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => ReduxApp);

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 25000;
axios.defaults.withCredentials = true;
axios.interceptors.request.use(
  request => {
    console.log(request);
    return request;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);
axios.interceptors.response.use(
  response => {
    console.log(response);
    return response;
  },
  error => Promise.reject(error),
);
