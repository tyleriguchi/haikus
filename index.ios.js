/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './src/reducers/root';

import App from './src/app';

import React, {
  AppRegistry,
  Component,
  Text,
  View
} from 'react-native';

const createStoreWithMiddleware = applyMiddleware(
)(createStore);

const store = createStoreWithMiddleware(rootReducer);

class haikus extends Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('haikus', () => haikus);
